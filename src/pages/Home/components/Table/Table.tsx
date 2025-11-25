import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  SortingState,
  PaginationState,
  ColumnFiltersState,
  FilterFn,
} from '@tanstack/react-table';
import { useState, Fragment, useEffect, useRef } from 'react';
import { Menu, Transition, Listbox } from '@headlessui/react';
import {
  MdArrowUpward,
  MdArrowDownward,
  MdSearch,
  MdMoreVert,
  MdFilterList,
  MdClose,
  MdChevronLeft,
  MdChevronRight,
  MdCheck,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import { columns } from 'constants/dataTable/tanStackColumns';
import { TableProps } from './interface';

const PAGINATION_CONFIG = {
  pageSize: 50,
  pageSizeOptions: [50, 100],
} as const;

const STRING_OPERATORS = ['contains', 'equals', 'startsWith', 'endsWith'];
const NUMBER_OPERATORS = ['=', '>', '<', '>=', '<=', '!='];
const TREND_OPERATORS = ['up', 'down'];

const PERCENTAGE_COLUMNS = [
  'price_change_percentage_1h_in_currency',
  'price_change_percentage_24h_in_currency',
  'price_change_percentage_7d_in_currency',
];

const getOperatorsForColumn = (columnId: string) => {
  if (PERCENTAGE_COLUMNS.includes(columnId)) {
    return [...NUMBER_OPERATORS, ...TREND_OPERATORS];
  }

  switch (columnId) {
    case 'name':
    case 'symbol':
      return STRING_OPERATORS;
    case 'current_price':
    case 'total_volume':
    case 'market_cap':
      return NUMBER_OPERATORS;
    case 'sparkline_in_7d':
      return TREND_OPERATORS;
    default:
      return STRING_OPERATORS;
  }
};

const customFilterFn: FilterFn<any> = (row, columnId, filterValue) => {
  const rowValue = row.getValue(columnId);
  const { operator, value } = filterValue || {};

  if (!operator) return true;

  // Handle Trend Operators (up/down)
  if (TREND_OPERATORS.includes(operator)) {
    // For sparkline, we look at 7d change
    const targetValue =
      columnId === 'sparkline_in_7d'
        ? row.getValue('price_change_percentage_7d_in_currency')
        : rowValue;

    const numValue = Number(targetValue);
    if (isNaN(numValue)) return false;

    return operator === 'up' ? numValue >= 0 : numValue < 0;
  }

  if (value === undefined || value === '') return true;

  if (rowValue == null) return false;

  // Handle numeric comparisons
  if (NUMBER_OPERATORS.includes(operator)) {
    let numRowValue = Number(rowValue);
    const numValue = Number(value);

    // For percentage columns, use absolute value to match the displayed number (which is unsigned)
    if (PERCENTAGE_COLUMNS.includes(columnId)) {
      numRowValue = Math.abs(numRowValue);
      // Round to 2 decimal places to match display
      numRowValue = Number(numRowValue.toFixed(2));
    } else if (columnId === 'current_price') {
      // Round to 8 decimal places to match display max precision
      numRowValue = Number(numRowValue.toFixed(8));
    } else if (['total_volume', 'market_cap'].includes(columnId)) {
      // Round to 2 decimal places just in case
      numRowValue = Number(numRowValue.toFixed(2));
    }

    if (!isNaN(numRowValue) && !isNaN(numValue)) {
      const epsilon = 0.001; // Tolerance for floating point comparison
      switch (operator) {
        case '=':
          return Math.abs(numRowValue - numValue) < epsilon;
        case '>':
          return numRowValue > numValue + epsilon;
        case '<':
          return numRowValue < numValue - epsilon;
        case '>=':
          return numRowValue >= numValue - epsilon;
        case '<=':
          return numRowValue <= numValue + epsilon;
        case '!=':
          return Math.abs(numRowValue - numValue) >= epsilon;
      }
    }
    return false;
  }

  // Handle string comparisons (including numbers treated as strings for contains/startsWith/etc)
  const strRowValue = String(rowValue).toLowerCase();
  const strValue = String(value).toLowerCase();

  switch (operator) {
    case 'contains':
      return strRowValue.includes(strValue);
    case 'equals':
      return strRowValue === strValue;
    case 'startsWith':
      return strRowValue.startsWith(strValue);
    case 'endsWith':
      return strRowValue.endsWith(strValue);
    default:
      return true;
  }
};

export default function Table({ coins }: TableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: PAGINATION_CONFIG.pageSize,
  });

  // Filter State
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilterColumn, setActiveFilterColumn] = useState<string>('');
  const [activeOperator, setActiveOperator] = useState<string>('contains');
  const [activeValue, setActiveValue] = useState<string>('');
  const filterRef = useRef<HTMLDivElement>(null);
  const filterButtonRef = useRef<HTMLButtonElement>(null);

  const table = useReactTable({
    data: coins,
    columns,
    defaultColumn: {
      filterFn: customFilterFn,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      pagination,
      globalFilter,
    },
  });

  // Close filter when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node) &&
        filterButtonRef.current &&
        !filterButtonRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    }
    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen]);

  const updateFilterStateForColumn = (columnId: string) => {
    const existingFilter = columnFilters.find((f) => f.id === columnId)
      ?.value as any;
    const validOperators = getOperatorsForColumn(columnId);

    if (existingFilter) {
      setActiveOperator(existingFilter.operator);
      setActiveValue(existingFilter.value);
    } else {
      setActiveOperator(validOperators[0]);
      setActiveValue('');
    }
  };

  const handleFilterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isFilterOpen) {
      if (!activeFilterColumn) {
        const firstCol = table.getAllColumns()[0]?.id;
        if (firstCol) {
          setActiveFilterColumn(firstCol);
          updateFilterStateForColumn(firstCol);
        }
      } else {
        updateFilterStateForColumn(activeFilterColumn);
      }
    }
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterOpenFromMenu = (columnId: string) => {
    if (activeFilterColumn && activeFilterColumn !== columnId) {
      table.getColumn(activeFilterColumn)?.setFilterValue(undefined);
    }
    setActiveFilterColumn(columnId);
    updateFilterStateForColumn(columnId);
    setIsFilterOpen(true);
  };

  const handleFilterSave = () => {
    if (activeFilterColumn) {
      table.getColumn(activeFilterColumn)?.setFilterValue({
        operator: activeOperator,
        value: activeValue,
      });
    }
  };

  const handleFilterClear = () => {
    if (activeFilterColumn) {
      table.getColumn(activeFilterColumn)?.setFilterValue(undefined);
      setActiveValue('');
      const validOperators = getOperatorsForColumn(activeFilterColumn);
      setActiveOperator(validOperators[0]);
    }
  };

  const handleColumnChange = (newCol: string) => {
    if (activeFilterColumn && activeFilterColumn !== newCol) {
      table.getColumn(activeFilterColumn)?.setFilterValue(undefined);
    }
    setActiveFilterColumn(newCol);
    updateFilterStateForColumn(newCol);
  };

  return (
    <div className='mt-6 sm:mt-8 relative transform-gpu will-change-transform'>
      <div className='flex flex-col w-full rounded-3xl border border-white/5 bg-[#0a0a0f]/40 backdrop-blur-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'>
        <div className='p-3 sm:p-5 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-20 bg-black/20 rounded-t-3xl'>
          <h2 className='text-lg sm:text-xl font-bold text-white/90 tracking-tight hidden sm:block'>
            Market Overview
          </h2>
          <div className='flex items-center gap-3 w-full sm:w-auto'>
            <div className='relative group flex-1 sm:flex-none'>
              <MdSearch
                className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-(--brand-blue) transition-colors duration-200'
                size={20}
              />
              <input
                value={globalFilter ?? ''}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder='Search coins...'
                className='bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white/90 placeholder-white/40 focus:outline-none focus:border-(--brand-blue)/50 focus:bg-white/10 transition-all duration-200 w-full sm:w-64 shadow-inner'
              />
            </div>
            <button
              ref={filterButtonRef}
              onClick={handleFilterClick}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 border ${
                isFilterOpen
                  ? 'bg-(--brand-blue)/10 text-(--brand-blue) border-(--brand-blue)/20'
                  : 'bg-white/5 text-white/60 border-white/10 hover:text-white hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <MdFilterList size={20} />
              <span className='text-sm font-medium hidden sm:block'>
                Filters
              </span>
            </button>
          </div>

          {/* Filter Panel */}
          <Transition
            show={isFilterOpen}
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1 scale-95'
            enterTo='opacity-100 translate-y-0 scale-100'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0 scale-100'
            leaveTo='opacity-0 translate-y-1 scale-95'
          >
            <div
              ref={filterRef}
              className='absolute right-0 sm:right-4 top-full mt-2 z-50 w-[calc(100%-1rem)] sm:w-[600px] mx-2 sm:mx-0 bg-[#0a0a0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 ring-1 ring-white/5'
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className='flex items-center justify-between mb-5 pb-4 border-b border-white/5'>
                <div className='flex items-center gap-2'>
                  <div className='p-1.5 rounded-lg bg-(--brand-blue)/10 text-(--brand-blue)'>
                    <MdFilterList size={20} />
                  </div>
                  <span className='font-bold text-sm text-white/90'>
                    Filter Columns
                  </span>
                </div>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className='p-1 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all'
                >
                  <MdClose size={20} />
                </button>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 sm:items-end'>
                {/* Column Select */}
                <div className='flex flex-col gap-1.5 w-full sm:w-auto sm:min-w-[180px]'>
                  <span className='text-[11px] font-bold text-white/40 uppercase tracking-wider ml-1'>
                    Column
                  </span>
                  <Listbox
                    value={activeFilterColumn}
                    onChange={handleColumnChange}
                  >
                    <div className='relative'>
                      <Listbox.Button className='relative w-full cursor-default rounded-xl bg-white/5 py-2.5 pl-4 pr-10 text-left text-sm text-white border border-white/10 focus:outline-none focus-visible:border-(--brand-blue) focus-visible:ring-2 focus-visible:ring-white/75 hover:bg-white/10 hover:border-white/20 transition-all'>
                        <span className='block truncate font-medium'>
                          {
                            table
                              .getAllColumns()
                              .find((col) => col.id === activeFilterColumn)
                              ?.columnDef.header as string
                          }
                        </span>
                        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                          <MdKeyboardArrowDown
                            className='h-5 w-5 text-white/40'
                            aria-hidden='true'
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <Listbox.Options className='absolute mt-2 max-h-60 w-full overflow-auto rounded-xl bg-[#1a1a20] py-1 text-base shadow-xl ring-1 ring-black/5 focus:outline-none sm:text-sm border border-white/10 z-50'>
                          {table.getAllColumns().map((column) => (
                            <Listbox.Option
                              key={column.id}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2.5 pl-10 pr-4 transition-colors ${
                                  active
                                    ? 'bg-white/10 text-white'
                                    : 'text-white/70'
                                }`
                              }
                              value={column.id}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected
                                        ? 'font-bold text-white'
                                        : 'font-normal'
                                    }`}
                                  >
                                    {column.columnDef.header as string}
                                  </span>
                                  {selected ? (
                                    <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-(--brand-blue)'>
                                      <MdCheck
                                        className='h-5 w-5'
                                        aria-hidden='true'
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                {/* Operator Select */}
                <div className='flex flex-col gap-1.5 w-full sm:w-auto sm:min-w-[140px]'>
                  <span className='text-[11px] font-bold text-white/40 uppercase tracking-wider ml-1'>
                    Operator
                  </span>
                  <Listbox value={activeOperator} onChange={setActiveOperator}>
                    <div className='relative'>
                      <Listbox.Button className='relative w-full cursor-default rounded-xl bg-white/5 py-2.5 pl-4 pr-10 text-left text-sm text-white border border-white/10 focus:outline-none focus-visible:border-(--brand-blue) focus-visible:ring-2 focus-visible:ring-white/75 hover:bg-white/10 hover:border-white/20 transition-all'>
                        <span className='block truncate font-medium'>
                          {activeOperator}
                        </span>
                        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                          <MdKeyboardArrowDown
                            className='h-5 w-5 text-white/40'
                            aria-hidden='true'
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <Listbox.Options className='absolute mt-2 max-h-60 w-full overflow-auto rounded-xl bg-[#1a1a20] py-1 text-base shadow-xl ring-1 ring-black/5 focus:outline-none sm:text-sm border border-white/10 z-50'>
                          {getOperatorsForColumn(activeFilterColumn).map(
                            (op) => (
                              <Listbox.Option
                                key={op}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2.5 pl-10 pr-4 transition-colors ${
                                    active
                                      ? 'bg-white/10 text-white'
                                      : 'text-white/70'
                                  }`
                                }
                                value={op}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected
                                          ? 'font-bold text-white'
                                          : 'font-normal'
                                      }`}
                                    >
                                      {op}
                                    </span>
                                    {selected ? (
                                      <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-(--brand-blue)'>
                                        <MdCheck
                                          className='h-5 w-5'
                                          aria-hidden='true'
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            )
                          )}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                {/* Value Input */}
                {!['up', 'down'].includes(activeOperator) && (
                  <div className='flex flex-col gap-1.5 w-full'>
                    <span className='text-[11px] font-bold text-white/40 uppercase tracking-wider ml-1'>
                      Value
                    </span>
                    <input
                      value={activeValue}
                      onChange={(e) => setActiveValue(e.target.value)}
                      placeholder='Enter value...'
                      className='w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-(--brand-blue) focus:bg-white/10 hover:border-white/20 transition-all'
                    />
                  </div>
                )}
              </div>
              <div className='flex justify-end gap-3 mt-6 pt-4 border-t border-white/5'>
                <button
                  onClick={handleFilterClear}
                  className='px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium'
                >
                  Clear All
                </button>
                <button
                  onClick={handleFilterSave}
                  className='px-6 py-2.5 text-sm font-bold text-white bg-(--brand-blue) rounded-xl shadow-lg shadow-(--brand-blue)/20 border border-white/10 hover:shadow-(--brand-blue)/40 hover:brightness-110 transition-all duration-200'
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </Transition>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full border-collapse border-spacing-0 table-fixed'>
            <thead className='bg-black/10 h-auto border-b border-white/5'>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className='border-b border-white/3 last:border-b-0'
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className={`relative group px-2 sm:px-4 py-4 sm:py-8 text-white/40 font-extrabold text-[10px] sm:text-[0.7rem] tracking-widest uppercase transition-colors duration-200 select-none hover:text-white/90 cursor-pointer ${
                        header.column.id === 'name'
                          ? 'text-left'
                          : [
                              'current_price',
                              'total_volume',
                              'market_cap',
                            ].includes(header.column.id)
                          ? 'text-right'
                          : 'text-center'
                      }`}
                      style={{
                        width: header.column.getSize(),
                      }}
                    >
                      <div
                        className={`flex items-center gap-1 ${
                          header.column.id === 'name'
                            ? 'justify-start'
                            : [
                                'current_price',
                                'total_volume',
                                'market_cap',
                              ].includes(header.column.id)
                            ? 'justify-end'
                            : 'justify-center'
                        }`}
                      >
                        <div
                          className={`flex items-center ${
                            header.column.id === 'name'
                              ? 'gap-1 flex-row-reverse'
                              : 'relative'
                          }`}
                        >
                          <span
                            className={`flex items-center ${
                              header.column.id === 'name'
                                ? ''
                                : 'absolute right-full mr-1'
                            }`}
                          >
                            {{
                              asc: [
                                'current_price',
                                'total_volume',
                                'market_cap',
                                'price_change_percentage_1h_in_currency',
                                'price_change_percentage_24h_in_currency',
                                'price_change_percentage_7d_in_currency',
                              ].includes(header.column.id) ? (
                                <MdArrowDownward
                                  size='1.2rem'
                                  className='text-white/60'
                                />
                              ) : (
                                <MdArrowUpward
                                  size='1.2rem'
                                  className='text-white/60'
                                />
                              ),
                              desc: [
                                'current_price',
                                'total_volume',
                                'market_cap',
                                'price_change_percentage_1h_in_currency',
                                'price_change_percentage_24h_in_currency',
                                'price_change_percentage_7d_in_currency',
                              ].includes(header.column.id) ? (
                                <MdArrowUpward
                                  size='1.2rem'
                                  className='text-white/60'
                                />
                              ) : (
                                <MdArrowDownward
                                  size='1.2rem'
                                  className='text-white/60'
                                />
                              ),
                            }[header.column.getIsSorted() as string] ?? (
                              <MdArrowUpward
                                size='1.2rem'
                                className='text-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
                              />
                            )}
                          </span>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      </div>

                      {/* Column Menu */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                          [
                            'current_price',
                            'total_volume',
                            'market_cap',
                          ].includes(header.column.id)
                            ? 'left-1 sm:left-2'
                            : 'right-1 sm:right-2'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Menu>
                          <Menu.Button className='p-1 rounded hover:bg-white/10 text-white/40 hover:text-white focus:outline-none'>
                            <MdMoreVert size={20} />
                          </Menu.Button>
                          <Menu.Items
                            transition
                            anchor={{ to: 'bottom end', gap: 8 }}
                            className='w-40 sm:w-48 origin-top-right divide-y divide-white/5 rounded-xl bg-[#0a0a0f]/95 backdrop-blur-xl shadow-xl ring-1 ring-white/10 focus:outline-none border border-white/10 z-50 transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0'
                          >
                            <div className='px-1 py-1'>
                              <Menu.Item>
                                {({ active }) => {
                                  const isSorted = header.column.getIsSorted();
                                  const showDesc =
                                    !isSorted || isSorted === 'asc';
                                  return (
                                    <button
                                      className={`${
                                        active
                                          ? 'bg-white/10 text-white'
                                          : 'text-white/70 hover:text-white'
                                      } group flex w-full items-center rounded-lg px-2 py-2 text-xs sm:text-sm transition-colors`}
                                      onClick={() =>
                                        header.column.toggleSorting(showDesc)
                                      }
                                    >
                                      {showDesc ? (
                                        <MdArrowDownward className='mr-2 h-4 w-4 text-white/40 group-hover:text-white/90 transition-colors' />
                                      ) : (
                                        <MdArrowUpward className='mr-2 h-4 w-4 text-white/40 group-hover:text-white/90 transition-colors' />
                                      )}
                                      {showDesc
                                        ? 'Sort by DESC'
                                        : 'Sort by ASC'}
                                    </button>
                                  );
                                }}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => {
                                  const isSorted = header.column.getIsSorted();
                                  if (isSorted) {
                                    return (
                                      <button
                                        className={`${
                                          active
                                            ? 'bg-white/10 text-white'
                                            : 'text-white/70 hover:text-white'
                                        } group flex w-full items-center rounded-lg px-2 py-2 text-xs sm:text-sm transition-colors`}
                                        onClick={() =>
                                          header.column.clearSorting()
                                        }
                                      >
                                        <MdClose className='mr-2 h-4 w-4 text-white/40 group-hover:text-white/90 transition-colors' />
                                        Unsort
                                      </button>
                                    );
                                  }
                                  return (
                                    <button
                                      className={`${
                                        active
                                          ? 'bg-white/10 text-white'
                                          : 'text-white/70 hover:text-white'
                                      } group flex w-full items-center rounded-lg px-2 py-2 text-xs sm:text-sm transition-colors`}
                                      onClick={() =>
                                        header.column.toggleSorting(false)
                                      }
                                    >
                                      <MdArrowUpward className='mr-2 h-4 w-4 text-white/40 group-hover:text-white/90 transition-colors' />
                                      Sort by ASC
                                    </button>
                                  );
                                }}
                              </Menu.Item>
                            </div>
                            <div className='px-1 py-1'>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active
                                        ? 'bg-white/10 text-white'
                                        : 'text-white/70 hover:text-white'
                                    } group flex w-full items-center rounded-lg px-2 py-2 text-xs sm:text-sm transition-colors`}
                                    onClick={() =>
                                      handleFilterOpenFromMenu(header.column.id)
                                    }
                                  >
                                    <MdFilterList className='mr-2 h-4 w-4 text-white/40 group-hover:text-white/90 transition-colors' />
                                    Filter
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className='border-b border-white/3 last:border-b-0 transition-colors duration-150 ease-out hover:bg-white/3 focus-within:bg-(--brand-blue)/5 active:bg-(--brand-blue)/10'
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={`py-0.5 sm:py-2.5 text-white/90 text-xs sm:text-sm font-medium ${
                        cell.column.id === 'name'
                          ? 'pl-4 pr-2 sm:px-4 text-left'
                          : [
                              'current_price',
                              'total_volume',
                              'market_cap',
                            ].includes(cell.column.id)
                          ? 'px-2 sm:px-4 text-right'
                          : 'px-2 sm:px-4 text-center'
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className='flex items-center justify-end gap-4 p-4 border-t border-white/5 text-sm text-white/60 rounded-b-3xl'>
          <div className='flex items-center gap-2'>
            <span>Rows per page:</span>
            <div className='relative'>
              <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
                className='appearance-none bg-white/5 border border-white/10 rounded px-2 py-1 pr-6 focus:outline-none focus:border-(--brand-blue) cursor-pointer'
              >
                {[50, 100].map((pageSize) => (
                  <option
                    key={pageSize}
                    value={pageSize}
                    className='bg-[#1a1a20]'
                  >
                    {pageSize}
                  </option>
                ))}
              </select>
              <MdKeyboardArrowDown className='absolute right-1 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-white/40' />
            </div>
          </div>
          <div className='flex items-center gap-1 min-w-[100px] justify-center'>
            <span>
              {table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
                1}
              -
              {Math.min(
                (table.getState().pagination.pageIndex + 1) *
                  table.getState().pagination.pageSize,
                table.getFilteredRowModel().rows.length
              )}{' '}
              of {table.getFilteredRowModel().rows.length}
            </span>
          </div>
          <div className='flex gap-1'>
            <button
              className='p-1 hover:text-white disabled:opacity-30 disabled:hover:text-white/60 transition-colors'
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <MdChevronLeft size={24} />
            </button>
            <button
              className='p-1 hover:text-white disabled:opacity-30 disabled:hover:text-white/60 transition-colors'
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <MdChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

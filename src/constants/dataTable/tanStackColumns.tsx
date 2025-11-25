import { createColumnHelper } from '@tanstack/react-table';
import { Link as RouterLink } from 'react-router-dom';
import { AreaChart, Area, YAxis } from 'recharts';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import {
  formatCurrency,
  formatCompactCurrency,
  formatPercentage,
} from 'utils/formatters';
import { ICoins } from 'interfaces';

const columnHelper = createColumnHelper<ICoins>();

const COIN_NAME_CLASSES =
  'text-white/95 font-bold truncate group-hover:text-(--brand-blue) text-sm sm:text-base transition-colors duration-300 leading-tight';

function CoinName({ row, value }: { row: ICoins; value: string }) {
  return (
    <RouterLink
      to={`/coins/${row.id}`}
      className='flex items-center gap-3 group relative w-full'
    >
      <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 border border-white/10 shadow-sm group-hover:scale-110 transition-transform duration-300'>
        <img
          src={row.image}
          alt={`${value} logo`}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex flex-col min-w-0 justify-center'>
        <span className={COIN_NAME_CLASSES} title={String(value)}>
          {value}
        </span>
        <span className='text-[0.65rem] sm:text-xs font-bold text-white/40 uppercase tracking-wider group-hover:text-(--brand-blue) transition-colors duration-300 leading-tight mt-0.5'>
          {row.symbol}
        </span>
      </div>
    </RouterLink>
  );
}

function SymbolBadge({ value }: { value: string }) {
  const label = String(value ?? '').toUpperCase();
  return (
    <div className='flex items-center justify-center w-full'>
      <span className='flex items-center justify-center w-fit h-fit max-h-6 font-bold rounded-full backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 bg-(--brand-blue)/10 border border-(--brand-blue)/20 text-(--brand-blue) tracking-wide text-[0.65rem]! sm:text-xs! px-2! sm:px-2.5! py-0.5! sm:py-1! shadow-[0_0_10px_rgba(0,240,255,0.1)]'>
        {label}
      </span>
    </div>
  );
}

function PercentageChange({ value }: { value: number }) {
  const label = formatPercentage(Math.abs(value)); // Format absolute value
  const isPositive = value >= 0;
  const colorClass = isPositive
    ? 'text-(--brand-positive)'
    : 'text-(--brand-negative)';
  const Icon = isPositive ? MdArrowDropUp : MdArrowDropDown;

  return (
    <div
      className={`flex items-center justify-center gap-0.5 font-bold ${colorClass}`}
    >
      <Icon className='text-lg! sm:text-xl!' />
      <span className='text-xs sm:text-sm'>{label}</span>
    </div>
  );
}

function SparklineChart({ row, value }: { row: ICoins; value: any }) {
  const isNegative = (row.price_change_percentage_7d_in_currency ?? 0) < 0;
  const color = isNegative ? '#ff3b30' : '#34c759';
  const gradientId = `linearColor${row.id}`;

  const prices = value.price;
  const sampledData = prices.filter(
    (_: number, index: number) => index % 2 === 0
  );

  return (
    <div className='w-full h-full flex items-center justify-center py-1'>
      <AreaChart data={sampledData} width={150} height={50}>
        <defs>
          <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor={color} stopOpacity={0.3} />
            <stop offset='95%' stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type='monotone'
          dataKey={(value) => value}
          stroke={color}
          strokeWidth={2}
          fill={`url(#${gradientId})`}
          dot={false}
          activeDot={false}
          isAnimationActive={false}
        />
        <YAxis domain={['dataMin', 'dataMax']} hide />
      </AreaChart>
    </div>
  );
}

export const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => (
      <CoinName row={info.row.original} value={info.getValue()} />
    ),
    size: 160, // flex 1 minWidth 140
  }),
  columnHelper.accessor('symbol', {
    header: 'Symbol',
    cell: (info) => <SymbolBadge value={info.getValue()} />,
    size: 110,
  }),
  columnHelper.accessor('current_price', {
    header: 'Price',
    cell: (info) => formatCurrency(Number(info.getValue() ?? 0)),
    size: 100,
  }),
  columnHelper.accessor('price_change_percentage_1h_in_currency', {
    header: '1h',
    cell: (info) => <PercentageChange value={Number(info.getValue() ?? 0)} />,
    size: 75,
  }),
  columnHelper.accessor('price_change_percentage_24h_in_currency', {
    header: '24h',
    cell: (info) => <PercentageChange value={Number(info.getValue() ?? 0)} />,
    size: 75,
  }),
  columnHelper.accessor('price_change_percentage_7d_in_currency', {
    header: '7d',
    cell: (info) => <PercentageChange value={Number(info.getValue() ?? 0)} />,
    size: 75,
  }),
  columnHelper.accessor('total_volume', {
    header: '24h Volume',
    cell: (info) => formatCompactCurrency(Number(info.getValue() ?? 0)),
    size: 150,
  }),
  columnHelper.accessor('market_cap', {
    header: 'Market Cap',
    cell: (info) => formatCompactCurrency(Number(info.getValue() ?? 0)),
    size: 150,
  }),
  columnHelper.accessor('sparkline_in_7d', {
    header: 'Last 7 Days',
    cell: (info) => (
      <SparklineChart row={info.row.original} value={info.getValue()} />
    ),
    size: 130,
  }),
];

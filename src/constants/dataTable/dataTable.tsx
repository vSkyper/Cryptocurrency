import { Link as RouterLink } from 'react-router-dom';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { AreaChart, Area, YAxis } from 'recharts';
import {
  formatCurrency,
  formatCompactCurrency,
  formatPercentage,
} from 'utils/formatters';
import { LINK, BADGE } from 'styles/styles';

const COIN_NAME_CLASSES =
  'text-white/95 font-bold truncate group-hover:text-[var(--brand-blue)] text-[0.7rem] sm:text-sm md:text-base';

function CoinName(params: GridRenderCellParams) {
  return (
    <RouterLink to={`/coins/${params.row.id}`} className={LINK.withIcon}>
      <div className='!w-6 !h-6 sm:!w-8 sm:!h-8 md:!w-9 md:!h-9 overflow-hidden flex-shrink-0'>
        <img
          src={params.row.image}
          alt={`${params.value} logo`}
          className='w-full h-full object-cover'
        />
      </div>
      <span className={COIN_NAME_CLASSES} title={String(params.value)}>
        {params.value}
      </span>

      <svg
        className='w-3 h-3 sm:w-4 sm:h-4 text-[var(--brand-blue)] opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 flex-shrink-0'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 5l7 7-7 7'
        />
      </svg>
    </RouterLink>
  );
}

function SymbolBadge(params: GridRenderCellParams) {
  const label = String(params.value ?? '').toUpperCase();
  return (
    <span
      className={`${BADGE.symbol} !text-[0.6rem] sm:!text-xs !px-1.5 sm:!px-2 !py-0.5 sm:!py-1 inline-flex items-center justify-center !max-h-6 sm:!max-h-7`}
    >
      {label}
    </span>
  );
}

function PercentageChange(params: GridRenderCellParams) {
  const value = Number(params.value ?? 0);
  const label = formatPercentage(value);
  const isPositive = value >= 0;
  const colorVar = isPositive
    ? 'var(--brand-positive)'
    : 'var(--brand-negative)';
  const badgeColorClasses = isPositive ? BADGE.positive : BADGE.negative;

  return (
    <span
      className={`${BADGE.base} ${badgeColorClasses} text-[${colorVar}] !text-[0.6rem] sm:!text-xs !px-1.5 sm:!px-2 !py-0.5 sm:!py-1`}
      title={label}
    >
      {label}
    </span>
  );
}

// Optimized Sparkline with Recharts
function SparklineChart(params: GridRenderCellParams) {
  const isNegative = params.row.price_change_percentage_7d_in_currency < 0;
  const color = isNegative ? 'var(--brand-negative)' : 'var(--brand-positive)';
  const gradientId = `linearColor${params.row.id}`;

  // Sample data to reduce points (every 3rd point)
  const prices = params.value.price;
  const sampledData = prices.filter(
    (_: number, index: number) => index % 3 === 0
  );

  return (
    <AreaChart
      width={180}
      height={50}
      data={sampledData}
      responsive
      margin={{ left: 0, right: 0, top: 2, bottom: 0 }}
    >
      <defs>
        <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor={color} stopOpacity={0.3} />
          <stop offset='95%' stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area
        dataKey={(value) => value}
        stroke={color}
        strokeWidth={1.5}
        fill={`url(#${gradientId})`}
        dot={false}
        activeDot={false}
      />
      <YAxis dataKey={(value) => value} domain={['auto', 'auto']} hide />
    </AreaChart>
  );
}

// Helper to create percentage change columns
function createPercentageColumn(
  field: string,
  headerName: string,
  flex = 0.7,
  minWidth = 120
): GridColDef {
  return {
    type: 'number',
    field,
    headerName,
    flex,
    minWidth,
    valueFormatter: (value) => formatPercentage(Number(value ?? 0)),
    renderCell: PercentageChange,
  };
}

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    minWidth: 140,
    align: 'left',
    headerAlign: 'left',
    renderCell: CoinName,
  },
  {
    field: 'symbol',
    headerName: 'Symbol',
    flex: 0.9,
    minWidth: 110,
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (value) => String(value ?? '').toUpperCase(),
    renderCell: SymbolBadge,
    cellClassName: 'symbol-cell',
  },
  {
    type: 'number',
    field: 'current_price',
    headerName: 'Price',
    flex: 1,
    minWidth: 100,
    valueFormatter: (value) => formatCurrency(Number(value ?? 0)),
  },
  createPercentageColumn(
    'price_change_percentage_1h_in_currency',
    '1h',
    0.7,
    75
  ),
  createPercentageColumn(
    'price_change_percentage_24h_in_currency',
    '24h',
    0.7,
    75
  ),
  createPercentageColumn(
    'price_change_percentage_7d_in_currency',
    '7d',
    0.7,
    75
  ),
  {
    type: 'number',
    field: 'total_volume',
    headerName: '24h Volume',
    flex: 1,
    minWidth: 110,
    valueFormatter: (value) => formatCompactCurrency(Number(value ?? 0)),
  },
  {
    type: 'number',
    field: 'market_cap',
    headerName: 'Market Cap',
    flex: 1,
    minWidth: 110,
    valueFormatter: (value) => formatCompactCurrency(Number(value ?? 0)),
  },
  {
    field: 'sparkline_in_7d',
    headerName: 'Last 7 Days',
    flex: 1,
    minWidth: 130,
    renderCell: SparklineChart,
  },
];

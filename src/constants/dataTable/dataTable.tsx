import { Link as RouterLink } from 'react-router-dom';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { AreaChart, Area, YAxis, ResponsiveContainer } from 'recharts';

// Formatters
const currencyFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 8,
  style: 'currency',
  currency: 'USD',
});

const compactCurrencyFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
  style: 'currency',
  currency: 'USD',
});

const percentageFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'percent',
});

const formatCurrency = (value: number) => currencyFormatter.format(value);
const formatCompactCurrency = (value: number) =>
  compactCurrencyFormatter.format(value);
const formatPercentage = (value: number) =>
  percentageFormatter.format(value / 100);

// Class constants
const COIN_IMAGE_CLASSES =
  'w-9 h-9 overflow-hidden flex-shrink-0 transition-all ' +
  'duration-300 ease-out group-hover:scale-110';

const COIN_LINK_CLASSES =
  'inline-flex items-center gap-3 transition-all duration-300 ease-out group relative ' +
  'hover:gap-4 w-full';

const COIN_NAME_CLASSES =
  'text-white/95 font-bold truncate transition-all duration-300 ease-out ' +
  'group-hover:text-[var(--brand-blue)] group-hover:translate-x-1';

const SYMBOL_BADGE_CLASSES =
  'text-xs font-bold rounded-full px-2 py-1 backdrop-blur-sm transition-transform ' +
  'duration-200 hover:-translate-y-0.5 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-blue)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-blue)_8%,transparent)_100%)] ' +
  'border border-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] text-[var(--brand-blue)] tracking-wide';

const PERCENTAGE_BADGE_BASE =
  'text-xs font-semibold rounded-full px-2 py-1 backdrop-blur-sm transition-transform ' +
  'duration-200 hover:-translate-y-0.5 border';

const POSITIVE_BADGE_CLASSES =
  'border-[color-mix(in_srgb,var(--brand-positive)_30%,transparent)] ' +
  'bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-positive)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-positive)_8%,transparent)_100%)]';

const NEGATIVE_BADGE_CLASSES =
  'border-[color-mix(in_srgb,var(--brand-negative)_30%,transparent)] ' +
  'bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-negative)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-negative)_8%,transparent)_100%)]';

function CoinName(params: GridRenderCellParams) {
  return (
    <RouterLink to={`/coins/${params.row.id}`} className={COIN_LINK_CLASSES}>
      <div className={COIN_IMAGE_CLASSES}>
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
        className='w-4 h-4 text-[var(--brand-blue)] opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 flex-shrink-0'
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
  return <span className={SYMBOL_BADGE_CLASSES}>{label}</span>;
}

function PercentageChange(params: GridRenderCellParams) {
  const value = Number(params.value ?? 0);
  const label = formatPercentage(value);
  const isPositive = value >= 0;
  const colorVar = isPositive
    ? 'var(--brand-positive)'
    : 'var(--brand-negative)';
  const badgeColorClasses = isPositive
    ? POSITIVE_BADGE_CLASSES
    : NEGATIVE_BADGE_CLASSES;

  return (
    <span
      className={`${PERCENTAGE_BADGE_BASE} ${badgeColorClasses} text-[${colorVar}]`}
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
    <ResponsiveContainer>
      <AreaChart
        width={180}
        height={50}
        data={sampledData}
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
    </ResponsiveContainer>
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
    minWidth: 250,
    align: 'left',
    headerAlign: 'left',
    renderCell: CoinName,
  },
  {
    field: 'symbol',
    headerName: 'Symbol',
    flex: 0.9,
    minWidth: 135,
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (value) => String(value ?? '').toUpperCase(),
    renderCell: SymbolBadge,
  },
  {
    type: 'number',
    field: 'current_price',
    headerName: 'Price',
    flex: 1,
    minWidth: 150,
    valueFormatter: (value) => formatCurrency(Number(value ?? 0)),
  },
  createPercentageColumn('price_change_percentage_1h_in_currency', '1h'),
  createPercentageColumn('price_change_percentage_24h_in_currency', '24h'),
  createPercentageColumn('price_change_percentage_7d_in_currency', '7d'),
  {
    type: 'number',
    field: 'total_volume',
    headerName: '24h Volume',
    flex: 1,
    minWidth: 180,
    valueFormatter: (value) => formatCompactCurrency(Number(value ?? 0)),
  },
  {
    type: 'number',
    field: 'market_cap',
    headerName: 'Market Cap',
    flex: 1,
    minWidth: 180,
    valueFormatter: (value) => formatCompactCurrency(Number(value ?? 0)),
  },
  {
    field: 'sparkline_in_7d',
    headerName: 'Last 7 Days',
    flex: 1,
    minWidth: 190,
    renderCell: SparklineChart,
  },
];

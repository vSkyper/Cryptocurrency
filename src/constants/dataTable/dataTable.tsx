import { Link as RouterLink } from 'react-router-dom';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { AreaChart, Area, YAxis } from 'recharts';
import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material';
import {
  formatCurrency,
  formatCompactCurrency,
  formatPercentage,
} from 'utils/formatters';

const COIN_NAME_CLASSES =
  'text-white/95 font-bold truncate group-hover:text-(--brand-blue) text-sm sm:text-base transition-colors duration-300 leading-tight';

function CoinName(params: GridRenderCellParams) {
  return (
    <RouterLink
      to={`/coins/${params.row.id}`}
      className='flex items-center gap-3 group relative w-full'
    >
      <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 border border-white/10 shadow-sm group-hover:scale-110 transition-transform duration-300'>
        <img
          src={params.row.image}
          alt={`${params.value} logo`}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex flex-col min-w-0 justify-center'>
        <span className={COIN_NAME_CLASSES} title={String(params.value)}>
          {params.value}
        </span>
        <span className='text-[0.65rem] sm:text-xs font-bold text-white/40 uppercase tracking-wider group-hover:text-(--brand-blue) transition-colors duration-300 leading-tight mt-0.5'>
          {params.row.symbol}
        </span>
      </div>
    </RouterLink>
  );
}

function SymbolBadge(params: GridRenderCellParams) {
  const label = String(params.value ?? '').toUpperCase();
  return (
    <div className='flex items-center justify-center w-full'>
      <span className='flex items-center justify-center w-fit h-fit max-h-6 font-bold rounded-full backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 bg-(--brand-blue)/10 border border-(--brand-blue)/20 text-(--brand-blue) tracking-wide text-[0.65rem]! sm:text-xs! px-2! sm:px-2.5! py-0.5! sm:py-1! shadow-[0_0_10px_rgba(0,240,255,0.1)]'>
        {label}
      </span>
    </div>
  );
}

function PercentageChange(params: GridRenderCellParams) {
  const value = Number(params.value ?? 0);
  const label = formatPercentage(Math.abs(value)); // Format absolute value
  const isPositive = value >= 0;
  const colorClass = isPositive
    ? 'text-(--brand-positive)'
    : 'text-(--brand-negative)';
  const Icon = isPositive ? ArrowDropUp : ArrowDropDown;

  return (
    <div className={`flex items-center gap-0.5 font-bold ${colorClass}`}>
      <Icon className='text-lg! sm:text-xl!' />
      <span className='text-xs sm:text-sm'>{label}</span>
    </div>
  );
}

// Optimized Sparkline with Recharts
function SparklineChart(params: GridRenderCellParams) {
  const isNegative = params.row.price_change_percentage_7d_in_currency < 0;
  const color = isNegative ? '#ff3b30' : '#34c759'; // Hardcoded colors for recharts to ensure visibility
  const gradientId = `linearColor${params.row.id}`;

  // Sample data to reduce points (every 2nd point for better detail but performance)
  const prices = params.value.price;
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
          isAnimationActive={false} // Disable animation for performance in table
        />
        <YAxis domain={['dataMin', 'dataMax']} hide />
      </AreaChart>
    </div>
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
    minWidth: 150,
    valueFormatter: (value) => formatCompactCurrency(Number(value ?? 0)),
  },
  {
    type: 'number',
    field: 'market_cap',
    headerName: 'Market Cap',
    flex: 1,
    minWidth: 150,
    valueFormatter: (value) => formatCompactCurrency(Number(value ?? 0)),
  },
  {
    field: 'sparkline_in_7d',
    headerName: 'Last 7 Days',
    flex: 1,
    minWidth: 130,
    align: 'center',
    headerAlign: 'center',
    renderCell: SparklineChart,
  },
];

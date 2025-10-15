import { Link as RouterLink } from 'react-router-dom';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { AreaChart, ResponsiveContainer, Area, YAxis } from 'recharts';

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    minWidth: 250,
    align: 'left',
    headerAlign: 'left',
    renderCell: (params: GridRenderCellParams) => (
      <RouterLink
        to={`/coins/${params.row.id}`}
        className='inline-flex items-center gap-2 transition-colors duration-200 hover:underline'
      >
        <div className='w-9 h-9 rounded-full shadow-md overflow-hidden flex-shrink-0 transition-transform duration-200 hover:scale-110 border border-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)]'>
          <img
            src={params.row.image}
            alt={`${params.value} logo`}
            className='w-full h-full object-cover'
          />
        </div>
        <span
          className='text-white/95 font-bold truncate'
          title={String(params.value)}
        >
          {params.value}
        </span>
      </RouterLink>
    ),
  },
  {
    field: 'symbol',
    headerName: 'Symbol',
    flex: 0.9,
    minWidth: 135,
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (value) =>
      (typeof value === 'string' ? value : String(value ?? '')).toUpperCase(),
    renderCell: (params: GridRenderCellParams) => {
      const label = (
        typeof params.value === 'string'
          ? params.value
          : String(params.value ?? '')
      ).toUpperCase();
      return (
        <span className='text-xs font-bold rounded-full px-2 py-1 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-blue)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-blue)_8%,transparent)_100%)] border border-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] text-[var(--brand-blue)] tracking-wide'>
          {label}
        </span>
      );
    },
  },
  {
    type: 'number',
    field: 'current_price',
    headerName: 'Price',
    flex: 1,
    minWidth: 150,
    valueFormatter: (value) =>
      Number(value ?? 0).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 8,
        style: 'currency',
        currency: 'USD',
      }),
  },
  {
    type: 'number',
    field: 'price_change_percentage_1h_in_currency',
    headerName: '1h',
    flex: 0.7,
    minWidth: 120,
    valueFormatter: (value) =>
      (Number(value ?? 0) / 100).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'percent',
      }),
    renderCell: (params: GridRenderCellParams) => {
      const v = Number(params.value ?? 0);
      const label = (v / 100).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'percent',
      });
      const positive = v >= 0;
      const colorVar = positive
        ? 'var(--brand-positive)'
        : 'var(--brand-negative)';
      return (
        <span
          className={`text-xs font-semibold rounded-full px-2 py-1 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 text-[${colorVar}] border ${
            positive
              ? 'border-[color-mix(in_srgb,var(--brand-positive)_30%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-positive)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-positive)_8%,transparent)_100%)]'
              : 'border-[color-mix(in_srgb,var(--brand-negative)_30%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-negative)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-negative)_8%,transparent)_100%)]'
          }`}
          title={label}
        >
          {label}
        </span>
      );
    },
  },
  {
    type: 'number',
    field: 'price_change_percentage_24h_in_currency',
    headerName: '24h',
    flex: 0.7,
    minWidth: 120,
    valueFormatter: (value) =>
      (Number(value ?? 0) / 100).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'percent',
      }),
    renderCell: (params: GridRenderCellParams) => {
      const v = Number(params.value ?? 0);
      const label = (v / 100).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'percent',
      });
      const positive = v >= 0;
      const colorVar = positive
        ? 'var(--brand-positive)'
        : 'var(--brand-negative)';
      return (
        <span
          className={`text-xs font-semibold rounded-full px-2 py-1 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 text-[${colorVar}] border ${
            positive
              ? 'border-[color-mix(in_srgb,var(--brand-positive)_30%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-positive)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-positive)_8%,transparent)_100%)]'
              : 'border-[color-mix(in_srgb,var(--brand-negative)_30%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-negative)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-negative)_8%,transparent)_100%)]'
          }`}
          title={label}
        >
          {label}
        </span>
      );
    },
  },
  {
    type: 'number',
    field: 'price_change_percentage_7d_in_currency',
    headerName: '7d',
    flex: 0.7,
    minWidth: 120,
    valueFormatter: (value) =>
      (Number(value ?? 0) / 100).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'percent',
      }),
    renderCell: (params: GridRenderCellParams) => {
      const v = Number(params.value ?? 0);
      const label = (v / 100).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'percent',
      });
      const positive = v >= 0;
      const colorVar = positive
        ? 'var(--brand-positive)'
        : 'var(--brand-negative)';
      return (
        <span
          className={`text-xs font-semibold rounded-full px-2 py-1 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 text-[${colorVar}] border ${
            positive
              ? 'border-[color-mix(in_srgb,var(--brand-positive)_30%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-positive)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-positive)_8%,transparent)_100%)]'
              : 'border-[color-mix(in_srgb,var(--brand-negative)_30%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-negative)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-negative)_8%,transparent)_100%)]'
          }`}
          title={label}
        >
          {label}
        </span>
      );
    },
  },
  {
    type: 'number',
    field: 'total_volume',
    headerName: '24h Volume',
    flex: 1,
    minWidth: 180,
    valueFormatter: (value) =>
      Number(value ?? 0).toLocaleString('en-US', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'USD',
      }),
  },
  {
    type: 'number',
    field: 'market_cap',
    headerName: 'Market Cap',
    flex: 1,
    minWidth: 180,
    valueFormatter: (value) =>
      Number(value ?? 0).toLocaleString('en-US', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'USD',
      }),
  },
  {
    field: 'sparkline_in_7d',
    headerName: 'Last 7 Days',
    flex: 1,
    minWidth: 190,
    renderCell: (params: GridRenderCellParams) => {
      const color: string =
        params.row.price_change_percentage_7d_in_currency < 0
          ? 'var(--brand-negative)'
          : 'var(--brand-positive)';
      return (
        <ResponsiveContainer>
          <AreaChart
            data={params.value.price}
            margin={{ left: 0, right: 0, top: 6, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id={`linearColor${params.row.id}`}
                x1='0'
                y1='0'
                x2='0'
                y2='1'
              >
                <stop offset='5%' stopColor={color} stopOpacity={0.4} />
                <stop offset='75%' stopColor={color} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              dataKey={(value) => value}
              stroke={color}
              strokeWidth={1.5}
              fill={`url(#linearColor${params.row.id})`}
            />
            <YAxis dataKey={(value) => value} domain={['auto', 'auto']} hide />
          </AreaChart>
        </ResponsiveContainer>
      );
    },
  },
];

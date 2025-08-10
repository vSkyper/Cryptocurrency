import { Avatar, Chip, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { AreaChart, ResponsiveContainer, Area, YAxis } from 'recharts';

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    minWidth: 170,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridRenderCellParams) => (
      <Link
        color='inherit'
        underline='hover'
        component={RouterLink}
        to={`/coins/${params.row.id}`}
        sx={{ display: 'inline-flex' }}
      >
        <Stack direction='row' alignItems='center' spacing={1.5}>
          <Avatar
            src={params.row.image}
            alt={`${params.value} logo`}
            sx={{ width: 28, height: 28 }}
          />
          <Typography variant='body2' fontWeight={600} noWrap>
            {params.value}
          </Typography>
        </Stack>
      </Link>
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
      return (
        <Chip
          size='small'
          label={label}
          color={positive ? 'success' : 'error'}
          variant='outlined'
        />
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
      return (
        <Chip
          size='small'
          label={label}
          color={positive ? 'success' : 'error'}
          variant='outlined'
        />
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
      return (
        <Chip
          size='small'
          label={label}
          color={positive ? 'success' : 'error'}
          variant='outlined'
        />
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
          ? '#e57373'
          : '#81c784';
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
                <stop offset='5%' stopColor={color} stopOpacity={0.5} />
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

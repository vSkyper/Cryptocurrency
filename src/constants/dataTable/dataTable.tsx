import { Avatar, Chip, Link, Stack, Typography } from '@mui/material';
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
      <Link
        color='inherit'
        underline='hover'
        component={RouterLink}
        to={`/coins/${params.row.id}`}
        sx={{
          display: 'inline-flex',
          transition: 'all 200ms ease',
          '&:hover': {
            transform: 'translateX(4px)',
          },
        }}
      >
        <Stack direction='row' alignItems='center' spacing={2}>
          <Avatar
            src={params.row.image}
            alt={`${params.value} logo`}
            sx={{
              width: 36,
              height: 36,
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              border: '2px solid rgba(64, 156, 255, 0.2)',
              transition: 'all 200ms ease',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: '0 6px 16px rgba(64, 156, 255, 0.3)',
              },
            }}
          />
          <Typography
            variant='body2'
            fontWeight={700}
            noWrap
            sx={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: '0.9rem',
              letterSpacing: '0.3px',
            }}
          >
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
    renderCell: (params: GridRenderCellParams) => (
      <Chip
        size='small'
        label={(typeof params.value === 'string'
          ? params.value
          : String(params.value ?? '')
        ).toUpperCase()}
        sx={{
          fontWeight: 700,
          fontSize: '0.75rem',
          borderRadius: '12px',
          background:
            'linear-gradient(135deg, rgba(64, 156, 255, 0.15) 0%, rgba(64, 156, 255, 0.08) 100%)',
          border: '1px solid rgba(64, 156, 255, 0.2)',
          color: '#409CFF',
          backdropFilter: 'blur(8px)',
          letterSpacing: '0.5px',
          transition: 'all 200ms ease',
          '&:hover': {
            transform: 'translateY(-1px)',
            background:
              'linear-gradient(135deg, rgba(64, 156, 255, 0.2) 0%, rgba(64, 156, 255, 0.12) 100%)',
            border: '1px solid rgba(64, 156, 255, 0.3)',
            boxShadow: '0 4px 12px rgba(64, 156, 255, 0.2)',
          },
        }}
      />
    ),
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
          sx={{
            fontWeight: 600,
            fontSize: '0.75rem',
            borderRadius: '12px',
            border: positive
              ? '1px solid rgba(81, 207, 102, 0.3)'
              : '1px solid rgba(255, 107, 107, 0.3)',
            background: positive
              ? 'linear-gradient(135deg, rgba(81, 207, 102, 0.15) 0%, rgba(81, 207, 102, 0.08) 100%)'
              : 'linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(255, 107, 107, 0.08) 100%)',
            color: positive ? '#51cf66' : '#ff6b6b',
            backdropFilter: 'blur(8px)',
            transition: 'all 200ms ease',
            '&:hover': {
              transform: 'translateY(-1px)',
              boxShadow: positive
                ? '0 4px 12px rgba(81, 207, 102, 0.2)'
                : '0 4px 12px rgba(255, 107, 107, 0.2)',
            },
          }}
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
          sx={{
            fontWeight: 600,
            fontSize: '0.75rem',
            borderRadius: '12px',
            border: positive
              ? '1px solid rgba(81, 207, 102, 0.3)'
              : '1px solid rgba(255, 107, 107, 0.3)',
            background: positive
              ? 'linear-gradient(135deg, rgba(81, 207, 102, 0.15) 0%, rgba(81, 207, 102, 0.08) 100%)'
              : 'linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(255, 107, 107, 0.08) 100%)',
            color: positive ? '#51cf66' : '#ff6b6b',
            backdropFilter: 'blur(8px)',
            transition: 'all 200ms ease',
            '&:hover': {
              transform: 'translateY(-1px)',
              boxShadow: positive
                ? '0 4px 12px rgba(81, 207, 102, 0.2)'
                : '0 4px 12px rgba(255, 107, 107, 0.2)',
            },
          }}
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
          sx={{
            fontWeight: 600,
            fontSize: '0.75rem',
            borderRadius: '12px',
            border: positive
              ? '1px solid rgba(81, 207, 102, 0.3)'
              : '1px solid rgba(255, 107, 107, 0.3)',
            background: positive
              ? 'linear-gradient(135deg, rgba(81, 207, 102, 0.15) 0%, rgba(81, 207, 102, 0.08) 100%)'
              : 'linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(255, 107, 107, 0.08) 100%)',
            color: positive ? '#51cf66' : '#ff6b6b',
            backdropFilter: 'blur(8px)',
            transition: 'all 200ms ease',
            '&:hover': {
              transform: 'translateY(-1px)',
              boxShadow: positive
                ? '0 4px 12px rgba(81, 207, 102, 0.2)'
                : '0 4px 12px rgba(255, 107, 107, 0.2)',
            },
          }}
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

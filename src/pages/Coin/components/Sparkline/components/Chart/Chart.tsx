import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  ResponsiveContainer,
  Area,
  TooltipProps,
} from 'recharts';
import { format } from 'date-fns';
import { Paper, Typography } from '@mui/material';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { useCallback } from 'react';

interface Props {
  sparkline: {
    date: string;
    value: number;
  }[];
  days: string;
}

export default function ChartComponent({ sparkline, days }: Props) {
  const CustomTooltip = useCallback(({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (!active || !payload || !payload.length) return null;
    return (
      <Paper
        sx={{
          opacity: 0.75,
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography>{format(new Date(label), 'eeee, d MMM, yyyy')}</Typography>
        <Typography fontWeight="fontWeightLight">
          {Number(payload[0].value).toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 8,
            style: 'currency',
            currency: 'USD',
          })}
        </Typography>
      </Paper>
    );

  }, []);


  return (
    <ResponsiveContainer width="99%" height="100%">
      <AreaChart data={sparkline}>
        <defs>
          <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#648dae' stopOpacity={0.4} />
            <stop offset='75%' stopColor='#648dae' stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area dataKey='value' stroke='#648dae' fill='url(#color)' />
        <XAxis
          dataKey='date'
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => {
            if (days === '1') {
              return format(new Date(value), '| hh:mm a |');
            } else if (days === 'max') {
              return format(new Date(value), '| y MMM |');
            } else {
              return format(new Date(value), '| MMM, d |');
            }
          }}
        />
        <YAxis
          dataKey='value'
          domain={['auto', 'auto']}
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid opacity={0.05} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  )
}
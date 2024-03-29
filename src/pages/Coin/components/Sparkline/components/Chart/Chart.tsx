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
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { useCallback } from 'react';
import { ChartProps } from './interface';

export default function ChartComponent(props: ChartProps) {
  const { sparkline, days } = props;

  const CustomTooltip = useCallback(
    ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
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
          <Typography>
            {format(new Date(label), 'eeee, d MMM, yyyy')}
          </Typography>
          <Typography fontWeight='fontWeightLight'>
            {Number(payload[0].value).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 8,
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </Paper>
      );
    },
    []
  );

  const handleTickFormatterXAxis = useCallback(
    (value: string) => {
      switch (days) {
        case '1':
          return format(new Date(value), '| hh:mm a |');
        case 'max':
          return format(new Date(value), '| y MMM |');
        default:
          return format(new Date(value), '| MMM, d |');
      }
    },
    [days]
  );

  const handleTickFormatterYAxis = useCallback(
    (value: number) => `$${value}`,
    []
  );

  return (
    <ResponsiveContainer width='99%' height='100%'>
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
          tickFormatter={handleTickFormatterXAxis}
        />
        <YAxis
          dataKey='value'
          domain={['auto', 'auto']}
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={handleTickFormatterYAxis}
        />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid opacity={0.05} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

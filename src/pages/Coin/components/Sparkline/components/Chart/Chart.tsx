import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  ResponsiveContainer,
  Area,
  TooltipContentProps,
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
    ({ active, payload, label }: TooltipContentProps<ValueType, NameType>) => {
      if (!active || !payload || !payload.length) return null;
      return (
        <Paper
          sx={{
            opacity: 0.98,
            p: 1.5,
            bgcolor: 'background.paper',
            border: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography>
            {format(new Date(label ?? 0), 'eeee, d MMM, yyyy')}
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
            <stop offset='5%' stopColor='#409CFF' stopOpacity={0.45} />
            <stop offset='75%' stopColor='#409CFF' stopOpacity={0.06} />
          </linearGradient>
          <filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
            <feGaussianBlur stdDeviation='2.5' result='coloredBlur' />
            <feMerge>
              <feMergeNode in='coloredBlur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <Area
          dataKey='value'
          stroke='#409CFF'
          strokeWidth={2}
          fill='url(#color)'
          filter='url(#glow)'
          activeDot={{ r: 4, stroke: '#409CFF', strokeWidth: 2, fill: '#fff' }}
        />
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
          width={70}
        />
        <Tooltip content={CustomTooltip} />
        <CartesianGrid opacity={0.05} vertical={false} strokeDasharray='3 3' />
      </AreaChart>
    </ResponsiveContainer>
  );
}

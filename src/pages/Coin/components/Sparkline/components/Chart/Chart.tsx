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
import { useCallback, useEffect, useState } from 'react';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { ChartProps } from './interface';

const formatCurrency = (value: number): string => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
    style: 'currency',
    currency: 'USD',
  });
};

const getTickFormat = (days: string, value: string): string => {
  switch (days) {
    case '1':
      return format(new Date(value), '| hh:mm a |');
    case 'max':
      return format(new Date(value), '| y MMM |');
    default:
      return format(new Date(value), '| MMM, d |');
  }
};

export default function ChartComponent(props: ChartProps) {
  const { sparkline, days } = props;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    handler(mq);
    if ('addEventListener' in mq) {
      mq.addEventListener('change', handler as any);
    } else {
      // Safari
      // @ts-ignore
      mq.addListener(handler as any);
    }
    return () => {
      if ('removeEventListener' in mq) {
        mq.removeEventListener('change', handler as any);
      } else {
        // @ts-ignore
        mq.removeListener(handler as any);
      }
    };
  }, []);

  const CustomTooltip = useCallback(
    ({ active, payload, label }: TooltipContentProps<ValueType, NameType>) => {
      if (!active || !payload || !payload.length) return null;
      return (
        <div className='bg-[var(--bg-tertiary-dark)] border border-white/12 rounded-lg px-3 py-2 shadow-lg text-sm backdrop-blur-sm'>
          <div className='text-sm text-white/70 mb-1'>
            {format(new Date(label ?? 0), 'eeee, d MMM, yyyy')}
          </div>
          <div className='font-medium text-white'>
            {formatCurrency(Number(payload[0].value))}
          </div>
        </div>
      );
    },
    []
  );

  const handleTickFormatterXAxis = useCallback(
    (value: string) => getTickFormat(days, value),
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
            <stop
              offset='5%'
              stopColor='var(--brand-blue)'
              stopOpacity={0.45}
            />
            <stop
              offset='75%'
              stopColor='var(--brand-blue)'
              stopOpacity={0.06}
            />
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
          stroke='var(--brand-blue)'
          strokeWidth={2}
          fill='url(#color)'
          filter='url(#glow)'
          activeDot={{
            r: 4,
            stroke: 'var(--brand-blue)',
            strokeWidth: 2,
            fill: '#fff',
          }}
        />
        <XAxis
          dataKey='date'
          axisLine={false}
          tickLine={false}
          tickFormatter={handleTickFormatterXAxis}
          hide={isMobile}
        />
        <YAxis
          dataKey='value'
          domain={['auto', 'auto']}
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={handleTickFormatterYAxis}
          width={70}
          hide={isMobile}
        />
        <Tooltip content={CustomTooltip} />
        <CartesianGrid opacity={0.05} vertical={false} strokeDasharray='3 3' />
      </AreaChart>
    </ResponsiveContainer>
  );
}

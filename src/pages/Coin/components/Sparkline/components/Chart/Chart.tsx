import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  TooltipContentProps,
} from 'recharts';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { ChartProps } from './interface';
import { formatCurrency } from 'utils/formatters';

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

export default function ChartComponent({ sparkline, days }: ChartProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');

    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);

    handler(mq);

    if ('addEventListener' in mq) {
      mq.addEventListener('change', handler);
    } else {
      // @ts-ignore
      mq.addListener(handler);
    }

    return () => {
      if ('removeEventListener' in mq) {
        mq.removeEventListener('change', handler);
      } else {
        // @ts-ignore
        mq.removeListener(handler);
      }
    };
  }, []);

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipContentProps<ValueType, NameType>) => {
    if (!active || !payload || !payload.length) return null;

    return (
      <div className='bg-[rgba(10,10,15,0.9)] border border-(--brand-blue)/30 rounded-xl px-3 py-2 shadow-[0_0_20px_rgba(0,0,0,0.5)] text-xs backdrop-blur-xl'>
        <div className='text-[0.65rem] text-white/50 mb-1 font-medium uppercase tracking-wide'>
          {format(new Date(label ?? 0), 'eeee, d MMM, yyyy')}
        </div>
        <div className='font-bold text-(--brand-blue) text-base'>
          {formatCurrency(Number(payload[0].value))}
        </div>
      </div>
    );
  };

  const handleTickFormatterXAxis = (value: string) =>
    getTickFormat(days, value);

  const handleTickFormatterYAxis = (value: number) => `$${value}`;

  return (
    <AreaChart data={sparkline} responsive width='100%' height='100%'>
      {/* Gradient Definition */}
      <defs>
        <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='var(--brand-blue)' stopOpacity={0.45} />
          <stop offset='75%' stopColor='var(--brand-blue)' stopOpacity={0.06} />
        </linearGradient>

        {/* Glow Filter */}
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
          r: 5,
          stroke: 'var(--brand-blue)',
          strokeWidth: 2,
          fill: '#000',
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
        tickCount={6}
        tickFormatter={handleTickFormatterYAxis}
        width={60}
        hide={isMobile}
      />

      <Tooltip content={CustomTooltip} />

      <CartesianGrid opacity={0.05} vertical={false} strokeDasharray='3 3' />
    </AreaChart>
  );
}

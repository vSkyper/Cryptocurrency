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

const currencyFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 8,
  style: 'currency',
  currency: 'USD',
});

const formatCurrency = (value: number): string =>
  currencyFormatter.format(value);

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

const TOOLTIP_CLASSES =
  'bg-[var(--bg-tertiary-dark)] border border-white/12 rounded-lg px-3 py-2 ' +
  'shadow-lg text-sm backdrop-blur-sm';

const ACTIVE_DOT_CONFIG = {
  r: 4,
  stroke: 'var(--brand-blue)',
  strokeWidth: 2,
  fill: '#fff',
};

const Y_AXIS_CONFIG = {
  domain: ['auto', 'auto'] as [string, string],
  width: 70,
  tickCount: 8,
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
      <div className={TOOLTIP_CLASSES}>
        <div className='text-sm text-white/70 mb-1'>
          {format(new Date(label ?? 0), 'eeee, d MMM, yyyy')}
        </div>
        <div className='font-medium text-white'>
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
        activeDot={ACTIVE_DOT_CONFIG}
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
        domain={Y_AXIS_CONFIG.domain}
        axisLine={false}
        tickLine={false}
        tickCount={Y_AXIS_CONFIG.tickCount}
        tickFormatter={handleTickFormatterYAxis}
        width={Y_AXIS_CONFIG.width}
        hide={isMobile}
      />

      <Tooltip content={CustomTooltip} />

      <CartesianGrid opacity={0.05} vertical={false} strokeDasharray='3 3' />
    </AreaChart>
  );
}

import { PercentageBadge } from './components';
import { ExtremeValueRowProps } from './interface';
import { format, formatDistance } from 'date-fns';

const ROW_CLASSES =
  'flex justify-between items-center p-4 rounded-xl transition-colors duration-150 ' +
  'hover:bg-[rgba(64,156,255,0.06)] md:hover:bg-[color-mix(in_srgb,var(--brand-blue)_8%,transparent)]';

const DIVIDER_CLASSES =
  'my-2 h-px bg-[linear-gradient(90deg,transparent_0%,color-mix(in_srgb,var(--brand-blue)_30%,transparent)_50%,transparent_100%)]';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 8,
  style: 'currency',
  currency: 'USD',
});

const formatCurrency = (value: number) => currencyFormatter.format(value);

const formatDateWithDistance = (date: string | number | Date) => {
  const dateObj = new Date(date);
  return `${format(dateObj, 'MMM d, y')} (${formatDistance(
    Date.now(),
    dateObj
  )} ago)`;
};

export default function ExtremeValueRow({
  label,
  price,
  percentage,
  date,
}: ExtremeValueRowProps) {
  return (
    <>
      <div className={`${ROW_CLASSES} items-start`}>
        <div className='font-semibold text-white'>{label}</div>
        <div className='text-right'>
          <div className='flex items-center gap-2 justify-end'>
            <div className='font-semibold text-white/80'>
              {formatCurrency(price)}
            </div>
            <PercentageBadge value={percentage} />
          </div>
          <div className='text-xs sm:text-sm text-white/60 mt-1'>
            {formatDateWithDistance(date)}
          </div>
        </div>
      </div>
      <div className={DIVIDER_CLASSES} />
    </>
  );
}

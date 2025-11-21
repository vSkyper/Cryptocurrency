import { PercentageBadge } from './components';
import { ExtremeValueRowProps } from './interface';
import { format, formatDistance } from 'date-fns';
import { formatCurrency } from 'utils/formatters';

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
      <div className='flex flex-col justify-between min-h-20 sm:min-h-[120px] p-4 sm:p-5 rounded-2xl bg-[#0a0a0f]/60 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300'>
        <div className='text-[0.6rem] sm:text-xs font-bold text-white/40 uppercase tracking-wider mb-1 sm:mb-2'>
          {label}
        </div>
        <div className='flex flex-col items-end w-full mt-auto'>
          <div className='flex flex-wrap items-center gap-x-2 gap-y-1 justify-end w-full'>
            <div className='font-bold text-white text-sm sm:text-lg text-right wrap-break-word'>
              {formatCurrency(price)}
            </div>
            <PercentageBadge value={percentage} />
          </div>
          <div className='text-[0.65rem] sm:text-xs font-medium text-white/40 text-right mt-2 leading-tight'>
            {formatDateWithDistance(date)}
          </div>
        </div>
      </div>
      <div className='hidden' />
    </>
  );
}

import { memo, useState, useEffect } from 'react';
import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@mui/icons-material';
import { StatCardProps } from './interface';

function StatCard({ config, toggle }: Omit<StatCardProps, 'isMobile'>) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (toggle) {
      const timer = setTimeout(() => setShow(true), config.timeout);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [toggle, config.timeout]);

  return (
    <div
      className={`
        transition-all duration-100 ease-out
        ${
          show
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4'
        }
      `}
    >
      <div className='flex flex-col justify-center items-center relative overflow-hidden rounded-xl bg-[color-mix(in_srgb,var(--bg-tertiary)_40%,transparent))] backdrop-blur-md p-4 sm:p-5 transition-all duration-300'>
        {/* Title with optional percentage */}
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <h3 className='text-xl sm:text-2xl font-bold text-white'>
              {config.value}
            </h3>
            {config.percentage && (
              <span
                className={`inline-flex items-center gap-0.5 px-3 py-1.5 text-xs font-semibold border rounded-full ${
                  config.percentage.change < 0
                    ? 'bg-[var(--brand-negative)]/10 text-[var(--brand-negative)] border-[var(--brand-negative)]/30'
                    : 'bg-[var(--brand-positive)]/10 text-[var(--brand-positive)] border-[var(--brand-positive)]/30'
                }`}
              >
                {config.percentage.value}
                {config.percentage.change < 0 ? (
                  <TrendingDownIcon sx={{ fontSize: '0.875rem' }} />
                ) : (
                  <TrendingUpIcon sx={{ fontSize: '0.875rem' }} />
                )}
              </span>
            )}
          </div>
        </div>

        {/* Label */}
        <p className='mt-2 text-xs sm:text-sm text-white/50 font-normal'>
          {config.label}
        </p>
      </div>
    </div>
  );
}

export default memo(StatCard);

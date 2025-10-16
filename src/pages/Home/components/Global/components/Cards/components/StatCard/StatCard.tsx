import { useState, useEffect } from 'react';
import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@mui/icons-material';
import { StatCardProps } from './interface';

const CARD_BASE_CLASSES =
  'flex flex-col justify-center items-center relative overflow-hidden rounded-xl ' +
  'bg-[color-mix(in_srgb,var(--bg-tertiary)_40%,transparent)] backdrop-blur-md ' +
  'p-4 sm:p-5 transition-all duration-300';

const BADGE_BASE_CLASSES =
  'inline-flex items-center gap-0.5 px-1.5 py-1 sm:px-3 sm:py-1.5 text-xs ' +
  'font-semibold border rounded-full';

export default function StatCard({
  config,
  toggle,
}: Omit<StatCardProps, 'isMobile'>) {
  const [show, setShow] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (toggle) {
      setIsExiting(false);
      const timer = setTimeout(() => setShow(true), config.timeout);
      return () => clearTimeout(timer);
    } else {
      setIsExiting(true);
      const reverseDelay = 400 - config.timeout;
      const timer = setTimeout(() => setShow(false), reverseDelay);
      return () => clearTimeout(timer);
    }
  }, [toggle, config.timeout]);

  const hasPercentage = !!config.percentage;
  const isNegative = config.percentage ? config.percentage.change < 0 : false;

  const animationClasses = show
    ? 'opacity-100 scale-100 translate-y-0 blur-0'
    : isExiting
    ? 'opacity-0 scale-95 translate-y-4 blur-[2px]'
    : 'opacity-0 scale-90 -translate-y-8 blur-[4px]';

  const badgeColorClasses = isNegative
    ? 'bg-[var(--brand-negative)]/10 text-[var(--brand-negative)] border-[var(--brand-negative)]/30'
    : 'bg-[var(--brand-positive)]/10 text-[var(--brand-positive)] border-[var(--brand-positive)]/30';

  const TrendIcon = isNegative ? TrendingDownIcon : TrendingUpIcon;

  return (
    <div
      className={`transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animationClasses}`}
      style={{
        transitionDelay: show ? `${config.timeout}ms` : '0ms',
      }}
    >
      <div className={CARD_BASE_CLASSES}>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <h3 className='text-xl sm:text-2xl font-bold text-white'>
              {config.value}
            </h3>

            {hasPercentage && config.percentage && (
              <span className={`${BADGE_BASE_CLASSES} ${badgeColorClasses}`}>
                {config.percentage.value}
                <TrendIcon sx={{ fontSize: '0.875rem' }} />
              </span>
            )}
          </div>
        </div>

        <p className='mt-2 text-xs sm:text-sm text-white/50 font-normal'>
          {config.label}
        </p>
      </div>
    </div>
  );
}

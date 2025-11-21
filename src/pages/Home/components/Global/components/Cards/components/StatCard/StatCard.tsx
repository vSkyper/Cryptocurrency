import { useState, useEffect } from 'react';
import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@mui/icons-material';
import { StatCardProps } from './interface';

export default function StatCard({
  config,
  toggle,
  className = '',
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
    ? 'bg-red-500/10 text-red-400 border-red-500/20'
    : 'bg-green-500/10 text-green-400 border-green-500/20';

  const TrendIcon = isNegative ? TrendingDownIcon : TrendingUpIcon;

  return (
    <div
      className={`transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${animationClasses} ${className}`}
      style={{
        transitionDelay: show ? `${config.timeout}ms` : '0ms',
      }}
    >
      <div className='flex flex-col justify-center items-center relative overflow-hidden transition-all duration-300 bg-white/5 backdrop-blur-md rounded-2xl p-3 sm:p-5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] group'>
        <div className='flex flex-col gap-2 w-full items-center relative z-10'>
          <div className='flex items-center justify-center gap-2'>
            {/* Mobile value - shorter */}
            {config.mobileValue && (
              <h3 className='block sm:hidden text-base font-bold text-white text-center wrap-break-word'>
                {config.mobileValue}
              </h3>
            )}
            {/* Desktop value - full */}
            <h3
              className={
                config.mobileValue
                  ? 'hidden sm:block text-xl sm:text-2xl font-bold text-white text-center wrap-break-word tracking-tight drop-shadow-sm'
                  : 'text-xl sm:text-2xl font-bold text-white text-center wrap-break-word tracking-tight drop-shadow-sm'
              }
            >
              {config.value}
            </h3>

            {hasPercentage && config.percentage && (
              <span
                className={`inline-flex items-center gap-0.5 sm:gap-1 text-[0.65rem] sm:text-xs font-bold border rounded-full px-1.5 py-0.5 sm:px-2.5 sm:py-1 backdrop-blur-sm shadow-sm ${badgeColorClasses}`}
              >
                {config.percentage.value}
                <TrendIcon sx={{ fontSize: { xs: '0.7rem', sm: '0.9rem' } }} />
              </span>
            )}
          </div>
        </div>

        <p className='mt-1 text-[0.65rem] sm:text-xs text-white/50 font-bold text-center uppercase tracking-widest group-hover:text-white/80 transition-colors'>
          {config.label}
        </p>
      </div>
    </div>
  );
}

import { useCallback } from 'react';
import { ButtonProps } from './interface';

export default function ButtonComponent(props: ButtonProps) {
  const { days, daysFormatted, setDays, actualDays, mobileDisappear } = props;

  const handleClicked = useCallback(() => {
    setDays(days);
  }, [days, setDays]);

  const isActive = actualDays === days;

  return (
    <button
      type='button'
      onClick={handleClicked}
      className={
        `relative min-w-11 flex items-center justify-center font-bold select-none border border-transparent transition-none md:transition-all px-1 sm:px-2 text-sm tracking-wide h-9 ` +
        `${
          isActive
            ? `rounded-2xl text-black bg-gradient-to-br from-[var(--brand-blue-light)] to-[var(--brand-blue)] md:hover:-translate-y-0.5`
            : `rounded-2xl text-[var(--brand-blue)] hover:text-[var(--brand-blue-light)] bg-transparent md:hover:bg-[color-mix(in_srgb,var(--brand-blue)_10%,transparent)] md:hover:-translate-y-0.5 md:hover:border md:hover:border-[var(--brand-blue)]/80`
        }` +
        ` ${mobileDisappear ? 'hidden sm:inline-flex' : 'inline-flex'}`
      }
    >
      {/* optional subtle inner rounded highlight for active state */}
      {isActive && (
        <span className='absolute inset-0 m-1.5 rounded-xl bg-white/6 pointer-events-none' />
      )}
      <span className='relative z-10'>{daysFormatted}</span>
    </button>
  );
}

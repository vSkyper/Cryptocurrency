import { useCallback } from 'react';
import { ButtonProps } from './interface';

const BASE_BUTTON_CLASSES =
  'relative min-w-11 flex items-center justify-center font-bold select-none ' +
  'border border-transparent transition-none md:transition-all px-1 sm:px-2 ' +
  'text-sm tracking-wide h-9 rounded-2xl';

const ACTIVE_BUTTON_CLASSES =
  'text-black bg-gradient-to-br from-[var(--brand-blue-light)] to-[var(--brand-blue)] ' +
  'md:hover:-translate-y-0.5';

const INACTIVE_BUTTON_CLASSES =
  'text-[var(--brand-blue)] hover:text-[var(--brand-blue-light)] bg-transparent ' +
  'md:hover:bg-[color-mix(in_srgb,var(--brand-blue)_10%,transparent)] ' +
  'md:hover:-translate-y-0.5 md:hover:border md:hover:border-[var(--brand-blue)]/80';

const INNER_HIGHLIGHT_CLASSES =
  'absolute inset-0 m-1.5 rounded-xl bg-white/6 pointer-events-none';

export default function ButtonComponent({
  days,
  daysFormatted,
  setDays,
  actualDays,
  mobileDisappear,
}: ButtonProps) {
  const handleClick = useCallback(() => {
    setDays(days);
  }, [days, setDays]);

  const isActive = actualDays === days;

  const stateClasses = isActive
    ? ACTIVE_BUTTON_CLASSES
    : INACTIVE_BUTTON_CLASSES;
  const visibilityClass = mobileDisappear
    ? 'hidden sm:inline-flex'
    : 'inline-flex';

  return (
    <button
      type='button'
      onClick={handleClick}
      className={`${BASE_BUTTON_CLASSES} ${stateClasses} ${visibilityClass}`}
    >
      {/* Inner Highlight for Active State */}
      {isActive && <span className={INNER_HIGHLIGHT_CLASSES} />}

      <span className='relative z-10'>{daysFormatted}</span>
    </button>
  );
}

import { ButtonProps } from './interface';

export default function ButtonComponent({
  days,
  daysFormatted,
  setDays,
  actualDays,
  mobileDisappear,
}: ButtonProps) {
  const handleClick = () => {
    setDays(days);
  };

  const isActive = actualDays === days;

  const stateClasses = isActive
    ? 'text-black bg-white shadow-md scale-105'
    : 'text-white/40 hover:text-white hover:bg-white/5';
  const visibilityClass = mobileDisappear
    ? 'hidden sm:inline-flex'
    : 'inline-flex';

  return (
    <button
      type='button'
      onClick={handleClick}
      className={`relative min-w-10 sm:min-w-14 flex items-center justify-center font-bold select-none transition-all px-3 py-1.5 text-[0.65rem] sm:text-xs tracking-wide rounded-lg ${stateClasses} ${visibilityClass}`}
    >
      {/* Inner Highlight for Active State */}
      {isActive && <span className='hidden' />}

      <span className='relative z-10'>{daysFormatted}</span>
    </button>
  );
}

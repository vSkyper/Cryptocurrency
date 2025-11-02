import { ButtonProps } from './interface';
import { COIN } from 'styles/styles';

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
    ? COIN.sparkline.button.active
    : COIN.sparkline.button.inactive;
  const visibilityClass = mobileDisappear
    ? 'hidden sm:inline-flex'
    : 'inline-flex';

  return (
    <button
      type='button'
      onClick={handleClick}
      className={`${COIN.sparkline.button.base} ${stateClasses} ${visibilityClass}`}
    >
      {/* Inner Highlight for Active State */}
      {isActive && <span className={COIN.sparkline.button.innerHighlight} />}

      <span className='relative z-10'>{daysFormatted}</span>
    </button>
  );
}

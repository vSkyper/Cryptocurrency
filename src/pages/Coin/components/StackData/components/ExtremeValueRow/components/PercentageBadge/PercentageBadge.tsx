import { PercentageBadgeProps } from './interface';
import { formatPercentage } from 'utils/formatters';
import { BADGE } from 'styles/styles';

export default function PercentageBadge({ value }: PercentageBadgeProps) {
  const isNegative = value < 0;
  const badgeClasses = isNegative ? BADGE.negative : BADGE.positive;

  return (
    <span
      className={`${BADGE.base} ${badgeClasses} px-2 py-0.5 text-xs sm:text-sm`}
    >
      {formatPercentage(value)}
    </span>
  );
}

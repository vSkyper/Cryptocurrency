import { PercentageBadgeProps } from './interface';
import { formatPercentage } from 'utils/formatters';
import { BADGE, COIN } from 'styles/styles';

export default function PercentageBadge({ value }: PercentageBadgeProps) {
  const isNegative = value < 0;
  const badgeClasses = isNegative ? BADGE.negative : BADGE.positive;

  return (
    <span
      className={`${BADGE.base} ${badgeClasses} ${COIN.percentageBadge.base}`}
    >
      {formatPercentage(value)}
    </span>
  );
}

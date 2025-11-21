import { PercentageBadgeProps } from './interface';
import { formatPercentage } from 'utils/formatters';

export default function PercentageBadge({ value }: PercentageBadgeProps) {
  const isNegative = value < 0;
  const badgeClasses = isNegative
    ? 'border-(--brand-negative)/30 bg-(--brand-negative)/10 text-(--brand-negative) shadow-[0_0_10px_rgba(255,0,85,0.1)]'
    : 'border-(--brand-positive)/30 bg-(--brand-positive)/10 text-(--brand-positive) shadow-[0_0_10px_rgba(0,255,157,0.1)]';

  return (
    <span
      className={`text-xs font-semibold rounded-full px-2 py-1 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 border shadow-sm ${badgeClasses} px-2 py-1 text-[0.7rem] sm:px-2.5 sm:text-xs font-bold rounded-lg`}
    >
      {formatPercentage(value)}
    </span>
  );
}

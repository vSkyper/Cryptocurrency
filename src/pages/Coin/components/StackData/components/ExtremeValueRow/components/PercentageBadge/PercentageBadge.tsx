import { PercentageBadgeProps } from './interface';

const PERCENTAGE_BADGE_BASE =
  'inline-flex items-center px-2 py-0.5 rounded-full text-xs sm:text-sm font-semibold';

const POSITIVE_BADGE_CLASSES =
  'text-[var(--brand-positive)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-positive)_20%,transparent)_0%,color-mix(in_srgb,var(--brand-positive)_10%,transparent)_100%)] ' +
  'border border-[color-mix(in_srgb,var(--brand-positive)_30%,transparent)]';

const NEGATIVE_BADGE_CLASSES =
  'text-[var(--brand-negative)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-negative)_20%,transparent)_0%,color-mix(in_srgb,var(--brand-negative)_10%,transparent)_100%)] ' +
  'border border-[color-mix(in_srgb,var(--brand-negative)_30%,transparent)]';

const percentageFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'percent',
});

const formatPercentage = (value: number) =>
  percentageFormatter.format(value / 100);

export default function PercentageBadge({ value }: PercentageBadgeProps) {
  const isNegative = value < 0;
  const badgeClasses = isNegative
    ? NEGATIVE_BADGE_CLASSES
    : POSITIVE_BADGE_CLASSES;

  return (
    <span className={`${PERCENTAGE_BADGE_BASE} ${badgeClasses}`}>
      {formatPercentage(value)}
    </span>
  );
}

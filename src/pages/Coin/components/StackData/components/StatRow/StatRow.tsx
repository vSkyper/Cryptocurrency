import { StatRowProps } from './interface';

const ROW_CLASSES =
  'flex justify-between items-center p-4 rounded-xl transition-colors duration-150 ' +
  'hover:bg-[rgba(64,156,255,0.06)] md:hover:bg-[color-mix(in_srgb,var(--brand-blue)_8%,transparent)]';

const DIVIDER_CLASSES =
  'my-2 h-px bg-[linear-gradient(90deg,transparent_0%,color-mix(in_srgb,var(--brand-blue)_30%,transparent)_50%,transparent_100%)]';

export default function StatRow({
  label,
  value,
  className = '',
}: StatRowProps) {
  return (
    <>
      <div className={`${ROW_CLASSES} ${className}`}>
        <div className='font-semibold text-white'>{label}</div>
        {typeof value === 'string' || typeof value === 'number' ? (
          <div className='font-semibold text-white/80'>{value}</div>
        ) : (
          value
        )}
      </div>
      <div className={DIVIDER_CLASSES} />
    </>
  );
}

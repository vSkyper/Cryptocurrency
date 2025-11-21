import { StatRowProps } from './interface';

export default function StatRow({
  label,
  value,
  className = '',
}: StatRowProps) {
  return (
    <>
      <div
        className={`flex flex-col justify-between min-h-20 sm:min-h-[100px] p-4 sm:p-5 rounded-2xl bg-[#0a0a0f]/60 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 ${className}`}
      >
        <div className='text-[0.6rem] sm:text-xs font-bold text-white/40 uppercase tracking-wider mb-1 sm:mb-2'>
          {label}
        </div>
        {typeof value === 'string' || typeof value === 'number' ? (
          <div className='text-sm sm:text-lg md:text-xl font-bold text-white tracking-tight'>
            {value}
          </div>
        ) : (
          value
        )}
      </div>
      <div className='hidden' />
    </>
  );
}

import { StatRowProps } from './interface';

export default function StatRow({
  label,
  value,
  className = '',
}: StatRowProps) {
  return (
    <>
      <div
        className={`flex flex-col justify-between min-h-20 sm:min-h-[120px] p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 ${className}`}
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

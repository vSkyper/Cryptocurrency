import { ChipLinkProps } from './interface';

export default function ChipLink({
  href,
  children,
  left,
  className = '',
}: ChipLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[0.65rem] sm:text-xs font-bold transition-all duration-300 ease-out relative overflow-hidden backdrop-blur-xl backdrop-saturate-150 group border border-white/10 bg-[#0a0a0f]/60 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 ${className}`}
    >
      {/* Enhanced shine effect */}
      <span className='absolute inset-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-full pointer-events-none' />

      {/* Left icon */}
      <span className='flex items-center justify-center transition-transform duration-300 group-hover:scale-110 text-white/70 group-hover:text-white'>
        {left}
      </span>

      {/* Text */}
      <span className='leading-none font-bold tracking-wide text-white/70 group-hover:text-white transition-colors'>
        {children}
      </span>
    </a>
  );
}

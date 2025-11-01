import { ChipLinkProps } from './interface';

const BASE_CLASSES =
  'inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold ' +
  'transition-all duration-200 ease-out relative overflow-hidden backdrop-blur-sm group';

const HOVER_EFFECTS = 'hover:scale-105 active:scale-100';

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
      className={`${BASE_CLASSES} ${HOVER_EFFECTS} ${className}`}
    >
      {/* Enhanced shine effect */}
      <span className='absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-all duration-700 group-hover:left-full pointer-events-none' />

      {/* Left icon */}
      <span className='flex items-center justify-center transition-transform duration-200 group-hover:scale-110'>
        {left}
      </span>

      {/* Text */}
      <span className='leading-none font-medium'>{children}</span>
    </a>
  );
}

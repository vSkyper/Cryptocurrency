import { ChipLinkProps } from './interface';

const BASE_CLASSES =
  'inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-semibold ' +
  'transition-all duration-200 ease-out relative overflow-hidden backdrop-blur-sm';

const HOVER_EFFECTS =
  'hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0';

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
      {/* Simple shine effect */}
      <span className='absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 group-hover:left-full pointer-events-none' />

      {/* Left icon */}
      <span className='flex items-center justify-center'>{left}</span>

      {/* Text */}
      <span className='leading-none'>{children}</span>
    </a>
  );
}

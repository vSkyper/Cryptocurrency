import { ChipLinkProps } from './interface';

const BASE_CLASSES =
  'inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold ' +
  'transition-transform duration-150 hover:-translate-y-0.5';

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
      className={`${BASE_CLASSES} ${className}`}
    >
      {left}
      <span className='leading-none'>{children}</span>
    </a>
  );
}

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
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-transform duration-150 hover:-translate-y-0.5 ${className}`}
    >
      {left}
      <span className='leading-none'>{children}</span>
    </a>
  );
}

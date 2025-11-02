import { ChipLinkProps } from './interface';
import { COIN } from 'styles/styles';

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
      className={`${COIN.links.chip.base} ${COIN.links.chip.hover} ${className}`}
    >
      {/* Enhanced shine effect */}
      <span className={COIN.links.chip.shineEffect} />

      {/* Left icon */}
      <span className={COIN.links.chip.iconWrapper}>{left}</span>

      {/* Text */}
      <span className={COIN.links.chip.text}>{children}</span>
    </a>
  );
}

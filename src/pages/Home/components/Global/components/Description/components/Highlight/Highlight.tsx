import { HighlightProps } from './interface';
import { HOME } from 'styles/styles';

export default function Highlight({ children, className }: HighlightProps) {
  return (
    <span className={`${HOME.highlight.base} ${className}`}>{children}</span>
  );
}

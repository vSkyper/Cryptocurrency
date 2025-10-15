import { HighlightProps } from './interface';

export default function Highlight({ children, className }: HighlightProps) {
  return <span className={`font-semibold ${className}`}>{children}</span>;
}

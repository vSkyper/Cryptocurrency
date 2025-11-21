import { HighlightProps } from './interface';

export default function Highlight({ children, className }: HighlightProps) {
  return (
    <span
      className={`inline-flex items-center justify-center px-1 py-0 sm:px-1.5 sm:py-0.5 mx-0.5 rounded sm:rounded-md bg-white/5 border border-white/10 font-bold text-[0.7rem] sm:text-base shadow-sm backdrop-blur-sm align-baseline ${className}`}
    >
      {children}
    </span>
  );
}

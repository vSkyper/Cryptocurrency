import { AnimatedSectionProps } from './interface';

export default function AnimatedSection({
  show,
  children,
  className = '',
}: AnimatedSectionProps) {
  const visibilityClasses = show
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-12';

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${visibilityClasses} ${className}`}
    >
      {children}
    </div>
  );
}

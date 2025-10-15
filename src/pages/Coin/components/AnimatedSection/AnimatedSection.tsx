import { AnimatedSectionProps } from './interface';

const ANIMATION_CLASSES =
  'transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]';

export default function AnimatedSection({
  show,
  children,
  className = '',
}: AnimatedSectionProps) {
  const visibilityClasses = show
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-12';

  return (
    <div className={`${ANIMATION_CLASSES} ${visibilityClasses} ${className}`}>
      {children}
    </div>
  );
}

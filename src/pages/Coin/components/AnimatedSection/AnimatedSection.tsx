import { AnimatedSectionProps } from './interface';
import { COIN } from 'styles/styles';

export default function AnimatedSection({
  show,
  children,
  className = '',
}: AnimatedSectionProps) {
  const visibilityClasses = show ? COIN.animated.visible : COIN.animated.hidden;

  return (
    <div className={`${COIN.animated.base} ${visibilityClasses} ${className}`}>
      {children}
    </div>
  );
}

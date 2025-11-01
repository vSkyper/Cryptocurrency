import { useEffect, useState } from 'react';

interface AnimationState {
  [key: string]: boolean;
}

interface AnimationConfig {
  [key: string]: number;
}

/**
 * Custom hook for staggered animations
 * Manages multiple animation states with configurable delays
 *
 * @param config - Object mapping animation keys to their delay in milliseconds
 * @param shouldAnimate - Whether animations should be triggered (typically when data is loaded)
 * @returns Object containing animation states
 *
 * @example
 * const animations = useStaggeredAnimation({
 *   chart: 100,
 *   card: 200,
 *   table: 300,
 * }, !!data);
 *
 * <AnimatedSection show={animations.chart}>
 *   <Chart />
 * </AnimatedSection>
 */
export const useStaggeredAnimation = (
  config: AnimationConfig,
  shouldAnimate: boolean = true
): AnimationState => {
  const initialState = Object.keys(config).reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as AnimationState);

  const [animations, setAnimations] = useState<AnimationState>(initialState);

  useEffect(() => {
    if (!shouldAnimate) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    Object.entries(config).forEach(([key, delay]) => {
      const timer = setTimeout(() => {
        setAnimations((prev) => ({ ...prev, [key]: true }));
      }, delay);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [shouldAnimate, config]);

  return animations;
};

export default useStaggeredAnimation;

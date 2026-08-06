/**
 * Merges multiple class names into a single string, filtering out any falsy values.
 */
export const mergeClasses = (
  ...classes: (string | undefined | null | false)[]
): string => classes.filter(Boolean).join(' ');

/**
 * Returns whether the user prefers reduced motion.
 */
export const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Returns whether the viewport is tablet-sized or smaller.
 */
export const isTabletMode = (): boolean =>
  window.matchMedia('(max-width: 1024px)').matches;

/**
 * Returns whether the primary input supports hover interactions.
 */
export const hasHoverSupport = (): boolean =>
  window.matchMedia('(hover: hover)').matches;

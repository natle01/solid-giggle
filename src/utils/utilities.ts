/**
 * Merges multiple class names into a single string, filtering out any falsy values.
 */
export const mergeClasses = (
  ...classes: (string | undefined | null | false)[]
): string => classes.filter(Boolean).join(' ');

/**
 * Whether the user prefers dark mode when the module loads.
 */
export const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

/**
 * Whether the user prefers reduced motion when the module loads.
 */
export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Whether the viewport is tablet-sized or smaller when the module loads.
 */
export const isTabletMode = window.matchMedia('(max-width: 1024px)').matches;

/**
 * Whether the primary input supports hover when the module loads.
 */
export const hasHoverSupport = window.matchMedia('(hover: hover)').matches;

/**
 * Merges multiple class names into a single string, filtering out any falsy values.
 */
export const mergeClasses = (
  ...classes: (string | undefined | null | false)[]
): string => classes.filter(Boolean).join(' ');

const SPARKLE_KEYFRAMES: Keyframe[] = [
  { '--sparkle-angle': '0deg' },
  { '--sparkle-angle': '180deg' },
  { '--sparkle-angle': '360deg' }
];

const SPARKLE_FADE_KEYFRAMES: Keyframe[] = [
  { ...SPARKLE_KEYFRAMES[0], opacity: 0 },
  { ...SPARKLE_KEYFRAMES[1], opacity: 1 },
  { ...SPARKLE_KEYFRAMES[2], opacity: 0 }
];

/**
 * Animates a sparkle ring pseudo-element in.
 * @param element The element whose ::after ring should animate.
 */
export const animateSparkle = (
  element: HTMLElement,
  options?: KeyframeAnimationOptions & { fade?: boolean }
): Animation => {
  const { fade, ...animationOptions } = options || {};
  return element.animate(fade ? SPARKLE_FADE_KEYFRAMES : SPARKLE_KEYFRAMES, {
    pseudoElement: '::after',
    duration: 1100,
    easing: 'linear',
    iterations: 1,
    fill: fade ? 'both' : undefined,
    ...animationOptions
  });
};

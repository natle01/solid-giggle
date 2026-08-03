import React, { type ComponentPropsWithoutRef } from 'react';
import { mergeClasses } from '../../utils/utilities';
import { animateSparkle } from '../../utils/motion';
import styles from './Sparkle.module.css';

/**
 * Props for the Sparkle component.
 */
export type SparkleProps = ComponentPropsWithoutRef<'span'> & {
  playOnLoad?: boolean;
  options?: Parameters<typeof animateSparkle>[1];
  onAnimationReady?: (animation: Animation) => void;
};

/**
 * A wrapper that provides a rainbow cutout ring surface.
 * @remarks Parent element must have `position: relative` to ensure correct sparkle positioning.
 * @returns A JSX element.
 */
export const Sparkle = ({
  playOnLoad = false,
  options,
  onAnimationReady,
  className,
  ...rest
}: SparkleProps): JSX.Element => {
  const sparkleRef = React.useRef<HTMLSpanElement>(null);

  React.useLayoutEffect(() => {
    if (!sparkleRef.current) return;

    const animation = animateSparkle(sparkleRef.current, options);
    onAnimationReady?.(animation);
    if (!playOnLoad) animation.pause();

    return () => animation.cancel();
  }, [playOnLoad]);

  return (
    <span
      ref={sparkleRef}
      className={mergeClasses(styles.sparkle, className)}
      {...rest}
    />
  );
};

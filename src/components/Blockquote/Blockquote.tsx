import {
  useCallback,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type MouseEvent
} from 'react';

import { useInView } from '../../utils/useInView';
import { mergeClasses, prefersReducedMotion } from '../../utils/utilities';

import styles from './Blockquote.module.css';

export type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'> & {
  options?: KeyframeAnimationOptions;
};

/**
 * Blockquote with shimmer animation when it enters the viewport and on hover.
 * @param options - Animation options for the shimmer effect.
 * @returns A JSX element.
 */
export const Blockquote = ({
  options,
  className,
  onMouseEnter,
  ...rest
}: BlockquoteProps): JSX.Element => {
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const isQuoteInView = useInView(quoteRef, {
    threshold: 1,
    rootMargin: '0px 0px -10% 0px'
  });

  const quoteShimmer = useCallback((): Animation | undefined => {
    const quote = quoteRef.current;
    if (!quote || prefersReducedMotion) return;

    return quote.animate(
      [
        { transform: 'translateX(-100%)', opacity: 1 },
        { transform: 'translateX(100%)', opacity: 1 }
      ],
      {
        pseudoElement: '::after',
        duration: 700,
        easing: 'linear',
        ...options
      }
    );
  }, [options]);

  useEffect(() => {
    if (!isQuoteInView) return;
    const animation = quoteShimmer();
    return () => animation?.cancel();
  }, [quoteShimmer, isQuoteInView]);

  const handleMouseEnter = (event: MouseEvent<HTMLQuoteElement>): void => {
    onMouseEnter?.(event);
    quoteShimmer();
  };

  return (
    <blockquote
      ref={quoteRef}
      className={mergeClasses(styles.blockquote, className)}
      onMouseEnter={handleMouseEnter}
      {...rest}
    />
  );
};

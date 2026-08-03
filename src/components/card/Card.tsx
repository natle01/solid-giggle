import type { ComponentPropsWithoutRef } from 'react';

import { mergeClasses } from '../../utils/utilities';
import styles from './Card.module.css';

/**
 * Props for the CardImage component.
 */
export type CardImageProps = ComponentPropsWithoutRef<'img'> & {
  placeholderLabel?: string;
};

/**
 * A card image with a built-in placeholder fallback.
 * @param src Image URL; renders a placeholder div when empty.
 * @param placeholderLabel Accessible label for the placeholder.
 * @returns A JSX element.
 */
export const CardImage = ({
  src,
  alt = '',
  placeholderLabel = 'Placeholder',
  className,
  ...rest
}: CardImageProps): JSX.Element =>
  src ? (
    <img
      src={src}
      alt={alt}
      className={mergeClasses(styles.cardImage, className)}
      {...rest}
    />
  ) : (
    <div
      className={mergeClasses(styles.placeholderImage, className)}
      role='img'
      aria-label={placeholderLabel}
    >
      Placeholder image
    </div>
  );

/**
 * A reusable body container for card content.
 * @returns A JSX element.
 */
export const CardBody = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<'div'>): JSX.Element => (
  <div className={mergeClasses(styles.cardBody, className)} {...rest}></div>
);

/**
 * Props for the CardHeader component.
 */
export type CardHeaderProps = ComponentPropsWithoutRef<'div'> & {
  ariaLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  subTitle?: string;
};

/**
 * A reusable card header with an optional subtitle.
 * @param ariaLevel Heading level exposed via aria-level.
 * @param subTitle Secondary text rendered below the heading.
 * @returns A JSX element.
 */
export const CardHeader = ({
  children,
  ariaLevel = 4,
  subTitle,
  className,
  ...rest
}: CardHeaderProps): JSX.Element => (
  <div className={mergeClasses(styles.cardHeader, className)} {...rest}>
    <div className={styles.cardTitle} role='heading' aria-level={ariaLevel}>
      {children}
    </div>
    {subTitle ? <p className={styles.cardDescription}>{subTitle}</p> : null}
  </div>
);

/**
 * Props for the Card component.
 */
export type CardProps = ComponentPropsWithoutRef<'article'> & {
  appearance?: 'default' | 'flat';
};

/**
 * A reusable card container.
 * @param appearance Visual variant: 'default' (elevated) or 'flat' (muted background).
 * @returns A JSX element.
 */
export const Card = ({
  appearance = 'default',
  className,
  ...rest
}: CardProps): JSX.Element => (
  <article
    className={mergeClasses(
      styles.card,
      appearance === 'flat' && styles.cardFlat,
      className
    )}
    {...rest}
  ></article>
);

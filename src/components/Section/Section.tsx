import type { ComponentPropsWithoutRef } from 'react';

import { mergeClasses } from '../../utils/utilities';
import styles from './Section.module.css';

/**
 * Props for the Section component.
 */
export type SectionProps = ComponentPropsWithoutRef<'div'>;

/**
 * A shared section wrapper.
 * @returns A JSX element.
 */
export const Section = ({ className, ...rest }: SectionProps): JSX.Element => (
  <div className={mergeClasses(styles.sectionContainer, className)} {...rest} />
);

/**
 * Props for the SectionHeading component.
 */
export type SectionHeadingProps = ComponentPropsWithoutRef<'div'> & {
  ariaLevel?: 1 | 2 | 3 | 4 | 5 | 6;
};

/**
 * A shared heading for sections.
 * @param ariaLevel Heading level exposed via aria-level (default 3).
 * @returns A JSX element.
 */
export const SectionHeader = ({
  ariaLevel = 3,
  className,
  ...rest
}: SectionHeadingProps): JSX.Element => (
  <div
    className={mergeClasses(styles.sectionHeading, className)}
    role='heading'
    aria-level={ariaLevel}
    {...rest}
  />
);

import type { ComponentPropsWithoutRef } from 'react';

import { mergeClasses } from '../../utils/utilities';
import styles from './Container.module.css';

/**
 * Props for the Container component.
 */
export type ContainerProps = ComponentPropsWithoutRef<'div'> & {
  appearance?: 'default' | 'transparent' | 'darker';
};

/**
 * A shared container wrapper.
 * @returns A React.ReactElement  element.
 */
export const Container = ({
  appearance = 'default',
  className,
  ...rest
}: ContainerProps): React.ReactElement => (
  <div
    className={mergeClasses(
      styles.container,
      styles[`container--${appearance}`],
      className
    )}
    {...rest}
  />
);

/**
 * Props for the ContainerHeading component.
 */
export type ContainerHeadingProps = ComponentPropsWithoutRef<'div'> & {
  ariaLevel?: 1 | 2 | 3 | 4 | 5 | 6;
};

/**
 * A shared heading for containers.
 * @param ariaLevel Heading level exposed via aria-level (default 3).
 * @returns A React.ReactElement  element.
 */
export const ContainerHeader = ({
  ariaLevel = 3,
  className,
  ...rest
}: ContainerHeadingProps): React.ReactElement => (
  <div
    className={mergeClasses(styles.containerHeading, className)}
    role='heading'
    aria-level={ariaLevel}
    {...rest}
  />
);

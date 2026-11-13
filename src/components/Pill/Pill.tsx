import type { ComponentPropsWithoutRef } from 'react';

import { mergeClasses } from '../../utils/utilities';
import styles from './Pill.module.css';

/**
 * Props for the Pill component.
 */
export type PillProps = ComponentPropsWithoutRef<'span'> & {
  icon?: string;
  compact?: boolean;
  variant?: 'default' | 'transparent'
};

/**
 * A pill label with an optional icon.
 * @param label Visible text.
 * @param icon Optional emoji or character shown before the label.
 * @param compact Reduced padding variant.
 * @returns A React.ReactElement  element.
 */
export const Pill = ({
  icon,
  compact = false,
  variant,
  className,
  children,
  ...rest
}: PillProps): React.ReactElement => (
  <span
    className={mergeClasses(styles.pill, compact && styles.compact, variant && styles[variant], className)}
    {...rest}
  >
    {icon}
    {children}
  </span>
);

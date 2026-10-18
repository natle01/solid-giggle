import type { ComponentPropsWithoutRef } from 'react';

import { mergeClasses } from '../../utils/utilities';
import styles from './Pill.module.css';

/**
 * Props for the Pill component.
 */
export type PillProps = ComponentPropsWithoutRef<'span'> & {
  label: string;
  icon?: string;
  compact?: boolean;
};

/**
 * A pill label with an optional icon.
 * @param label Visible text.
 * @param icon Optional emoji or character shown before the label.
 * @param compact Reduced padding variant.
 * @returns A React.ReactElement  element.
 */
export const Pill = ({
  label,
  icon,
  compact = false,
  className,
  children,
  ...rest
}: PillProps): React.ReactElement => (
  <span
    className={mergeClasses(styles.pill, compact && styles.compact, className)}
    {...rest}
  >
    {icon ? <span className={styles.pillIcon}>{icon}</span> : null}
    <span>{label}</span>
    {children}
  </span>
);

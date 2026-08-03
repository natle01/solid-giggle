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
 * @returns A JSX element.
 */
export const Pill = ({
  label,
  icon,
  compact = false,
  className,
  ...rest
}: PillProps): JSX.Element => (
  <span
    className={mergeClasses(styles.pill, compact && styles.compact, className)}
    {...rest}
  >
    {icon ? <span className={styles.pillIcon}>{icon}</span> : null}
    <span>{label}</span>
  </span>
);

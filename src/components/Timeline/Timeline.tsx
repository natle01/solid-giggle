import styles from './Timeline.module.css';

/**
 * Content displayed for one timeline entry.
 */
export type TimelineItem = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
};

/**
 * Props for the Timeline component.
 */
export type TimelineProps = {
  items: TimelineItem[];
};

/**
 * Displays a vertical timeline of entries.
 * @param items Entries rendered in the timeline.
 * @returns A JSX element.
 */
const Timeline = ({ items }: TimelineProps): JSX.Element => (
  <div className={styles.timeline}>
    {items.map(({ title, subtitle, date, description }) => (
      <div key={subtitle} className={styles.entry}>
        <div className={styles.timelineHeader}>
          <h4>{title}</h4>
          <span>{date}</span>
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
        <p>{description}</p>
      </div>
    ))}
  </div>
);

export default Timeline;

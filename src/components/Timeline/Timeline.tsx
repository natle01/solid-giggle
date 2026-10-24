import { useRef } from 'react';
import ReactMarkdown from 'react-markdown';

import { useInView } from '../../utils/useInView';
import { mergeClasses } from '../../utils/utilities';

import styles from './Timeline.module.css';

/**
 * Content displayed for one timeline entry.
 */
export type TimelineItem = {
  company: string;
  date: string;
  description: string;
  index?: number;
  location: string;
  role: string;
};

/**
 * Props for the Timeline component.
 */
export type TimelineProps = {
  items: TimelineItem[];
};

const TimelineEntry = (props: TimelineItem): React.ReactElement => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, {
    rootMargin: '0px 0px -15% 0px'
  });

  return (
    <>
      <div className={styles.meta}>
        <span>{props.date}</span>
        <span>{props.location}</span>
      </div>
      <div
        className={mergeClasses(styles.marker, props.index === 0 && styles.markerFirst)}
        aria-hidden='true'
      />
      <div
        ref={contentRef}
        className={mergeClasses(styles.content, isInView && styles.inView)}
      >
        <h4 className={styles.company}>{props.company}</h4>
        <p className={styles.title}>{props.role}</p>
        <ReactMarkdown>{props.description}</ReactMarkdown>
      </div>
    </>
  );
};

/**
 * Displays a vertical timeline of entries.
 * @param items Entries rendered in the timeline.
 * @returns A React.ReactElement  element.
 */
const Timeline = ({ items }: TimelineProps): React.ReactElement => (
  <div className={styles.timeline}>
    {items.map((item, index) => (
      <TimelineEntry key={index} index={index} {...item} />
    ))}
  </div>
);

export default Timeline;

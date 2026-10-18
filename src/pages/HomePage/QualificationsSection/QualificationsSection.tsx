import { Section, SectionHeader } from '../../../components/Section/Section';
import styles from './QualificationsSection.module.css';

type Experience = {
  degree: string;
  school: string;
  period: string;
  description: string;
};

const QUALIFICATIONS: Experience[] = [
  {
    degree: 'Bachelor: Games and Interactive Entertainment (Animation)',
    school: 'Queensland University of Technology (QUT), Australia, QLD',
    period: 'Graduated 2013',
    description:
      'Completed formal training in interactive media and animation, with a foundation in creative and technical production workflows.'
  }
];

/**
 * A section displaying my educational qualifications.
 * @returns A React.ReactElement  element.
 */
const QualificationsSection = (): React.ReactElement => (
  <Section appearance='transparent'>
    <SectionHeader>Qualifications</SectionHeader>
    {QUALIFICATIONS.map(({ degree, school, period, description }) => (
      <article className={styles.entry} key={school}>
        <div className={styles.meta}>
          <div className={styles.symbol} aria-hidden='true'>
            🎓
          </div>
          <span className={styles.period}>{period}</span>
        </div>
        <div className={styles.content}>
          <h4 className={styles.degree}>{degree}</h4>
          <p className={styles.school}>{school}</p>
          <p>{description}</p>
        </div>
      </article>
    ))}
  </Section>
);

export default QualificationsSection;

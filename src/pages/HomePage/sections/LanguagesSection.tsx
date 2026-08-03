import { Pill } from '../../../components/Pill/Pill';
import { Section, SectionHeader } from '../../../components/Section/Section';
import { languages } from '../../Projects/Projects';
import styles from '../HomePage.module.css';

/**
 * A section displaying the programming languages I am proficient in.
 * @returns A JSX element.
 */
const LanguagesSection = (): JSX.Element => (
  <Section className={styles.languages}>
    <SectionHeader>Languages 👾</SectionHeader>
    <div className={styles.tagContainer}>
      {Object.values(languages).map((item) => (
        <Pill key={item.label} {...item} />
      ))}
    </div>
  </Section>
);

export default LanguagesSection;

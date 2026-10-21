import { Blockquote } from '../../../components/Blockquote/Blockquote';
import { Section } from '../../../components/Section/Section';
import styles from './ProfileSection.module.css';

import AustraliaLogo from '../../../icons/australia-flag.svg';
import CanadaLogo from '../../../icons/canada-flag.svg';
import NewZealandLogo from '../../../icons/new-zealand-flag.svg';

const TAGS: string[] = [
  'UX',
  'mentor',
  'design systems',
  'responsive UI',
  'performance',
  'reusability',
  'scalability',
  'cross-browser',
  'motion',
  'a11y',
  'WCAG 2.1',
  'high contrast',
  'a18n',
  'test automation',
  'agile',
  'scrum'
];

const PlaceholderImage = (): React.ReactElement => (
  <div
    className={styles.placeholderImage}
    role='img'
    aria-label='Profile placeholder image'
  >
    Placeholder image
  </div>
);

/**
 * A section displaying my information, skills, and a brief bio.
 * @returns A React.ReactElement  element.
 */
const ProfileSection = (): React.ReactElement => {
  return (
    <Section className={styles.profile}>
      <p className={styles.jobTitle}>User Experience Engineer</p>
      <h2 className={styles.name}>Natalie Wainwright</h2>
      <div className={styles.flagRow} aria-label='Work rights countries'>
        <img src={CanadaLogo} title='Canada' />
        <img src={AustraliaLogo} title='Australia' />
        <img src={NewZealandLogo} title='New Zealand' />
      </div>
      <div className={styles.tagContainer}>
        {TAGS.map((tag) => (
          <span key={tag} className={styles.hashTag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.details}>
        <PlaceholderImage />
        <div>
          <p>
            Making user friendly software that's beautiful, accessible, and
            performs well is my passion.
          </p>
          <Blockquote>
            "User friendly" is subjective. Diverse opinions matter.
          </Blockquote>
          <p>
            This is something I often remind myself when users interact with our
            product in ways we thought were self-explanatory.
          </p>
          <p>
            This is my favourite part of the process as it's where the vision
            meets reality, where usability improves through iteration and
            refinement all for the benefit of the user. I love being a part of
            shaping software for our users.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ProfileSection;

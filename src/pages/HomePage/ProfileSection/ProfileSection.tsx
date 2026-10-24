import { Blockquote } from '../../../components/Blockquote/Blockquote';
import { Container } from '../../../components/Container/Container';
import { prefersDarkMode } from '../../../utils/utilities';

import styles from './ProfileSection.module.css';

import AustraliaLogo from '../../../icons/australia-flag.svg';
import CanadaLogo from '../../../icons/canada-flag.svg';
import NewZealandLogo from '../../../icons/new-zealand-flag.svg';
import DarkImage from './profile-image-dark.jpg';
import LightImage from './profile-image-light.jpg';

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

/**
 * A section displaying my information, skills, and a brief bio.
 * @returns A React.ReactElement  element.
 */
const ProfileSection = (): React.ReactElement => {
  return (
    <Container className={styles.profile}>
      <p className={styles.jobTitle}>User Experience Engineer</p>
      <h2 className={styles.name}>Natalie Wainwright</h2>
      <div className={styles.flagRow} aria-label='Work rights in Canada, Australia, New Zealand'>
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
      <Blockquote>
        10+ years crafting intuitive software that is beautiful, accessible, and performant.
      </Blockquote>
      <div className={styles.details}>
        <img className={styles.webImage} src={prefersDarkMode ? DarkImage : LightImage} alt='' />
        <div>
          <p>
            I'm a software engineer focused on perfecting the client-side experience.
          </p>
          <p>
            My background is seasoned with design, core infrastructure, and back-end development, allowing me to bridge the gap between design and engineering.
          </p>
          <p>
            I bring these disciplines together to build seamless, production-ready applications from the ground up.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ProfileSection;

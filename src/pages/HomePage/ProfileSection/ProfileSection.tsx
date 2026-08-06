import React from 'react';
import { Section } from '../../../components/Section/Section';
import { useInView } from '../../../utils/useInView';
import styles from './ProfileSection.module.css';

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

const PlaceholderImage = (): JSX.Element => (
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
 * @returns A JSX element.
 */
const ProfileSection = (): JSX.Element => {
  const quoteRef = React.useRef<HTMLQuoteElement>(null);
  const isQuoteInView = useInView(quoteRef, { threshold: 0.75 });

  return (
    <Section className={styles.profile}>
      <p className={styles.jobTitle}>User Experience Engineer</p>
      <h2 className={styles.name}>Natalie Wainwright</h2>
      <div className={styles.flagRow} aria-label='Work rights countries'>
        <span
          className='fi fi-au'
          aria-label='Australian flag'
          title='Australia'
        />
        <span
          className='fi fi-nz'
          aria-label='New Zealand flag'
          title='New Zealand'
        />
        <span className='fi fi-ca' aria-label='Canadian flag' title='Canada' />
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
            <blockquote
              ref={quoteRef}
              className={isQuoteInView ? 'in-view' : undefined}
            >
              "User friendly" is subjective.
            </blockquote>
            This is something I often remind myself when users interact with our
            product in ways we thought were selfexplainatory.
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

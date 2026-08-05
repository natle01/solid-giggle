import { useCallback, useRef } from 'react';
import { Pill } from '../../../components/Pill/Pill';
import { Section, SectionHeader } from '../../../components/Section/Section';
import { Sparkle } from '../../../components/Sparkle/Sparkle';
import { techStack } from '../../Projects/Projects';
import type { TechnologyItem } from '../../Projects/Projects';

import styles from './TechStackSection.module.css';

const TechStackPill = (item: TechnologyItem): JSX.Element => {
  const sparkleAnimation = useRef<Animation | null>(null);

  const handleAnimationReady = useCallback((animation: Animation): void => {
    sparkleAnimation.current = animation;
  }, []);

  const handleMouseEnter = useCallback((): void => {
    sparkleAnimation.current?.play();
  }, []);

  return (
    <Pill
      className={styles.techStackPill}
      onMouseEnter={handleMouseEnter}
      {...item}
    >
      <Sparkle
        options={{ fade: true }}
        onAnimationReady={handleAnimationReady}
      />
    </Pill>
  );
};

/**
 * A section displaying the technology stack I use.
 * @returns A JSX element.
 */
const TechStackSection = (): JSX.Element => (
  <Section appearance='transparent' className={styles.techStack}>
    <SectionHeader>Tech Stack 👾</SectionHeader>
    <div className={styles.pillContainer}>
      {Object.values(techStack).map((item) => (
        <TechStackPill key={item.label} {...item} />
      ))}
    </div>
  </Section>
);

export default TechStackSection;

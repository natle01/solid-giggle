import { useCallback, useRef } from 'react';
import { Pill } from '../../../components/Pill/Pill';
import { Section, SectionHeader } from '../../../components/Section/Section';
import { Sparkle } from '../../../components/Sparkle/Sparkle';
import { languages } from '../../Projects/Projects';
import type { LanguageItem } from '../../Projects/Projects';

import styles from '../HomePage.module.css';

const LanguagePill = (item: LanguageItem): JSX.Element => {
  const sparkleAnimation = useRef<Animation | null>(null);

  const handleAnimationReady = useCallback((animation: Animation): void => {
    sparkleAnimation.current = animation;
  }, []);

  const handleMouseEnter = useCallback((): void => {
    sparkleAnimation.current?.play();
  }, []);

  return (
    <Pill
      className={styles.languagePill}
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
 * A section displaying the programming languages I am proficient in.
 * @returns A JSX element.
 */
const LanguagesSection = (): JSX.Element => (
  <Section appearance='transparent' className={styles.languages}>
    <SectionHeader>Languages 👾</SectionHeader>
    <div className={styles.tagContainer}>
      {Object.values(languages).map((item) => (
        <LanguagePill key={item.label} {...item} />
      ))}
    </div>
  </Section>
);

export default LanguagesSection;

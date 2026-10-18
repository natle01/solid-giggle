import { useCallback, useEffect, useRef, type CSSProperties } from 'react';
import { Pill } from '../../../components/Pill/Pill';
import { Section, SectionHeader } from '../../../components/Section/Section';
import { Sparkle } from '../../../components/Sparkle/Sparkle';
import { useInView } from '../../../utils/useInView';
import { hasHoverSupport, mergeClasses } from '../../../utils/utilities';
import { techStack } from '../../Projects/Projects';
import type { TechnologyItem } from '../../Projects/Projects';

import styles from './TechStackSection.module.css';

const ANIMATION_DELAY = 150;

const TechStackPill = (
  props: TechnologyItem & {
    index: number;
    isContainerInView: boolean;
    supportsHover: boolean;
  }
): React.ReactElement => {
  const { index, isContainerInView, supportsHover, ...item } = props;
  const animationDelay = index * ANIMATION_DELAY;
  const sparkleAnimation = useRef<Animation | null>(null);

  const handleAnimationReady = useCallback((animation: Animation): void => {
    sparkleAnimation.current = animation;
  }, []);

  const handleMouseEnter = useCallback((): void => {
    sparkleAnimation.current?.play();
  }, []);

  useEffect(() => {
    if (!isContainerInView) return;
    const timeout = window.setTimeout(
      () => sparkleAnimation.current?.play(),
      animationDelay
    );
    return () => window.clearTimeout(timeout);
  }, [isContainerInView]);

  return (
    <Pill
      className={mergeClasses(
        styles.techStackPill,
        isContainerInView && styles.inView
      )}
      style={{ '--animation-delay': `${animationDelay}ms` } as CSSProperties}
      onMouseEnter={supportsHover ? handleMouseEnter : undefined}
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
 * @returns A React.ReactElement  element.
 */
const TechStackSection = (): React.ReactElement => {
  const pillContainerRef = useRef<HTMLDivElement>(null);
  const supportsHover = hasHoverSupport;
  const isPillContainerInView = useInView(pillContainerRef, {
    threshold: 0.3,
    rootMargin: '0px 0px -20% 0px'
  });

  return (
    <Section appearance='transparent' className={styles.techStack}>
      <SectionHeader>Tech Stack 👾</SectionHeader>
      <div ref={pillContainerRef} className={styles.pillContainer}>
        {Object.values(techStack).map((item, index) => (
          <TechStackPill
            key={item.label}
            index={index}
            isContainerInView={isPillContainerInView}
            supportsHover={supportsHover}
            {...item}
          />
        ))}
      </div>
    </Section>
  );
};

export default TechStackSection;

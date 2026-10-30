import { useCallback, useEffect, useRef, type CSSProperties } from 'react';
import { Pill } from '../../../components/Pill/Pill';
import { Container, ContainerHeader } from '../../../components/Container/Container';
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
  const { index, isContainerInView, supportsHover, children, ...item } = props;
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
      variant='transparent'
      className={mergeClasses(styles.techStackPill, isContainerInView && styles.inView)}
      style={{ '--animation-delay': `${animationDelay}ms` } as CSSProperties}
      onMouseEnter={supportsHover ? handleMouseEnter : undefined}
      title={item.label}
      {...item}
    >
      {children}
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
  const ariaLabel = `${Object.values(techStack).map(item => item.label).join(', ')}`;

  return (
    <Container appearance='transparent' className={styles.techStack}>
      <ContainerHeader>Tech Stack 👾</ContainerHeader>
      <div ref={pillContainerRef} className={styles.pillContainer} aria-label={ariaLabel}>
        {Object.values(techStack).map((item, index) => (
          <TechStackPill
            key={item.label}
            aria-hidden
            index={index}
            isContainerInView={isPillContainerInView}
            supportsHover={supportsHover}
            {...item}
          />
        ))}
      </div>
    </Container>
  );
};

export default TechStackSection;

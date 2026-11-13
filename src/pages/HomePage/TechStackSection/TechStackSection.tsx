import { ReactNode, useCallback, useEffect, useRef, type CSSProperties } from 'react';
import {
  AngularIcon,
  GitHubIcon,
  Html5Icon,
  JavaScriptIcon,
  NodeJSIcon,
  NpmIcon,
  ReactIcon,
  SassIcon,
  StorybookIcon,
  TypeScriptIcon,
  ViteIcon
} from '@natle01/laughing-kookaburra';

import { Pill } from '../../../components/Pill/Pill';
import { Container, ContainerHeading } from '../../../components/Container/Container';
import { Sparkle } from '../../../components/Sparkle/Sparkle';
import { useInView } from '../../../utils/useInView';
import { hasHoverSupport, mergeClasses } from '../../../utils/utilities';

import styles from './TechStackSection.module.css';

const ANIMATION_DELAY = 150;

/**
 * Tech stack and languages used.
 */
export type Technology = keyof typeof techStack;

/**
 * Technology stack item.
 */
export type TechnologyItem = {
  label?: string;
  icon?: string;
  children?: ReactNode;
};

/**
 * A record of tech stack with their labels and icons.
 */
export const techStack: Record<string, TechnologyItem> = {
  azureDevOps: { label: 'Azure DevOps', icon: '☁️' },
  typescript: { label: 'TypeScript', children: <TypeScriptIcon /> },
  javascript: { label: 'JavaScript', children: <JavaScriptIcon /> },
  html: { label: 'HTML5', children: <Html5Icon /> },
  css: { label: 'CSS', icon: '🌈' },
  'c#': { label: 'C#', icon: '🧩' },
  sass: { label: 'SASS', children: <SassIcon /> },
  react: { label: 'React', children: <ReactIcon /> },
  angular: { label: 'Angular', children: <AngularIcon /> },
  nodejs: { label: 'NodeJS', children: <NodeJSIcon /> },
  jest: { label: 'Jest', icon: '🧪' },
  mocha: { label: 'Mocha/Chai', icon: '🧪' },
  npm: { label: 'npm', children: <NpmIcon /> },
  git: { label: 'Git', children: <GitHubIcon /> },
  fluent: { label: 'Fluent', icon: '🎨' },
  storybook: { label: 'Storybook', children: <StorybookIcon /> },
  figma: { label: 'Figma', icon: '👨‍🎨' },
  vite: { label: 'Vite', children: <ViteIcon /> },
  webpack: { label: 'Webpack', icon: '🏗️' }
};

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
 * @returns A React.ReactElement.
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
    <Container appearance='transparent' className={styles.techStack} role='section'>
      <ContainerHeading>Tech Stack <span aria-hidden>👾</span></ContainerHeading>
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

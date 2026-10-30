import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  AngularIcon,
  Carousel,
  CarouselProps,
  GitHubIcon,
  Html5Icon,
  JavaScriptIcon,
  Link,
  NodeJSIcon,
  NpmIcon,
  ReactIcon,
  SassIcon,
  StorybookIcon,
  TypeScriptIcon
} from '@natle01/laughing-kookaburra';

import { CodeProject } from '../../icons/icons';
import { mergeClasses } from '../../utils/utilities';
import { Pill } from '../../components/Pill/Pill';
import { Container, ContainerHeader } from '../../components/Container/Container';
import { projectDetails as designSystemProject } from './DesignSystem/Project';
// import { projectDetails as motionGraphicsProject } from './MotionGraphics/Project';
// import { projectDetails as recipeGeneratorProject } from './RecipeGenerator/Project';
import { projectDetails as sharePointDSProject } from './SharePointDS/Project';
import { projectDetails as vivaAmplifyProject } from './VivaAmplify/Project';

import styles from './Projects.module.css';

export const PROJECTS: ProjectDetails[] = [
  sharePointDSProject,
  vivaAmplifyProject,
  designSystemProject,
  // motionGraphicsProject,
  // recipeGeneratorProject
];

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
 * Project details.
 */
export type ProjectDetails = Pick<CarouselProps, 'items'> & {
  title: string;
  blurb: string;
  description: string;
  tech: Technology[];
  logo?: string;
  isNDA?: boolean;
  url: string;
  urlLabel: string;
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
  sass: { label: 'SASS', children: <SassIcon style={{ color: '#CF649A' }} /> },
  react: { label: 'React', children: <ReactIcon /> },
  angular: { label: 'Angular', children: <AngularIcon /> },
  nodejs: { label: 'NodeJS', children: <NodeJSIcon /> },
  jest: { label: 'Jest', icon: '🧪' },
  mocha: { label: 'Mocha/Chai', icon: '🧪' },
  selenium: { label: 'Selenium WebDriver', icon: '🧪' },
  sql: { label: 'SQL', icon: '👾' },
  git: { label: 'Git', children: <GitHubIcon /> },
  figma: { label: 'Figma', icon: '👨‍🎨' },
  fluent: { label: 'Fluent', icon: '🎨' },
  storybook: { label: 'Storybook', children: <StorybookIcon /> },
  npm: { label: 'npm', children: <NpmIcon /> },
  webAPIAnimations: { label: 'Web API animations', icon: '🌐' },
};

const Project = ({ details }: { details: ProjectDetails; }): React.ReactElement => (
  <article className={styles.project}>
    <Carousel
      items={details.items}
      variant='float'
      objectFit='contain'
      className={styles.carousel}
    />
    <div className={styles.projectContent}>
      <div className={styles.projectHeader}>
        {details.logo && <img src={details.logo} alt='' />}
        <span className={styles.projectTitle}>{details.title}</span>
        {details.isNDA && <Pill className={styles.ndaNotice} title='Code under non-disclosure'>🔐 Under NDA</Pill>}
      </div>
      {details.blurb && <span>{details.blurb}</span>}
      My responsibilities:
      <ReactMarkdown children={details.description} />
      <div className={styles.projectTech}>
        {details.tech.map((technology) => (
          <Pill key={technology} {...techStack[technology]} />
        ))}
      </div>
      <Link
        className={styles.projectLink}
        href={details.url}
        target='_blank'
        rel='noreferrer'
      >
        {details.urlLabel}<span aria-hidden='true'> ↗</span>
      </Link>
    </div>
  </article>
);

/**
 * A section displaying my recent projects.
 * @returns A React.ReactElement  element.
 */
const Projects = () => {
  return (
    <section className={mergeClasses(styles.projectsPage, 'fullWidth')}>
      <Container appearance='transparent' className={styles.projectsHeader}>
        <div className={styles.caption}>A few things I've been making</div>
        <ContainerHeader ariaLevel={2} className={styles.projectsHeading}>Projects</ContainerHeader>
        <div>
          Work and personal projects. Everything built with thoughtful details and passion.
        </div>
        <CodeProject className={styles.projectCount} />
      </Container>
      {PROJECTS.map((project) => (
        <Project key={project.title} details={project} />
      ))}
    </section>
  );
};

export default Projects;

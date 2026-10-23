import ReactMarkdown from 'react-markdown';
import { Carousel, CarouselProps, Link } from '@natle01/laughing-kookaburra';

import { CodeProject } from '../../icons/icons';
import { mergeClasses } from '../../utils/utilities';
import { Pill } from '../../components/Pill/Pill';
import { Section, SectionHeader } from '../../components/Section/Section';
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
  label: string;
  icon: string;
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
  azure: { label: 'Azure/Jira', icon: '☁️' },
  typescript: { label: 'TypeScript', icon: '🧩' },
  javascript: { label: 'JavaScript', icon: '✨' },
  html: { label: 'HTML', icon: '🌐' },
  css: { label: 'CSS', icon: '🌈' },
  'c#': { label: 'C#', icon: '🧩' },
  sass: { label: 'SASS', icon: '🌈' },
  react: { label: 'React', icon: '⚛️' },
  angular: { label: 'Angular', icon: '🅰️' },
  nodejs: { label: 'Node.js', icon: '🟢' },
  jest: { label: 'Jest', icon: '🧪' },
  mocha: { label: 'Mocha/Chai', icon: '🧪' },
  selenium: { label: 'Selenium WebDriver', icon: '🧪' },
  sql: { label: 'SQL', icon: '🧩' },
  git: { label: 'Git', icon: '☁️' },
  figma: { label: 'Figma', icon: '🎨' },
  fluent: { label: 'Fluent', icon: '🎨' },
  storybook: { label: 'Storybook', icon: '📚' },
  webAPIAnimations: { label: 'Web API animations', icon: '🌐' },
};

const Project = ({ details }: { details: ProjectDetails; }): React.ReactElement => (
  <article className={styles.project}>
    <Carousel
      items={details.items}
      variant='quiet'
      objectFit='contain'
      className={styles.carousel}
    />
    <div className={styles.projectContent}>
      <div className={styles.projectHeader}>
        {details.logo && <img src={details.logo} alt='' />}
        <span className={styles.projectTitle}>{details.title}</span>
        {details.isNDA && <Pill label='🔐 Under NDA' compact className={styles.ndaNotice} title='Code under non-disclosure' />}
      </div>
      {details.blurb && <span>{details.blurb}</span>}
      My responsibilities:
      <ReactMarkdown children={details.description} />
      <div className={styles.projectTech}>
        {details.tech.map((technology) => (
          <Pill key={technology} {...techStack[technology]} compact />
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
      <Section appearance='transparent' className={styles.projectsHeader}>
        <div className={styles.caption}>A few things I've been making</div>
        <SectionHeader ariaLevel={2} className={styles.projectsHeading}>Projects</SectionHeader>
        <div className={styles.subText}>
          Work and personal projects. Everything built with thoughtful details and passion.
        </div>
        <CodeProject className={styles.projectCount} />
      </Section>
      {PROJECTS.map((project) => (
        <Project key={project.title} details={project} />
      ))}
    </section>
  );
};

export default Projects;

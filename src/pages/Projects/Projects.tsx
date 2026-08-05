/**
 * Tech stack and languages used.
 */
export type Technology =
  | 'angular'
  | 'azure'
  | 'css'
  | 'figma'
  | 'git'
  | 'html'
  | 'javascript'
  | 'jest'
  | 'mocha'
  | 'nodejs'
  | 'react'
  | 'sass'
  | 'selenium'
  | 'storybook'
  | 'typescript';

/**
 * Technology stack item.
 */
export type TechnologyItem = {
  label: string;
  icon: string;
};

/**
 * A record of tech stack with their labels and icons.
 */
export const techStack: Record<Technology, TechnologyItem> = {
  typescript: { label: 'TypeScript', icon: '🧩' },
  javascript: { label: 'JavaScript', icon: '✨' },
  html: { label: 'HTML', icon: '🌐' },
  css: { label: 'CSS', icon: '🌈' },
  sass: { label: 'LESS/SASS', icon: '🌈' },
  react: { label: 'React', icon: '⚛️' },
  angular: { label: 'Angular', icon: '🅰️' },
  nodejs: { label: 'Node.js', icon: '🟢' },
  jest: { label: 'Jest', icon: '🧪' },
  mocha: { label: 'Mocha/Chai', icon: '🧪' },
  selenium: { label: 'Selenium WebDriver', icon: '🧪' },
  git: { label: 'Git', icon: '☁️' },
  azure: { label: 'Azure/Jira', icon: '☁️' },
  figma: { label: 'Figma', icon: '🎨' },
  storybook: { label: 'Storybook', icon: '📚' }
};

/**
 * A section displaying my recent projects.
 * @returns A JSX element.
 */
const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <p>Here are some of my recent projects.</p>
    </>
  );
};

export default Projects;

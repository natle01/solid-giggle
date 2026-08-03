/**
 * Programming languages.
 */
export type Language =
  | 'angular'
  | 'css'
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
 * Programming language item.
 */
export type LanguageItem = {
  label: string;
  icon: string;
};

/**
 * A record of programming languages and their corresponding labels and icons.
 */
export const languages: Record<Language, LanguageItem> = {
  typescript: { label: 'TypeScript', icon: '🧩' },
  javascript: { label: 'JavaScript', icon: '✨' },
  html: { label: 'HTML', icon: '🌐' },
  css: { label: 'CSS', icon: '🎨' },
  sass: { label: 'LESS/SASS', icon: '🎨' },
  angular: { label: 'Angular', icon: '🅰️' },
  react: { label: 'React', icon: '⚛️' },
  nodejs: { label: 'Node.js', icon: '🟢' },
  jest: { label: 'Jest', icon: '🧪' },
  mocha: { label: 'Mocha/Chai', icon: '☕' },
  selenium: { label: 'Selenium WebDriver', icon: '🕸️' },
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

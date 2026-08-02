import styles from './Projects.module.css';

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

export type LanguageItem = {
  label: string;
  icon: string;
};

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

type LanguagePillProps = {
  item: LanguageItem;
  compact?: boolean;
};

export const LanguagePill = ({ item, compact = false }: LanguagePillProps) => (
  <span className={`${styles.pill} ${compact ? styles.compact : ''}`}>
    {item.icon ? <span className={styles.pillIcon}>{item.icon}</span> : null}
    <span>{item.label}</span>
  </span>
);

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <p>Here are some of my recent projects.</p>
    </section>
  );
};

export default Projects;

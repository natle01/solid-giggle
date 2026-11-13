import ReactMarkdown from 'react-markdown';
import { Link as RouterLink } from 'react-router-dom';
import { Carousel, Link } from '@natle01/laughing-kookaburra';

import { CodeProject } from '../../icons/icons';
import { mergeClasses } from '../../utils/utilities';
import { Pill } from '../../components/Pill/Pill';
import { Container, ContainerHeading } from '../../components/Container/Container';
import { ProjectDetails, PROJECTS } from '../examples/examples';
import { techStack } from '../HomePage/TechStackSection/TechStackSection';

import styles from './ProjectsPage.module.css';

const Project = ({ details }: { details: ProjectDetails; }): React.ReactElement => (
  <article className={styles.project}>
    <Carousel
      items={details.items}
      objectFit='contain'
      className={styles.carousel}
    />
    <div className={styles.projectContent}>
      <div className={styles.projectHeader}>
        {details.logo && <img src={details.logo} alt='' />}
        <RouterLink className={styles.projectTitle} to={details.ext}>
          {details.title}
        </RouterLink>
        {details.isNDA && <Pill className={styles.ndaNotice} title='Code under non-disclosure'>🔐 Under NDA</Pill>}
      </div>
      {details.blurb && <span>{details.blurb}</span>}
      My responsibilities:
      <ReactMarkdown>{details.description}</ReactMarkdown>
      <div className={styles.projectTech}>
        {details.tech.map((technology) => (
          <Pill key={technology} {...techStack[technology]} />
        ))}
      </div>
      <Link
        className={styles.externalLink}
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
const ProjectsPage = () => {
  return (
    <section className={mergeClasses(styles.projectsPage, 'fullWidth')} role='region'>
      <Container appearance='transparent' className={styles.projectsHeader} role='div'>
        <div className={styles.caption}>What I've worked on</div>
        <ContainerHeading ariaLevel={2} className={styles.projectsHeading}>Projects</ContainerHeading>
        <p>
          Work and personal projects. Everything built with thoughtful details and passion.
        </p>
        <CodeProject className={styles.codeIcon} />
      </Container>
      {PROJECTS.map((project) => (
        <Project key={project.title} details={project} />
      ))}
    </section>
  );
};

export default ProjectsPage;

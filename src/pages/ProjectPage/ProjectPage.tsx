import ReactMarkdown from 'react-markdown';
import { Navigate, useParams } from 'react-router-dom';
import { Carousel, Link } from '@natle01/laughing-kookaburra';

import { Pill } from '../../components/Pill/Pill';
import { Container, ContainerHeading } from '../../components/Container/Container';
import { PAGES } from '../../routes';
import { PROJECTS } from '../examples/examples';
import { techStack } from '../HomePage/TechStackSection/TechStackSection';

import projectsStyles from '../ProjectsPage/ProjectsPage.module.css';
import styles from './ProjectPage.module.css';

const ProjectPage = (): React.ReactElement => {
  const PROJECTS_PATH: string = PAGES.projects.path ?? '';
  const { slug } = useParams();
  const project = PROJECTS.find((item) => item.ext === slug);

  if (!project) {
    return <Navigate to={PROJECTS_PATH} replace />;
  }

  return (
    <Container appearance='transparent' className={styles.projectPage} role='region'>
      <div className={styles.projectHeader}>
        <div className={projectsStyles.caption}>Project</div>
        {project.logo && <img className={styles.logo} src={project.logo} alt='' />}
        <ContainerHeading ariaLevel={2} className={projectsStyles.projectsHeading}>
          {project.title}
        </ContainerHeading>
        {project.isNDA && (
          <Pill className={projectsStyles.ndaNotice} title='Code under non-disclosure'>
            🔐 Under NDA
          </Pill>
        )}
      </div>

      <p>{project.blurb}</p>

      <div className={styles.projectTech}>
        {project.tech.map((technology) => (
          <Pill key={technology} {...techStack[technology]} variant='transparent' className={styles.techPill} />
        ))}
      </div>

      <Carousel className={styles.carousel} items={project.items} objectFit='contain' />

      <div className={styles.containerFullWidth}>
        <h3>My responsibilities</h3>
        <ReactMarkdown>{project.description}</ReactMarkdown>
      </div>

      <p>
        See more: &nbsp;
        <Link
          className={projectsStyles.externalLink}
          href={project.url}
          target='_blank'
          rel='noreferrer'
        >
          {project.urlLabel}<span aria-hidden='true'> ↗</span>
        </Link>
      </p>
    </Container>
  );
};

export default ProjectPage;

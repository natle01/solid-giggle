import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Carousel } from '@natle01/laughing-kookaburra';
import { Card, CardBody, CardHeader } from '../../components/Card/Card';
import { Pill } from '../../components/Pill/Pill';

import { CodeProject } from '../../icons/icons';
import { mergeClasses } from '../../utils/utilities';
import { Container, ContainerHeading } from '../../components/Container/Container';
import { ProjectDetails, PROJECTS } from '../examples/examples';
import { techStack } from '../HomePage/TechStackSection/TechStackSection';

import styles from './ProjectsPage.module.css';

const Project = ({ details }: { details: ProjectDetails; }): React.ReactElement => {
  const PILLS_ARIA_LABEL = `Technologies: ${details.tech.map(technology => techStack[technology].label).join(', ')}`
  return (
    <Card className={styles.card}>
      <Carousel
        className={styles.carousel}
        items={details.items}
        variant='float'
        objectFit='contain'
        backdrop
      />
      <CardBody className={styles.cardBody}>
        <div className={styles.projectHeader}>
          {details.logo && <img src={details.logo} alt='' />}
          <CardHeader ariaLevel={3} className={styles.projectTitle}>
            <RouterLink to={details.ext}>
              {details.title}
            </RouterLink>
          </CardHeader>
        </div>
        {details.blurb && <p>{details.blurb}</p>}
        <div
          className={styles.projectTech}
          role='group'
          aria-label={PILLS_ARIA_LABEL}
        >
          {details.tech.map((technology) => (
            <Pill key={technology} aria-hidden='true' variant='transparent' className={styles.cardPill} {...techStack[technology]} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

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
      <div className={styles.projectGrid}>
        {PROJECTS.map((project) => (
          <Project key={project.title} details={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

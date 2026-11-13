import React from 'react';
import { generatePath, Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  CardImage
} from '../../../components/Card/Card';
import { Pill } from '../../../components/Pill/Pill';
import { Container, ContainerHeading } from '../../../components/Container/Container';
import { PAGES } from '../../../routes';
import { type ProjectDetails, PROJECTS } from '../../examples/examples';
import { techStack } from '../TechStackSection/TechStackSection';

import styles from './ProjectsSection.module.css';

const ProjectCard = (props: ProjectDetails): React.ReactElement => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  const handleClick = (): void => linkRef.current?.click();
  const src = props.items.find(item => !item.isVideo)?.src as string | undefined;
  const ariaLabel = `${props.tech.map(item => item).join(', ')}`;

  return (
    <Card onClick={handleClick}>
      <CardImage src={src} alt={props.title} />
      <CardBody>
        <CardHeader ariaLevel={4}>
          <RouterLink
            ref={linkRef}
            to={generatePath(PAGES.project.path, { slug: props.ext })}
            onClick={(event) => event.stopPropagation()}
          >
            {props.title}
          </RouterLink>
        </CardHeader>
        <p>{props.blurb}</p>
        <div className={styles.cardPills} aria-label={ariaLabel}>
          {props.tech.map((item) => (
            <Pill
              key={item}
              aria-hidden
              variant='transparent'
              className={styles.cardPill}
              title={techStack[item].label}
              {...techStack[item]}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

/**
 * A section displaying a list of projects i've worked on.
 * @returns A React.ReactElement.
 */
const ProjectsSection = (): React.ReactElement => (
  <Container appearance='transparent' role='section'>
    <div className={styles.headingWrapper}>
      <ContainerHeading className={styles.projectHeading}>Projects <span aria-hidden>🛠️</span></ContainerHeading>
      <RouterLink to={PAGES.projects.path}>View all</RouterLink>
    </div>
    <div className={styles.projectCards}>
      {PROJECTS.slice(0, 3).map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </Container>
);

export default ProjectsSection;

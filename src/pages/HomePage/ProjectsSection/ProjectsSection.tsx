import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  CardImage
} from '../../../components/Card/Card';
import { Pill } from '../../../components/Pill/Pill';
import { Container, ContainerHeader } from '../../../components/Container/Container';
import { type ProjectDetails, PROJECTS, techStack } from '../../Projects/Projects';

import styles from './ProjectsSection.module.css';

const ProjectCard = (props: ProjectDetails): React.ReactElement => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  const handleClick = (): void => linkRef.current?.click();
  const src = props.items.find(item => !item.isVideo)?.src as string | undefined;

  return (
    <Card onClick={handleClick}>
      <CardImage src={src} alt={props.title} />
      <CardBody>
        <CardHeader ariaLevel={4}>
          <a
            ref={linkRef}
            href={props.url}
            target='_blank'
            rel='noreferrer'
            onClick={(event) => event.stopPropagation()}
          >
            {props.title}
          </a>
        </CardHeader>
        <p>{props.blurb}</p>
        <div className={styles.cardPills}>
          {props.tech.map((item) => (
            <Pill key={item} {...techStack[item]} compact />
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
  <Container appearance='transparent'>
    <ContainerHeader className={styles.projectHeading}>
      Projects 🛠️ <Link to='/Projects'>View all</Link>
    </ContainerHeader>
    <div className={styles.projectCards}>
      {PROJECTS.slice(0, 3).map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </Container>
);

export default ProjectsSection;

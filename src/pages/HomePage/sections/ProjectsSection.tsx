import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  CardImage
} from '../../../components/card/Card';
import { Pill } from '../../../components/Pill/Pill';
import { Section, SectionHeader } from '../../../components/Section/Section';
import { languages } from '../../Projects/Projects';
import type { Language } from '../../Projects/Projects';

import styles from '../HomePage.module.css';

type Project = {
  title: string;
  url: string;
  image: string;
  description: string;
  tech: Language[];
};

const PROJECTS: Project[] = [
  {
    title: 'Recipe Generator',
    url: '',
    image: '',
    description: 'TBD.',
    tech: ['typescript', 'react', 'css']
  },
  {
    title: 'Design System Library',
    url: '',
    image: '',
    description: 'TBD.',
    tech: ['typescript', 'react', 'css']
  },
  {
    title: 'Motion Graphics Portfolio',
    url: '',
    image: '',
    description: 'TBD',
    tech: ['typescript', 'react', 'css']
  }
];

const ProjectCard = (props: Project): JSX.Element => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  const handleClick = (): void => linkRef.current?.click();

  return (
    <Card onClick={handleClick}>
      <CardImage src={props.image} alt={props.title} />
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
        <p>{props.description}</p>
        <div className={styles.cardPills}>
          {props.tech.map((item) => (
            <Pill key={item} {...languages[item]} compact />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

/**
 * A section displaying a list of projects i've worked on.
 * @returns A JSX element.
 */
const ProjectsSection = (): JSX.Element => (
  <Section>
    <SectionHeader className={styles.projectHeading}>
      Projects 🛠️ <Link to='/Projects'>View all</Link>
    </SectionHeader>
    <div className={styles.projectCards}>
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </Section>
);

export default ProjectsSection;

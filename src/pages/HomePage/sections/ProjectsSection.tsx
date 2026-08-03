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
    description:
      'A recipe generator that helps users discover and create new dishes based on available ingredients.',
    tech: ['typescript', 'react', 'css']
  },
  {
    title: 'Design System Library',
    url: '',
    image: '',
    description:
      'A library of reusable design system components for building consistent and scalable user interfaces.',
    tech: ['typescript', 'react', 'css']
  },
  {
    title: 'Motion Graphics Portfolio',
    url: '',
    image: '',
    description:
      'A portfolio showcasing motion graphics projects and animations.',
    tech: ['typescript', 'react', 'css']
  }
];

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
        <Card key={project.title}>
          <CardImage src={project.image} alt={project.title} />
          <CardBody>
            <CardHeader ariaLevel={4}>
              <a href={project.url} target='_blank' rel='noreferrer'>
                {project.title}
              </a>
            </CardHeader>
            <p>{project.description}</p>
            <div className={styles.cardPills}>
              {project.tech.map((item) => (
                <Pill key={item} {...languages[item]} compact />
              ))}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
);

export default ProjectsSection;

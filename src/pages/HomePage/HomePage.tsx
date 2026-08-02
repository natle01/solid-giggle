import { LanguagePill, languages } from '../Projects.tx/Projects';
import type { Language } from '../Projects.tx/Projects';
import { Link } from 'react-router-dom';

import styles from './HomePage.module.css';

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
    url: 'https://github.com/natle01',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
    description:
      'A recipe generator that helps users discover and create new dishes based on available ingredients.',
    tech: ['typescript', 'react', 'css']
  },
  {
    title: 'Design System Library',
    url: 'https://github.com/natle01',
    image:
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=80',
    description:
      'A library of reusable design system components for building consistent and scalable user interfaces.',
    tech: ['typescript', 'react', 'css']
  },
  {
    title: 'Motion Graphics Portfolio',
    url: 'https://github.com/natle01',
    image:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80',
    description:
      'A portfolio showcasing motion graphics projects and animations.',
    tech: ['typescript', 'react', 'css']
  }
];

type WorkExperience = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

const NAME_TAGS = [
  'UX',
  'user focus',
  'design systems',
  'responsive UI',
  'performance',
  'reusability',
  'scalability',
  'cross-browser',
  'motion',
  'a11y',
  'WCAG 2.1',
  'high contrast',
  'a18n',
  'test automation',
  'agile',
  'scrum'
];

const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: 'User Experience Engineer II',
    company: 'Microsoft, Canada, BC',
    period: '2021 - Present',
    summary:
      'Designing and building accessible front-end experiences with strong usability, performance, and cross-team collaboration.'
  },
  {
    role: 'Backpacking ✈️🧳(Various Jobs)',
    company: 'Canada, New Zealand',
    period: '2019 - 2020',
    summary:
      'Worked across varied roles while traveling, building adaptability and strong communication across different cultures, communities, and people.'
  },
  {
    role: 'Front End Software Engineer II',
    company: 'CSG International, Australia, QLD',
    period: '2014 - 2018',
    summary:
      'Delivered front-end solutions for enterprise products with a focus on maintainable UI architecture and reliable user interactions.'
  }
];

const TECHNICAL_QUALIFICATIONS: WorkExperience[] = [
  {
    role: 'Bachelor: Games and Interactive Entertainment (Animation)',
    company: 'Queensland University of Technology(QUT), Australia, QLD',
    period: 'Graduated 2013',
    summary:
      'Completed formal training in interactive media and animation, with a foundation in creative and technical production workflows.'
  }
];

const ProjectCard = (props: Project): JSX.Element => {
  const { title, url, image, description, tech } = props;
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardBody}>
        <h4 className={styles.cardTitle}>
          <a href={url} target='_blank' rel='noreferrer'>
            {title}
          </a>
        </h4>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardPills}>
          {tech.map((item) => (
            <LanguagePill key={item} item={languages[item]} compact />
          ))}
        </div>
      </div>
    </article>
  );
};

const WorkExperienceCard = (props: WorkExperience): JSX.Element => {
  const { role, company, period, summary } = props;
  return (
    <article className={styles.card}>
      <div className={styles.experienceHeader}>
        <h4 className={styles.cardTitle}>{role}</h4>
        <p className={styles.cardDescription}>{period}</p>
      </div>
      <p>{company}</p>
      <p className={styles.cardDescription}>{summary}</p>
    </article>
  );
};

const HomePage = (): JSX.Element => (
  <section className={styles.page}>
    <div className={`${styles.sectionContainer} ${styles.profile}`}>
      <p className={styles.jobTitle}>User Experience Engineer</p>
      <h2 className={styles.name}>Natalie Wainwright</h2>
      <div className={styles.tagContainer}>
        {NAME_TAGS.map((tag) => (
          <span key={tag} className={styles.hashTag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.details}>
        <div
          className={styles.profileImagePlaceholder}
          role='img'
          aria-label='Profile placeholder image'
        >
          Placeholder image
        </div>
        <div>
          <p>
            I am passionate about building user-focused software with a strong
            emphasis on accessibility and performance.
          </p>
          <p>I have open work rights in Australia, New Zealand, and Canada.</p>
          <p>
            Outside of work, I enjoy hiking, paddleboarding, snowboarding, and
            spending time in my garden.
          </p>
        </div>
      </div>
    </div>

    <div className={`${styles.sectionContainer} ${styles.languages}`}>
      <h3 className={styles.sectionHeading}>Languages 👾</h3>
      <div className={styles.tagContainer}>
        {Object.values(languages).map((item) => (
          <LanguagePill key={item.label} item={item} />
        ))}
      </div>
    </div>

    <div className={`${styles.sectionContainer} ${styles.projects}`}>
      <h3 className={styles.sectionHeading}>
        Projects 🛠️ <Link to='/Projects'>View all</Link>
      </h3>
      <div className={styles.projectCards}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>

    <div className={`${styles.sectionContainer} ${styles.experience}`}>
      <h3 className={styles.sectionHeading}>Work Experience 🖥️</h3>
      {WORK_EXPERIENCE.map((experience) => (
        <WorkExperienceCard
          key={`${experience.role}-${experience.company}`}
          {...experience}
        />
      ))}
    </div>

    <div className={`${styles.sectionContainer} ${styles.experience}`}>
      <h3 className={styles.sectionHeading}>Technical Qualifications 🎓</h3>
      {TECHNICAL_QUALIFICATIONS.map((qualification) => (
        <WorkExperienceCard
          key={`${qualification.role}-${qualification.company}`}
          {...qualification}
        />
      ))}
    </div>
  </section>
);

export default HomePage;

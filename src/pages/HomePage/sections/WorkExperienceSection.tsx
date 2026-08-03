import { Card, CardBody, CardHeader } from '../../../components/card/Card';
import { Section, SectionHeader } from '../../../components/Section/Section';

type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

const WORK_EXPERIENCE: Experience[] = [
  {
    role: 'User Experience Engineer II',
    company: 'Microsoft, Canada, BC',
    period: '2021 - Present',
    summary: 'TBD'
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
    summary: 'TBD'
  }
];

/**
 * A section displaying my work experience.
 * @returns A JSX element.
 */
const WorkExperienceSection = (): JSX.Element => (
  <Section>
    <SectionHeader>Work Experience 🖥️</SectionHeader>
    {WORK_EXPERIENCE.map(({ role, company, period, summary }) => (
      <Card key={company} appearance='flat'>
        <CardBody>
          <CardHeader ariaLevel={4} subTitle={period}>
            {role}
          </CardHeader>
          <p>{company}</p>
          <p>{summary}</p>
        </CardBody>
      </Card>
    ))}
  </Section>
);

export default WorkExperienceSection;

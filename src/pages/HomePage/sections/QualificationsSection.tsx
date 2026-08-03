import { Card, CardBody, CardHeader } from '../../../components/card/Card';
import { Section, SectionHeader } from '../../../components/Section/Section';

type Experience = {
  degree: string;
  school: string;
  period: string;
  summary: string;
};

const QUALIFICATIONS: Experience[] = [
  {
    degree: 'Bachelor: Games and Interactive Entertainment (Animation)',
    school: 'Queensland University of Technology (QUT), Australia, QLD',
    period: 'Graduated 2013',
    summary:
      'Completed formal training in interactive media and animation, with a foundation in creative and technical production workflows.'
  }
];

/**
 * A section displaying my educational qualifications.
 * @returns A JSX element.
 */
const QualificationsSection = (): JSX.Element => (
  <Section>
    <SectionHeader>Qualifications 🎓</SectionHeader>
    {QUALIFICATIONS.map(({ degree, school, period, summary }) => (
      <Card key={school} appearance='flat'>
        <CardBody>
          <CardHeader ariaLevel={4} subTitle={period}>
            {degree}
          </CardHeader>
          <p>{school}</p>
          <p>{summary}</p>
        </CardBody>
      </Card>
    ))}
  </Section>
);

export default QualificationsSection;

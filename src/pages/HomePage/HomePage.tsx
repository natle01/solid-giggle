import LanguagesSection from './sections/LanguagesSection';
import ProfileSection from './sections/ProfileSection';
import ProjectsSection from './sections/ProjectsSection';
import QualificationsSection from './sections/QualificationsSection';
import WorkExperienceSection from './sections/WorkExperienceSection';

/**
 * The main homepage component that aggregates all sections.
 * @returns A JSX element.
 */
const HomePage = (): JSX.Element => (
  <>
    <ProfileSection />
    <LanguagesSection />
    <ProjectsSection />
    <WorkExperienceSection />
    <QualificationsSection />
  </>
);

export default HomePage;

import { Link, LinkedInIcon } from '@natle01/laughing-kookaburra';
import { Pill } from '../../components/Pill/Pill';
import { Container, ContainerHeader } from '../../components/Container/Container';
import styles from './ContactPage.module.css';

const LOCATION = 'Vancouver, BC, Canada';

function ContactPage() {
  return (
    <>
      <Container>
        <p
          className={styles.subtitle}
          aria-label={`Current location ${location}`}
        >
          📍 {LOCATION}
        </p>
        <ContainerHeader ariaLevel={2} className={styles.contactHeading}>
          Contact
        </ContainerHeader>
        <p className={styles.subtitle}>Let's connect</p>
        <span>Feel free to reach out and connect.</span>
      </Container>

      <div className={styles.infoGrid}>
        <Container>
          <ContainerHeader ariaLevel={3}>Reach me at</ContainerHeader>
          <p className={styles.contactLinkLine}>
            <LinkedInIcon style={{ fontSize: '1.3em' }} />
            <Link
              href='https://www.linkedin.com/in/natalie-wainwright/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn/natalie-wainwright
            </Link>
          </p>
        </Container>

        <Container>
          <ContainerHeader ariaLevel={3}>Availability</ContainerHeader>
          <div className={styles.pillRow}>
            {['Open to work', 'Full-time', 'Hybrid', 'Remote'].map((label) => (
              <Pill key={label} compact>{label}</Pill>
            ))}
          </div>
          <p>I have working rights in Australia, Canada, and New Zealand.</p>
        </Container>
      </div>
    </>
  );
}

export default ContactPage;

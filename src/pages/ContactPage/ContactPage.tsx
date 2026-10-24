import { Pill } from '../../components/Pill/Pill';
import { Container, ContainerHeader } from '../../components/Container/Container';
import styles from './ContactPage.module.css';

const location = 'Vancouver, BC, Canada';

function ContactPage() {
  return (
    <>
      <Container>
        <p
          className={styles.subtitle}
          aria-label={`Current location ${location}`}
        >
          📍 {location}
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
            <a
              href='https://www.linkedin.com/in/natalie-wainwright/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </p>
        </Container>

        <Container>
          <ContainerHeader ariaLevel={3}>Availability</ContainerHeader>
          <div className={styles.pillRow}>
            {['Open to work', 'Full-time', 'Hybrid', 'Remote'].map((label) => (
              <Pill key={label} label={label} compact />
            ))}
          </div>
          <p>I have working rights in Australia, Canada, and New Zealand.</p>
        </Container>
      </div>
    </>
  );
}

export default ContactPage;

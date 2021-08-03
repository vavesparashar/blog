

import useSite from 'hooks/use-site';

import SocialIcons from 'components/SocialIcons';

import Section from 'components/Section';
import Container from 'components/Container';
import FormSignupNewsletter from 'components/FormSignupNewsletter';

import styles from './Footer.module.scss';

const Footer = () => {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  return (
    <div className={styles.footer}>
      
      <Section>
        <Container className={styles.footerEmailSignup}>
          <p>Get free content and updates straight to your inbox!</p>
          <p className={styles.emoji}>🙌 ✉️ 🙌</p>
          <FormSignupNewsletter className={styles.footerEmailSignupForm} />
        </Container>
      </Section>

      <footer>
        <Section>
          <Container className={styles.footerPrimary} role="contentinfo">
            <SocialIcons className={styles.footerSocial} />

            <ul className={styles.footerLinks}>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a>All Posts</a>
                </Link>
              </li>
              <li>
                <a href="/assets/colby-fayock-front-end-development-web-design-resume.pdf">Resume</a>
              </li>
              <li>
                <Link href="/">
                  <a>&copy; {title}</a>
                </Link>
              </li>
            </ul>
          </Container>
        </Section>
      </footer>

      <div hidden className="h-card sr-only">
        <a className="p-name u-url" href="https://marketingbaba.in" rel="me">
          Vivek Vardhan
        </a>
        <img className="u-photo" src="https://www.colbyfayock.com/colby-fayock-bite-world.jpg" alt="Vivek Vardhan" />
        <p className="p-note">
          A digital marketer's journal
        </p>
      </div>
    </div>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'gatsby';

import SocialIcons from './social-icons';

// import image_resume from '../../static/assets/colby-fayock-front-end-development-web-design-resume.pdf';

const Footer = () => {
  return (
    <div className="footer">
      <Section>
        <Container className={styles.footerEmailSignup}>
          <p>Get free content and updates straight to your inbox!</p>
          <p className={styles.emoji}>🙌 ✉️ 🙌</p>
          <FormSignupNewsletter className={styles.footerEmailSignupForm} />
        </Container>
      </Section>

            <footer className="container footer-primary" role="contentinfo">

        <div className="content">

          <div className="row">

            <div className="footer-social">
              <SocialIcons />
            </div>

            <div className="twelvecol footer-links align-center">

              <ul className="flat-top">
                <li>
                  <Link to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/all-posts">
                    All Posts
                  </Link>
                </li>
                
                <li>
                  <Link to="/">
                    &copy;Pixels
                  </Link>
                </li>
              </ul>

            </div>

          </div>

        </div>

      </footer>
    </div>
  );
};

export default Footer;
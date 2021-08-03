import React from 'react';
import { Link } from 'gatsby';
import EmailSignup from 'components/EmailSignup';

import SocialIcons from './social-icons';

// import image_resume from '../../static/assets/colby-fayock-front-end-development-web-design-resume.pdf';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-email-signup">
        <div className="content">
          <div className="row">
            <p>
              Get daily quotes in your email inbox!
            </p>
            <p className="emoji">
              🙌 ✉️ 🙌
            </p>
            <EmailSignup />
          </div>
        </div>
      </div>

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
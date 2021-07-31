import React from 'react';
import { Link } from 'gatsby';

import SocialIcons from './social-icons';

// import image_resume from '../../static/assets/colby-fayock-front-end-development-web-design-resume.pdf';

const Footer = () => {
  return (
    <div className="footer">

      <div className="container footer-secondary">

        <div className="content">

        <script src="https://f.convertkit.com/ckjs/ck.5.js"/>

<form action="https://app.convertkit.com/forms/2487118/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="2487118" data-uid="c8250d039d" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Please check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:false,&quot;url&quot;:&quot;https://convertkit.com?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800">

<div class="formkit-background" style="opacity: 1;"></div><div data-style="minimal"><div class="formkit-header" data-element="header"><h2>Join pixels</h2></div><div class="formkit-subheader" data-element="subheader" ><p>One email per week discussing marketing, business &amp; human psychology</p></div><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="false" class="seva-fields formkit-fields"><div class="formkit-field">

<input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email" /></div>

<button data-element="submit" class="formkit-submit formkit-submit" ><div class="formkit-spinner"><div></div><div></div><div></div></div><span class="">Subscribe</span></button></div><div class="formkit-guarantee" data-element="guarantee" ><p>​</p></div></div>

</form>
          <div className="row"> 
          
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
                    &copy;Inspire.Me
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
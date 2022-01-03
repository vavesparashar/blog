import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/header';
import Footer from 'components/footer';
import 'assets/scss/main.scss';

import img_favicon_png from 'assets/images/favicon.png';
import img_touchicon_png from 'assets/images/touchicon.png';

const helmet_settings = {
    title: 'Learnings',
    meta: [
        {
            name: 'description',
            content: 'Understanding Internet, Business and human behaviour'
        },
        {
            property: 'og:title',
            content: 'Learnings',
        },
        {
            property: 'og:description',
            content: 'Understanding Internet, Business and human behaviour',
        },
        {
            property: 'og:url',
            content: 'url',
        },
        {
            property: 'og:site_name',
            content: 'Learnings',
        },
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: img_favicon_png,
        },
        {
            rel: 'apple-touch-icon-precomposed',
            type: 'image/png',
            href: img_touchicon_png,
        },
    ],
};

const TemplateWrapper = ({children, location}) => {

    return (
        <div>

            <Helmet {...helmet_settings} />

            <Header location={location} />

            <div id="main" role="main">
                { children }
            </div>

            <Footer />

        </div>
    );

}

TemplateWrapper.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
}

export default TemplateWrapper;

import React from 'react';

import {
    FaTwitter,
    FaDribbble,
    FaGithub,
    FaInstagram,
    FaMedium
} from 'react-icons/fa';

import { FiMail } from 'react-icons/fi';






const SocialIconsList = ({links}) => {

    if ( !Array.isArray(links) ) return null;

    const link_items = links.map((item, index) => {
        return (
            <li key={`SocialIconsList-${index}`} className={`social-icons-${item.title.toLowerCase()}`}>
                <a href={item.url}>
                    { item.icon }
                    <span className="ir">{ item.title }</span>
                </a>
            </li>
        );
    });

    return (
        <div>
            { link_items }
        </div>
    )

}

const SocialIcons = () => {

    const social_links = [
        {
            title: 'Twitter',
            url: 'http://twitter.com/mktingbaba',
            icon: <FaTwitter />,
        },
        //{
          //  title: 'Medium',
            //url: 'https://medium.com/',
            //icon: <FaMedium />,
        //},
       // {
         //   title: 'Instagram',
           // url: 'https://www.instagram.com/vavesparashar/',
            //icon: <FaInstagram />,
       // },
        //{
          //  title: 'GitHub',
            //url: 'http://github.com/',
            //icon: <FaGithub />,
        //},
        //{
          //  title: 'Dribbble',
            //url: 'http://dribbble.com/',
            //icon: <FaDribbble />,
        //},
        {
            title: 'Email',
            url: 'mailto:namaste@marketingbaba.in',
            icon: <FiMail />,
        },
    ];

    return (
        <ul className="social-icons">
            <SocialIconsList links={social_links} />
        </ul>
    );

}

export default SocialIcons;
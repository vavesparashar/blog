import React from 'react';
import { Link } from 'gatsby';

const name = 'Marketing Baba';

const HeaderLogo = ({path}) => {
  const isHome = path === '/';
  return (
    <div className="header-logo">
      { isHome && (
        <h1 className="h1">
          <Link to="/">{ name }</Link>
          <span className="tagline">
            A Digital Marketer's Journal
          </span>
        </h1>
      )}
      { !isHome && (
        <span className="h1">
          <Link to="/">{ name }</Link>
        </span>
      )}
    </div>
  );
}

export default HeaderLogo;
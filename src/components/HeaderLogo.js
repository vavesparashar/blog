import React from 'react';
import { Link } from 'gatsby';

const name = '0.type';

const HeaderLogo = ({path}) => {
  const isHome = path === '/';
  return (
    <div className="header-logo">
      { isHome && (
        <h1 className="h1">
          <Link to="/">{ name }</Link>
          <span className="tagline">
          Internet, business and human behavior
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
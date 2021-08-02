import React from 'react';
import { Link } from 'gatsby';

const name = 'Pixels';

const HeaderLogo = ({path}) => {
  const isHome = path === '/';
  return (
    <div className="header-logo">
      { isHome && (
        <h1 className="h1">
          <Link to="/">{ name }</Link>
          <span className="tagline">
          A data-driven project for understanding Internet, business and human behavior by Vivek Vardhan
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
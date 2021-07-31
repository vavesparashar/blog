import React from 'react';
import { Link } from 'gatsby';

const name = 'Inspire.Me';

const HeaderLogo = ({path}) => {
  const isHome = path === '/';
  return (
    <div className="header-logo">
      { isHome && (
        <h1 className="h1">
          <Link to="/">{ name }</Link>
          <span className="tagline">
            In search of incredible by Vivek Vardhan
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
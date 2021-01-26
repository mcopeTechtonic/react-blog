import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="container">
        <h1>
          <Link to="/">Full-Stack CRUD Blog</Link>
        </h1>
        <ul>
          <li>
            <NavLink
              to="/"
              isActive={() => location.pathname === '/' || location.pathname === '/posts'}
            >
              View Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts/new">Add Post</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import style from './NavMenu.module.css';
import { Link } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <div className={style.nav__menu}>
      <Link to="/">
        <a href="#">Main</a>
      </Link>
      <Link to="/productsPage">
        <a href="#">Products</a>
      </Link>
      <Link to="/usersPage">
        <a href="#">Users</a>
      </Link>
    </div>
  );
};

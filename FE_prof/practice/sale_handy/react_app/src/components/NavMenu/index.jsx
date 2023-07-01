import React from 'react';
import style from '../NavMenu/index.module.css';
import { Link } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <div className={style.nav_menu}>
      <Link to="/">Main</Link>
      <Link to="/order">Order</Link>
      <Link to="/comments">Comments</Link>
    </div>
  );
};

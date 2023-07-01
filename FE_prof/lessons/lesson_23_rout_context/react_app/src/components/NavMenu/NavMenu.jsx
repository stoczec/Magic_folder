import React from 'react';
import style from '../NavMenu/NavMenu.module.css';
import { Link } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <div className={style.nav_menu}>
      <Link to="/">Main</Link>
      <Link to="/configurations">Configurations</Link>
      <Link to="/teams">Teams</Link>
    </div>
  );
};

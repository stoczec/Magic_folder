import React from 'react';
import style from '../Navbar/index.module.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <NavLink to="/countries">Countries</NavLink>
      <NavLink to="/search">Search</NavLink>
    </div>
  );
};

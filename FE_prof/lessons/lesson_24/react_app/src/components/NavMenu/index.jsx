import React from 'react';
import style from './index.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

export const NavMenu = () => {
  const links = [
    { name: <img src={logo} alt="Logo" />, path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Search', path: '/search' },
    { name: 'Cart', path: '/cart' },
  ];
  return (
    <div className={style.nav_menu}>
      {links.map(({ name, path }, index) => {
        return (
          <Link key={index} to={path}>
            {name}
          </Link>
        );
      })}
    </div>
  );
};

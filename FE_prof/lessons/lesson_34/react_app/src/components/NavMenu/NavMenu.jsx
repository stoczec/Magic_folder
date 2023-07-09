import React from 'react';
import style from '../NavMenu/NavMenu.module.css';
// import { Link } from 'react-router-dom';
import navMenuLinks from './data.json';

export const NavMenu = () => {
  return (
    <div className={style.nav_menu}>
      {/* <Link to="/">
        <a>Main</a>
      </Link>
      <Link to="/category">
        <a>Category</a>
      </Link>
      <a href="#">SubCategory</a>
      <Link to="/itempage">
        <a>ItemPage</a>
      </Link>
      <Link to="/cart">
        <a>Cart</a>
      </Link>
      <a href="#">About Company</a>
      <a href="#">Contacts</a>
      <a href="#">NEW!</a>
      <a href="#">Producers</a>
      <a href="#">Delivery</a>
      <a href="#">Payment</a> */}
      <nav>
        <ul>
          {navMenuLinks.map((link, idx) => {
            const { path, name } = link;
            return (
              <li key={idx}>
                <a href={path}>{name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

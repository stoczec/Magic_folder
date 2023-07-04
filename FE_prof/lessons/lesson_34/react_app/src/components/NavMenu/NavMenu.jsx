import React from 'react';
import style from '../NavMenu/NavMenu.module.css';
import { Link } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <div className={style.nav_menu}>
      <Link to="/">
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
      <a href="#">Payment</a>
    </div>
  );
};

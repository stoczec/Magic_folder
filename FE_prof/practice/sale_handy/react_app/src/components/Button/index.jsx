import React from 'react';
import style from '../Button/index.module.css';

export const Button = ({
  orderButton,
  filterButton,
  filterButtonReset,
  onClick,
}) => {
  return (
    // <a href="#" className={style.button_order}>
    //   Заказать
    // </a>

    <button
      className={style.button_order_pushable}
      onClick={onClick}
      role="button"
    >
      <span className={style.button_order_shadow}></span>
      <span className={style.button_order_edge}></span>
      <span className={style.button_order_front}>
        {orderButton || filterButton || filterButtonReset}
      </span>
    </button>
  );
};

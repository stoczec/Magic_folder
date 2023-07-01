import React from 'react';
import style from '../Count/index.module.css';

export const Count = ({ num, plus, minus }) => {
  return (
    <div className={style.count}>
      <p>{num}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

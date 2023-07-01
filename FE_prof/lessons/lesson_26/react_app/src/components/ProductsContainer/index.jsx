import React from 'react';
import style from '../ProductsContainer/index.module.css';
import { useSelector } from 'react-redux';
import { Product } from '../Product';

export const ProductsContainer = () => {
  const products_state = useSelector((state) => state.products);

  return (
    <div className={style.products_container}>
      {products_state.map((el) => (
        <Product key={el.id} {...el} />
      ))}
    </div>
  );
};

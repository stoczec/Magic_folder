import React from 'react';
import style from '../Product/index.module.css';
import { deleteProductAction } from '../../store/reducers/productReducer';
import { useDispatch } from 'react-redux';

export const Product = ({ id, title, price }) => {
  const dispatch = useDispatch();
  const delete_product = () => dispatch(deleteProductAction(id));
  return (
    <div className={style.product} onDoubleClick={delete_product}>
      <p>Title: {title}</p>
      <p>Price: {price}</p>
    </div>
  );
};

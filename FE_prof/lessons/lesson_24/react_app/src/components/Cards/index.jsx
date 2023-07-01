import React from 'react';
import style from './index.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add_to_cart } from '../../store/reducers/cartReducer';

export const Cards = ({ id, brand, title, description, price, images }) => {
  const disaptch = useDispatch();
  // const { id, brand, title, description, price, images } = product;

  const text =
    description.length > 10 ? `${description.slice(0, 10)}...` : description;
  const handleAddToCard = () => {
    disaptch(add_to_cart(id, brand, title, description, price, images));
  };
  return (
    <div className={style.cards}>
      <img src={images[0]} alt={title} />
      <p>Brand: {brand}</p>
      <p>Title: {title}</p>
      <p>Description: {text}</p>
      <p>Price: {price}$</p>
      {/* <a href="#">ADD</a> */}
      <button onClick={handleAddToCard}>Buy Now</button>
      {/* <Link onClick={handleAddToCard} to={`/products/${id}`}>
        ADD
      </Link> */}
    </div>
  );
};

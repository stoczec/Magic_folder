import React from 'react';
import { useDispatch } from 'react-redux';
import { add_to_cart } from '../../store/reducers/cartReducer';
import style from './index.module.css';

const Product = ({ product }) => {
  const disaptch = useDispatch();
  const { title, images, price, id } = product;
  const realText = title.length > 10 ? `${title.slice(0, 10)} ...` : title;

  const handleAddToCard = () => {
    disaptch(add_to_cart(product));
  };
  return (
    <div className={style.product}>
      <img className="product__img" src={images[0]} alt={title} />
      <a href={`/product/${id}`} className="product__title">
        {realText}
      </a>
      <p className="product__price">{price}</p>
      <button className="btn" onClick={handleAddToCard}>
        Buy Now
      </button>
    </div>
  );
};

export default Product;

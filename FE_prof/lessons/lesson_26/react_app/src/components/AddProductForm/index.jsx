import React from 'react';
import style from '../AddProductForm/index.module.css';
import { addProductAction } from '../../store/reducers/productReducer';
import { useDispatch } from 'react-redux';

export const AddProductForm = () => {
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    const { title, price } = event.target;
    const product = {
      id: Date.now(),
      title: title.value,
      price: +price.value,
    };
    dispatch(addProductAction(product));
    event.target.reset();
  };
  return (
    <div className={style.add_product_form}>
      <form onSubmit={submit} className={style.form}>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Price" name="price" />
        <button>Add Product</button>
      </form>
    </div>
  );
};

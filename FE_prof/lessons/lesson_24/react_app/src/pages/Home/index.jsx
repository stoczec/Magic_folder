import React, { useEffect, useState } from 'react';
import { Cards } from '../../components/Cards';
import style from './index.module.css';
import axios from '../../axios';
import load from '../../assets/rainbow-spinner-loading.gif';
import Product from '../../components/Product/Product';
import { useSelector } from 'react-redux';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [error, setError] = useState({ hasError: false, message: '' });
  const cart = useSelector((state) => state.cart);
  const getProducts = async () => {
    // const data = await fetch('https://dummyjson.com/products');
    // await data.json().then((data) => {
    //   setProducts(() => [...data.products]);
    // });
    setLoading(true);

    await axios
      .get('/products')
      .then((res) => {
        setProducts(() => [...res.data.products]);
      })
      .catch((error) =>
        setError(() => {
          return {
            message: error.message,
            hasError: true,
          };
        })
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className={style.cards_container}>
        <img src={load} alt="loading" />
      </div>
    );
  }

  if (!loading && error.hasError) {
    return (
      <div className={style.cards_container}>
        <h1 style={{ fontSize: 30, color: 'red' }}>{error.message}</h1>
      </div>
    );
  }
  console.log({ cart });
  return (
    <div className={style.cards_container}>
      {products.map((product, idx) => {
        return <Product product={product} key={idx} />;
      })}
      {/* {products.map((el) => (
        <Product key={el.id} {...el} />
      ))} */}
    </div>
  );
};

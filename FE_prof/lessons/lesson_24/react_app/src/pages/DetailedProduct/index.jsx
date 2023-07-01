import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './index.module.css';
import axios from '../../axios';
import loaderImg from '../../assets/rainbow-spinner-loading.gif';

export const DetailedProduct = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { moyId } = useParams();

  const getProducts = async () => {
    // const data = await fetch(`https://dummyjson.com/products/${moyId}`);
    // await data.json().then((data) => {
    //   setProduct(() => {
    //     return {
    //       ...data,
    //     };
    //   });
    // });
    setLoading(true);
    await axios
      .get(`/products/${moyId}`)
      .then((res) => {
        setProduct(() => {
          return {
            ...res.data,
          };
        });
      })
      .catch((error) => {
        setError(() => {
          return {
            message: error.message,
            hasError: true,
          };
        });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="wrapper">
        <img src={loaderImg} alt="loader" />
      </div>
    );
  }

  if (!loading && error) {
    return (
      <div className="wrapper">
        <h1 style={{ fontSize: 30, color: 'red' }}>{error.message}</h1>
      </div>
    );
  }
  return (
    <div className={style.DetailedProduct}>
      <h1>{product.title}</h1>
      <img src={product.images?.[0]} alt="Phone" />
      {/* {product.map((el) => (
        <Cards key={el.id} {...el} />
      ))} */}
      <Link to="/" className={style.DetailedProduct_back}>
        BACK
      </Link>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import loaderImg from '../../assets/loader.gif';
import './index.css';
// делаем импорт из нашого конфигорационного файла
import axios from '../../axios';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [error, setError] = useState({ hasError: false, message: '' });

  const getProducts = async () => {
    //FETCH
    // const data = await fetch("https://dummyjson.com/products");
    // await data.json().then((data) => {
    //   setProducts(() => [...data.products]);
    // });

    //AXIOS
    // Не пишем https://dummyjson.com так как мы это писали в axios.js
    setLoading(true);
    await axios
      // здесь мы делаем запрос на /products
      .get('/products')
      // Then отрабатывает тогда когда у нас запрос был успешен и нам ворзвращается дата в переменной res (можно называть как угодно)
      .then((res) => {
        // Когда мы получили данные, мы их пихаем в state
        setProducts(() => [...res.data.products]);
      })
      // обрабатывает ошибки, срабатывает тогда кокгда у нас запрос вернул ошибку
      .catch((error) => {
        // мы ставим setError=true для того чтоб если была ошибка то вывели конкретный кусок react-а (Something went wrong!)
        // setError(true);
        setError(() => {
          return {
            message: error.response.data,
            hasError: true,
          };
        });
      })
      // Отрабатывает всегда
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getProducts();
  }, []);

  // когда запрос еще не вернул данные то показывать loader(spinner)
  if (loading) {
    return (
      <div className="wrapper">
        <img src={loaderImg} alt="loader" />
      </div>
    );
  }

  // Запрос вернул ошибку (loading=false, error=true)
  // if (!loading && error) {
  //   return (
  //     <div className="wrapper">
  //       <h1 style={{ fontSize: 30, color: "red" }}>Something went wrong!</h1>
  //     </div>
  //   );
  // }

  if (!loading && error.hasError) {
    return (
      <div className="wrapper">
        <h1 style={{ fontSize: 30, color: 'red' }}>{error.message}</h1>
      </div>
    );
  }

  // Else можем не писать // успешный запрос
  return (
    <div className="wrapper">
      {products.map((product, idx) => {
        const { title, images, price, id } = product;

        const realText =
          title.length > 10 ? `${title.slice(0, 10)} ...` : title;

        return (
          <a href={`/product/${id}`} className="product" key={idx}>
            <img className="product__img" src={images[0]} alt={title} />
            <p className="product__title">{realText}</p>
            <p className="product__price">{price}</p>
            <button className="btn">Buy Now</button>
          </a>
        );
      })}
    </div>
  );
}

export default Home;

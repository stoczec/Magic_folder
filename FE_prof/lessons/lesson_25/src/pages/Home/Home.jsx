import React, { useEffect, useState } from "react";
import "./index.css";
import Product from "../../components/Product/Product";
import { useSelector } from "react-redux";

function Home() {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart);

  console.log({ cart });

  const getProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    await data.json().then((data) => {
      setProducts(() => [...data.products]);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="wrapper">
      {products.map((product, idx) => {
        return <Product product={product} key={idx} />;
      })}
    </div>
  );
}

export default Home;

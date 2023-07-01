import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

const DetailedProduct = () => {
  const [porduct, setProduct] = useState({});
  const { moyId } = useParams();

  const getProducts = async () => {
    const data = await fetch(`https://dummyjson.com/products/${moyId}`);
    await data.json().then((data) => {
      setProduct(() => {
        return {
          ...data,
        };
      });
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log({ porduct });

  return <div className="DetailedProduct"></div>;
};

export default DetailedProduct;

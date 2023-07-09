import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/action";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productsInfo = useSelector((state) => state.products);

  const { prodcuts, isLoading, errorMessage } = productsInfo;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!isLoading && errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <>
      {prodcuts?.map((eachProduct, index) => {
        console.log({ eachProduct });
        return <p key={index}>{eachProduct.title}</p>;
      })}
    </>
  );
};

export default HomePage;

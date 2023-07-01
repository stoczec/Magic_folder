import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contacts from "./pages/Contacts/Contacts";
import Cart from "./pages/Cart/Cart";
import DetailedProduct from "./pages/DetailedProduct/DetailedProduct";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:moyId" element={<DetailedProduct />} />
      </Routes>
    </div>
  );
}

export default App;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   decrement_number,
//   increment_number,
// } from "./store/reducers/counterReducer";

// const App = () => {
//   // функция с помощю который мы передаем action в  store
//   const dispatch = useDispatch();

//   // здесь мы берем значение из стора
//   // Для того чтобы понять что писать после state. надо посмотреть в store.js-e
//   // в нашем случает это был counter
//   const { counter } = useSelector((state) => {
//     return state.counter;
//   });

//   const handleIncrementNumber = () => {
//     // dispatch-им action с payload = 111, в стор
//     dispatch(increment_number(1));
//   };

//   const handleDecrmenetNumber = () => {
//     dispatch(decrement_number(1));
//   };

//   return (
//     <div>
//       <p>{counter}</p>
//       <button onClick={handleDecrmenetNumber}>-</button>
//       <button onClick={handleIncrementNumber}>+</button>
//     </div>
//   );
// };

// export default App;

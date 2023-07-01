import { useState } from 'react';
import './App.css';
import { Context } from './context';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Cart from './pages/Cart/Cart';
import { NavMenu } from './components/NavMenu';
import { DetailedProduct } from './pages/DetailedProduct';
import { SearchPage } from './pages/SearchPage';

function App() {
  // const [] = useState();
  return (
    <div className="container">
      <Context.Provider value={{}}>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:moyId" element={<DetailedProduct />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   increment_number,
//   decrement_number,
// } from './store/reducers/counterReducer';

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
//     // dispatch-им action с payload = 1, в стор
//     dispatch(increment_number(1));
//   };

//   const handleDecrementNumber = () => {
//     // dispatch-им action с payload = 111, в стор
//     dispatch(decrement_number(1));
//   };

//   return (
//     <div>
//       <p>{counter}</p>
//       <button onClick={handleDecrementNumber}>-</button>
//       <button onClick={handleIncrementNumber}>+</button>
//     </div>
//   );
// };

// export default App;

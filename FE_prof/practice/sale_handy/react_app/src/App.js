import './App.css';
import { useState } from 'react';
import { Context } from './context';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { OrderPage } from './pages/OrderPage';
import { CommentPage } from './pages/CommentPage';
import { NavMenu } from './components/NavMenu';
import { phones } from './data/phones';

function App() {
  const [cards, setCards] = useState(phones);
  const [orderCard, setOrderCard] = useState([]);
  const filterCards = (object) => {
    setCards(
      cards.filter((el) => {
        if (object.brand && el.brand !== object.brand) {
          return false;
        }
        if (object.socket && el.socket !== object.socket) {
          return false;
        }
        if (object.color && !el.color.includes(object.color)) {
          return false;
        }
        return true;
      })
    );
  };
  const filterReset = () => setCards(phones);
  const orderedCard = (id) => setOrderCard(cards.filter((el) => el.id === id));
  return (
    <div className="container">
      <Context.Provider
        value={{ cards, filterCards, filterReset, orderedCard, orderCard }}
      >
        <NavMenu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/comments" element={<CommentPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;

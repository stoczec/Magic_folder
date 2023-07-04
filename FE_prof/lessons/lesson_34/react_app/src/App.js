import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/HomePage/HomePage';
import { Category } from './pages/CategoryPage/CategoryPage';
import { ItemPage } from './pages/DetailedProductPage/DetailedProductPage';
import { Cart } from './pages/CartPage/CartPage';
import { NavMenu } from './components/NavMenu/NavMenu';
function App() {
  return (
    <div className="container">
      <NavMenu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/itempage" element={<ItemPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

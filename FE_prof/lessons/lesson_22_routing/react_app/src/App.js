import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { NavMenu } from './components/NavMenu/NavMenu';
import { Footer } from './components/Footer/Footer';
import { MainPage } from './pages/MainPage/MainPage';
import { UsersPage } from './pages/UsersPage/UsersPage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="container">
      <NavMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/usersPage" element={<UsersPage />} />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;

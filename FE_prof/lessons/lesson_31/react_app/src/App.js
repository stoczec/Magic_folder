import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Countries } from './pages/Countries';
import { Search } from './pages/Search';
import DetailedCountry from './components/DetailedCountry';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/countries" element={<Countries />}></Route>
        <Route path="/country/:countryName" element={<DetailedCountry />} />
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </div>
  );
}

export default App;

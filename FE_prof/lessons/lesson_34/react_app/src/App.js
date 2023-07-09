import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import { routes } from './routes';
function App() {
  return (
    <div className="container">
      <NavMenu />
      <Routes>
        {routes.map((rout, idx) => {
          return <Route path={rout.path} key={idx} Component={rout.element} />;
        })}
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import { Context } from './context';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { ConfigurationsPage } from './pages/ConfigurationsPage/ConfigurationsPage';
import { TeamsPage } from './pages/TeamsPage/TeamsPage';
import { NavMenu } from './components/NavMenu/NavMenu';

function App() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const add_team = (value) => setTeams([...teams, { label: value, value }]);
  const add_player = (object) => setPlayers([...players, object]);
  const delete_player = (id) =>
    setPlayers(players.filter((el) => el.id !== id));

  return (
    <div className="container">
      <Context.Provider
        value={{ add_team, teams, add_player, players, delete_player }}
      >
        <NavMenu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/configurations" element={<ConfigurationsPage />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;

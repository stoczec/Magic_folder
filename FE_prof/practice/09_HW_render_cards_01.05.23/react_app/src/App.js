import { UsersContainer } from './components/UsersContainer/UsersContainer';
import { HeaderContainer } from './components/HeaderContainer/HeaderContainer';
import s from './App.module.css';

function App() {
    console.log(s);
    return (
        <div className={`${s._container} ${s.App}`}>
            <HeaderContainer />
            <UsersContainer />
        </div>
    );
}

export default App;

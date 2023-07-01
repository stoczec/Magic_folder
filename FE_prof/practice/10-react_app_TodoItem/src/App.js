import style from './App.module.css';
import { TodoList } from './components/TodoList/TodoList';

function App() {
    return <div className={style.container}>{<TodoList />}</div>;
}

export default App;

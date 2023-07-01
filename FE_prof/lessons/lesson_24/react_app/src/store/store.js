import { combineReducers, createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
import { cartReducer } from './reducers/cartReducer';

// combineReducers это у нас функция из "redux", которая помогает скомбинироавть все редюсеры в ордин общий
const rootStore = combineReducers({
  //внутри мы как ключ значение прописываем редюсеры
  counter: counterReducer,
  cart: cartReducer,
});

// мы создаем глобальный store который в дальнейшем передаем в Provide
export const store = createStore(rootStore);

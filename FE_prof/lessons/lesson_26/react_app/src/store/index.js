import { createStore, combineReducers } from 'redux';
import { productReducer } from './reducers/productReducer';
import { wordReducer } from './reducers/wordReducer';

const rootReducer = combineReducers({
  products: productReducer,
  words: wordReducer,
});

export const store = createStore(rootReducer);

// формируем объект store, который обеспечивает работу всего redux

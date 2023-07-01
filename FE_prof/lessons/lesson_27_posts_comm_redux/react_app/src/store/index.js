import { createStore, combineReducers } from 'redux';
import { postsReducer } from './reducers/postsReducer';
import { commentsReducer } from './reducers/commentsReducer';
import { modalReducer } from './reducers/modalReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  shouldShowModal: modalReducer,
});

export const store = createStore(rootReducer);

import { posts_data } from '../../data/posts_data';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const CHANGE_LIKE = 'CHANGE_LIKE';

export const addPosts = (post) => ({ type: ADD_POST, post });
export const deletePosts = (id) => ({ type: DELETE_POST, id });
export const changeLike = (id) => ({ type: CHANGE_LIKE, id });

export const postsReducer = (state = posts_data, action) => {
  if (action.type === ADD_POST) {
    return [...state, action.post];
  } else if (action.type === DELETE_POST) {
    return state.filter((el) => el.id !== action.id);
  } else if (action.type === CHANGE_LIKE) {
    //1. Найти пост, у которого меняется лайк (find)
    const targetPosts = state.find((el) => el.id === action.id);
    //2. У найденного поста обратиться к свойству like и поменять значение на противоположное
    targetPosts.like = !targetPosts.like;
    //3. Передать в setPosts обновленное
    return [...state];
  } else {
    return state;
  }
  // switch (action.type) {

  //   default:
  //     return state;
  // }
};

// 1. определить тип экшна (ADD_POST) и экспортировать его
// 2. Написать функцию которая создает экшн - addPost
// 3. Доработать редьюсер: обрабатывать наш экшн

// Задача: обеспечить удаление постов (того что сейчас в PostItem обеспечивается dlete_post).
// 1. Создать экшн
// 2. Создать функцию, которая создает объект экшна
// 3. Доработать reducer
// 4. Сделать диспач этого экшна в компоненте PostItem

// Доработать изменение статуса “лайк/не лайк”.
// 1. Добавить экшн CHANGE_LIKE
// 2. Добавить функцию action creator - changeLike
// 3. Доработать редьюсер
// 4. Сделать диспач экшна в компоненте postItem

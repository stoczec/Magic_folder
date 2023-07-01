import { posts_data } from '../../data/posts_data';

const ADD_COMMENTS = 'ADD_COMMENTS';
const DELETE_COMMENTS = 'DELETE_COMMENTS';

export const addComments = (id, comment) => ({
  type: ADD_COMMENTS,
  id,
  comment,
});
export const deleteComments = (postId, commentId) => ({
  type: DELETE_COMMENTS,
  postId,
  commentId,
});

export const commentsReducer = (state = posts_data, action) => {
  if (action.type === ADD_COMMENTS) {
    const targetPost = state.find((el) => el.id === action.id);
    targetPost.comments.push(action.comment);
    return [...state];
  } else if (action.type === DELETE_COMMENTS) {
    const targetPost = state.find((el) => el.id === action.postId);
    targetPost.comments = targetPost.comments.filter(
      (el) => el.id !== action.commentId
    );
    return [...state];
  } else {
    return state;
  }
};

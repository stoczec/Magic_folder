import React, { useContext } from 'react';
import style from './CommentItem.module.css';
import { Context } from '../../../context';
import { useDispatch } from 'react-redux';
import { deleteComments } from '../../../store/reducers/commentsReducer';

export const CommentItem = ({ id, comment, postId }) => {
  const { deleteComment } = useContext(Context);
  const dispatch = useDispatch();
  return (
    <div
      className={style.comment__item}
      // onClick={() => deleteComment(postId, id)}
      onClick={() => dispatch(deleteComments(postId, id))}
    >
      {comment}
    </div>
  );
};

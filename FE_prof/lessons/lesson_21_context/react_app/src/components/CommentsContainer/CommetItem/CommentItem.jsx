import React, { useContext } from 'react';
import style from './CommentItem.module.css';
import { Context } from '../../../context';

export const CommentItem = ({ id, comment, postId }) => {
  const { deleteComment } = useContext(Context);
  return (
    <div
      className={style.comment__item}
      onClick={() => deleteComment(postId, id)}
    >
      {comment}
    </div>
  );
};

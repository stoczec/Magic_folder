import React from 'react';
import { CommentItem } from './CommetItem/CommentItem';
import { AddComentForm } from '../AddComentForm/AddComentForm';

export const CommentsContainer = ({ comments, postId }) => {
  return (
    <div>
      <div>
        {comments.map((el) => (
          <CommentItem key={el.id} {...el} postId={postId} />
        ))}
      </div>
      <AddComentForm postId={postId} />
    </div>
  );
};

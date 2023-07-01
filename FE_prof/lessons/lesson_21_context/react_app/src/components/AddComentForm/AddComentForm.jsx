import React, { useContext } from 'react';
import { Context } from '../../context';

export const AddComentForm = ({ postId }) => {
  const { addComment } = useContext(Context);
  const submitForm = (event) => {
    event.preventDefault();
    const { comment } = event.target;
    const newComment = {
      id: Date.now(),
      comment: comment.value,
    };

    addComment(postId, newComment);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="comment" name="comment" />
        <button>ADD COMMENT</button>
      </form>
    </div>
  );
};

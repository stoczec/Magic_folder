import React, { useContext } from 'react';
import { Context } from '../../context';
import { useDispatch } from 'react-redux';
import { addComments } from '../../store/reducers/commentsReducer';

export const AddComentForm = ({ postId }) => {
  const { addComment } = useContext(Context);
  const dispatch = useDispatch();
  const submitForm = (event) => {
    event.preventDefault();
    const { comment } = event.target;
    const newComment = {
      id: Date.now(),
      comment: comment.value,
    };

    // addComment(postId, newComment);
    dispatch(addComments(postId, newComment));
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

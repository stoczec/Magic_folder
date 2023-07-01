import React, { useContext } from 'react';
import style from './AddPostForm.module.css';
import { Context } from '../../context';
import { useDispatch } from 'react-redux';
import { addPosts } from '../../store/reducers/postsReducer';
import { showModal, hideModal } from '../../store/reducers/modalReducer';

export const AddPostForm = () => {
  // const { addPost } = useContext(Context);
  const dispatch = useDispatch();
  // const addPost = () => dispatch(addPosts());

  const submitForm = (event) => {
    event.preventDefault();
    const { title, description } = event.target;
    const post = {
      id: Date.now(),
      title: title.value,
      description: description.value,
      like: false,
      comments: [],
    };
    // addPost(post);
    dispatch(addPosts(post));
    dispatch(showModal());
    setTimeout(() => dispatch(hideModal()), 2000);

    event.target.reset();
  };
  return (
    <div>
      <form className={style.form__card} onSubmit={submitForm}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="description" name="description" />
        <button>ADD POST</button>
      </form>
    </div>
  );
};

import React, { useContext } from 'react';
import style from './PostItem.module.css';
import { Context } from '../../../context';
import { MdDeleteForever } from 'react-icons/md';
import { CommentsContainer } from '../../CommentsContainer/CommentsContainer';
import { useDispatch } from 'react-redux';
import { changeLike, deletePosts } from '../../../store/reducers/postsReducer';

export const PostItem = ({ id, title, description, like, comments }) => {
  const dispatch = useDispatch();

  const { change_like, deletePost } = useContext(Context);
  const likeText = like ? 'Liked' : 'Like?';
  const btn_styles = {
    backgroundColor: like ? 'darkblue' : 'azure',
    color: like ? 'white' : 'black',
    transition: '1s',
  };
  return (
    <div className={style.post__item}>
      <MdDeleteForever
        className={style.icon__delete}
        onClick={() => dispatch(deletePosts(id))}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <a
        href="#"
        className={style.like__btn}
        style={btn_styles}
        // onClick={() => change_like(id)}
        onClick={() => dispatch(changeLike(id))}
      >
        {likeText}
      </a>
      <CommentsContainer comments={comments} postId={id} />
    </div>
  );
};

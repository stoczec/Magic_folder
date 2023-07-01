import React, { useContext } from 'react';
import style from './PostItem.module.css';
import { Context } from '../../../context';
import { MdDeleteForever } from 'react-icons/md';
import { CommentsContainer } from '../../CommentsContainer/CommentsContainer';

export const PostItem = ({ id, title, description, like, comments }) => {
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
        onClick={() => deletePost(id)}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <a
        href="#"
        className={style.like__btn}
        style={btn_styles}
        onClick={() => change_like(id)}
      >
        {likeText}
      </a>
      <CommentsContainer comments={comments} postId={id} />
    </div>
  );
};

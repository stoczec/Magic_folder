import React, { useContext } from 'react';
import { Context } from '../../context';
// import style from './PostsContainer.module.css';
import { PostItem } from './PostItem/PostItem';

export const PostsContainer = () => {
  const { posts } = useContext(Context);
  return (
    <div>
      {posts.map((el) => (
        <PostItem key={el.id} {...el} />
      ))}
    </div>
  );
};

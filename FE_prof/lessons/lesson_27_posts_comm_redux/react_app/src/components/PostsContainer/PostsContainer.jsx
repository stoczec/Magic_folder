import React, { useContext } from 'react';
import { Context } from '../../context';
// import style from './PostsContainer.module.css';
import { PostItem } from './PostItem/PostItem';
import { useSelector } from 'react-redux';

export const PostsContainer = () => {
  const posts = useSelector((state) => state.posts);
  // const { posts } = useContext(Context);
  return (
    <div>
      {posts.map((el) => (
        <PostItem key={el.id} {...el} />
      ))}
    </div>
  );
};

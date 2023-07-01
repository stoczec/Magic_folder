import './App.css';
import { useState } from 'react';
import { posts_data } from './data/posts_data';
import { PostsContainer } from './components/PostsContainer/PostsContainer';
import { Context } from './context';
import { AddPostForm } from './components/AddPostForm/AddPostForm';

function App() {
  const [posts, setPosts] = useState(posts_data);
  const change_like = (id) => {
    //1. Найти пост, у которого меняется лайк (find)
    const targetPosts = posts.find((el) => el.id === id);
    //2. У найденного поста обратиться к свойству like и поменять значение на противоположное
    targetPosts.like = !targetPosts.like;
    //3. Передать в setPosts обновленное
    setPosts([...posts]);
  };
  const addPost = (post) => setPosts([...posts, post]);
  const deletePost = (id) => setPosts(posts.filter((el) => el.id !== id));
  const deleteComment = (postId, commentId) => {
    // 1. Найти пост по айди
    const targetPost = posts.find((el) => el.id === postId);
    // 2. У найденного поста обратиться к массиву comments.
    // Отфильтровать массив comments по айди комментария
    targetPost.comments = targetPost.comments.filter(
      (el) => el.id !== commentId
    );
    // 3. Передать в setPosts обновленное состояние
    setPosts([...posts]);
  };
  const addComment = (id, comment) => {
    const targetPost = posts.find((el) => el.id === id);
    targetPost.comments.push(comment);
    setPosts([...posts]);
  };
  return (
    <div className="container">
      <Context.Provider
        value={{
          posts,
          change_like,
          addPost,
          deletePost,
          deleteComment,
          addComment,
        }}
      >
        <AddPostForm />
        <PostsContainer change_like={change_like} />
      </Context.Provider>
    </div>
  );
}

export default App;

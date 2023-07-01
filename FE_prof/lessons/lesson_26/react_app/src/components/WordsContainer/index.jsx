import React from 'react';
import style from '../WordsContainer/index.module.css';
import { useSelector } from 'react-redux';
import { Word } from '../Word';

export const WordsContainer = () => {
  const words_state = useSelector((state) => state.words);

  return (
    <div className={style.words_container}>
      {words_state.map((el) => (
        <Word key={el.id} {...el} />
      ))}
    </div>
  );
};

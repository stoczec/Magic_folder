import React from 'react';
import style from '../Word/index.module.css';
import {
  deleteCardAction,
  reverseCardAction,
} from '../../store/reducers/wordReducer';
import { useDispatch } from 'react-redux';

export const Word = ({ id, rus, eng, lang }) => {
  const dispatch = useDispatch();
  const reverseCard = () => dispatch(reverseCardAction(id));
  const deleteCard = () => dispatch(deleteCardAction(id));
  const word = lang === 'rus' ? rus : eng;

  return (
    <div className={style.word} onClick={reverseCard}>
      <p>{word}</p>
      <p className={style.word_delete} onClick={deleteCard}>
        x
      </p>
    </div>
  );
};

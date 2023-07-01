import React from 'react';
import style from '../AddWordForm/index.module.css';
import { addProductAction } from '../../store/reducers/productReducer';
import { useDispatch } from 'react-redux';
import { addWordAction } from '../../store/reducers/wordReducer';

export const AddWordForm = () => {
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    const { rus, eng } = event.target;
    const word = {
      id: Date.now(),
      rus: rus.value,
      eng: eng.value,
      lang: 'eng',
    };
    dispatch(addWordAction(word));
    event.target.reset();
  };
  return (
    <div className={style.add_word_form}>
      <form onSubmit={submit} className={style.form}>
        <input type="text" placeholder="Rus" name="rus" />
        <input type="text" placeholder="Eng" name="eng" />
        <button>Add Word</button>
      </form>
    </div>
  );
};

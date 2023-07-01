import React, { useContext } from 'react';
import style from '../CardsContainer/index.module.css';
import { Cards } from './Cards';
import { Context } from '../../context';

export const CardsContainer = () => {
  const { cards } = useContext(Context);

  return (
    <div className={style.cards_container}>
      {cards.map((el) => (
        <Cards key={el.id} {...el} />
      ))}
    </div>
  );
};

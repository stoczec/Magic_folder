import React, { useContext } from 'react';
import style from './index.module.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { Context } from '../../../context';

export const Cards = ({
  id,
  brand,
  model,
  img,
  screen,
  battery,
  socket,
  color,
  memory,
}) => {
  const { orderedCard } = useContext(Context);
  return (
    <div className={style.card}>
      <h2>Brand: {brand}</h2>
      <p>Model: {model}</p>
      <img src={img} alt={brand} />
      <p>Screen: {screen}</p>
      <p>Battery: {battery}</p>
      <p>Socket: {socket}</p>
      <p className={style.card_color}>
        Color:{' '}
        {color.map((el) => (
          <span key={el} style={{ backgroundColor: el }}></span>
        ))}
      </p>
      <p className={style.card_memory}>
        Memory - Price{' '}
        {memory.map((el) => (
          <span key={Object.keys(el)[0]}>
            {Object.keys(el)[0]} - {Object.values(el)[0]}
          </span>
        ))}
      </p>
      <Link to="/order" className={style.card_link}>
        <Button
          orderButton={'Заказать'}
          onClick={() => orderedCard(id)}
        ></Button>
      </Link>
    </div>
  );
};

import React, { useContext } from 'react';
import { Context } from '../../../context';
import style from '../Player/index.module.css';

export const Player = ({ id, player, team }) => {
  const { delete_player } = useContext(Context);

  return (
    <div className={style.player} onClick={() => delete_player(id)}>
      <p>{player}</p>
      <p>{team}</p>
    </div>
  );
};

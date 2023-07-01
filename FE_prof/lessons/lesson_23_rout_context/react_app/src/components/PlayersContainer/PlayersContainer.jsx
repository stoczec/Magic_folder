import React, { useContext } from 'react';
import { Context } from '../../context';
import { Player } from './Player/Player';

export const PlayersContainer = () => {
  const { players } = useContext(Context);

  return (
    <div>
      {players.map((el) => (
        <Player key={el.id} {...el} />
      ))}
    </div>
  );
};

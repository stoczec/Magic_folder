import React, { useContext } from 'react';
import Select from 'react-select';
import style from '../AddPlayerForm/AddPlayerForm.module.css';
import { Context } from '../../context';

export const AddPlayerForm = () => {
  const { teams, add_player } = useContext(Context);
  const submitForm = (event) => {
    event.preventDefault();
    const { player, team } = event.target;
    const object = {
      id: Date.now(),
      player: player.value,
      team: team.value,
    };
    add_player(object);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={submitForm} className={style.add_player_form}>
        <lable>
          <p>Добавить игрока</p>
          <input type="text" placeholder="Имя игрока" name="player" />
        </lable>
        <Select
          name="team"
          options={teams}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? 'grey' : 'red',
            }),
          }}
        />
        <button>Добавить</button>
      </form>
    </div>
  );
};

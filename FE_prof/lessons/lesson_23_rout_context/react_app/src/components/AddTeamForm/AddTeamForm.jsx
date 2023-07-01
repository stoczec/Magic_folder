import React, { useContext } from 'react';
import style from '../AddTeamForm/AddTeamForm.module.css';
import { Context } from '../../context';

export const AddTeamForm = () => {
  const { add_team } = useContext(Context);

  const submitForm = (event) => {
    event.preventDefault();
    const { team } = event.target;
    add_team(team.value);
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={submitForm} className={style.add_team_form}>
        <lable>
          <p>Добавить команду</p>
          <input type="text" placeholder="Название команды" name="team" />
        </lable>
        <button>Добавить</button>
      </form>
    </div>
  );
};

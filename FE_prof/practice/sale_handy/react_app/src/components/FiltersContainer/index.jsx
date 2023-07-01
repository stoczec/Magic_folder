import React, { useContext, useState } from 'react';
import style from '../FiltersContainer/index.module.css';
import { phones } from '../../data/phones';
import { Filter } from './Filter';
import { Button } from '../Button';
import { Context } from '../../context';

export const FiltersContainer = () => {
  const [selectPhone, setSelectPhone] = useState('');
  const [selectColor, setSelectColor] = useState('');
  const [selectSocket, setSelectSocket] = useState('');
  const brands = [...new Set(phones.map((el) => el.brand))];
  const colors = [...new Set(phones.map((el) => el.color).flat())];
  const sockets = [...new Set(phones.map((el) => el.socket))];
  const { filterCards, filterReset } = useContext(Context);
  const funcSelectPhone = (event) => {
    const { value } = event.target;
    setSelectPhone(value);
  };
  const funcSelectColor = (event) => {
    const { value } = event.target;
    setSelectColor(value);
  };
  const funcSelectSocket = (event) => {
    const { value } = event.target;
    setSelectSocket(value);
  };
  const submitForm = (event) => {
    event.preventDefault();
    const { brand, color, socket } = event.target;
    const filterObject = {
      brand: brand.value,
      color: color.value,
      socket: socket.value,
    };
    filterCards(filterObject);

    console.log(filterObject);
  };

  return (
    <div className={style.filters_container}>
      <form className={style.filters_select} onSubmit={submitForm}>
        <select value={selectPhone} onChange={funcSelectPhone} name="brand">
          <option value="">Выберите телефон</option>
          {brands.map((el) => (
            <Filter key={el} brand={el} />
          ))}
        </select>
        <select value={selectColor} onChange={funcSelectColor} name="color">
          <option value="">Выберите цвет</option>
          {colors.map((el) => (
            <Filter key={el} color={el} />
          ))}
        </select>
        <select value={selectSocket} onChange={funcSelectSocket} name="socket">
          <option value="">Выберите тип разъема</option>
          {sockets.map((el) => (
            <Filter key={el} socket={el} />
          ))}
        </select>
        <Button
          className={style.button_filter}
          type="submit"
          filterButton={'Применить фильтр'}
        />
      </form>
      <Button
        className={style.button_filter_reset}
        filterButtonReset={'Сбросить фильтр'}
        onClick={filterReset}
      />
    </div>
  );
};

import React, { useContext } from 'react';
import style from '../OrderContainer/index.module.css';
import { Context } from '../../context';
import { Cards } from '../CardsContainer/Cards';

export const OrderContainer = () => {
  const submitForm = (event) => {
    event.preventDefault();
    const { firstname, secondname, country, city } = event.target;
    const user = {
      id: Date.now(),
      firstname: firstname.value,
      secondname: secondname.value,
      country: country.value,
      city: city.value,
    };
    event.target.reset();
  };
  const { orderCard } = useContext(Context);
  return (
    <div className={style.order_card}>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="Имя" name="firstname" />
        <input type="text" placeholder="Фамилия" name="secondname" />
        <input type="text" placeholder="Страна" name="country" />
        <input type="text" placeholder="Город" name="city" />
        <button>Заказать</button>
      </form>
      <div>
        {orderCard.map((el) => (
          <Cards key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { CardItem } from './CardItem/CardItem';
import style from './CardsContainer.module.css';

export const CardsContainer = ({ cards, changeLang, deleteCard }) => {
    return (
        <div className={style.cards__container}>
            {cards.map((el) => (
                <CardItem
                    key={el.id}
                    {...el}
                    changeLang={changeLang}
                    deleteCard={deleteCard}
                />
            ))}
        </div>
    );
};

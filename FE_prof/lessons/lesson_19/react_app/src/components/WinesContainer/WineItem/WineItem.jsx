import React from 'react';
import style from './WIneItem.module.css';

export const WineItem = ({ id, image, wine, winery, delete_card }) => {
    return (
        <div className={style.wine__item}>
            <p onClick={() => delete_card(id)}>X</p>
            <img src={image} alt={wine} />
            <p className={style.pp}>{wine}</p>
            <p>{winery}</p>
        </div>
    );
};

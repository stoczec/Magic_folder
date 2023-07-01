import React from 'react';
import style from './CardItem.module.css';

export const CardItem = ({ id, eng, rus, lang }) => {
    const backgr_style = {
        background: lang === 'eng' ? ' rgb(41, 128, 185)' : 'white',
        color: lang === 'eng' ? ' white' : 'rgb(41, 128, 185)',
    };
    return (
        <div className={style.card__item} style={backgr_style}>
            <p>{lang === 'eng' ? eng : rus}</p>
        </div>
    );
};

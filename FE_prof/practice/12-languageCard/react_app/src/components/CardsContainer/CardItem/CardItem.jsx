import React from 'react';
import style from './CardItem.module.css';
import { ImCross } from 'react-icons/im';

export const CardItem = ({
    id,
    rus,
    de,
    eng,
    lang,
    changeLang,
    deleteCard,
}) => {
    const backgroundStyle = {
        backgroundColor:
            lang === 'eng'
                ? ' rgb(41, 128, 185)'
                : lang === 'de'
                ? ' rgb(30, 100, 100)'
                : 'rgb(210, 40, 100)',
        color: 'white',
        borderColor:
            lang === 'de' ? ' rgb(30, 100, 100)' : ' rgb(41, 128, 185)',
    };

    return (
        <div
            className={style.card__item}
            style={backgroundStyle}
            onClick={() => changeLang(id)}
            // onDoubleClick={() => deleteCard(id)}
        >
            <a
                href="#"
                onClick={(event) => {
                    event.stopPropagation();
                    deleteCard(id);
                }}
            >
                <ImCross />
            </a>
            <p>{lang === 'eng' ? eng : lang === 'de' ? de : rus}</p>
        </div>
    );
};

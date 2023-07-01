import React from 'react';
import style from './Triggers.module.css';

export const Triggers = ({
    changeLangAllRus,
    changeLangAllEng,
    changeLangAllDe,
}) => {
    return (
        <div className={style.triggers}>
            <a href="#" onClick={changeLangAllRus} className={style.btn__rus}>
                RUS
            </a>
            <a href="#" onClick={changeLangAllEng} className={style.btn__eng}>
                ENG
            </a>
            <a href="#" onClick={changeLangAllDe} className={style.btn__de}>
                DE
            </a>
        </div>
    );
};

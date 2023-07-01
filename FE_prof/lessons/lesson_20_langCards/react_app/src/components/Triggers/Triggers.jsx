import React from 'react';
import style from './Triggers.module.css';

export const Triggers = ({ changeLangEng, changeLangERus }) => {
    return (
        <div className={style.triggers}>
            <a href="#" onClick={changeLangERus}>
                RUS
            </a>
            <a href="#" onClick={changeLangEng}>
                ENG
            </a>
        </div>
    );
};

import React from 'react';
import style from './AddCardForm.module.css';

export const AddCardForm = ({ addCard }) => {
    const funcFormSubmit = (event) => {
        event.preventDefault();
        const { rus, eng } = event.target;
        const word = {
            id: Date.now(),
            rus: rus.value,
            eng: eng.value,
            lang: 'eng',
        };
        addCard(word);
        event.target.reset();
    };

    return (
        <div>
            <form onSubmit={funcFormSubmit} className={style.form__card}>
                <input type="text" placeholder="rus" name="rus" />
                <input type="text" placeholder="eng" name="eng" />
                <button>Add</button>
            </form>
        </div>
    );
};

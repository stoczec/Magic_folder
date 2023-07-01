import React from 'react';
import style from './AddCardForm.module.css';

export const AddCardForm = ({ addCard }) => {
    const submitForm = (event) => {
        event.preventDefault();
        const { rus, eng, de } = event.target;
        const word = {
            id: Date.now(),
            rus: rus.value,
            eng: eng.value,
            de: de.value,
            lang: 'eng',
        };
        addCard(word);
        event.target.reset();
    };
    return (
        <div>
            <form className={style.form__card} onSubmit={submitForm}>
                <input type="text" placeholder="RUS" name="rus" />
                <input type="text" placeholder="ENG" name="eng" />
                <input type="text" placeholder="DE" name="de" />
                <button>ADD CARD</button>
            </form>
        </div>
    );
};

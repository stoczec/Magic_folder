import React, { useState } from 'react';

export const TodoForm = ({ add_task }) => {
    const [inputValue, setInputValue] = useState('');
    // При отправки формы:
    // - не обновляется страница;
    // - передаем значение input, аргументом в функцию add_task;
    // - очищаем input.
    const funcFormSubmit = (event) => {
        event.preventDefault();
        add_task(inputValue);
        setInputValue('');
    };
    // Введенное в форму значение, передаем аргументом в функцию изменения состояния
    const funcInputChange = (event) => setInputValue(event.target.value);
    return (
        <div>
            <form onSubmit={funcFormSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={funcInputChange}
                    placeholder="Task"
                />
                <button type="submit">Download</button>
            </form>
        </div>
    );
};

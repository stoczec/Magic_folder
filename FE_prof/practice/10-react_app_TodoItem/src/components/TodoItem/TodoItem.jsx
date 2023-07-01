import React from 'react';
import style from './TodoItem.module.css';

export const TodoItem = ({ id, text, completed, delete_task, toggle_task }) => {
    return (
        <div className={style.todo__item}>
            <p className={style.item__id}>{id}</p>
            <p onClick={() => toggle_task(id)} className={style.item__text}>
                {text}
            </p>
            <p>{completed ? 'completed' : 'not completed'}</p>
            <button onClick={() => delete_task(id)}>Delete</button>
        </div>
    );
};

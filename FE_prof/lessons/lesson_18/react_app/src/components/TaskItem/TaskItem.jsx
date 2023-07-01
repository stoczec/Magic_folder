import React from 'react';
import s from './TaskItem.module.css';

export default function TaskItem({ title, completed }) {
    const status_text = completed ? 'done' : 'not done';

    const status_style = {
        color: completed ? 'green' : 'red',
    };

    const status_style1 = {
        borderColor: completed ? 'green' : 'red',
    };

    return (
        <div className={s.task_item} style={status_style1}>
            <p>Title: {title}</p>
            <p style={status_style}>Status: {status_text}</p>
        </div>
    );
}

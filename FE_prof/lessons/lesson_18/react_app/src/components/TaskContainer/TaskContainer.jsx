import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { tasks_data } from '../../data/tasks';
import s from './TaskContainer.module.css';

export default function TaskContainer() {
    return (
        <div className={s.task_container}>
            {tasks_data.map((el) => (
                <TaskItem key={el.id} {...el} />
            ))}
        </div>
    );
}

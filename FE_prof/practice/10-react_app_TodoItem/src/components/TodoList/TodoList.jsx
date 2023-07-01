import React, { useState } from 'react';
import style from './TodoList.module.css';
import { tasks } from '../../data/tasks_list';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoForm } from '../TodoForm/TodoForm';

export const TodoList = () => {
    const [task, setTask] = useState(tasks);
    const [task_completed, setTaskCompleted] = useState(tasks);
    const [task_input_value, setTaskInputValue] = useState(tasks);

    const delete_task = (id) => setTask(task.filter((el) => el.id != id));
    const toggle_task = (id) =>
        setTaskCompleted(
            task.map((el) => {
                if (el.id === id) {
                    return (el.completed = !el.completed);
                }
            })
        );
    const add_task = (inputValue) => {
        const newObject = {
            id: tasks.length++,
            text: inputValue,
            completed: true,
        };
        setTaskInputValue([...tasks, newObject]);
    };
    return (
        <div className={style.todo__list}>
            {task.map((el) => (
                <TodoItem
                    key={el.id}
                    {...el}
                    delete_task={delete_task}
                    toggle_task={toggle_task}
                />
            ))}
            <TodoForm add_task={add_task} />
        </div>
    );
};

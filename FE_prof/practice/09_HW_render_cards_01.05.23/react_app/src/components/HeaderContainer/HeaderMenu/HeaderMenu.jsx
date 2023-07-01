import React from 'react';
import s from './HeaderMenu.module.css';

export const HeaderMenu = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href="#">Разработка</a>
                </li>
                <li>
                    <a href="#">Дизайн</a>
                </li>
                <li>
                    <a href="#">Менеджмент</a>
                </li>
                <li>
                    <a href="#">Маркетинг</a>
                </li>
                <li>
                    <a href="#">Контакты</a>
                </li>
            </ul>
        </div>
    );
};

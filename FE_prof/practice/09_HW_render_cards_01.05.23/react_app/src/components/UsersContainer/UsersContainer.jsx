import React from 'react';
import s from './UsersContainer.module.css';
import { UserItem } from '../UserItem/UserItem';
import obj from '../../data/users.json';

export const UsersContainer = () => {
    return (
        <div className={s.user__container}>
            {obj.data.map((el) => (
                <UserItem key={el.id} {...el} />
            ))}
        </div>
    );
};

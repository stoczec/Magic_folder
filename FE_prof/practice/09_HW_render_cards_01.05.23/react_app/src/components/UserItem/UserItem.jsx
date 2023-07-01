import React from 'react';
import s from './UserItem.module.css';

export const UserItem = ({ avatar, first_name, last_name, email }) => {
    const email_mailto = `mailto:${email}`;
    return (
        <div className={s.user__item}>
            <img src={avatar} alt={`${first_name} ${last_name}`} />
            <p>
                {first_name} {last_name}
            </p>
            <a href={email_mailto}>{email}</a>
        </div>
    );
};

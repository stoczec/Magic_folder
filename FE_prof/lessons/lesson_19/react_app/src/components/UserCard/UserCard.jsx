import React, { useState } from 'react';
import style from './UserCard.module.css';

export const UserCard = () => {
    let [color, setColor] = useState(false);
    const lastname_style = {
        color: color ? 'red' : 'black',
    };
    const changeColor = () => {
        return setColor(!color);
    };
    return (
        <div className={style.user__card}>
            <img
                src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
                alt="avatar"
            />
            <p onClick={changeColor}>Firstname: Jonh</p>
            <p style={lastname_style}>Lastname: Smith</p>
        </div>
    );
};

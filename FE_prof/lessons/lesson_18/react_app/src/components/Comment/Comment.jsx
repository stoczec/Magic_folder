import React from 'react';
import s from './Comment.module.css';

export default function Comment({ postId, name, email, body }) {
    const email_mailto = `mailto:${email}`;
    const color_name = {
        backgroundColor: name[0] === 'e' ? 'lightblue' : 'lightgreen',
    };

    return (
        <div className={s.comment_item} style={color_name}>
            <p>PostId: {postId}</p>
            <p>Name:{name}</p>
            {/* <a href={ 'mailto:' + email } */}
            <a href={email_mailto}>Email:{email}</a>
            <p>Body:{body}</p>
        </div>
    );
}

import React from 'react';
import Comment from '../Comment/Comment';
import { comments } from '../../data/comments';
import s from './CommentsContainer.module.css';

export default function CommentsContainer() {
    const numbers = [4, 8, 15, 33, 47, 82, 99];
    return (
        <div className={s.comments_container}>
            {comments
                .filter((el) => numbers.includes(el.postId))
                .map((el) => (
                    <Comment key={el.id} {...el} />
                ))}
        </div>
    );
}

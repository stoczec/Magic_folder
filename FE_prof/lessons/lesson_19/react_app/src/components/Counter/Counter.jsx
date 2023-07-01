import React, { useState } from 'react';

export const Counter = () => {
    let [likes, setlikes] = useState(0);
    const increment = () => {
        setlikes((likes += 1));
    };
    const decrement = () => {
        setlikes((likes -= 1));
    };
    return (
        <div>
            <p>{likes}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
};

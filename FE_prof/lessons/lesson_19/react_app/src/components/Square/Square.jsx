import React, { useState } from 'react';

export const Square = () => {
    let [color, setColor] = useState(true);
    const background_color = {
        width: color ? '300px' : '400px',
        height: color ? '300px' : '400px',
        backgroundColor: color ? 'green' : 'blue',
    };
    const changeColor = () => {
        return setColor(!color);
    };
    return (
        <div>
            <div style={background_color}></div>
            <button onClick={changeColor}>Change color</button>
        </div>
    );
};

// 1. Создать компонент Square - квадрат зеленого цвета с размерами 300х300px + кнопка
// 2. При клике на кнопку менять у квадрата цвет на синий и размеры на 400х400px
// 3. При повторном клике вернуть всё обратно

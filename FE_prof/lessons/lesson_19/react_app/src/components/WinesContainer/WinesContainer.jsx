import React, { useState } from 'react';
import { wine } from '../../data/wines_data';
import { WineItem } from './WineItem/WineItem';

export const WinesContainer = () => {
    let [wines, setWines] = useState(wine);
    const delete_card = (id) => setWines(wines.filter((el) => el.id != id));
    return (
        <div>
            {wines.map((el) => (
                <WineItem key={el.id} {...el} delete_card={delete_card} />
            ))}
        </div>
    );
};

// https://images.vivino.com/thumbs/ZzMKzqFqRO-6oI3ys3gGgQ_pb_x300.png", "id": 5 }]
// Wine

// 1. Создать два компонента WineItem и WinesContainer
// 2. В WinesContainer создать состояние wines (+setWines)
// 3. В состояние wines в качестве изначального состояния поместить данные из массива wines_data
// 4. Из состояния wines отрисовать карточки вин (WineItem - image, wine, winery)

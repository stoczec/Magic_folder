import React from 'react';
import { products } from '../data/clothes';
import { ClothesItem } from './ClothesItem';

export const ClothesContainer = () => {
    return (
        <div className="ClothesContainer">
            {products
                // .filter((el) => el.price > 30)
                .map((el) => (
                    <ClothesItem {...el} key={el.id} />
                ))}
        </div>
    );
};

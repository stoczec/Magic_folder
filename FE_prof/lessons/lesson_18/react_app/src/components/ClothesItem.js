import React from 'react';
import { CountriesContainer } from './CountriesContainer';
export const ClothesItem = ({ title, size, price, countries }) => {
    return (
        <div className="ClothesItem">
            <p>Title: {title}</p>
            <p>Pize: {size}</p>
            <p>Price: {price}$</p>
            <CountriesContainer countries={countries} />
        </div>
    );
};

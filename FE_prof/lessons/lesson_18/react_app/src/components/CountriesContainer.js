import React from 'react';
import { CountryItem } from './CountryItem';

export const CountriesContainer = ({ countries }) => {
    return (
        <div>
            Coutries:
            {countries.length === 0 ? (
                <p>No countries</p>
            ) : (
                countries.map((el) => <CountryItem key={el.id} {...el} />)
            )}
        </div>
    );
};

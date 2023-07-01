import React from 'react';
import '../Cards/Cards.css';

export const Cards = ({ title, price, country, address, city, street }) => {
    return (
        <div className="card">
            <h2>Title: {title}</h2>
            <p>Price: {price}$</p>
            <p>Country: {country}</p>
            <p>
                Address: <br />- {address.city}
                <br />- {address.street}
            </p>
        </div>
    );
};

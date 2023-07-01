import React from 'react';

export default function Product({ id, title, price, country }) {
    return (
        <div>
            <p>ID:{id}</p>
            <p>Title:{title}</p>
            <p>Price:{price}$</p>
            <p>Country:{country}</p>
        </div>
    );
}

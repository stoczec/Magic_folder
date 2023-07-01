import React from 'react';
import { photos } from '../../data/photos';

export default function PhotosContainer() {
    return (
        <div>
            {photos.map((el) => (
                <img key={el.id} src={el.url} alt={el.title}></img>
            ))}
        </div>
    );
}

import React from 'react';
import style from './index.module.css';

export const Filter = ({ brand, color, socket }) => {
  return (
    <option value={brand || color || socket} style={{ backgroundColor: color }}>
      {brand || color || socket}
    </option>
  );
};

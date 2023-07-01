// Задача: создать компонент, который будет рендерит модальное окно.
// 1. Отображается поверх всего остального
// 2. Фон: rgba(0,0,0,0.5)
// 3. Занимает все пространство (100wh, 100vw)
// 4. В нем содержится div, ширина - 200 пикселей, высота - 150 пикселей. Фон - белый, рамки закругленные.
// Расположить div в 10% от верхней рамки родителя, и центрировать по горизонтали
// 5. Компонент должен принимать в пропсах текст, который будет размещен в div из п.4

import React from 'react';
import style from './index.module.css';
import { useSelector } from 'react-redux';
export const ModalComponent = ({ text }) => {
  const shouldShow = useSelector((state) => state.shouldShowModal);

  return (
    shouldShow && (
      <div className={style.modal_container}>
        <div className={style.modal_content}>{text}</div>
      </div>
    )
  );
};

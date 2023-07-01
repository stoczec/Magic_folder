import React from 'react';
import s from './HeaderContainer.module.css';
import { HeaderMenu } from '../HeaderContainer/HeaderMenu/HeaderMenu';

export const HeaderContainer = () => {
    return (
        <div className={s.header__container}>
            <HeaderMenu />
        </div>
    );
};

import React from 'react';
import { CardsContainer } from '../../components/CardsContainer';
import { FiltersContainer } from '../../components/FiltersContainer';

export const MainPage = () => {
  return (
    <div>
      <FiltersContainer />
      <CardsContainer />
    </div>
  );
};

import React from 'react';
import { AddTeamForm } from '../../components/AddTeamForm/AddTeamForm';
import { AddPlayerForm } from '../../components/AddPlayerForm/AddPlayerForm';

export const ConfigurationsPage = () => {
  return (
    <div>
      <AddTeamForm />
      <AddPlayerForm />
    </div>
  );
};

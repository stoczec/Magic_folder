import { users_data } from '../../data/users_data';

const CHANGE_USER = 'CHANGE_USER';
export const changeUser = (payload) => ({ type: CHANGE_USER, payload });

export const usersReducer = (state = users_data, action) => {
  if (action.type === CHANGE_USER) {
    return [...state, { first_name: action.payload }];
  }
  return state;
};

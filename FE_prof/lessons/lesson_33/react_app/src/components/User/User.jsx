import React, { useEffect } from 'react';
import style from './User.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeUser } from '../../store/Redusers/usersReducer';

export const User = () => {
  const users_state = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeUser('ffef'));
  }, []);

  return (
    <div>
      {/* <input
        type="text"
        onChange={(event) => dispatch(changeUser(event.target.value))}
      /> */}
      {users_state.map((user, idx) => (
        <div key={idx}>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  );
};

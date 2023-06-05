import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUsersThunk } from 'redux/users/operations';

import { usersSelector } from 'redux/users/selectors';

export const UsersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);
  const allUsers = useSelector(usersSelector);
  return (
    <ul>
      {allUsers.map(el => (
        <li key={el.id}>
          <Link>{el.name}</Link>
        </li>
      ))}
    </ul>
  );
};

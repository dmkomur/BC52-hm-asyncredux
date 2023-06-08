import { useSelector } from 'react-redux';
import { userSelector } from 'redux/users/selectors';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/auth/authOperations';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(userSelector);
  return (
    <>
      <p>Welcome {userName}</p>
      <button onClick={() => dispatch(logoutThunk())}>logout</button>
    </>
  );
};

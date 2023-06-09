import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/auth/authOperations';
import { authSelector } from 'redux/auth/authSelectors';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelector);
  console.log(userName);
  return (
    <>
      <p>{`Welcome ${userName}`}</p>
      <button onClick={() => dispatch(logoutThunk())}>logout</button>
    </>
  );
};

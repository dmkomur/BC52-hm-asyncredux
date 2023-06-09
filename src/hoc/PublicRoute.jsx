import { useSelector } from 'react-redux';
import { tokenSelector } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted }) => {
  const isLogedIn = useSelector(tokenSelector);
  const shouldRedirect = restricted && isLogedIn;
  return !shouldRedirect ? children : <Navigate to="/" />;
};

import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const handleForm = e => {
    e.preventDefault();
    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(loginThunk(user));
  };
  return (
    <form onSubmit={handleForm}>
      <label>
        email
        <input type="email" name="email" />
      </label>
      <label>
        password
        <input type="text" name="password" />
      </label>
      <button>Login</button>
    </form>
  );
};

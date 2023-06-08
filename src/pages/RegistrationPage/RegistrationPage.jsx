import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';
export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const handleForm = e => {
    e.preventDefault();
    const user = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(registerThunk(user));
  };
  return (
    <form onSubmit={handleForm}>
      <label>
        name
        <input type="text" name="name" />
      </label>
      <label>
        email
        <input type="email" name="email" />
      </label>
      <label>
        password
        <input type="text" name="password" />
      </label>
      <button>Registrate</button>
    </form>
  );
};

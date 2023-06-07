import { useDispatch } from 'react-redux';
import { addUserThunk } from 'redux/users/operations';
import { useNavigate } from 'react-router-dom';
export const AddUserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSumbit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      avatar: e.target.elements.avatar.value,
      address: e.target.elements.adress.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
    };
    dispatch(addUserThunk(newUser));
    navigate('/users');
  };
  return (
    <form onSubmit={onSumbit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Phone number
        <input type="number" name="phone" />
      </label>
      <label>
        Adress
        <input type="text" name="adress" />
      </label>
      <label>
        Avatar url
        <input type="url" name="avatar" />
      </label>
      <button>save</button>
    </form>
  );
};

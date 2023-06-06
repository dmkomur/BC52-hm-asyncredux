import { deleteUserThunk } from 'redux/users/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export const Modal = ({ id, closeHandle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleYesBtnClick = id => {
    dispatch(deleteUserThunk(id));
    navigate('/users', { replace: true });
  };
  return (
    <div>
      <h3>are you sure?</h3>
      <button
        type="button"
        onClick={() => {
          handleYesBtnClick(id);
        }}
      >
        yes
      </button>
      <button type="button" onClick={closeHandle}>
        no
      </button>
    </div>
  );
};

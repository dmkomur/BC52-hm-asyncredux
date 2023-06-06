import { useEffect, useState } from 'react';
import { fetchUser } from 'redux/users/operations';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSelector } from 'redux/users/selectors';
import { useSelector } from 'react-redux';
import { Modal } from 'components/Modal/Modal';

export const UserDetailsPage = () => {
  const { id } = useParams();
  const [currentId, setCurrentId] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);
  const user = useSelector(userSelector);
  const closeModal = () => {
    setCurrentId('');
  };
  return (
    <>
      {user && (
        <div>
          <p>
            <b>name: </b>
            {user.name}
            <img src={user.avatar} width="240" alt={user.name} />
            <b>address: </b>
            {user.address}
          </p>
          <p>
            <b>email: </b>
            {user.email}
            <b>phone: </b>
            {user.phone}
          </p>
          <button type="button" onClick={() => setCurrentId(id)}>
            delete
          </button>
          {currentId && <Modal id={currentId} closeHandle={closeModal} />}
        </div>
      )}
    </>
  );
};

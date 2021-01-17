import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  firstName: 'React',
  lastName: 'Tracked',
};

type State = typeof initialState;

const EditPerson: React.FC = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((state: State) => state.firstName);
  const lastName = useSelector((state: State) => state.lastName);
  const setFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'setFirstName', firstName: e.target.value });
  };
  const setLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'setLastName', lastName: e.target.value });
  };
  return (
    <div>
      <div>
        First Name:
        <input value={firstName} onChange={setFirstName} />
      </div>
      <div>
        Last Name:
        <input value={lastName} onChange={setLastName} />
      </div>
      <br />
      {Math.random()}
    </div>
  );
};

export default EditPerson;

import { useState } from 'react';
import { useSelector } from 'react-redux';

const initialState = {
  firstName: 'React',
  lastName: 'Tracked',
};

type State = typeof initialState;

const ShowPerson: React.FC = () => {
  const [onlyFirstName, setOnlyFirstName] = useState(false);
  const firstName = useSelector((state: State) => state.firstName);
  const lastName = useSelector((state: State) =>
    onlyFirstName ? null : state.lastName,
  );
  return (
    <div>
      <button type="button" onClick={() => setOnlyFirstName((s) => !s)}>
        {onlyFirstName ? 'Showing only first name' : 'Showing full name'}
      </button>
      {onlyFirstName ? (
        <div>First Name: {firstName}</div>
      ) : (
        <div>
          Full Name: {firstName} {lastName}
        </div>
      )}
      <br />
      {Math.random()}
    </div>
  );
};

export default ShowPerson;

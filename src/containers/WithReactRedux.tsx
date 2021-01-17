import { createStore } from 'redux';
import { Provider } from 'react-redux';
import EditPerson from '@/components/EditPerson';
import ShowPerson from '@/components/ShowPerson';

const initialState = {
  firstName: 'React',
  lastName: 'Tracked',
};

type Action =
  | { type: 'setFirstName'; firstName: string }
  | { type: 'setLastName'; lastName: string };

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'setFirstName':
      return { ...state, firstName: action.firstName };
    case 'setLastName':
      return { ...state, lastName: action.lastName };
    default:
      return state;
  }
};

const store = createStore(reducer);

const WithReactRedux: React.FC = () => {
  return (
    <Provider store={store}>
      <EditPerson />
      <ShowPerson />
    </Provider>
  );
};

export default WithReactRedux;

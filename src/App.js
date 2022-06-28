/*COMPONENTS */
import { Navbar } from './Components/Navbar';
import { UserList } from './Components/UserList';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <UserList/>
    </Provider>
  );
}

export default App;

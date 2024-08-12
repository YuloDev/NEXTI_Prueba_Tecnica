import { Provider } from 'react-redux';
import EventosPage from './components/pages/EventosPage';
import { store } from './redux/store';
const App = () => (
  <Provider store={store}>
    <EventosPage />
  </Provider>
);

export default App;

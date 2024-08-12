import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import eventsReducer from '../features/events/eventsSlice';
import { render, screen } from '@testing-library/react';
const store = configureStore({ reducer: { events: eventsReducer } });

test('Dado_Que tengo una acción para agregar un evento_Cuando despache la acción_Entonces el evento debe ser agregado al estado', () => {
  store.dispatch({ type: 'events/addEvent', payload: { name: 'Evento de prueba' } });

  render(
    <Provider store={store}>
      <ListaEvento />
    </Provider>
  );

  expect(screen.getByText('Evento de prueba')).toBeInTheDocument();
});

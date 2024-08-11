import { render, screen, fireEvent } from '@testing-library/react';
import EventList from '../components/EventList';

test('Dado_Que tengo un evento en la lista_Cuando hago clic en "Eliminar"_Entonces el evento debe ser removido de la lista', () => {
  const events = [{ name: 'Evento para eliminar' }];

  render(<EventList events={events} />);

  fireEvent.click(screen.getByText('Eliminar'));

  expect(screen.queryByText('Evento para eliminar')).not.toBeInTheDocument();
});

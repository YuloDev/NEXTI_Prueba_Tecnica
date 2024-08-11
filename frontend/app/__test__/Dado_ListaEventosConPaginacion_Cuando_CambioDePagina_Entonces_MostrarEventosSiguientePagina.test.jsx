import { render, screen, fireEvent } from '@testing-library/react';
import EventList from '../components/EventList';

test('Dado_Que tengo una lista de eventos con paginación_Cuando cambio de página_Entonces debería mostrar los eventos de la nueva página', () => {
  const events = Array.from({ length: 30 }, (_, i) => ({ name: `Evento ${i + 1}` }));

  render(<EventList events={events} currentPage={1} />);

  fireEvent.click(screen.getByText('Página 2'));

  expect(screen.getByText('Evento 11')).toBeInTheDocument();
  expect(screen.queryByText('Evento 1')).not.toBeInTheDocument();
});

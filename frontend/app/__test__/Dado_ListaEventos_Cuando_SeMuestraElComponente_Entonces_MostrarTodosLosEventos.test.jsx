import { render, screen } from '@testing-library/react';
import EventList from '../components/EventList';

test('Dado_Que tengo una lista de eventos_Cuando renderizo el componente EventList_Entonces debería ver los nombres de los eventos en la pantalla', () => {
  const events = [
    { name: 'Evento 1' },
    { name: 'Evento 2' }
  ];

  render(<EventList events={events} />);

  expect(screen.getByText('Evento 1')).toBeInTheDocument();
  expect(screen.getByText('Evento 2')).toBeInTheDocument();
});

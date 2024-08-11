import { render, screen, fireEvent } from '@testing-library/react';
import EventForm from '../components/EventForm';

test('Dado_Que ingreso datos válidos en el formulario_Cuando hago clic en "Guardar"_Entonces el formulario debe enviar los datos correctamente', () => {
  render(<EventForm />);

  fireEvent.change(screen.getByLabelText('Fecha del evento'), { target: { value: '2024-12-01' } });
  fireEvent.change(screen.getByLabelText('Lugar del evento'), { target: { value: 'Auditorio Nacional' } });
  fireEvent.change(screen.getByLabelText('Descripción del evento'), { target: { value: 'Concierto de música clásica' } });
  fireEvent.change(screen.getByLabelText('Precio'), { target: { value: '50' } });

  fireEvent.click(screen.getByText('Guardar'));

  expect(screen.getByText('Evento guardado con éxito')).toBeInTheDocument();
});

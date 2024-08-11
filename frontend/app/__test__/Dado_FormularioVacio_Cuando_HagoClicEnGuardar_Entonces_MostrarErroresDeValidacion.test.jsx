import { render, screen, fireEvent } from '@testing-library/react';
import EventForm from '../components/EventForm';

test('Dado_Que el formulario está vacío_Cuando hago clic en "Guardar"_Entonces debería mostrar errores de validación', () => {
  render(<EventForm />);

  fireEvent.click(screen.getByText('Guardar'));

  expect(screen.getByText('La fecha es obligatoria')).toBeInTheDocument();
  expect(screen.getByText('El lugar es obligatorio')).toBeInTheDocument();
  expect(screen.getByText('La descripción es obligatoria')).toBeInTheDocument();
  expect(screen.getByText('El precio es obligatorio')).toBeInTheDocument();
});



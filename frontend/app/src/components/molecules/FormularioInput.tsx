import React, { useState } from 'react';
import Input from '../atoms/Input';
import { Evento } from '../../types/eventos';
import Button from '../atoms/Boton';

interface EventoFormProps {
  evento?: Evento;
  onSubmit: (evento: Omit<Evento, 'id'>) => void;
}

const EventoForm: React.FC<EventoFormProps> = ({ evento, onSubmit }) => {
  const [formData, setFormData] = useState<Omit<Evento, 'id'>>({
    fechaEvento: evento?.fechaEvento || '',
    lugarEvento: evento?.lugarEvento || '',
    descripcionEvento: evento?.descripcionEvento || '',
    precio: evento?.precio || 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'precio' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enviando formulario:', formData);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="date"
        name="fechaEvento"
        value={formData.fechaEvento}
        onChange={handleChange}
        placeholder="Fecha del evento"
      />
      <Input
        type="text"
        name="lugarEvento"
        value={formData.lugarEvento}
        onChange={handleChange}
        placeholder="Lugar del evento"
      />
      <Input
        type="text"
        name="descripcionEvento"
        value={formData.descripcionEvento}
        onChange={handleChange}
        placeholder="Descripción del evento"
      />
      <Input
        type="number"
        name="precio"
        value={formData.precio.toString()}
        onChange={handleChange}
        placeholder="Precio"
      />
      <Button type="submit">
        {evento ? 'Actualizar Evento' : 'Crear Evento'}
      </Button>
    </form>
  );
};

export default EventoForm;
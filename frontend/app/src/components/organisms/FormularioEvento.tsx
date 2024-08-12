import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import { Evento } from '../../types/eventos';
import Button from '../atoms/Boton';

interface EventoFormProps {
  evento?: Evento | null;
  onSubmit: (evento: Evento) => void;  // Ajustado para aceptar Evento completo
}

const EventoForm: React.FC<EventoFormProps> = ({ evento, onSubmit }) => {
  const [formData, setFormData] = useState<Omit<Evento, 'id'>>({
    fechaEvento: '',
    lugarEvento: '',
    descripcionEvento: '',
    precio: 0,
  });

  useEffect(() => {
    if (evento) {
      setFormData({
        fechaEvento: evento.fechaEvento,
        lugarEvento: evento.lugarEvento,
        descripcionEvento: evento.descripcionEvento,
        precio: evento.precio,
      });
    } else {
      setFormData({
        fechaEvento: '',
        lugarEvento: '',
        descripcionEvento: '',
        precio: 0,
      });
    }
  }, [evento]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'precio' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (evento) {
      // Pasar el evento completo si estamos editando
      onSubmit({ ...evento, ...formData });
    } else {
      // Pasar el evento sin id si estamos creando
      onSubmit({ ...formData, id: 0 } as Evento); // Asumimos id = 0 para creación, o ajustar según sea necesario
    }
    // Limpiar el formulario después de enviar si es necesario
    if (!evento) {
      setFormData({
        fechaEvento: '',
        lugarEvento: '',
        descripcionEvento: '',
        precio: 0,
      });
    }
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

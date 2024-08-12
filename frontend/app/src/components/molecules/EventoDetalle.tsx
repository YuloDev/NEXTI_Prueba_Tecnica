import React from 'react';
import { Evento } from '../../types/eventos';

interface EventoDetailsProps {
  evento: Evento;
}

const EventoDetails: React.FC<EventoDetailsProps> = ({ evento }) => (
  <div>
    <h2>{evento.descripcionEvento}</h2>
    <p>Fecha: {evento.fechaEvento}</p>
    <p>Lugar: {evento.lugarEvento}</p>
    <p>Precio: ${evento.precio}</p>
  </div>
);

export default EventoDetails;
import React from 'react';
import EventoList from '../organisms/ListaEventos';
import EventoDetails from '../molecules/EventoDetalle';
import EventoForm from '../organisms/FormularioEvento';
import { Evento } from '../../types/eventos';

interface EventoPageProps {
  eventos: Evento[];
  selectedEvento: Evento | null;
  onCreateEvento: (evento: Omit<Evento, 'id'>) => void;
  onUpdateEvento: (evento: Evento) => void;
  onDeleteEvento: (id: number) => void;
  onSelectEvento: (id: number) => void;
}

const EventoPage: React.FC<EventoPageProps> = ({
  eventos,
  selectedEvento,
  onCreateEvento,
  onUpdateEvento,
  onDeleteEvento,
  onSelectEvento,
}) => (
  <div>
    <h1>Eventos</h1>
    <div className="event-list">
      <EventoList
        eventos={eventos}
        onEdit={onSelectEvento}
        onDelete={onDeleteEvento}
      />
    </div>
    <h2>{selectedEvento ? 'Editar Evento' : 'Crear Nuevo Evento'}</h2>
    <div className="event-form">
      <EventoForm
        evento={selectedEvento || undefined}
        onSubmit={selectedEvento ? onUpdateEvento : onCreateEvento}
      />
    </div>
    {selectedEvento && (
      <div className="event-card">
        <h2>Detalles del Evento</h2>
        <EventoDetails evento={selectedEvento} />
      </div>
    )}
  </div>
);

export default EventoPage;

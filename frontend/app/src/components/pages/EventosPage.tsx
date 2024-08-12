import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import {
  fetchEventos,
  createEvento,
  updateEvento,
  deleteEvento,
  setSelectedEvento,
} from '../../redux/EventosSlice';
import { Evento } from '../../types/eventos';
import EventoPage from '../templates/GestionEventosTemplate';
const EventosPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { eventos, selectedEvento, loading, error } = useSelector(
    (state: RootState) => state.eventos
  );

  useEffect(() => {
    dispatch(fetchEventos());
  }, [dispatch]);

  const handleCreateEvento = (evento: Omit<Evento, 'id'>) => {
    dispatch(createEvento(evento));
  };

  const handleUpdateEvento = (evento: Evento) => {
    dispatch(updateEvento(evento));
  };

  const handleDeleteEvento = (id: number) => {
    dispatch(deleteEvento(id));
  };

  const handleSelectEvento = (id: number) => {
    dispatch(setSelectedEvento(id));
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <EventoPage
      eventos={eventos}
      selectedEvento={selectedEvento}
      onCreateEvento={handleCreateEvento}
      onUpdateEvento={handleUpdateEvento}
      onDeleteEvento={handleDeleteEvento}
      onSelectEvento={handleSelectEvento}
    />
  );
};

export default EventosPage;
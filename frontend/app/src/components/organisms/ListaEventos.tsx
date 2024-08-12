import React, { useState } from 'react';
import { Evento } from '../../types/eventos';
import Table from '../molecules/EventoRow';
import Button from '../atoms/Boton';

interface EventoListProps {
  eventos: Evento[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const EventoList: React.FC<EventoListProps> = ({ eventos, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = eventos.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(eventos.length / itemsPerPage);

  const headers = ['Descripción', 'Fecha', 'Lugar', 'Precio', 'Acciones'];

  return (
    <div>
      <Table headers={headers}>
        {currentItems.map((evento) => (
          <tr key={evento.id}>
            <td>{evento.descripcionEvento}</td>
            <td>{evento.fechaEvento}</td>
            <td>{evento.lugarEvento}</td>
            <td>${evento.precio}</td>
            <td>
              <Button onClick={() => onEdit(evento.id)}>Editar</Button>
              <Button onClick={() => onDelete(evento.id)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </Table>
      <div>
        <Button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Anterior
        </Button>
        <span>Página {currentPage} de {totalPages}</span>
        <Button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default EventoList;
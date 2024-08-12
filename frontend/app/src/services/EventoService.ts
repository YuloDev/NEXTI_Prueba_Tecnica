import { Evento } from '../types/eventos';

export class EventoService {
  private static apiUrl = 'http://localhost:58261/api/Eventos';

  public static async fetchEvents(): Promise<Evento[]> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching events');
      }

      const data: Evento[] = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  public static async fetchEventById(id: number): Promise<Evento | null> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching event');
      }

      const data: Evento = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public static async createEvent(evento: Omit<Evento, 'id'>): Promise<Evento | null> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/plain',
        },
        body: JSON.stringify(evento),
      });
  
      if (!response.ok) {
        throw new Error(`Error creating event: ${response.statusText}`);
      }
  
      const data: Evento = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  

  public static async updateEvent(evento: Evento): Promise<Evento | null> {
    try {
      const response = await fetch(`${this.apiUrl}/${evento.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(evento),
      });

      if (!response.ok) {
        throw new Error('Error updating event');
      }

      const data: Evento = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public static async deleteEvent(id: number): Promise<boolean> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error deleting event');
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

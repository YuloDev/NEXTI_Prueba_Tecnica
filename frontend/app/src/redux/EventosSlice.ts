import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Evento } from '../types/eventos';
import { EventoService } from '../services/EventoService';

interface EventoState {
  eventos: Evento[];
  selectedEvento: Evento | null;
  loading: boolean;
  error: string | null;
}

const initialState: EventoState = {
  eventos: [],
  selectedEvento: null,
  loading: false,
  error: null,
};

export const fetchEventos = createAsyncThunk('eventos/fetchEventos', async () => {
  return await EventoService.fetchEvents();
});

export const createEvento = createAsyncThunk(
  'eventos/createEvento',
  async (evento: Omit<Evento, 'id'>) => {
    return await EventoService.createEvent(evento);
  }
);

export const updateEvento = createAsyncThunk(
  'eventos/updateEvento',
  async (evento: Evento) => {
    return await EventoService.updateEvent(evento);
  }
);

export const deleteEvento = createAsyncThunk(
  'eventos/deleteEvento',
  async (id: number) => {
    await EventoService.deleteEvent(id);
    return id;
  }
);

const eventoSlice = createSlice({
  name: 'eventos',
  initialState,
  reducers: {
    setSelectedEvento: (state, action: PayloadAction<number | null>) => {
      state.selectedEvento = state.eventos.find(e => e.id === action.payload) || null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventos.fulfilled, (state, action) => {
        state.loading = false;
        state.eventos = action.payload;
      })
      .addCase(createEvento.fulfilled, (state, action) => {
        if (action.payload) {
          state.eventos.push(action.payload);
        }
      })
      .addCase(updateEvento.fulfilled, (state, action) => {
        if (action.payload) {
          const index = state.eventos.findIndex(e => e.id === action.payload?.id);
          if (index !== -1) {
            state.eventos[index] = action.payload;
          }
        }
      })
      .addCase(deleteEvento.fulfilled, (state, action) => {
        state.eventos = state.eventos.filter(e => e.id !== action.payload);
      });
  },
});

export const { setSelectedEvento } = eventoSlice.actions;
export default eventoSlice.reducer;
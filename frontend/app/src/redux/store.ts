import { configureStore } from '@reduxjs/toolkit';
import eventoReducer from './EventosSlice';

export const store = configureStore({
  reducer: {
    eventos: eventoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
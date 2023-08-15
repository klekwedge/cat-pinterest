import { configureStore } from '@reduxjs/toolkit';
import cats from '../slices/catsSlice/catsSlice';

const store = configureStore({
  reducer: {
    cats,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
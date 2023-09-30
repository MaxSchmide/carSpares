import { configureStore } from '@reduxjs/toolkit';
import api from './api/api';
import { favouritesSlice } from './slices/favourites';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [favouritesSlice.name]: favouritesSlice.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

export default store;

export * from './api/api';
export * from './api/categories.api';
export * from './slices/favourites';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

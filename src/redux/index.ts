import { configureStore } from '@reduxjs/toolkit';
import { favouritesSlice } from './slices/favourites';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    [favouritesSlice.name]: favouritesSlice.reducer,
  },
});

export default store;

export * from './slices/favourites';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

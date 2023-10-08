import { configureStore } from '@reduxjs/toolkit';
import { favouritesSlice } from './slices/favourites';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cartSlice } from './slices/cart';

const store = configureStore({
  reducer: {
    [favouritesSlice.name]: favouritesSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});

export default store;

export * from './slices/favourites';
export * from './slices/cart';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

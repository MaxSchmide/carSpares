import { configureStore } from '@reduxjs/toolkit';
import api from './api/api';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

export default store;

export * from './api/api';
export * from './api/categories.api';

'use client';

import { IProductCard } from '@/types/product';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  items: IProductCard[];
};

const initialState: InitialState = {
  items: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavouriteItem: (state, action: PayloadAction<IProductCard>) => {
      if (state.items.some((product) => product._id === action.payload._id)) {
        state.items = state.items.filter(
          (product) => product._id !== action.payload._id,
        );
      } else {
        state.items.push(action.payload);
      }

      localStorage.setItem('favourites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavouriteItem } = favouritesSlice.actions;

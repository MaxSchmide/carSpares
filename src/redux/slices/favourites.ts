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
    initFavourites: (state) => {
      state.items = JSON.parse(localStorage.getItem('cs-fav') || '[]');
    },
    toggleFavouriteItem: (state, action: PayloadAction<IProductCard>) => {
      if (state.items.some((product) => product._id === action.payload._id)) {
        state.items = state.items.filter(
          (product) => product._id !== action.payload._id,
        );
      } else {
        state.items.push(action.payload);
      }

      localStorage.setItem('cs-fav', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavouriteItem, initFavourites } = favouritesSlice.actions;

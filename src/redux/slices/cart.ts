import { IProductCart } from '@/types/product';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  items: IProductCart[];
};

const initialState: InitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initCart: (state) => {
      state.items = JSON.parse(localStorage.getItem('cs-cart') || '[]');
    },
    addProductToCart: (state, action: PayloadAction<IProductCart>) => {
      state.items.push(action.payload);

      localStorage.setItem('cs-cart', JSON.stringify(state.items));
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (product) => product._id !== action.payload,
      );

      localStorage.setItem('cs-cart', JSON.stringify(state.items));
    },
    increaseCount: (state, action: PayloadAction<string>) => {
      state.items = state.items.map((product) => {
        if (product._id === action.payload) {
          return {
            ...product,
            count: product.count + 1,
          };
        }
        return product;
      });

      localStorage.setItem('cs-cart', JSON.stringify(state.items));
    },
    decreaseCount: (state, action: PayloadAction<string>) => {
      state.items = state.items.map((product) => {
        if (product._id === action.payload) {
          return {
            ...product,
            count: product.count - 1,
          };
        }
        return product;
      });

      localStorage.setItem('cs-cart', JSON.stringify(state.items));
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  initCart,
  increaseCount,
  decreaseCount,
} = cartSlice.actions;

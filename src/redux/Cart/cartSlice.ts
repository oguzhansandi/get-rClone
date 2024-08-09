import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../models';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_TO_CART: (state, action: PayloadAction<CartItem>) => {
      const { id, name, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id );
      if(!existingItem){
        state.items.push({ id, name, price, count: 1 });
      }
    },
    REMOVE_FROM_CART: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    INCREMENT_COUNT: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.count += 1;
      }
    },
    DECREMENT_COUNT: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem && existingItem.count > 1) {
        existingItem.count -= 1;
      }
    },
    CLEAR_ITEM: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    CLEAR_CART: state => {
      state.items = [];
    },
  },
});

export const { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_COUNT, DECREMENT_COUNT, CLEAR_ITEM, CLEAR_CART } = cartSlice.actions;
export type {CartItem};
export const calculateTotalPrice = (items: CartItem[]) => {
  const totalPrice =  items.reduce((total, item) => total + item.price * item.count, 0)
  return totalPrice.toFixed(2);
}
export default cartSlice.reducer;

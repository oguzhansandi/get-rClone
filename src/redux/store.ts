import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cart/cartSlice'
import userReducer from './User/userSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

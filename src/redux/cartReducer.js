import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.product === item.product,
      );

      if (existingItem) {
        existingItem.qty = item.qty;
        return;
      }

      state.cartItems.push(item);
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.product !== action.payload,
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

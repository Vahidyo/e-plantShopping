import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      console.log("test is passed");
      const plant = state[action.payload];
      if(plant){
        state.items.push(plant)
      }
    },

    removeItem: (state, action) => {
    },

    updateQuantity: (state, action) => {
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

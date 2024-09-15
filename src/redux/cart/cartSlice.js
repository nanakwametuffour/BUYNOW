import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  product: [],
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddToCart: (state, action) => {
      const item = state.product.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.product.push(action.payload);
      }
    },
    setIsOpen: (state, action) => {},
    setIsClose: (state, action) => {
      state.isOpen = action.payload;
    },
    deleteItem:(state, action)=>{
      state.product = state.product.filter((item)=>item.id!==action.payload)
    },
    resetItem:(state)=>{
       state.product = [];
    }
  },
});

export const { setAddToCart, setIsOpen, setIsClose, resetItem,deleteItem } = cartSlice.actions;

export default cartSlice.reducer;

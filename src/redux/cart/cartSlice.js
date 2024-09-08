import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload.isOpen;
    },
    setIsClose: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const {setIsOpen, setIsClose} = cartSlice.actions;

export default cartSlice.reducer;

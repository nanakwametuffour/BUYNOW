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
    setIsOpen: (state) => {
      state.isOpen = true;
    },
    setIsClose: (state) => {
      state.isOpen = false;
    },
     incrementQty:(state, action)=>{
      const item = state.product.find((item)=>item.id === action.payload)
           item.quantity++
     },

     decrementQty:(state, action)=>{
      const item = state.product.find((item)=>item.id===action.payload)
           if(item.quantity ===1){
             item.quantity=1
           }else{
            item.quantity--
           }
     },

    deleteItem:(state, action)=>{
      state.product = state.product.filter((item)=>item.id!==action.payload)
    },
    resetItem:(state)=>{
       state.product = [];
    }
  },
});

export const { setAddToCart, setIsOpen, setIsClose, resetItem,deleteItem,incrementQty,decrementQty } = cartSlice.actions;

export default cartSlice.reducer;

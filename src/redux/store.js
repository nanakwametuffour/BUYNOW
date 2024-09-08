import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "../redux/cart/cartSlice";
export const store = configureStore({
  reducer: {
    cartProduct: rootSlice,
  },
});

export default store;

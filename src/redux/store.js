import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "../redux/cart/cartSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {cart: persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export  let persistor = persistStore(store);

export default store;



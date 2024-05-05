import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import formReducer from "./formSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    form: formReducer
  },
});

export default store;

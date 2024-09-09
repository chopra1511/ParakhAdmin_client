import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import orderSlice from "./reducers/orderSlice";


const store = configureStore({
  reducer: {
    products: productSlice,
    orders: orderSlice
  },
});

export default store;

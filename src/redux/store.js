import { configureStore } from "@reduxjs/toolkit";
import { productListReducer, productDetailsReducer } from "./productReducers";
import { cartReducer } from "./cartReducer";
import { actionLoggerMiddleware } from "./actionLoggerMiddleware";

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer,
  devTools: import.meta.env.DEV
    ? { name: "Northstar Shop" }
    : false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(actionLoggerMiddleware),
});
export default store;

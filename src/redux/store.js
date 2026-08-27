import { configureStore } from "@reduxjs/toolkit";
import { productListReducer, productDetailsReducer } from "./productReducers";
import { cartReducer } from "./cartReducer";

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
};

const store = configureStore({ reducer });
export default store;

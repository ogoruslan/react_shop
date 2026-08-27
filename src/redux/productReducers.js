import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
  name: "productList",
  initialState: { products: [] },
  reducers: {
    listRequest(state) {
      state.loading = true;
      state.error = undefined;
    },
    listSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    listFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: { product: {} },
  reducers: {
    detailsRequest(state) {
      state.loading = true;
      state.error = undefined;
    },
    detailsSuccess(state, action) {
      state.loading = false;
      state.product = action.payload;
    },
    detailsFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { listRequest, listSuccess, listFail } = productListSlice.actions;
export const { detailsRequest, detailsSuccess, detailsFail } =
  productDetailsSlice.actions;
export const productListReducer = productListSlice.reducer;
export const productDetailsReducer = productDetailsSlice.reducer;

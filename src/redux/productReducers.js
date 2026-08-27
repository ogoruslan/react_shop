import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../services/productService";

export const fetchProductList = createAsyncThunk(
  "products/fetchList",
  async (_, { signal, rejectWithValue }) => {
    try {
      return await fetchProducts(undefined, signal);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchProductDetails = createAsyncThunk(
  "products/fetchDetails",
  async (productId, { signal, rejectWithValue }) => {
    try {
      const [product] = await fetchProducts(productId, signal);
      return product;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { listRequest, listSuccess, listFail } = productListSlice.actions;
export const { detailsRequest, detailsSuccess, detailsFail } =
  productDetailsSlice.actions;
export const productListReducer = productListSlice.reducer;
export const productDetailsReducer = productDetailsSlice.reducer;

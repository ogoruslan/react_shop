import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchProductList,
} from "../redux/productReducers";

export function useProducts(productId) {
  const dispatch = useDispatch();
  const listState = useSelector((state) => state.productList);
  const detailsState = useSelector((state) => state.productDetails);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetails(productId));
    } else {
      dispatch(fetchProductList());
    }
  }, [dispatch, productId]);

  if (productId) {
    return {
      loading: detailsState.loading,
      products: detailsState.product ? [detailsState.product] : [],
      error: detailsState.error || "",
    };
  }

  return {
    loading: listState.loading,
    products: listState.products,
    error: listState.error || "",
  };
}

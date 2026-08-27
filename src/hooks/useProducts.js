import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

export function useProducts(productId) {
  const [result, setResult] = useState({
    loading: true,
    products: [],
    error: "",
  });

  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(productId, controller.signal)
      .then((products) => setResult({ loading: false, products, error: "" }))
      .catch((error) => {
        if (error.name !== "AbortError")
          setResult({ loading: false, products: [], error: error.message });
      });

    return () => controller.abort();
  }, [productId]);

  return result;
}

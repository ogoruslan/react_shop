import { useState } from "react";
import { Alert, Box, Grid, Stack, Typography } from "@mui/material";
import LoadingState from "../components/LoadingState";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import { useProducts } from "../hooks/useProducts";
import { categories, getProductCategory } from "../services/productService";

export default function HomePage() {
  const { loading, products, error } = useProducts();
  const [search, setSearch] = useState("");
  const [categorySlug, setCategorySlug] = useState("all");
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      categorySlug === "all" ||
      getProductCategory(product).slug === categorySlug;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Box className="hero" sx={{ mb: 5 }}>
        <Typography variant="overline" color="secondary.main">
          Curated essentials
        </Typography>
        <Typography variant="h1" sx={{ maxWidth: 720 }}>
          Речі, які добре працюють разом.
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 580, mt: 2 }}
        >
          Зібрали простий каталог із чесними описами, швидким кошиком і приємним
          шляхом до замовлення.
        </Typography>
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ sm: "center" }}
        sx={{ mb: 3, gap: 1 }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Каталог
          </Typography>
          <Typography color="text.secondary">
            Популярні позиції цього тижня
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {filteredProducts.length || 0} позицій
        </Typography>
      </Stack>
      <ProductFilter
        search={search}
        onSearchChange={setSearch}
        categorySlug={categorySlug}
        onCategoryChange={setCategorySlug}
        categories={categories}
      />
      {loading && <LoadingState />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && !filteredProducts.length && (
        <Alert severity="info">За вашим запитом товарів не знайдено.</Alert>
      )}
      {!loading && !error && filteredProducts.length > 0 && (
        <Grid container spacing={2}>
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

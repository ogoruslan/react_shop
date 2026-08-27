import { Link, useParams } from "react-router-dom";
import { Alert, Box, Button, Grid, Stack, Typography } from "@mui/material";
import LoadingState from "../components/LoadingState";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import { categories, getProductCategory } from "../services/productService";

export default function CategoryProductsPage() {
  const { slug } = useParams();
  const { loading, products, error } = useProducts();
  const category = categories.find((item) => item.slug === slug);
  const categoryProducts = products.filter(
    (product) => getProductCategory(product).slug === slug,
  );

  if (loading) return <LoadingState />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!category) return <Alert severity="warning">Категорію не знайдено</Alert>;

  return (
    <Stack spacing={4}>
      <Box>
        <Button
          component={Link}
          to="/categories"
          variant="text"
          sx={{ mb: 2, textTransform: "none" }}
        >
          Назад до категорій
        </Button>
        <Typography variant="overline" color="secondary.main">
          Категорія
        </Typography>
        <Typography variant="h1" sx={{ mt: 1 }}>
          {category.name}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
          {category.description}
        </Typography>
      </Box>

      {categoryProducts.length === 0 ? (
        <Alert severity="info">У цій категорії поки немає товарів.</Alert>
      ) : (
        <Grid container spacing={2}>
          {categoryProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
}

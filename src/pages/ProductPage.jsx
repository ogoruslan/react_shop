import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import { AddShoppingCart, ArrowBack } from "@mui/icons-material";
import LoadingState from "../components/LoadingState";
import { addItem } from "../redux/cartReducer";
import { useProducts } from "../hooks/useProducts";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, products, error } = useProducts(id);
  const product = products[0];
  const addToCart = () => {
    dispatch(
      addItem({
        product: product.id,
        name: product.title,
        description: product.body,
        price: product.price,
        image: product.image,
        qty: 1,
      }),
    );
    navigate("/cart");
  };

  if (loading) return <LoadingState />;
  if (error || !product)
    return <Alert severity="error">{error || "Товар не знайдено"}</Alert>;

  return (
    <>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        sx={{ mb: 3, textTransform: "none" }}
      >
        Назад до каталогу
      </Button>
      <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              width: "100%",
              display: "block",
              borderRadius: 2,
              aspectRatio: "3 / 2",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="overline" color="secondary.main">
            Item {product.id}
          </Typography>
          <Typography
            variant="h2"
            sx={{ textTransform: "capitalize", fontWeight: 800 }}
          >
            {product.title}
          </Typography>
          <Typography color="text.secondary" sx={{ my: 3, lineHeight: 1.8 }}>
            {product.body}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
            ${product.price}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            size="large"
            startIcon={<AddShoppingCart />}
            onClick={addToCart}
            sx={{ textTransform: "none" }}
          >
            Додати до кошика
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { addItem } from "../redux/cartReducer";
import { getProductCategory } from "../services/productService";
import { memo, useCallback } from "react";

const cardColors = ["#fff3e6", "#e8f3f1", "#eef0f8", "#f8edf1"];

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cardColor = cardColors[(product.id - 1) % cardColors.length];
  const category = getProductCategory(product);
  const addToCart = useCallback(
    () =>
      dispatch(
        addItem({
          product: product.id,
          name: product.title,
          description: product.body,
          price: product.price,
          image: product.image,
          qty: 1,
        }),
      ),
    [dispatch, product],
  );

  return (
    <Card
      className="product-card"
      sx={{
        backgroundColor: cardColor,
        color: "#17324d",
        border: "1px solid rgba(23, 50, 77, 0.16)",
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ aspectRatio: "3 / 2" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="overline" sx={{ color: "#9a4b19" }}>
          {category.name} · Item {String(product.id).padStart(2, "0")}
        </Typography>
        <Typography
          variant="h6"
          sx={{ textTransform: "capitalize", fontWeight: 800 }}
        >
          {product.title}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            color: "#334155",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.body}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 800 }}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>
        <Button
          component={Link}
          to={`/product/${product.id}`}
          variant="outlined"
          sx={{
            color: "#17324d",
            borderColor: "#17324d",
            textTransform: "none",
          }}
        >
          Деталі
        </Button>
        <Button
          onClick={addToCart}
          variant="contained"
          startIcon={<AddShoppingCart />}
          sx={{
            backgroundColor: "#17324d",
            color: "#fff",
            textTransform: "none",
            "&:hover": { backgroundColor: "#0f2335" },
          }}
        >
          До кошика
        </Button>
      </CardActions>
    </Card>
  );
}

export default memo(ProductCard);

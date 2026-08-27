import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { removeItem } from "../redux/cartReducer";

export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const total = items.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty || 1),
    0,
  );

  if (!items.length)
    return (
      <Paper sx={{ p: { xs: 3, md: 6 }, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          Кошик порожній
        </Typography>
        <Typography color="text.secondary" sx={{ my: 2 }}>
          Додайте щось із каталогу, щоб продовжити.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ textTransform: "none" }}
        >
          Перейти до каталогу
        </Button>
      </Paper>
    );

  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
        Ваш кошик
      </Typography>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack divider={<Divider />} spacing={2}>
            {items.map((item) => (
              <Stack
                key={item.product}
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Box
                  component="img"
                  src={item.image}
                  alt=""
                  sx={{
                    width: 96,
                    height: 72,
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    sx={{ textTransform: "capitalize", fontWeight: 700 }}
                  >
                    {item.name}
                  </Typography>
                  <Typography color="text.secondary">
                    ${item.price} × {item.qty || 1}
                  </Typography>
                </Box>
                <Button
                  color="error"
                  onClick={() => dispatch(removeItem(item.product))}
                  sx={{ textTransform: "none" }}
                >
                  Видалити
                </Button>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Разом</Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, my: 2 }}>
              ${total.toFixed(2)}
            </Typography>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate("/checkout")}
              sx={{ textTransform: "none" }}
            >
              Оформити замовлення
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

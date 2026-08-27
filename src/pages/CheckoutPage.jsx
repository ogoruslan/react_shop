import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const update = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  if (submitted)
    return (
      <Paper sx={{ p: 5, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          Замовлення прийнято
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2 }}>
          Дякуємо, {form.name}. Ми надішлемо підтвердження на {form.email}.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ mt: 3, textTransform: "none" }}
        >
          Повернутися до каталогу
        </Button>
      </Paper>
    );

  return (
    <Box sx={{ maxWidth: 640, mx: "auto" }}>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
        Оформлення
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Заповніть контактні дані для доставки.
      </Typography>
      <Paper
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
        sx={{ p: { xs: 2, sm: 4 } }}
      >
        <Stack spacing={2.5}>
          <TextField
            required
            label="Ім'я"
            name="name"
            value={form.name}
            onChange={update}
          />
          <TextField
            required
            type="email"
            label="Email"
            name="email"
            value={form.email}
            onChange={update}
          />
          <TextField
            required
            multiline
            minRows={3}
            label="Адреса доставки"
            name="address"
            value={form.address}
            onChange={update}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ textTransform: "none" }}
          >
            Підтвердити замовлення
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

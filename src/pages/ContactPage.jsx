import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Вкажіть ім'я щонайменше з 2 символів"),
  email: z.string().trim().email("Вкажіть коректну email-адресу"),
  message: z
    .string()
    .trim()
    .min(10, "Повідомлення має містити щонайменше 10 символів"),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = () => reset();

  return (
    <Box sx={{ maxWidth: 720, mx: "auto" }}>
      <Typography variant="overline" color="secondary.main">
        Зв'язатися з нами
      </Typography>
      <Typography variant="h1" sx={{ mt: 1 }}>
        Контакти
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 2, mb: 4, lineHeight: 1.7 }}>
        Маєте запитання про товар або замовлення? Напишіть нам, і ми відповімо
        найближчим часом.
      </Typography>

      {isSubmitSuccessful && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Дякуємо за повідомлення. Ми зв'яжемося з вами найближчим часом.
        </Alert>
      )}

      <Paper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ p: { xs: 2, sm: 4 } }}
        noValidate
      >
        <Stack spacing={2.5}>
          <TextField
            label="Ім'я"
            {...register("name")}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
          <TextField
            label="Email"
            type="email"
            {...register("email")}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <TextField
            label="Повідомлення"
            multiline
            minRows={5}
            {...register("message")}
            error={Boolean(errors.message)}
            helperText={errors.message?.message}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ textTransform: "none" }}
          >
            Надіслати повідомлення
          </Button>
        </Stack>
      </Paper>

      <Button
        component={Link}
        to="/"
        variant="text"
        sx={{ mt: 2, textTransform: "none" }}
      >
        Повернутися до каталогу
      </Button>
    </Box>
  );
}

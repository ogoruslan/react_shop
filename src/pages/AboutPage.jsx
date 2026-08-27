import { Link } from "react-router-dom";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";

const principles = [
  {
    number: "01",
    title: "Добре підібране",
    text: "Збираємо речі, які легко уявити у щоденному житті й поєднати між собою.",
  },
  {
    number: "02",
    title: "Чесно описане",
    text: "Показуємо прості характеристики та зрозумілу ціну без зайвого шуму.",
  },
  {
    number: "03",
    title: "Легко замовити",
    text: "Кошик і оформлення залишаються короткими, щоб покупка не перетворювалась на квест.",
  },
];

export default function AboutPage() {
  return (
    <Stack spacing={{ xs: 5, md: 8 }}>
      <Box sx={{ maxWidth: 760 }}>
        <Typography variant="overline" color="secondary.main">
          Про Northstar
        </Typography>
        <Typography variant="h1" sx={{ mt: 1, maxWidth: 700 }}>
          Простий магазин для речей, до яких хочеться повертатися.
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mt: 3, maxWidth: 620, lineHeight: 1.7 }}
        >
          Northstar допомагає знаходити корисні речі без нескінченного вибору.
          Ми залишаємо в каталозі тільки зрозуміле, практичне й приємне.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {principles.map((principle) => (
          <Grid key={principle.number} size={{ xs: 12, md: 4 }}>
            <Paper sx={{ height: "100%", p: { xs: 3, md: 4 } }}>
              <Typography variant="overline" color="secondary.main">
                {principle.number}
              </Typography>
              <Typography variant="h5" sx={{ mt: 2, fontWeight: 800 }}>
                {principle.title}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ mt: 1.5, lineHeight: 1.7 }}
              >
                {principle.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
          pt: { xs: 4, md: 6 },
          maxWidth: 720,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          Почнімо з того, що вам потрібно.
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
          Перегляньте каталог і додайте до кошика те, що пасує саме вашому ритму
          життя.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ mt: 3, textTransform: "none" }}
        >
          Перейти до каталогу
        </Button>
      </Box>
    </Stack>
  );
}

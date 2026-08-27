import { Link } from "react-router-dom";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { categories } from "../services/productService";

export default function CategoriesPage() {
  return (
    <Stack spacing={{ xs: 5, md: 7 }}>
      <Box sx={{ maxWidth: 720 }}>
        <Typography variant="overline" color="secondary.main">
          Огляд каталогу
        </Typography>
        <Typography variant="h1" sx={{ mt: 1 }}>
          Категорії
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
          Оберіть напрямок і перегляньте речі, підібрані для вашого способу
          життя.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item key={category.slug} xs={12} sm={6}>
            <Paper
              component={Link}
              to={`/categories/${category.slug}`}
              sx={{
                height: "100%",
                display: "block",
                color: "inherit",
                overflow: "hidden",
                transition: "transform 180ms ease, box-shadow 180ms ease",
                "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
              }}
            >
              <Box
                component="img"
                src={category.image}
                alt={category.name}
                sx={{
                  width: "100%",
                  height: 220,
                  display: "block",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="overline" color="secondary.main">
                  Категорія
                </Typography>
                <Typography variant="h4" sx={{ mt: 1, fontWeight: 800 }}>
                  {category.name}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ mt: 1.5, lineHeight: 1.7 }}
                >
                  {category.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

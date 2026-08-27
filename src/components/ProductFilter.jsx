import { MenuItem, Stack, TextField } from "@mui/material";

export default function ProductFilter({
  search,
  onSearchChange,
  categorySlug,
  onCategoryChange,
  categories,
}) {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
      <TextField
        label="Пошук товару"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        size="small"
        fullWidth
      />
      <TextField
        select
        label="Категорія"
        value={categorySlug}
        onChange={(event) => onCategoryChange(event.target.value)}
        size="small"
        fullWidth
      >
        <MenuItem value="all">Усі категорії</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.slug} value={category.slug}>
            {category.name}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
}

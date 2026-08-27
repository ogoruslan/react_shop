import { Box, CircularProgress } from "@mui/material";

export default function LoadingState({ minHeight = 240 }) {
  return (
    <Box
      role="status"
      aria-label="Завантаження"
      sx={{ display: "grid", placeItems: "center", minHeight }}
    >
      <CircularProgress />
    </Box>
  );
}

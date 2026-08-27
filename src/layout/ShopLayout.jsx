import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { DarkMode, LightMode, ShoppingBagOutlined } from "@mui/icons-material";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const navItems = [
  { to: "/", label: "Каталог" },
  { to: "/categories", label: "Категорії" },
  { to: "/about", label: "Про нас" },
  { to: "/contact", label: "Контакти" },
  { to: "/cart", label: "Кошик" },
];

export default function ShopLayout({ onToggleTheme, themeMode }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce(
    (total, item) => total + Number(item.qty || 1),
    0,
  );

  return (
    <Box className="app-shell">
      <AppBar position="sticky" elevation={0} className="shop-bar">
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ gap: 3, minHeight: { xs: 68, sm: 76 } }}
          >
            <Typography
              component={Link}
              to="/"
              variant="h5"
              sx={{
                color: "inherit",
                fontWeight: 800,
                letterSpacing: "0.02em",
                mr: "auto",
              }}
            >
              Northstar
            </Typography>
            <Box
              component="nav"
              sx={{ display: "flex", gap: { xs: 0.5, sm: 1 } }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  sx={{
                    color: "inherit",
                    textTransform: "none",
                    fontWeight: 700,
                    "&.active": { color: "secondary.main" },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                component={NavLink}
                to="/cart"
                aria-label="Відкрити кошик"
                sx={{
                  minWidth: 44,
                  color: "inherit",
                  "&.active": { color: "secondary.main" },
                }}
              >
                <Badge badgeContent={cartCount} color="secondary">
                  <ShoppingBagOutlined />
                </Badge>
              </Button>
              <Tooltip
                title={
                  themeMode === "light"
                    ? "Увімкнути темну тему"
                    : "Увімкнути світлу тему"
                }
              >
                <IconButton
                  onClick={onToggleTheme}
                  aria-label={
                    themeMode === "light"
                      ? "Увімкнути темну тему"
                      : "Увімкнути світлу тему"
                  }
                  sx={{ color: "inherit" }}
                >
                  {themeMode === "light" ? <DarkMode /> : <LightMode />}
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="main" sx={{ py: { xs: 3, md: 6 } }}>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
      <Box
        component="footer"
        sx={{ borderTop: "1px solid", borderColor: "divider", py: 3 }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary">
            Northstar Market · Дані каталогу з Fake Store API
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

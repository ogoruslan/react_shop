import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import ShopLayout from "./layout/ShopLayout";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("northstar-theme") || "light",
  );
  const theme = createTheme({
    palette: {
      mode,
      primary: { main: mode === "dark" ? "#9ec5e8" : "#17324d" },
      secondary: { main: "#e47b39" },
      background:
        mode === "dark"
          ? { default: "#101820", paper: "#182632" }
          : { default: "#f5f1eb", paper: "#fffdf9" },
    },
    typography: {
      fontFamily: "'Manrope', 'Segoe UI', sans-serif",
      h1: { fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400 },
      h2: { fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400 },
      h3: { fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400 },
    },
    shape: { borderRadius: 10 },
  });
  const toggleTheme = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
    localStorage.setItem("northstar-theme", nextMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          element={<ShopLayout onToggleTheme={toggleTheme} themeMode={mode} />}
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:slug" element={<CategoryProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

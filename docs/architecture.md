# Архітектура

Застосунок побудований навколо React, React Router, MUI та Redux Toolkit.

```mermaid
flowchart TD
  Entry[src/main.jsx] --> Provider[Redux Provider]
  Provider --> App[App.jsx]
  App --> Theme[MUI ThemeProvider]
  App --> Router[React Router]
  Router --> Layout[ShopLayout]
  Layout --> Pages[Pages]
  Pages --> Hooks[useProducts]
  Hooks --> Thunk[Redux Thunk]
  Thunk --> Service[productService]
  Service --> API[Fake Store API]
  Thunk --> Store[Redux product state]
  Store --> Pages
  Pages --> Components[ProductCard / ProductFilter]
  Components --> Cart[Redux cart state]
  Store --> Middleware[actionLoggerMiddleware]
  Middleware --> DevTools[Redux DevTools]
```

## Дані товарів

`useProducts` dispatch-ить `fetchProductList` для каталогу або `fetchProductDetails` для сторінки товару. Thunk викликає service, а slice обробляє `pending`, `fulfilled` і `rejected` стани.

## Глобальний стан

- `productList` — список товарів, loading та error.
- `productDetails` — поточний товар, loading та error.
- `cart` — товари кошика.

## UI-стан

Пошук, вибрана категорія, стан checkout-форми та режим MUI-теми залишаються локальними станами відповідних компонентів.

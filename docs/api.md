# API

Застосунок використовує безкоштовний [Fake Store API](https://fakestoreapi.com/products).

## Endpoint

- `GET https://fakestoreapi.com/products` — список товарів.
- `GET https://fakestoreapi.com/products/:id` — один товар.

## Формат товару

API повертає `id`, `title`, `price`, `description`, `category` та `image`. У `src/services/productService.js` опис нормалізується у поле `body`, а ціна форматується до двох знаків після коми.

## Категорії

Категорії API мапляться на локальні slug-и:

- `electronics` → `electronics`;
- `jewelery` → `jewelry`;
- `men's clothing` → `mens-clothing`;
- `women's clothing` → `womens-clothing`.

Функція `getProductCategory` повертає локальну категорію, а для невідомого значення використовує першу категорію як fallback.

## Обробка помилок

`fetchProducts` перевіряє `response.ok` і викидає помилку з повідомленням українською. Redux Thunk передає помилку у rejected state, який сторінки показують через MUI `Alert`.

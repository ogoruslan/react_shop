# Компоненти

## `ProductCard`

Показує зображення, категорію, назву, опис, ціну та кнопки товару. Додає товар у Redux cart через `addItem`. Компонент мемоізований через `React.memo`, щоб незмінені картки не перемальовувалися без потреби.

## `ProductFilter`

Приймає props:

- `search` — поточний пошуковий запит;
- `onSearchChange` — callback зміни пошуку;
- `categorySlug` — вибрана категорія;
- `onCategoryChange` — callback зміни категорії;
- `categories` — список категорій.

## `LoadingState`

Показує MUI `CircularProgress`. Приймає необов'язковий `minHeight`, за замовчуванням `240`.

## Сторінки

- `HomePage` — каталог, пошук і фільтр.
- `CategoriesPage` — список категорій.
- `CategoryProductsPage` — товари вибраної категорії.
- `ProductPage` — деталі товару.
- `CartPage` — кошик.
- `CheckoutPage` — оформлення замовлення.
- `AboutPage` — інформація про магазин.
- `ContactPage` — контактна форма з React Hook Form і Zod.

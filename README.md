# Northstar Shop

Northstar Shop — навчальний React-магазин із каталогом товарів, категоріями, кошиком, оформленням замовлення та контактною формою.

## Можливості

- каталог товарів із Fake Store API;
- пошук і фільтр за категоріями;
- сторінки категорій і деталей товару;
- Redux cart state та Redux Thunk для асинхронних запитів;
- Redux DevTools і custom action logger middleware;
- світла й темна MUI-тема;
- контактна форма з React Hook Form і Zod;
- Jest-тести та coverage threshold 80%.

## Запуск

```bash
npm install
npm run dev
```

Production-збірка:

```bash
npm run build
```

## Маршрути

- `/` — каталог;
- `/categories` — список категорій;
- `/categories/:slug` — товари категорії;
- `/product/:id` — деталі товару;
- `/cart` — кошик;
- `/checkout` — оформлення замовлення;
- `/about` — інформація про магазин;
- `/contact` — контактна форма.

## Перевірка коду

```bash
npm run lint
npm test
npm run test:coverage
```

## Документація

- [Структура проєкту](docs/structure.md)
- [API та категорії](docs/api.md)
- [Компоненти та сторінки](docs/components.md)
- [Інструкції для розробників](docs/development.md)
- [Архітектура та потік даних](docs/architecture.md)

## Деплой

```bash
npm run predeploy
npm run deploy
```

Сайт публікується на GitHub Pages відповідно до поля `homepage` у `package.json`.
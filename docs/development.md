# Для розробників

## Встановлення

```bash
npm install
```

## Команди

```bash
npm run dev
npm run build
npm run lint
npm test
npm run test:coverage
```

Coverage для тестованих production-модулів має поріг 80% для statements, branches, functions і lines.

## Тести

Тести написані з Jest і Testing Library. Тестові файли розташовані поруч із кодом:

- `src/services/productService.test.js`;
- `src/components/ProductFilter.test.jsx`.

## Стиль коду

Перед змінами запускайте `npm run lint`. Форматування файлів `src` виконується Prettier. Не редагуйте `dist` або `coverage` вручну.

## Redux DevTools

У development Redux store має назву `Northstar Shop` у Redux DevTools. `actionLoggerMiddleware` показує action і наступний state у консолі. Логування та DevTools вимкнені у production.

## Деплой

```bash
npm run predeploy
npm run deploy
```

Сайт публікується на GitHub Pages за адресою, вказаною у полі `homepage` в `package.json`.

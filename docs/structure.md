# Структура проєкту

## Основні папки

- `src/pages` — сторінки та маршрути застосунку.
- `src/components` — повторно використовувані UI-компоненти.
- `src/hooks` — React hooks для роботи зі станом і даними.
- `src/services` — інтеграція із зовнішнім API та нормалізація даних.
- `src/redux` — Redux slices, store, Thunk і middleware.
- `src/assets` — локальні статичні ресурси.

## Потік запуску

`src/main.jsx` створює React root, підключає Redux `Provider` і `RouterProvider`. Компонент `App` налаштовує тему MUI та маршрути. `ShopLayout` містить спільну навігацію, footer і `Outlet` для сторінок.

## Правило відповідальності

Сторінки компонують екран, компоненти відповідають за UI, hooks керують React-логікою, services працюють з API, а Redux зберігає глобальний стан.

# HelloClient — Sidebar

Тестовый адаптивный сайдбар для десктопного и мобильного приложения. Реализована навигация с пунктами меню, группами и вложенными подменю; на узких экранах меню сворачивается и открывается по кнопке.

Проект выполнен по методологии [Feature-Sliced Design (FSD)](https://feature-sliced.design/) с помощью **Cursor AI**.

## Стек

- **React 19** + **TypeScript**
- **Vite** — сборка и dev-сервер
- **Tailwind CSS 4** — стили
- **React Router** — маршрутизация
- **Lucide React** — иконки
- **Oxlint** / **Prettier** — линтинг и форматирование

## Структура (FSD)

```
src/
├── shared/ui/          # переиспользуемые UI-примитивы
│   ├── sidebar/        # корневой сайдбар, контекст, submenu
│   ├── router-menu/    # меню, привязанное к маршрутам
│   └── tooltip/
└── widgets/
    └── app-sidebar/    # композиция меню приложения
```

## Запуск

```bash
npm install
npm run dev
```

Сборка и превью:

```bash
npm run build
npm run preview
```

Деплой на GitHub Pages:

```bash
npm run deploy
```

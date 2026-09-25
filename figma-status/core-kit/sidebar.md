# Sidebar — статус и решения

Файл: Core kit, ветка `ahiQGs5RWn9cX6wCqlZUgz`, секция компонентов `22127:6467`, гайдлайн `22381:36525` (страница ✅ Sidebar).
Обновлено: 2026-09-25.

## Сделано в сессии 2026-09-25

- Описания компонентов: Item, Item AI, Sign out, Section, SubItem Rail.
- Удалён черновой фрейм `22741:11185`.
- Переименования: `Icon FIlled` → `Icon Filled` (Item, Item AI), `Dot bage` → `👁️ Badge` (Popover Item), `Sidebar / Scrollbar` → `Sidebar/Scrollbar`.
- OLD Badge заменён на новый `Badge` во всех компонентах секции. Иконки и Counter выключены, как было раньше. Лейблы Новое / Скоро / Бета сохранены.
- Текстовые стили переведены на 🧩 Tokens: десктопные лейблы Item и Item AI, Popover Item (был без стиля → Body/xs-medium), Sign out (md-medium → sm-medium, как у мобильного Item).
- Эффекты: фокус → `States/focus-state`, тень поповера → `Right/low`.
- Layout-токены: ширина Mobile и Mobile section у Sidebar и Header → `frame/layout-frame-mobile-sm`.
- Disabled-иконки у Item, Item AI и Popover Item → `icon/neutral/disabled`.
- Слот `Section items` (Mobile section): заливка → `bg/white/white-primary`, зазор → `spacing-2x-sm`.
- `Collapse button` в Header: паддинги перепривязаны со старой переменной на Tokens.

## Осталось вручную

- Порядок значений Mode у Sidebar/Header: перетащить Full наверх в панели свойств. Через API не меняется.

## Отдельные таски

1. Перевести Counter-badge, Dot-badge, Avatar, Button, Close button на 🧩 Tokens.
2. Семантический bg-токен для серого бейджа (сейчас примитив `neutral/gray/solid-350`).
3. Компактный вариант логотипа для Sidebar/Header Compact.

## Решено не трогать

- Градиент Item AI без paint-стиля.
- Отступы рельса 18 и 10 без токенов.
- Избыточные оверрайды радиуса и цвета иконок в контейнере Sidebar.
- Расхождения поведения состояний у Item AI и Popover Item — нормально.
- Контраст Self / Child — принятое отклонение, цвета согласованы.

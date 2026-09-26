# Counter-badge — аудит токенов

Файл: Core kit (main), компонент `8454:7170`. Обновлено: 2026-09-26. Скилл: `skills/design-systems/ds-token-update` 0.2.0, режим аудита (Figma только читалась). Изменений в Figma не было. Предыдущий прогон (0.1.0) — в истории git.

**Вывод:** Counter-badge на 🧩 Tokens на 0%. Все 783 поля сидят на локальных копиях переменных Core kit или вообще без переменной. 612 переводятся 1:1 (уверенность высокая), 15 — с небольшим сдвигом цвета (средняя), для 156 токена в источнике нет: это серая заливка и размеры бейджа. Блокеров для миграции нет, но есть риск a11y (ниже).

**Объект:** `Counter-badge` `8454:7170`, 💠 Core kit (main), 42 варианта, 2026-09-26. **Источник правды:** `ds/tokens.md` от 2026-09-25 и `ds/decisions.md`. Связанные таски: №1 и №2 в `figma-status/core-kit/sidebar.md`.

⚠ **a11y:** текст 8–10 px не дотягивает до 4.5:1 в 10 из 14 сочетаний цветов. Inverted=No — все цвета, кроме Purple (от Orange 2.6 до Red 4.2). Inverted=Yes — Blue, Red, Green, Orange (2.4–3.7). Миграция это не исправит → отдельная таска.

| # | Где (слой · варианты) | Поле | Сейчас | Предлагаю | Уверенность | Вхождений | Решение |
|---|---|---|---|---|---|---|---|
| 1 | корень · Inverted=No: Blue, Red, Green, Orange, Purple; Inverted=Yes: Blue, Red, Green, Orange | fill | `bg/{brand,critical,success,warning,purple}/primary`, `bg/{brand,critical,success,warning}/secondary-light` — локальные копии Core kit | одноимённые из Tokens | высокая | 27 | исправить |
| 2 | корень · Inverted=No · Pale blue | fill | примитив `pale_blue/solid-500` #5D7FBD | `bg/pale/primary` (тот же цвет) | высокая | 3 | исправить |
| 3 | корень · Inverted=No · Gray | fill | примитив `neutral/gray/solid-350` #949494 | нет в источнике ↓ | — | 3 | отдельная таска |
| 4 | корень · Inverted=Yes · Purple | fill | примитив `purple/solid-50` #F2E9FB | `bg/purple/secondary-light` (8%, на белом ≈ #F5EEFB) | средняя | 3 | исправить |
| 5 | корень · Inverted=Yes · Pale blue | fill | примитив `pale_blue/solid-50` #F2F4F8 | `bg/pale/secondary-light` (8%, на белом ≈ #F2F5FA) | средняя | 3 | исправить |
| 6 | корень · Inverted=Yes · Gray | fill | примитив `neutral/gray/solid-50` #F7F7F7 | `bg/neutral/secondary` #FAFAFA | средняя | 3 | исправить |
| 7 | корень · Inverted=Yes · все, кроме Pale blue | stroke | `border/{brand,critical,success,warning,purple}/secondary`, `border/neutral/primary` — локальные | одноимённые из Tokens | высокая | 18 | исправить |
| 8 | корень · Inverted=Yes · Pale blue | stroke | примитив `pale_blue/alpha-200` (20%) | `border/pale/secondary` (12%, как у остальных цветов) | средняя | 3 | исправить |
| 9 | Label · все, кроме Pale blue с Inverted=Yes | fill | `text/neutral/white` (Inverted=No), `text/{…}/primary` и `text/neutral/tertiary` (Inverted=Yes) — локальные | одноимённые из Tokens | высокая | 39 | исправить |
| 10 | Label · Inverted=Yes · Pale blue | fill | примитив `pale_blue/solid-600` #3B5991 | `text/pale/primary` #4D6FAD (контраст 6.3 → 4.6) | средняя | 3 | исправить |
| 11 | корень · все | cornerRadius | `Radius/radius-full` — локальная `Numbers` | `Radius/radius-full` | высокая | 42 | исправить |
| 12 | корень · все | itemSpacing | `Spacing/spacing-0x-xxs` (2) — локальная | `Spacing/spacing-0x-xxs` | высокая | 42 | исправить |
| 13 | корень · все | padding | `Spacing/spacing-0x-xxs` (2): sm — все стороны, md — T/B; `Spacing/spacing-1x-xs` (4): md — L/R, lg — все стороны. Обе локальные | одноимённые из Tokens | высокая | 168 | исправить |
| 14 | корень · Inverted=Yes | strokeWeight | `Border/border-xs` (sm, 0.5) и `Border/border-sm` (md, lg, 1) — локальные `Numbers` | `border-xs`, `border-sm` (коллекция `Border`) | высокая | 21 | исправить |
| 15 | Label · sm | textStyle + типографика | без стиля, Inter Medium 8/8/0; size, LH, LS, weight, family — локальные | стиль `Caption/xxxs-medium` (8/8/0, «Badge / Counter») | высокая | 84 | исправить |
| 16 | Label · md, lg | textStyle + типографика | без стиля, Inter Medium 10/12/0; size, LH, LS заданы числом, weight и family — локальные | стиль `Caption/xxs-medium` (10/12/0) | высокая | 168 | исправить |
| 17 | корень · md | height | `Badge/Small/height` = 16 из неподключённой библиотеки `screenSize`; режим HUG | нет в источнике ↓ | — | 14 | отдельная таска |
| 18 | корень · lg (13 из 14) | height · **mismatch** | `Badge/Small/height` = 16, а нода — 20. 14-й вариант (Blue/lg/Inverted=Yes) не привязан | решение за тобой ↓ | — | 13 | отдельная таска |
| 19 | корень · все | minWidth, minHeight, maxHeight | 12 · 16 · 20 (sm · md · lg), без переменной | нет в источнике ↓ | — | 126 | отдельная таска |

**Нет в источнике** (решает лид с командой):
- Серая заливка счётчика. Предлагаю `bg/neutral/muted` → `neutral/gray/solid-350`. У `text/neutral/quaternary` тот же hex, но это роль текста, поэтому он не подходит. Это совпадает с таской №2 в `sidebar.md`.
- Размер бейджа. Предлагаю `size/badge/sm` · `md` · `lg` = 12 · 16 · 20 (скоуп `WIDTH_HEIGHT`) и привязать к ним min/max. Привязку `Badge/Small/height` снять: у HUG она размер не задаёт, ведёт в отключённую библиотеку, а у lg ещё и показывает неверное значение.

**Проверено 783 из 783 полей, 42 из 42 вариантов** (84 ноды, скрипт `component-token-audit.js`). Сверка по правилам реестра даёт 0/420/0 — совпадает с `ds/components.md`. По сравнению с прошлым аудитом в `figma-status/core-kit/counter-badge.md` добавились 126 полей min/max. **Не проверено:** 63 скрытые обводки у Inverted=No (n/a), ширина и высота в режиме HUG (они производные), ветки Figma — смотрел только main.

**Следующий шаг:**
1. Утверждаешь отчёт? Назови ветку Core kit: я привяжу 612 полей с высокой уверенностью, а 15 со средней — только после твоего ок по визуалу (строки 4–6, 8, 10).
2. Выносим лиду `bg/neutral/muted` и `size/badge/*`?

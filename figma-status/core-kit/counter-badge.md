# Counter-badge — аудит токенов

Файл: Core kit (main), компонент `8454:7170`. Обновлено: 2026-09-26. Скилл: `skills/design-systems/ds-token-update` 0.1.0, режим аудита (Figma только читалась). Изменений в Figma не было.

**Вывод:** Counter-badge на 🧩 Tokens на 0%. Все 657 полей сидят на локальных копиях переменных Core kit или вообще без переменной. 612 переводятся 1:1 (уверенность высокая), 15 — с небольшим сдвигом цвета (средняя), для 30 токена в источнике нет. Блокеров нет.

**Объект:** `Counter-badge` `8454:7170`, 💠 Core kit (main), 42 варианта, 2026-09-26. **Источник правды:** `ds/tokens.md` от 2026-09-25. Status-файла у компонента нет, таска записана в `figma-status/core-kit/sidebar.md`.

⚠ **a11y (к токенам не относится, но это риск):** белый текст 8–10 px на заливке Inverted=No не дотягивает до 4.5:1 у 6 из 7 цветов (по моему расчёту Orange ≈ 2.6, Gray ≈ 3.0, Blue ≈ 3.3; проходит только Purple). Миграция это не исправит → отдельная таска на ds-review.

| # | Где (слой · варианты) | Поле | Сейчас | Предлагаю (токен) | Уверенность | Вхождений | Решение |
|---|---|---|---|---|---|---|---|
| 1 | корень · Inverted=No · Blue, Red, Green, Orange, Purple | fill | `bg/{brand,critical,success,warning,purple}/primary` — локальная копия Core kit | одноимённые из 🧩 Tokens | высокая | 15 | исправить |
| 2 | корень · Inverted=No · Pale blue | fill | примитив `pale_blue/solid-500` #5D7FBD | `bg/pale/primary` | высокая | 3 | исправить |
| 3 | корень · Inverted=No · Gray | fill | примитив `neutral/gray/solid-350` #949494 | нет в источнике (см. ниже) | — | 3 | отдельная таска |
| 4 | корень · Inverted=Yes · Blue, Red, Green, Orange | fill | `bg/{brand,critical,success,warning}/secondary-light` (8%) — локальная | одноимённые из Tokens | высокая | 12 | исправить |
| 5 | корень · Inverted=Yes · Purple | fill | примитив `purple/solid-50` #F2E9FB | `bg/purple/secondary-light` (8%, на белом ≈ #F5EEFB) | средняя | 3 | исправить |
| 6 | корень · Inverted=Yes · Pale blue | fill | примитив `pale_blue/solid-50` #F2F4F8 | `bg/pale/secondary-light` (на белом ≈ #F2F5FA) | средняя | 3 | исправить |
| 7 | корень · Inverted=Yes · Gray | fill | примитив `neutral/gray/solid-50` #F7F7F7 | `bg/neutral/secondary` #FAFAFA | средняя | 3 | исправить |
| 8 | корень · Inverted=Yes · Blue, Red, Green, Orange, Purple, Gray | stroke | `border/{…}/secondary`, `border/neutral/primary` — локальные | одноимённые из Tokens | высокая | 18 | исправить |
| 9 | корень · Inverted=Yes · Pale blue | stroke | примитив `pale_blue/alpha-200` (20%) | `border/pale/secondary` (12%) | средняя | 3 | исправить |
| 10 | Label · Inverted=No · все 7 цветов | fill | `text/neutral/white` — локальная | `text/neutral/white` | высокая | 21 | исправить |
| 11 | Label · Inverted=Yes · Blue, Red, Green, Orange, Purple, Gray | fill | `text/{…}/primary`, `text/neutral/tertiary` — локальные | одноимённые из Tokens | высокая | 18 | исправить |
| 12 | Label · Inverted=Yes · Pale blue | fill | примитив `pale_blue/solid-600` #3B5991 | `text/pale/primary` #4D6FAD (контраст ≈ 6.3 → 4.6) | средняя | 3 | исправить |
| 13 | корень · все | cornerRadius | `Radius/radius-full` — локальная `Numbers` | `Radius/radius-full` | высокая | 42 | исправить |
| 14 | корень · все | itemSpacing | `Spacing/spacing-0x-xxs` (2) — локальная | `Spacing/spacing-0x-xxs` | высокая | 42 | исправить |
| 15 | корень · sm: L/R/T/B, md: T/B | padding | `Spacing/spacing-0x-xxs` (2) — локальная | `Spacing/spacing-0x-xxs` | высокая | 84 | исправить |
| 16 | корень · md: L/R, lg: L/R/T/B | padding | `Spacing/spacing-1x-xs` (4) — локальная | `Spacing/spacing-1x-xs` | высокая | 84 | исправить |
| 17 | корень · Inverted=Yes · sm | strokeWeight | `Border/border-xs` (0.5) — локальная `Numbers` (в Tokens из `Numbers` удалена 02.07) | `border-xs` (коллекция `Border`) | высокая | 7 | исправить |
| 18 | корень · Inverted=Yes · md, lg | strokeWeight | `Border/border-sm` (1) — локальная | `border-sm` (коллекция `Border`) | высокая | 14 | исправить |
| 19 | Label · sm | textStyle + size / LH / LS / weight / family | без стиля, Inter Medium 8/8/0; локальные `size/xxs`, `line-height/xxs`, `letter-spacing/xxs`, `weight/medium`, `family/Inter` | стиль `Caption/xxxs-medium` (8/8/0, описание «Badge / Counter») | высокая | 84 | исправить |
| 20 | Label · md, lg | textStyle + size / LH / LS / weight / family | без стиля, Inter Medium 10/12/0; size/LH/LS заданы числами, `weight/medium` и `family/Inter` локальные | стиль `Caption/xxs-medium` (10/12/0) | высокая | 168 | исправить |
| 21 | корень · md, lg | height | `Badge/Small/height` = 16 (удалённая библиотека `screenSize` не подключена). У lg высота 20 ≠ 16, а Blue/lg/Inverted=Yes вообще не привязан | нет в источнике (см. ниже) | — | 27 | отдельная таска |

**Нет в источнике** (решает лид с командой):
- Серая заливка счётчика: предлагаю `bg/neutral/muted` → `neutral/gray/solid-350`. `text/neutral/quaternary` даёт тот же hex, но это роль текста, поэтому не подходит. Это совпадает с таской №2 в `sidebar.md`.
- Высота бейджа: в Tokens нет размеров компонентов. Предлагаю `Size/badge-sm` · `-md` · `-lg` = 12 · 16 · 20 (скоуп `WIDTH_HEIGHT`). Второй вариант — не привязывать высоту совсем.

**Проверено 657 из 657 полей, 42 из 42 вариантов** (84 ноды, скрипт `component-token-audit.js`); по правилам реестра получается 0/420/0 — совпадает с `ds/components.md`. **Не проверено:** непривязанные width/height/min-width (скрипт их не считает; у sm высота 12 px без переменной), 63 скрытые обводки у Inverted=No (n/a), ветки Figma.

**Следующий шаг:**
1. Утверждаешь отчёт? Назови ветку Core kit: я привяжу 612 полей с высокой уверенностью, а 15 со средней — только после твоего ок по визуалу (строки 5–7, 9, 12).
2. Выносим лиду `bg/neutral/muted` и размеры бейджа?

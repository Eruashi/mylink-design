Источник: Core kit `21818:1370` (ветка `ahiQGs5RWn9cX6wCqlZUgz`), 2026-10-01. Скилл ds-guideline 0.7.1. Вёрстка: фрейм «Пункты меню — guideline v2» `24140:22876` в секции «Документация» `24011:11411`.

# Sidebar — пункты меню

Гайд 2 из 3. Контейнер — `ds/guidelines/sidebar.md`, вложенность и компакт — `ds/guidelines/sidebar-nesting-compact.md`.

## 1. Обложка
Строка сайдбара — ссылка на раздел.

**Скопировать себе:**
- `Sidebar/Item, ✔ Selection=None, 📌 Mode=Full` — обычный пункт («Дашборд»).
- `Sidebar/Item, ✔ Selection=Self` — пункт открытой страницы («Главная»).
- `Sidebar/Item, 👁️ Counter=true` — раздел, где ждут действия («Вакансии 39»).

Примеры — клоны пунктов из `Sidebar, Mode=Full`, с их иконками и лейблами.

| Ссылка | Где |
|---|---|
| Компонент | `Sidebar/Item` `21818:1370`, страница ✅ Sidebar, группа «Пункты меню» `23998:12268`; иконки — группа «Иконки» `23998:251081` |
| Storybook | `TODO: фронты` |
| Flutter | `TODO: мобильщики` |

## 2. Коротко
| 36 | 3 | 3 | 4 |
|---|---|---|---|
| вариантов | режима | Selection | сабкомпонента |

36 = Full 13 + Compact 13 + Mobile 10 (не все сочетания State × Selection существуют, см. 6). Сабкомпоненты: `Sidebar/Item AI`, `Sidebar/Back`, `Sidebar/Item Sign out`, `Sidebar/CompanySwitcher`. Опций контента 9: `👁️ Badge`, `👁️ Counter`, `👁️ Chevron`, `👁️ Arrow`, `🖲️ Icon Regular / Filled / Pale`, `🖲️ Chevron`, `🖲️ Arrow`.

## 3. Когда использовать
| Используем | Не используем → что вместо |
|---|---|
| `Item` — раздел без детей | Раздел с детьми на десктопе → `Sidebar/Section` |
| `Item AI` — только ИИ-ассистент | Второй уровень → `Sidebar/SubItem` |
| `Back`, `Sign out`, `CompanySwitcher` — только в `Mode=Mobile` | Действие на странице → `button` |
| `Arrow=true` — пункт с детьми в мобильном меню | Новый акцентный пункт → только с владельцем компонента |

Источник — старый гайд `22381:36525` и описания компонентов.

## 4. Анатомия
Пример: родитель секции «Обучение» (`Badge`, `Chevron`), «Вакансии» (`Counter`) и пункт `Mode=Compact` с точкой.

| № | Элемент | Что это (слой / компонент) | Обязательный | Стиль и токены |
|---|---|---|---|---|
| 1 | Контейнер | фрейм ряда, фон и обводка по Selection и State | да | `Radius/radius-md` (12), `Spacing/spacing-2x-sm` (8) |
| 2 | Иконка | `🖲️ Icon Regular / Filled / Pale`, 20 | да | `icon/*` по Selection |
| 3 | Лейбл | `Label`, одна строка | да, кроме Compact | `Body/sm-medium` |
| 4 | Статус-бейдж | `Badge, Size=sm` | нет | Green «Новое», Purple «Бета», Gray «Скоро» |
| 5 | Счётчик | `Counter-badge, Size=lg` | нет | `Color=Pale blue` |
| 6 | Шеврон | `angle-down` / `angle-up`, 20 | только в `Sidebar/Section` | `icon/*` как у иконки |
| 7 | Точка | `Dot-badge` 8 вместо бейджа и счётчика | только Compact | `border-md`, `border/neutral/white` |

## 5. Свойства
Иконку меняем во всех трёх свойствах: Regular (None), Filled (Self), Pale (Child) — цвет задаёт вариант (описание компонента).

Почему в Compact лейбл остаётся в компоненте: из него собирается tooltip (старый гайд).

Базовый пример в подблоках — родитель секции «Обучение» с выключенными бейджем и шевроном.

### Режим: 📌 Mode
`Mode=Full` 228 · `Mode=Compact` 36 · `Mode=Mobile` 343. Значения: `Full` (по умолчанию), `Compact`, `Mobile`.

### Выбор: ✔ Selection
`Selection=None` · `Self` · `Child`. `Self` — маршрут на этой строке, `Child` — маршрут внутри неё.

### Трейлинг: 👁️ Badge · 👁️ Counter
`Badge=false` · `Badge=true` · `Counter=true`. В Compact оба превращаются в точку (см. 7).

### Шеврон: 👁️ Chevron · 🖲️ Chevron
`Chevron=false` · `Chevron=true`. Только у родителя в `Sidebar/Section`; не действует при `Mode=Compact` и `Mode=Mobile`.

### Стрелка: 👁️ Arrow · 🖲️ Arrow
`Mode=Mobile`: `Arrow=false` · `Arrow=true` — пункт с детьми ведёт на второй экран. Есть только у `Mode=Mobile`.

## 6. Состояния
Матрица `Mode=Full`: `State` Default · Hover · Pressed · Focus · Disabled × `Selection` None · Self · Child.
- `Disabled` — только у `None`. В Mobile нет Hover.
- Вес шрифта не меняется. У `None` на Hover и Pressed иконка не меняется; у Self и Child — вместе с текстом.
- Focus — `States/focus-state`; у Self и Child фон на Focus плотнее (12%).

## 7. Поведение и контент
| Так | Не так / сейчас так |
|---|---|
| Длинный лейбл — одна строка, многоточие (`textTruncation=ENDING`, проверено инстансом «Управление командировками») | — |
| С `Badge` и `Chevron` лейблу остаётся около 100 из 184 | — |
| Compact: лейбл — в tooltip, бейдж и счётчик — точка 8 | — |

- **Лейбл:** до 17 символов на русском, с запасом +30% на казахский (старый гайд).
- **Бейджи:** счётчик — пока есть задачи; «Новое» — 2 спринта; «Бета» — до релиза; «Скоро» — вместе с `State=Disabled` (старый гайд).
- **Точки в Compact:** одна; приоритет у счётчика (описание компонента).
- **Item AI:** перелив градиента — только во фронте, в Figma статичный кадр; параметры анимации — `TODO: фронты`.

## 8. Делаем / не делаем
| Делаем | Не делаем |
|---|---|
| Пункт с иконкой → «Иконка у каждого пункта» | Иконка скрыта → «Не оставляем пункт без иконки» |
| `Counter=true` → «Один трейлинг на пункт» | `Counter=true` + `Badge=true` → «Не включаем бейдж и счётчик вместе» |
| «Дашборд», «Сотрудники» → «Уникальные лейбл и иконка» | «Сотрудники» дважды → «Не повторяем лейбл и иконку» |

Источник — старый гайд («Делаем / не делаем», «Бейджи»).

## 9. В интерфейсе
«Главная» 1440 · Full (`22251:33378`) — две обрезки 260 × 520 одного клона: верх и низ сайдбара, без изменений. Один трейлинг на пункт; бейджи — у новых («Обучение»), бета («ИИ-ассистент») и недоступных («Табель») разделов; счётчики — «Вакансии», «Заявки на подбор».

## 10. Спецификация (web)
Разметка: пункт `Mode=Full`, 1×.

| Маркер | Что | Full | Compact | Mobile |
|---|---|---|---|---|
| A | Ширина | 228 | 36 | 343 |
| B | Высота | 36 | 36 | 44 |
| C | Паддинг | `Spacing/spacing-2x-sm` (8) | = | `Spacing/spacing-3x-md` (12) |
| D | Зазор | `Spacing/spacing-2x-sm` (8) | нет | = |
| E | Иконка | 20 | = | = |
| F | Радиус | `Radius/radius-md` (12) | = | = |
| G | Лейбл | `Body/sm-medium` | скрыт | `Body/sm-medium` |

**Цвета по состояниям:**

| State | Selection=None | Selection=Self | Selection=Child |
|---|---|---|---|
| Default | `bg/white/white-primary`, `text/neutral/tertiary` | `bg/brand/secondary-light`, `text/brand/primary` | `bg/pale/secondary-light`, `text/pale/primary` |
| Hover | `bg/neutral/secondary-hover` | `bg/brand/secondary-hover` | `bg/pale/secondary-hover` |
| Pressed | `bg/neutral/secondary-pressed` | `bg/brand/secondary-pressed` | `bg/pale/secondary-pressed` |
| Focus | `States/focus-state` | `bg/brand/secondary`, `States/focus-state` | `bg/pale/secondary`, `States/focus-state` |
| Disabled | `text/neutral/disabled`, `icon/neutral/disabled` | нет | нет |

Обводка Self и Child — `border-xs` (0,5), во фронт — 0,5px (описание компонента).

**Токены:** у слоёв пунктов старых переменных нет; старые — внутри `Counter-badge` и `Dot-badge`. Без токена: градиенты `Item AI`.

**Mantine:** компонент и пропсы ↔ `Mode`, `Selection`, `State` — `TODO: фронты`.

## 11. Сабкомпоненты

### `Sidebar/Item AI` `22699:10143` — только ИИ-ассистент
Где в родителе: пункт «ИИ-ассистент» в `Sidebar` (маркер 5 гайда Sidebar).
- **Свойства:** как у `Item`, но `✔ Selection` — `None` и `Self`; иконки — `Icon Regular` и `Icon Filled`. 25 вариантов.
- **Состояния:** матрица Default · Hover · Pressed · Focus · Disabled × None · Self (Disabled — только None).
- **Спецификация:** размеры и отступы как у `Item`. Фон Self — градиент #00C2FF → #008EFF → #6A5BFF, 8 / 20 / 30% — нет токена; иконка Self — градиент #5AC8FF → #008EFF → #D9B5FF — нет токена.

### `Sidebar/Back` `23986:12266` — второй экран мобильного меню: назад к списку
`𝐓 Title` — название раздела.
- **Состояния:** Default · Pressed · Focus.
- **Спецификация:**

| Маркер | Что | Значение |
|---|---|---|
| A | Размер | 375 × 48, `frame/layout-frame-mobile-sm` |
| B | Паддинг | `Spacing/spacing-3x-md` (12) сверху и снизу, `Spacing/spacing-4x-lg` (16) по бокам |
| C | Иконка | `angle-left` 20, `icon/brand/primary` |
| D | Зазор | `Spacing/spacing-2x-sm` (8) |
| E | Title | `Body/md-medium`, `text/brand/primary` |

### `Sidebar/Item Sign out` `23065:10000` — выход из аккаунта в мобильном меню
- **Состояния:** Default · Pressed · Focus.
- **Спецификация:** как у `Item, Mode=Mobile`; Label — `Body/sm-medium`, `text/critical/primary`; иконка — `Sidebar/Red/log-out` 20, `icon/critical/primary`.

### `Sidebar/CompanySwitcher` `23069:10471` — первый ряд мобильного меню: текущая компания
- **Свойства:** `📌 Quantity` — `Single` · `Multiple` (шеврон, открывает шит выбора компании).
- **Состояния** (`Multiple`): Default · Pressed · Focus.
- **Спецификация:**

| Маркер | Что | Значение |
|---|---|---|
| A | Размер | 343 × 44 |
| B | Паддинг | `Spacing/spacing-3x-md` (12), слева `Spacing/spacing-2x-sm` (8) |
| C | Аватар | `Avatar` 28, `Radius/radius-s` |
| D | Зазор | `Spacing/spacing-2x-sm` (8) |
| E | Обводка | `border-sm` (1), `border/neutral/secondary` |

Шит выбора компании — не компонент сайдбара: `Modal header` (Mobile, Sheet header) + `Selection List` (старый гайд).

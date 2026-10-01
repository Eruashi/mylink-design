Источник: Core kit, ветка `ahiQGs5RWn9cX6wCqlZUgz`, группа «Вложенность и компакт» `23998:251074`: `Sidebar/Section` `22127:5810`, `Sidebar/SubItem` `22045:4322`, `Sidebar/SubItem Rail` `22127:5459`, `Sidebar/Popover` `22161:10227`, `Sidebar/Popover Item` `22164:10238`; 2026-10-01. Скилл ds-guideline 0.5.0. Свёрстан в той же ветке, ждёт ревью.

# Sidebar — вложенность и компакт

Гайд 3 из 3. Контейнер — `ds/guidelines/sidebar.md`, пункты меню — `ds/guidelines/sidebar-menu-items.md`.

## 1. Вложенность и компакт — обложка
Второй уровень навигации на десктопе. В Full `Sidebar/Section` раскрывает детей на рельсе, в Compact дети открываются в `Sidebar/Popover`. На мобиле вложенности нет — второй экран меню.

**Скопировать себе:**
- `Sidebar/Section, 📌 Mode=Full, ◉ Expanded=True, ✔ Selection=Child` + в слоте `Sidebar/SubItem Rail, Selection=Self` — раскрытый раздел с открытой дочерней страницей.
- `Sidebar/Section, Expanded=False` — свёрнутый раздел.
- `Sidebar/Popover` со `Sidebar/Popover Item` — дети раздела в Compact.

| Ссылка | Где |
|---|---|
| Компонент в Core kit | `Sidebar/Section` `22127:5810` — 8 вариантов; `Sidebar/SubItem` `22045:4322` — 9; `Sidebar/SubItem Rail` `22127:5459` — 2; `Sidebar/Popover` `22161:10227` — 1; `Sidebar/Popover Item` `22164:10238` — 9. Страница ✅ Sidebar, группа «Вложенность и компакт» |
| Storybook | `TODO: фронты` |
| Статус и версия | ✅ в Core kit. Реестр (main, 2026-09-25): `Section` 73%, `SubItem` 90%, `SubItem Rail` 67%, `Popover` 100%, `Popover Item` 89% на 🧩 Tokens. Версия — `TODO: проверить` |

Flutter-строки нет: компоненты только для десктопа (описания `Section` и `SubItem Rail`).

## 2. Когда использовать
Почему у секции нет Self: раздел с детьми не бывает отдельной страницей. Если раздел — страница, это `Sidebar/Item`, а не `Section` (старый гайд).

| Используем | Не используем → что вместо |
|---|---|
| • Раздел с 2–6 детьми на десктопе → `Section` (старый гайд) | • Один ребёнок → обычный `Sidebar/Item` |
| • Ребёнок второго уровня → `SubItem Rail` в слоте `List` | • Больше 6 детей → раздел перерос сайдбар. `TODO: проверить`, что вместо |
| • Compact → дети в `Popover` по наведению на родителя | • Третий уровень → уходит на страницу раздела |
| • Ребёнок в поповере → `Popover Item` | • Mobile → `Sidebar/Item` с `👁️ Arrow` и `Sidebar, Mode=Mobile section` |

## 3. Анатомия
Пример: `Sidebar/Section, Mode=Full, Expanded=True, Selection=Child` с двумя детьми (первый — `Selection=Self`) и `Sidebar/Popover` с тремя `Popover Item`.

| № | Элемент | Что это (слой / компонент) | Обязательный | Стиль и токены |
|---|---|---|---|---|
| 1 | Родитель | `Sidebar/Item` с `👁️ Chevron`; клик только раскрывает и сворачивает | да | `Selection=Child`, если открыт ребёнок |
| 2 | Рельс | линия в `Line container` на x 18 — центр иконки родителя | да | 1 `border-sm`, `border/neutral/primary` (#E3E3E3) |
| 3 | Слот `List` | дети секции | да | зазор 6 `Spacing/spacing-1,5x-s` |
| 4 | Загиб рельса | `Sidebar/SubItem Rail` — обёртка ребёнка: отступ и сегмент рельса | да | 10 × 16, радиус 6 — нет токена |
| 5 | Ребёнок | `Sidebar/SubItem`: иконка 16, лейбл, трейлинг | да | `Body/xs-medium` (12/16) |
| 6 | Поповер | `Sidebar/Popover`, слот `List` | только Compact | `bg/white/white-primary`, тень `Right/low` |
| 7 | Пункт поповера | `Sidebar/Popover Item` | только Compact | `Body/xs-medium`, `text/neutral/secondary` |

## 4. Свойства

### Sidebar/Section

#### 📌 Mode
`Full` (по умолчанию) — родитель и дети; `Compact` — только родитель 36 × 36, дети не рендерятся: они в поповере.

#### ◉ Expanded
Ряд примеров: `False` · `True`. Значения: `False` (по умолчанию), `True`. Меняет шеврон родителя: `angle-down` → `angle-up`. Не действует при `Mode=Compact` — две компактные комбинации повторяют свёрнутый вид намеренно, без них ломается переключение режима при раскрытой секции (старый гайд).

#### ✔ Selection
`None` (по умолчанию), `Child` — открыта дочерняя страница, родитель бледный. Self нет (см. 2).

#### List (слот)
Дети секции: от 2 до 6 `Sidebar/SubItem Rail`. Preferred — 1 компонент.

### Sidebar/SubItem Rail
`✔ Selection`: `None` (по умолчанию), `Self` — переключает вложенный `SubItem`. Рельс серый в обоих значениях: выбранный пункт показывает сам SubItem. Оси State нет — состояния во вложенном `SubItem`.

### Sidebar/SubItem
`⚙️ State` — пять значений, см. 5. `✔ Selection`: `None`, `Self`. `𝐓 Label`; `👁️ Icon` (по умолчанию true) с `🖲️ Icon Regular` (None) и `🖲️ Icon Filled` (Self), по умолчанию `folder-settings`; `👁️ Badge`, `👁️ Counter` — false. Описания у компонента нет — `TODO: проверить`.

Selection меняем только на `SubItem Rail`, вложенный `SubItem` отдельно не трогаем — иначе значения разойдутся (старый гайд).

### Sidebar/Popover
`List` (слот) — `Popover Item`. Одиночный компонент, ширина по самому длинному пункту. Описания нет — `TODO: проверить`.

### Sidebar/Popover Item
`⚙️ State` — пять значений; `✔ Selection`: `None`, `Self`; `𝐓 Label`; `👁️ Icon` (по умолчанию true) с `🖲️ Icon Regular` / `🖲️ Icon Filled`; `👁️ Counter` — `Counter-badge, Size=md` 16; `👁️ Badge` — точка `Dot-badge` 8. Описания нет — `TODO: проверить`.

### Мёртвые сочетания
`◉ Expanded` при `Mode=Compact`; `Disabled` + `Self` у `SubItem` и `Popover Item` — не существует; `✔ Selection` вложенного `SubItem` — менять только через `SubItem Rail`.

## 5. Состояния
Почему у Popover Item текст не меняется на Hover: расхождение с Item принято, не трогаем (`figma-status/core-kit/sidebar.md`, «Решено не трогать»).

Ряды примеров:
- `SubItem, Selection=None`: `Default` · `Hover` · `Pressed` · `Focus` · `Disabled`
- `SubItem, Selection=Self`: `Default` · `Hover` · `Pressed` · `Focus`
- `Popover Item, Selection=None`: `Default` · `Hover` · `Pressed` · `Focus` · `Disabled`
- `Popover Item, Selection=Self`: `Default` · `Hover` · `Pressed` · `Focus`

Цвета — таблица в 9.

- У `Section` и `SubItem Rail` оси State нет: состояния у родителя-`Item` и у `SubItem`.
- `SubItem` повторяет `Item`: Medium во всех состояниях, у None иконка на Hover и Pressed не меняется, у Self фон на Focus — 12%.
- `Popover Item`: у None на Hover и Pressed меняется только фон; у Self текст и иконка `*/brand/primary` во всех состояниях; обводки у Self нет.
- `SubItem, Disabled`: бейдж в варианте — `Gray, Inverted=Yes`, под «Скоро» (старый гайд).

## 6. Поведение и контент
Пара примеров: Full — секция раскрыта на рельсе · Compact — те же дети в поповере. Почему отступ детей 28: иконка 20 + зазор 8 — колонка иконок детей встаёт под колонку лейблов родителя. Менять нельзя, не пересчитав остальное (старый гайд).

- **Уровни:** максимум 2, третий уходит на страницу.
- **Сколько детей:** от 2 до 6. Один ребёнок — это обычный пункт; больше 6 — раздел перерос сайдбар.
- **Раскрытие:** раскрытых секций может быть несколько. При переходе по прямой ссылке на дочерний маршрут секция раскрывается сама. Состояние раскрытия живёт в сессии и не переживает выход.
- **Плотность:** между детьми 6, а не 8 — группа детей плотнее списка верхнего уровня и отделяется без дополнительных линий.
- **Selection:** открыт ребёнок — у `SubItem Rail` `Self`, у секции `Child`.
- **Compact** (старый гайд):
  - секции не раскрываются, дети — в поповере по наведению на родителя;
  - поповер выравнивается по центру своего ряда, у нижних пунктов прижимается к нижней границе вьюпорта;
  - рендерится вне скролл-региона, иначе обрезается;
  - задержка закрытия 150–300 мс, иначе поповер схлопнется на полпути к нему.
- **Popover Item:** лейбл без обрезки — длинный лейбл расширяет поповер. `TODO: проверить` — нужна ли max-width.
- **Mobile:** `Section`, `SubItem` и `SubItem Rail` не используются. Пункт с детьми — `Item` с `👁️ Arrow`, дети на втором экране `Sidebar, Mode=Mobile section`.

## 7. Делаем / не делаем
| Делаем | Не делаем |
|---|---|
| Секция от двух детей | Не делаем секцию с одним ребёнком |
| Два уровня | Не делаем третий уровень |
| Selection — на `SubItem Rail` | Не меняем Selection вложенного `SubItem` отдельно |
| В Compact дети — в поповере | Не раскрываем секцию в Compact |

Источник — старый гайд, разделы «Вложенность», «Свойства», «Делаем и не делаем».

## 8. В интерфейсе
Пример — раздел «Обучение» на «Главной» (`22251:33379`): в Full — секция с бейджем «Новое»; в Compact — поповер «Управление курсами · Мои курсы · Каталог курсов · Корзина» (старый гайд, «Компакт»).

Почему так: в Compact места под детей нет — поповер показывает их рядом с родителем, не меняя ширину сайдбара.

## 9. Спецификация (web)
Три таблицы: геометрия секции, размеры детей и поповера, цвета. Почему рельс на x 18: это центр иконки родителя — паддинг 8 + половина иконки 20.

### Section и рельс
| Свойство | Значение (токен) |
|---|---|
| ширина | Full 228, Compact 36 |
| зазор родитель — дети | 6 `Spacing/spacing-1,5x-s` |
| рельс | линия 1 `border-sm`, x 18, `border/neutral/primary` (#E3E3E3) |
| отступ детей | 28 = контейнер рельса 18 + зазор 10, нет токенов |
| низ рельса | заканчивается за 24 до низа списка `Spacing/spacing-6x-xll` |
| загиб у ребёнка | 10 × 16, радиус 6 — нет токена (есть `Radius/radius-s` = 6), обводка 1 `border/neutral/primary` |
| зазор между детьми | 6 `Spacing/spacing-1,5x-s` |
| шеврон родителя | 20, сменой иконки: `angle-down` — свёрнута, `angle-up` — раскрыта |

### SubItem, Popover, Popover Item
| Свойство | `SubItem` | `Popover` | `Popover Item` |
|---|---|---|---|
| размер | 200 × 32 | по содержимому | высота 28, ширина — по поповеру |
| паддинг | 8 `Spacing/spacing-2x-sm` | 6 `Spacing/spacing-1,5x-s` | 6 сверху и снизу, 8 по бокам |
| зазор | 6 `Spacing/spacing-1,5x-s` | 4 `Spacing/spacing-1x-xs` | 6 |
| радиус | 8 `Radius/radius-sm` | 12 `Radius/radius-md` | 8 `Radius/radius-sm` |
| иконка | 16 | — | 16 |
| лейбл | `Body/xs-medium` 12/16, одна строка, многоточие | — | `Body/xs-medium`, без обрезки |
| трейлинг | `Badge, Size=sm`; `Counter-badge, Size=lg` 20 | — | `Dot-badge` 8; `Counter-badge, Size=md` 16 |
| фон, обводка | по состоянию; Self — обводка 0,5 `border-xs` | `bg/white/white-primary`, обводка 0,5 `border-xs` `border/neutral/secondary`, тень `Right/low` | по состоянию; у Self обводки нет |

Иконки 16 — те же `Sidebar/*` 20, уменьшенные в инстансе.

### Цвета по состояниям
| Состояние | `SubItem, None` | `SubItem, Self` | `Popover Item, None` | `Popover Item, Self` |
|---|---|---|---|---|
| Default | фон белый; текст `text/neutral/tertiary`; иконка `icon/neutral/quaternary` | фон `bg/brand/secondary-light`, обводка `border/brand/secondary`; `*/brand/primary` | фон белый; текст `text/neutral/secondary` (#666666); иконка `icon/neutral/quaternary` | фон `bg/brand/secondary-light`; `*/brand/primary` |
| Hover | `bg/neutral/secondary-hover`; текст `text/neutral/tertiary-hover` | `bg/brand/secondary-hover`; `*/brand/primary-hover` | `bg/neutral/secondary-hover`; текст не меняется | `bg/brand/secondary-hover`; текст не меняется |
| Pressed | `bg/neutral/secondary-pressed`; `text/neutral/tertiary-pressed` | `bg/brand/secondary-pressed`; `*/brand/primary-pressed` | `bg/neutral/secondary-pressed`; текст не меняется | `bg/brand/secondary-pressed`; текст не меняется |
| Focus | + `States/focus-state` | `bg/brand/secondary` + `States/focus-state` | + `States/focus-state` | `bg/brand/secondary` + `States/focus-state` |
| Disabled | `text/neutral/disabled`, `icon/neutral/disabled` | нет | `text/neutral/disabled`, `icon/neutral/disabled` | нет |
| `Counter-badge` | `Gray, Inverted=Yes` | `Blue, Inverted=No` | `Pale blue, Size=md, Inverted=Yes` | = |

**Токены** (дамп слоёв в ветке, 2026-10-01; не полный прогон `component-token-audit.js`): без токена — контейнер рельса 18, зазор 10, радиус загиба 6. У `Dot badge` в `Popover Item` заливка привязана к старой `bg/brand/primary` (коллекция Semantic, не Tokens). Старые переменные внутри `Counter-badge` и `Dot-badge` — отдельная таска.

**Mantine:** компонент и пропсы ↔ `Expanded`, `Selection` — `TODO: фронты`.

**a11y:**
- Родитель секции — кнопка раскрытия: `aria-expanded`, связь с группой детей. `TODO: фронты`.
- Поповер открывается по наведению — нужен тот же доступ с клавиатуры (фокус на родителе, Enter или стрелка), Esc закрывает. `TODO: фронты`.
- Контраст `SubItem, Self` и `Popover Item, Self` — 3,0:1, то же принятое отклонение, что у `Item, Self`. `Popover Item` — #666666, 5,7:1.
- Хит-зона: `SubItem` 32, `Popover Item` 28 — больше 24 (WCAG 2.5.8).

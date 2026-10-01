Источник: Core kit, ветка `ahiQGs5RWn9cX6wCqlZUgz`, группа «Пункты меню» `23998:12268`: `Sidebar/Item` `21818:1370`, `Sidebar/Item AI` `22699:10143`, `Sidebar/Back` `23986:12266`, `Sidebar/Item Sign out` `23065:10000`, `Sidebar/CompanySwitcher` `23069:10471`; 2026-10-01. Скилл ds-guideline 0.5.0. Свёрстан в той же ветке, ждёт ревью.

# Sidebar — пункты меню

Гайд 2 из 3. Контейнер — `ds/guidelines/sidebar.md`, вложенность и компакт — `ds/guidelines/sidebar-nesting-compact.md`.

## 1. Пункты меню — обложка
Строка сайдбара — ссылка на раздел. `Sidebar/Item` — основной пункт, `Sidebar/Item AI` — только ИИ-ассистент. `Sidebar/Back`, `Sidebar/Item Sign out`, `Sidebar/CompanySwitcher` — только мобильное меню.

**Скопировать себе:**
- `Sidebar/Item, ✔ Selection=None, 📌 Mode=Full` — обычный пункт.
- `Sidebar/Item, ✔ Selection=Self` — пункт открытой страницы.
- `Sidebar/Item, 👁️ Counter=true` — раздел, где ждут действия: «Вакансии 39» на «Главной».

| Ссылка | Где |
|---|---|
| Компонент в Core kit | `Sidebar/Item` `21818:1370` — 36 вариантов; `Sidebar/Item AI` `22699:10143` — 25; `Sidebar/Back` `23986:12266` — 3; `Sidebar/Item Sign out` `23065:10000` — 3; `Sidebar/CompanySwitcher` `23069:10471` — 4. Страница ✅ Sidebar, группа «Пункты меню» |
| Иконки | группа «Иконки» `23998:251081`: 85 иконок `Sidebar/Gray`, `Sidebar/Blue`, `Sidebar/Pale`, `Sidebar/Red` |
| Storybook | `TODO: фронты` |
| Flutter | `TODO: мобильщики` |
| Статус и версия | ✅ в Core kit. Реестр (main, 2026-09-25): `Item` 94%, `Item AI` 90% на 🧩 Tokens; `Back`, `Item Sign out`, `CompanySwitcher` в реестре ещё нет. Версия — `TODO: проверить` |

## 2. Когда использовать
Почему Item AI — отдельный компонент: ось акцента на `Item` удвоила бы матрицу ради одного пункта во всём продукте (старый гайд).

| Используем | Не используем → что вместо |
|---|---|
| • `Item` — раздел без детей и родитель внутри `Sidebar/Section` | • Раздел с детьми на десктопе → `Sidebar/Section` (гайд «Вложенность и компакт») |
| • `Item AI` — только ИИ-ассистент (описание компонента) | • Новый акцентный пункт → нельзя без решения владельца компонента (старый гайд) |
| • `Back`, `Item Sign out`, `CompanySwitcher` — только `Sidebar, Mode=Mobile` | • Ребёнок второго уровня → `Sidebar/SubItem` в `Sidebar/SubItem Rail` |
| • `Item` с `👁️ Arrow` — пункт с детьми в мобильном меню | • Действие на странице → `button` |

## 3. Анатомия
Пример: `Sidebar/Item, Mode=Full` с бейджем и шевроном («Обучение»), со счётчиком («Вакансии») и `Mode=Compact` с точкой.

| № | Элемент | Что это (слой / компонент) | Обязательный | Стиль и токены |
|---|---|---|---|---|
| 1 | Контейнер | фрейм ряда, фон и обводка по состоянию | да | 228 × 36, паддинг 8 `Spacing/spacing-2x-sm`, радиус 12 `Radius/radius-md` |
| 2 | Иконка | `Sidebar/<Gray, Blue, Pale>/<имя>` 20 — `🖲️ Icon Regular / Filled / Pale` | да | `icon/*` по `Selection` |
| 3 | Лейбл | текстовый слой `Label` (`𝐓 Label`), одна строка | да, кроме Compact | `Body/sm-medium` (14/20) |
| 4 | Статус-бейдж | `Badge, ↕ Size=sm` (`👁️ Badge`) | нет | Green «Новое», Purple «Бета», Gray «Скоро» |
| 5 | Счётчик | `Counter-badge, Size=lg` 20 (`👁️ Counter`) | нет | `Color=Pale blue`: светлый при None и Child, сплошной при Self |
| 6 | Шеврон | `angle-down` / `angle-up` 20 (`👁️ Chevron`) | только в `Sidebar/Section` | `icon/*` как у иконки |
| 7 | Точка | `Dot-badge` 8 в правом верхнем углу — вместо бейджа и счётчика | только Compact | бейдж — цветом бейджа, счётчик — `bg/pale/primary`; обводка 1,5 `border-md` `border/neutral/white` |

В Mobile шеврон — `angle-right` (`👁️ Arrow`): пункт с детьми ведёт на второй экран.

**Item AI** — тот же ряд. Отличие — у `Selection=Self` подложка-градиент #00C2FF → #008EFF → #6A5BFF (8%) и градиентная иконка `Sidebar/Blue/magicoon`. Paint-стиля и токенов нет: градиент задан заливкой в каждом варианте.

## 4. Свойства

### Sidebar/Item

#### 📌 Mode
Почему в Compact лейбл остаётся в компоненте: из него собирается tooltip (старый гайд).
Линейка: `Full` 228 × 36 · `Compact` 36 × 36 · `Mobile` 343 × 44.
Значения: `Full` (по умолчанию), `Compact`, `Mobile`.

#### ✔ Selection
Положение пользователя относительно строки, а не состояние наведения. `None` — маршрут не здесь, `Self` — маршрут на этой строке, `Child` — маршрут внутри неё, родитель бледный. Накладывается поверх State.
Ряд примеров: `None` · `Self` · `Child`.
Значения: `None` (по умолчанию), `Self`, `Child`.

#### 🖲️ Icon Regular · 🖲️ Icon Filled · 🖲️ Icon Pale
Иконка на каждое значение Selection: Regular — None (`Sidebar/Gray/*`), Filled — Self (`Sidebar/Blue/*`), Pale — Child (`Sidebar/Pale/*`). Цвет задаёт вариант, поэтому при замене иконки — выставить все три (описание компонента). По умолчанию `home`.

#### 👁️ Badge · 👁️ Counter
Статус-бейдж и счётчик после лейбла. Значения: false (по умолчанию) / true. В Compact оба превращаются в точку.

#### 👁️ Chevron · 🖲️ Chevron
Шеврон раскрытия. Включается только у родителя внутри `Sidebar/Section`: `angle-down` — свёрнута, `angle-up` — раскрыта. Не действует при `Mode=Compact` и `Mode=Mobile`.

#### 👁️ Arrow · 🖲️ Arrow
`angle-right` — пункт с детьми в мобильном меню, ведёт на второй экран. Есть только у `Mode=Mobile`.

#### ⚙️ State
`Default` (по умолчанию), `Hover`, `Pressed`, `Focus`, `Disabled` — см. 5.

Всего 36 вариантов: Full — 13, Compact — 13, Mobile — 10.

### Sidebar/Item AI
Как `Item`, но: `✔ Selection` — `None` и `Self` (Child нет, детей нет); иконки — `Icon Regular` и `Icon Filled` (по умолчанию `magicoon`); `𝐓 Label` по умолчанию «ИИ-ассистент»; бейдж — Purple «Бета». Шеврона в Mobile нет. `👁️ Chevron` и `👁️ Counter` в компоненте есть, но не включаются (старый гайд). Всего 25 вариантов: Full — 9, Compact — 9, Mobile — 7.

### Sidebar/Back
`𝐓 Title` — название открытого раздела, по умолчанию «Обучение». `⚙️ State`: `Default`, `Pressed`, `Focus`. Действие, а не маршрут: оси Selection нет.

### Sidebar/Item Sign out
`𝐓 Label` — «Выйти»; `🖲️ Icon Red` — `Sidebar/Red/log-out`; `⚙️ State`: `Default`, `Pressed`, `Focus`. Оси Selection нет.

### Sidebar/CompanySwitcher
`📌 Quantity`: `Single` (по умолчанию) — ряд не кликается, без шеврона; `Multiple` — открывает шит выбора компании. `⚙️ State`: `Default`, `Pressed`, `Focus` — Pressed и Focus только у `Multiple`. `𝐓 Label` — название компании; `🖲️ Switcher` — иконка справа, `angle-down`, только `Multiple`. Описания у компонента нет — `TODO: проверить`.

### Мёртвые сочетания
`Disabled` + `Self` или `Child` — не существует: недоступный раздел не открыт и не содержит открытую страницу. `Hover` в Mobile — нет. `👁️ Chevron` при Compact и Mobile; `👁️ Arrow` при Full и Compact; `𝐓 Label` при Compact (только для tooltip).

## 5. Состояния
Почему Selection отдельно от State: у выбранного пункта свои Hover, Pressed и Focus.

Ряды примеров (`Item, Mode=Full`):
- `Selection=None`: `Default` · `Hover` · `Pressed` · `Focus` · `Disabled`
- `Selection=Self`: `Default` · `Hover` · `Pressed` · `Focus`
- `Selection=Child`: `Default` · `Hover` · `Pressed` · `Focus`

Цвета по состояниям — таблица в 9.

- Вес шрифта не меняется: Medium во всех состояниях и Selection.
- У `None` на Hover и Pressed темнеет текст, иконка остаётся `icon/neutral/quaternary`. У Self и Child иконка меняется вместе с текстом.
- Focus — кольцо `States/focus-state` (0, 0, 0, 3, `effects/focus-default`); у Self и Child фон на Focus плотнее: 12% вместо 8%.
- В Mobile нет Hover: наведения на тач-экране нет.
- `Item AI, Self`: градиент 8% в Default, 20% в Hover, 30% в Pressed. В Focus градиента нет — `bg/brand/secondary`. `TODO: проверить` — решение или ошибка.
- `Back`: Pressed — фон `bg/neutral/secondary-pressed`, текст и иконка `*/brand/primary-pressed`; Focus — обводка 2 внутри `effects/focus-default` (`border-lg`): ряд во всю ширину экрана, внешнее кольцо обрезалось бы краями (описание компонента).
- `Item Sign out`: Pressed — фон `bg/neutral/secondary-pressed`, текст и иконка `*/critical/primary-pressed`; Focus — `States/focus-state`.
- `CompanySwitcher, Multiple`: Pressed — фон `bg/neutral/secondary-pressed`, обводка `border/neutral/pressed`; Focus — `States/focus-state`.

## 6. Поведение и контент
Пара примеров: длинный лейбл с многоточием · лейбл с бейджем, счётчиком и шевроном. Почему один трейлинг: с бейджем, счётчиком и шевроном лейбл ужимается со 184 до 90 — это 9 символов (старый гайд).

- **Лейбл:** одна строка, многоточие. До 17 символов на русском, с запасом +30% на казахский (старый гайд, «Как добавить пункт»).
- **Трейлинг:** один элемент на пункт. Counter и Badge одновременно не включать.
- **Бейджи** (старый гайд):
  - счётчик — числовая нагрузка, требующая действия; живёт, пока есть задачи;
  - «Новое» (Green) — раздел появился недавно, 2 спринта;
  - «Бета» (Purple) — раздел экспериментальный, до релиза;
  - «Скоро» (Gray) — раздел недоступен, вместе с `State=Disabled`, до релиза.
- **Compact:** лейбл скрыт — tooltip из лейбла; бейдж и счётчик — точка 8 в углу. Показывается одна точка, приоритет у счётчика: он про задачу пользователя, статус — про зрелость раздела (описание компонента). Точки лежат в одном месте — одновременно не включать.
- **Mobile:** ряды 44, без Hover. Пункт с детьми — `👁️ Arrow`, на месте не раскрывается.
- **Item AI:** перелив градиента живёт только во фронте, в Figma — статичный кадр. Параметры анимации — уточнить у фронта (Нурсултан, старый гайд). По `prefers-reduced-motion: reduce` анимация отключается полностью.
- **Back:** тап по всей строке; длинное название — многоточие в одну строку.
- **CompanySwitcher:** первый ряд мобильного меню. `Multiple` открывает шит: аватар и название у каждой компании, текущая отмечена, поиск — от 8 компаний; закрывается свайпом вниз и тапом по затемнению, выбор закрывает шит сразу. Шит — не компонент сайдбара: `Modal header` (Mobile, Sheet header) + `Selection List` (View=Sheet, Leading=Avatar) (старый гайд).

## 7. Делаем / не делаем
| Делаем | Не делаем |
|---|---|
| Иконка у каждого пункта верхнего уровня | Не оставляем пункт без иконки: в Compact она — единственный носитель смысла |
| Один трейлинг-элемент на пункт | Не включаем бейдж и счётчик вместе |
| Счётчик — где ждут действия | Не ставим счётчик ради внимания |
| «Новое» — до двух спринтов | Не держим статус-бейдж дольше |
| Уникальные лейбл и иконка | Не делаем два пункта с одним лейблом или иконкой |

Источник — старый гайд «Делаем / не делаем» и «Бейджи».

## 8. В интерфейсе
Пример — сайдбар «Главной» 1440 (`22251:33379`): «Главная» — `Selection=Self`; «Обучение» — родитель секции с бейджем «Новое»; «Табель» — бейдж «Скоро»; «Вакансии 39» и «Заявки на подбор 9» — счётчики; «ИИ-ассистент» — `Item AI` с бейджем «Бета».

Почему так: у каждого пункта один трейлинг, бейджи — только у новых и недоступных разделов.

## 9. Спецификация (web)
Три таблицы: Item по режимам, цвета по состояниям, мобильные пункты. Почему обводка 0,5: у Self и Child она `border-xs`, во фронт передаётся как 0,5px, не округлять до 1 (описание компонента).

### Sidebar/Item — по режимам
| Свойство | `Full` | `Compact` | `Mobile` |
|---|---|---|---|
| размер | 228 × 36 | 36 × 36 | 343 × 44 |
| паддинг | 8 `Spacing/spacing-2x-sm` | 8 | 12 `Spacing/spacing-3x-md` |
| зазор | 8 `Spacing/spacing-2x-sm` | — | 8 |
| радиус | 12 `Radius/radius-md` | = | = |
| иконка | 20 | 20 | 20 |
| лейбл | `Body/sm-medium` 14/20, x 36, ширина 184 | скрыт | `Body/sm-medium`, x 40 |
| бейдж | `Badge, Size=sm`, высота 20 | `Dot-badge` 8, x 28, y 0 | = Full |
| счётчик | `Counter-badge, Size=lg` 20 | `Dot-badge` 8, `bg/pale/primary` | = Full |
| шеврон | `angle-down` / `angle-up` 20 | — | `angle-right` 20 |
| обводка Self, Child | 0,5 `border-xs` | = | = |

### Sidebar/Item — цвета по состояниям
| Состояние | `Selection=None` | `Selection=Self` | `Selection=Child` |
|---|---|---|---|
| Default | фон `bg/white/white-primary`; текст `text/neutral/tertiary` (#3D3D3D); иконка `icon/neutral/quaternary` (#ADADAD) | фон `bg/brand/secondary-light` (8%), обводка `border/brand/secondary`; текст и иконка `*/brand/primary` (#008EFF) | фон `bg/pale/secondary-light` (8%), обводка `border/pale/secondary`; текст `text/pale/primary` (#4D6FAD), иконка `icon/pale/primary` |
| Hover | фон `bg/neutral/secondary-hover`; текст `text/neutral/tertiary-hover`; иконка не меняется | фон `bg/brand/secondary-hover` (20%); `*/brand/primary-hover` | фон `bg/pale/secondary-hover` (20%); `*/pale/primary-hover` |
| Pressed | фон `bg/neutral/secondary-pressed`; текст `text/neutral/tertiary-pressed` | фон `bg/brand/secondary-pressed` (30%); `*/brand/primary-pressed` | фон `bg/pale/secondary-pressed` (30%); `*/pale/primary-pressed` |
| Focus | как Default + `States/focus-state` | фон `bg/brand/secondary` (12%) + `States/focus-state` | фон `bg/pale/secondary` (12%) + `States/focus-state` |
| Disabled | текст `text/neutral/disabled`, иконка `icon/neutral/disabled` | нет | нет |
| `Counter-badge` | `Pale blue, Inverted=Yes` | `Pale blue, Inverted=No` | `Pale blue, Inverted=Yes` |

Item AI — те же токены, кроме фона Self: градиент #00C2FF 0% → #008EFF 45% → #6A5BFF 100%, непрозрачность 8 / 20 / 30%; иконка Self — градиент #5AC8FF → #008EFF → #D9B5FF. Нет токена.

### Мобильные пункты
| Свойство | `Sidebar/Back` | `Sidebar/Item Sign out` | `Sidebar/CompanySwitcher` |
|---|---|---|---|
| размер | 375 × 48 (`frame/layout-frame-mobile-sm`) | 343 × 44 | 343 × 44 |
| паддинг | 12 сверху и снизу, 16 по бокам | 12 `Spacing/spacing-3x-md` | 12, слева 8 |
| зазор | 8 `Spacing/spacing-2x-sm` | 8 | 8 |
| радиус, обводка | 0 | 12 `Radius/radius-md` | 12; обводка 1 `border-sm` `border/neutral/secondary` |
| текст | `Body/md-medium` 16/22, `text/brand/primary` | `Body/sm-medium`, `text/critical/primary` (#EE2B2B) | `Body/sm-medium`, `text/neutral/primary` |
| иконки | `angle-left` 20, `icon/brand/primary` | `Sidebar/Red/log-out` 20, `icon/critical/primary` | `Avatar` (Entity, XS) 28; `Multiple` — `angle-down` 20, `icon/neutral/quaternary` |
| Pressed | `bg/neutral/secondary-pressed`; `*/brand/primary-pressed` | `bg/neutral/secondary-pressed`; `*/critical/primary-pressed` | `bg/neutral/secondary-pressed`; обводка `border/neutral/pressed` |
| Focus | обводка 2 внутри `effects/focus-default` | `States/focus-state` | `States/focus-state` |

**Токены** (дамп слоёв в ветке, 2026-10-01; не полный прогон `component-token-audit.js`): у слоёв пунктов старых переменных нет. Старые переменные — внутри `Counter-badge` и `Dot-badge` (Primitives, старые Numbers; перевод — отдельная таска №1 в `figma-status/core-kit/sidebar.md`). Без токена: градиенты `Item AI`.

**Mantine:** компонент и пропсы ↔ `Mode`, `Selection`, `State` — `TODO: фронты`.

**a11y:**
- Контраст текста Self — 3,0:1 (Focus — 2,9:1), ниже 4,5:1. Отклонение принято командой осознанно, к вопросу не возвращаться без пересмотра палитры (старый гайд). Child — 4,6:1, проходит.
- Иконка `None` #ADADAD — 2,2:1 к белому. В Compact иконка — единственный носитель смысла, нужно 3:1 (WCAG 1.4.11). `TODO: проверить`.
- `Item Sign out` #EE2B2B — 4,2:1, `Back` #008EFF — 3,3:1 к белому: ниже 4,5:1 для текста 14–16. `TODO: проверить`.
- Активный пункт — `aria-current="page"`; в Compact подпись из лейбла — tooltip и `aria-label`. `TODO: фронты`.
- Хит-зона: Full 36, Compact 36 × 36 — больше 24 (WCAG 2.5.8); Mobile 44.
- `Item AI`: анимация отключается по `prefers-reduced-motion: reduce` — обязательно.

Источник: Core kit `19398:16535` (`Tabs`), `19398:15862` (`Tab`) (ветка `bRwFkumYDoKh1OQv5a5dYp`), 2026-09-29. Скилл ds-guideline 0.3.0. Черновик — перенести в Figma после ревью.

# Tabs

## 1. Tabs — обложка
Переключатель между связанными видами без перезагрузки контента. В группе `Tabs` активен один `Tab`; сам компонент контентом не управляет, только переключением. Два стиля: `Filled` — сегменты на подложке (он же segmented control), `Inline` — подчёркивание.

<!-- Описание — из свободного гайда «Tabs/Segment controls» `19500:12562` на странице ✅ Tabs. -->

**Скопировать себе:**
- `Tabs, ↕ Size=lg, 🖇️ Style=Filled, 🔲 Inverted=Yes` — фильтр списка на сером фоне страницы. Так стоит во всех 15 инстансах в макетах (✏️ Table, ✏️ Table (Катя), ✅ Modal, ✅ Skeleton loader, ✅ Progress-circle-bar): «Опубликованные · Черновики · Архивные», «Мое обучение · О курсе · Назначения», «Древо · Штатная расстановка».
- `Tabs, ↕ Size=md, 🖇️ Style=Filled, 🔲 Inverted=No` — компактный переключатель на белом фоне.
- `Tabs, ↕ Size=lg, 🖇️ Style=Inline` — навигация по разделам с подчёркиванием.

| Ссылка | Где |
|---|---|
| Компонент в Core kit | `Tabs` `19398:16535` — 16 вариантов; `Tab` `19398:15862` — 128 вариантов. Страница ✅ Tabs |
| Storybook | `TODO: фронты` |
| Flutter | нет: компонент web, Mobile-вариантов в Core kit нет |
| Статус и версия | ✅ в Core kit. Реестр (main, 2026-09-25): `Tab` 69%, `Tabs` 34% на 🧩 Tokens. В ветке старых переменных нет — см. 8. Версия и дата обновления — `TODO: проверить` |

## 2. Когда использовать
| Используем | Не используем → что вместо |
|---|---|
| • 2–4 равнозначных вида одного объекта без смены роута/URL → `Style=Filled` (свободный гайд: «Tab bar в стиле Filled по сути и есть Segmented control — отдельный компонент заводить не нужно») | • Отдельный segmented control → `Tabs, Style=Filled`, свой компонент не заводим (свободный гайд) |
| • Навигация между независимыми разделами → `Style=Inline` (свободный гайд) | • Фильтр с множественным выбором → `Filter chips`. `TODO: проверить` |
| • Фильтр списка по статусу со счётчиком — «Опубликованные 16 · Черновики 16 · Архивные 10» (✏️ Table (Катя)) | • Больше 4 вариантов → `TODO: проверить`, что вместо |
| • Разделы карточки курса — «Мое обучение · О курсе · Назначения» (✅ Modal, ✅ Progress-circle-bar) | • Шаги процесса по порядку → Steppers на странице ✏️ Steppers. `TODO: проверить` |

`TODO: проверить` — сценарии «Используем» 3–4 собраны по 15 инстансам `Tabs` в макетах; все они `Size=lg, Style=Filled, Inverted=Yes`, 2–3 таба. Правила 1–2 — из свободного гайда, решения команды в `ds/decisions.md` нет.

## 3. Анатомия
Пример: инстанс `Tabs, ↕ Size=lg, 🖇️ Style=Filled, 🔲 Inverted=Yes` с двумя `Tab` («Tab» активный, «Tab» неактивный), и `Tabs, ↕ Size=lg, 🖇️ Style=Inline` для маркера 6.

1. **Контейнер** (`Tabs`, слот `tabs`) — ряд табов, подложка у `Filled`
2. **Tab активный** (`Tab`, `🔘 Active=Yes`) — выбранный вид
3. **Tab неактивный** (`Tab`, `🔘 Active=No`) — остальные виды
4. **Icon** (`magicoon`, `iconType`) — необязательная иконка перед текстом
5. **Label** (`Tab`, `𝐓 Text `) — название, одна строка
6. **Counter** (`Counter-badge`) — число после текста, необязательно
7. **Индикатор** (`blue line`) — линия 2 снизу, только `Style=Inline`

`Counter-badge` — отдельный компонент Core kit (remote). `magicoon` — иконка по умолчанию в `iconType`, из другой библиотеки (remote).

## 4. Свойства
Два компонента: `Tabs` — группа, `Tab` — элемент внутри слота `tabs`. Меняете вид группы — меняйте `Tabs`; текст, иконку, счётчик и активный таб — у `Tab` внутри.

### Tabs
Оси комбинируются не полностью: `Filled` — 3 размера × 2 `Inverted` × 2 `Icon Only` = 12; `Inline` — 2 размера × `Inverted=No` × 2 `Icon Only` = 4. Итого 16.

#### ↕ Size
Высота группы.
Ряд примеров: `Size=md` · `Size=lg` · `Size=xl` (`Filled`); `Size=sm` · `Size=lg` (`Inline`).
Значения: `sm` (по умолчанию), `md`, `lg`, `xl`. `sm` есть только у `Inline`, `md` и `xl` — только у `Filled`. В свободном гайде: «sm · 32px — варианта Filled нет в файле, только Inline».

#### 🖇️ Style
Вид группы: сегменты на подложке или подчёркивание.
Ряд примеров: `Style=Filled` · `Style=Inline`.
Значения: `Inline` (по умолчанию), `Filled`.

#### 🔲 Inverted
Подложка группы под фон страницы.
Ряд примеров: `Inverted=No` — подложка `bg/pale/secondary-light`, активный таб белый · `Inverted=Yes` — белая подложка с обводкой, активный таб бледно-синий.
Значения: `No` (по умолчанию), `Yes`. Не действует при `Style=Inline` (варианта `Inline, Inverted=Yes` нет).

Внутри `Tabs, Inverted=Yes` стоят `Tab, Inverted=No`, и наоборот. `TODO: проверить` — одно имя с противоположным смыслом на двух уровнях.

#### ❇️ Icon Only
Только иконки, без текста.
Ряд примеров: `Icon Only=No` · `Icon Only=Yes`.
Значения: `No` (по умолчанию), `Yes`.

#### tabs (слот)
Табы группы. По умолчанию — 2 `Tab`. Preferred — набор `Tab`.

### Tab
Полный набор для `Filled`: 3 размера × 2 `Icon Only` × 2 `Inverted` × 8 сочетаний `Active`/`State` = 96. `Inline` — только `Inverted=Yes`: 2 × 2 × 8 = 32. Итого 128.

#### ↕ Size
Ряд примеров: `Size=xs` · `Size=sm` · `Size=md`.
Значения: `xs` (по умолчанию), `sm`, `md`. `xs` — только у `Filled`.

Размеры `Tabs` и `Tab` называются по-разному: `Tabs md` → `Tab xs`, `lg` → `sm`, `xl` → `md` (`Filled`); `Tabs sm` → `Tab sm`, `lg` → `md` (`Inline`). В чек-листе `11202:19468` — четвёртая шкала: lg 40, md 36, sm 32, xs 28. `TODO: проверить` — привести к одной шкале.

#### 🖇️ Style · 🔲 Inverted · ❇️ Icon Only
Те же, что у `Tabs`. Значения по умолчанию: `Style=Filled`, `Inverted=No`, `Icon Only=No`. У `Tab, Filled` `Inverted` меняет только фон активного таба: `No` — `bg/pale/secondary`, `Yes` — `bg/white/white-primary`. Неактивные табы одинаковые.

#### 🔘 Active
Выбранный таб.
Ряд примеров: `Active=Yes` · `Active=No`.
Значения: `Yes` (по умолчанию), `No`. В группе один `Active=Yes` (свободный гайд).

#### 𝐓 Text
Название таба. По умолчанию «Tab». Не действует при `Icon Only=Yes`.

#### 👁️ Show Icon · iconType
Иконка перед текстом.
Ряд примеров: `👁️ Show Icon `=true · false.
Значения: true (по умолчанию) / false; `iconType` — instance swap, по умолчанию `magicoon`, preferred — 1 иконка. `👁️ Show Icon ` не действует при `Icon Only=Yes`.

#### 👁️ Show Сounter
Счётчик после текста.
Ряд примеров: `👁️ Show Сounter`=true · false.
Значения: true (по умолчанию) / false. При `Icon Only=Yes` счётчик — в правом верхнем углу иконки.

Имена с ошибками (`ds/component-props.md`): кириллическая «С» в `👁️ Show Сounter`, пробел в конце `𝐓 Text ` и `👁️ Show Icon `, точка в `⚙️. State`, camelCase `iconType`. `TODO: проверить` — переименовать.

### Мёртвые сочетания
`🔲 Inverted` у `Tabs, Style=Inline`; `𝐓 Text ` и `👁️ Show Icon ` при `Icon Only=Yes`; `Size=sm` у `Tabs, Filled`; `Size=xs` у `Tab, Inline`.

## 5. Состояния
Состояния — у `Tab` (`⚙️. State`). У `Tabs` оси State нет.

Ряд примеров (`Tab, Size=md, Filled, Active=No`): `Default` · `Hover` · `Pressed` · `Focus` · `Disabled`. Отдельно `Active=Yes`: `Default` · `Focus` · `Disabled`.

| | Filled, Active=No | Filled, Active=Yes | Inline, Active=No | Inline, Active=Yes |
|---|---|---|---|---|
| Default | без фона, текст `text/pale/secondary` (#728DC0) | фон `bg/pale/secondary` (#5D7FBD1F) или белый при `Inverted=Yes`, текст `text/pale/primary` (#4D6FAD) | без фона, текст `text/neutral/quaternary` (#949494) | текст и линия `text/brand/primary`, `border/brand/primary` (#008EFF) |
| Hover | фон `bg/pale/secondary-hover` (#5D7FBD33), текст `text/pale/secondary-hover` (#5D7FBD) | нет | фон `bg/neutral/secondary-hover` (#F7F7F7), текст не меняется | нет |
| Pressed | фон `bg/pale/secondary-pressed` (#5D7FBD4D), текст `text/pale/secondary-pressed` (#3B5991) | нет | фон `bg/neutral/secondary-pressed` (#EDEDED), текст не меняется | нет |
| Focus | как Default + обводка 1 `border/neutral/white` внутри + тень 0, 0, 0, 3 `effects/focus-default` (#728DC0) | то же | то же | то же |
| Disabled | текст `text/pale/disabled` (#9CACC9) | фон `bg/pale/disabled` (#5D7FBD14), текст `text/pale/disabled` | текст `text/neutral/disabled` (#C9C9C9) | текст `text/neutral/disabled`, линия `border/neutral/disabled` (#EDEDED) |

- У активного таба нет Hover и Pressed. В свободном гайде написано, что у `Active=Yes` только Default — устарело: в компоненте есть ещё Focus и Disabled.
- Иконка — в цвет текста токенами `icon/*` той же роли (Pressed в `Filled` — `icon/pale/secondary-hover`, не `-pressed`). `TODO: проверить`.
- Линия `Inline` у неактивного таба есть, но прозрачная (opacity 0).
- Прототипных переходов между состояниями нет.

## 6. Поведение и контент
Пара примеров: «Опубликованные 16» · «Архивные 10» (длинное и короткое название, инстанс `20916:7929` на ✏️ Table (Катя)).

- **Label:** одна строка, при нехватке ширины — многоточие (свободный гайд; в компоненте truncation `ENDING`, max 1 строка). Максимальной ширины у `Tab` нет, поэтому в группе таб растёт под текст. `TODO: проверить` — нужна ли max-width и лимит символов с запасом +30% на казахский.
- **Ширина:** `Tab` в группе — по содержимому (hug), табы разной ширины. Высота фиксированная.
- **Сколько табов:** в макетах 2–3; в свободном гайде для `Filled` — 2–4. `TODO: проверить` — что делать, если табов больше и группа не влезает (скролл, перенос, «Ещё»).
- **Counter:** число после текста. Сколько знаков помещается и формат «99+» — `TODO: проверить`.
- **Icon Only:** без текста. Подпись для скринридера и тултип — `TODO: фронты`.
- **Адаптив:** брейкпоинтов у компонента нет. `TODO: проверить`, что происходит на узкой ширине.
- **Анимация:** в компоненте нет (переход индикатора `Inline`, смена фона). `TODO: проверить`.

## 7. Делаем / не делаем
| Делаем | Не делаем |
|---|---|
| Один активный таб в группе | Не делаем два `Active=Yes` |
| `Tabs, Inverted=Yes` на сером фоне страницы | Не ставим бледную подложку `Inverted=No` на серый фон |
| Короткие названия, 1–2 слова | Не пишем фразу в таб |
| Одинаковый набор: у всех табов иконка или ни у кого | Не смешиваем табы с иконкой и без |
| Segmented control — это `Tabs, Filled` | Не собираем свой переключатель из кнопок |

`TODO: проверить` — пункты 2–4 выведены из макетов и структуры компонента, утверждённых правил нет. 1 и 5 — из свободного гайда.

## 8. Спецификация (web)

### Tabs — группа
| Элемент | Свойство | Значение (токен) | По вариантам |
|---|---|---|---|
| Контейнер `Filled` | высота | md 36, lg 40, xl 48, нет токена. = высота `Tab` + 4 + 4 | — |
| Контейнер `Filled` | padding | `Spacing/spacing-1x-xs` (4) со всех сторон | — |
| Контейнер `Filled` | радиус | `Radius/radius-md` (12) | — |
| Контейнер `Filled` | фон | `Inverted=No` — `bg/pale/secondary-light` (#5D7FBD14); `Inverted=Yes` — `bg/white/white-primary` (#FFFFFF) | `Icon Only=Yes, Inverted=No` — две заливки: белая + `bg/pale/secondary-light`. `TODO: проверить` |
| Контейнер `Filled` | обводка | `Inverted=Yes` — 1, нет токена, `border/pale/secondary-light` (#5D7FBD14) | `Inverted=No` — нет |
| Слот `tabs` `Filled` | зазор | 4. В xl — `Spacing/spacing-1x-xs`, в md и lg — нет токена | — |
| Контейнер `Inline` | высота | sm 32, lg 40, hug | — |
| Контейнер `Inline` | padding, зазор | 0, `Spacing/spacing-x` | — |
| Контейнер `Inline` | обводка | снизу 1, внутри, нет токена, `border/neutral/primary` (#E3E3E3) | — |

### Tab — Filled
| Элемент | Свойство | xs | sm | md |
|---|---|---|---|---|
| Контейнер | высота | 28 | 32 | 40 |
| Контейнер | padding по бокам | `Spacing/spacing-2x-sm` (8) | `Spacing/spacing-3x-md` (12) | `Spacing/spacing-3x-md` (12) |
| Контейнер | зазор icon — label — counter | `Spacing/spacing-1x-xs` (4) | `Spacing/spacing-1,5x-s` (6) | `Spacing/spacing-2x-sm` (8) |
| Контейнер | радиус | `Radius/radius-sm` (8) | = | = |
| Label | стиль | `Body/sm-medium` (14/20) | `Body/sm-medium` (14/20) | `Body/md-medium` (16/22) |
| Icon | размер | 16 | 16 | 20 |
| Counter | вариант | `Counter-badge, Size=md` (16) | `Size=md` (16) | `Size=lg` (20) |
| Icon Only | размер | 28 × 28 | 32 × 32 | 40 × 40 |
| Icon Only, Counter | вариант, позиция | `Size=sm` (12), absolute | `Size=sm` (12) | `Size=md` (16); x 25, y −4 от угла таба |

### Tab — Inline
| Элемент | Свойство | sm | md |
|---|---|---|---|
| Контейнер | высота | 32 | 40 |
| Контейнер | радиус | верх `Radius/radius-sm` (8), низ `Radius/radius-x` (0) | = |
| `tab body` | padding по бокам | `Spacing/spacing-4x-lg` (16), не зависит от размера | = |
| `tab body` | зазор | `Spacing/spacing-1,5x-s` (6) | `Spacing/spacing-2x-sm` (8) |
| Label | стиль | `Body/sm-medium` (14/20) | `Body/md-medium` (16/22) |
| Icon | размер | 16 | 20 |
| Counter | вариант | `Counter-badge, Color=Blue, Size=md` (16) | = |
| `blue line` | размер, цвет | высота 2, радиус сверху 2, нет токена; `border/brand/primary` (#008EFF) | = |
| Icon Only | размер | 32 × 32, зазор 4 без токена | 40 × 40 |

### Counter по состояниям
`Filled`: `Active=Yes` — `Counter-badge, Color=Pale blue, Inverted=No` (заливка `pale_blue/solid-500` #5D7FBD — примитив); `Active=No` и `Disabled` — `Inverted=Yes`. `Inline`: `Active=Yes` — `Color=Blue, Inverted=Yes` (фон `bg/brand/secondary-light`, обводка `border/brand/secondary`); `Active=No` — `Color=Gray, Inverted=Yes`; `Active=Yes, Disabled` — `Color=Gray, Inverted=No`. `TODO: проверить` — примитив в `Counter-badge` (перепривязка — через `ds-token-update` на странице Counter-badge).

**Токены** (проверка привязок в ветке, 2026-09-29, по key коллекций 🧩 Tokens; не полный прогон `component-token-audit.js`): старых переменных нет. Без переменной: `Tab` — 71 поле, `Tabs` — 28, как в реестре. В реестре (main, 2026-09-25) старых — 173 и 48. `TODO: проверить` — перепривязали в ветке или реестр устарел. Без токена:
- обводка Focus 1 (`border-sm` в коллекции `Border` — 1);
- тень Focus 0, 0, 0, 3 `effects/focus-default` — те же параметры, что у стиля `States/focus-state`, но стиль не применён;
- радиус `blue line` 2 (есть `Radius/radius-xxs` = 2);
- зазор 4 в `tab body` у `Inline, Icon Only=Yes` и в слоте `Tabs` md/lg (есть `Spacing/spacing-1x-xs`);
- обводка контейнера `Tabs` 1.

**Mantine:** компонент и пропсы ↔ `Style`, `Size`, `Inverted`, `Icon Only` — `TODO: фронты`.

**a11y:**
- Клавиатура: в свободном гайде «переключение — по клику или клавиатуре». Стрелки, Home/End, Tab-стоп, активация по фокусу или по Enter — `TODO: фронты`.
- Роли `tablist` / `tab` / `tabpanel`, `aria-selected`, связь таба с панелью — `TODO: фронты`.
- Фокус: `State=Focus` — белая обводка 1 внутри и кольцо 3 `effects/focus-default` (#728DC0), контраст кольца к белому 3,3:1.
- Контраст текста ниже 4,5:1 (текст 14–16 Medium):
  - неактивный `Filled` #728DC0 — 3,3:1 на белом, 3,1:1 на подложке `Inverted=No`;
  - активный `Filled` #4D6FAD на `bg/pale/secondary` поверх белого — 4,4:1 (так в макетах, `Tabs, Inverted=Yes`); на белом (`Tabs, Inverted=No`) — 5,0:1;
  - Hover `Filled` #5D7FBD — 3,2:1;
  - `Inline`: активный #008EFF — 3,3:1, неактивный #949494 — 3,0:1.
  `TODO: проверить` — поднять контраст токенов текста или принять осознанно.
- `Icon Only`: у таба нет текста — `aria-label` обязателен. `TODO: фронты`.
- Хит-зона: `Filled xs` — 28, `Icon Only xs` — 28 × 28. `TODO: проверить` — минимум 24 по WCAG 2.5.8 соблюдён; 44 для тач — нет.

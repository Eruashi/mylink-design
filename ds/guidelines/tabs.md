Источник: Core kit `19398:16535` (`Tabs`), `19398:15862` (`Tab`) (ветка `bRwFkumYDoKh1OQv5a5dYp`), 2026-09-29. Скилл ds-guideline 0.4.0. Черновик — перенести в Figma после ревью.

# Tabs

## 1. Tabs — обложка
Переключатель между связанными видами без перезагрузки контента. В группе `Tabs` активен один `Tab`; сам компонент контентом не управляет, только переключением. Два стиля: `Filled` — сегменты на подложке (он же segmented control), `Inline` — подчёркивание.

<!-- Описание — из свободного гайда «Tabs/Segment controls» `19500:12562` на странице ✅ Tabs. -->

**Скопировать себе:**
- `Tabs, ↕ Size=lg, 🖇️ Style=Filled, 🔲 Inverted=Yes` — фильтр списка на сером фоне страницы. Так стоят все 15 инстансов в макетах (✏️ Table, ✏️ Table (Катя), ✅ Modal, ✅ Skeleton loader, ✅ Progress-circle-bar): «Опубликованные · Черновики · Архивные», «Мое обучение · О курсе · Назначения», «Древо · Штатная расстановка».
- `Tabs, ↕ Size=md, 🖇️ Style=Filled, 🔲 Inverted=No` — компактный переключатель на белом фоне.
- `Tabs, ↕ Size=lg, 🖇️ Style=Inline` — навигация по разделам с подчёркиванием.

| Ссылка | Где |
|---|---|
| Компонент в Core kit | `Tabs` `19398:16535` — 16 вариантов; `Tab` `19398:15862` — 128 вариантов. Страница ✅ Tabs |
| Storybook | `TODO: фронты` |
| Статус и версия | ✅ в Core kit. Реестр (main, 2026-09-25): `Tab` 69%, `Tabs` 34% на 🧩 Tokens. В ветке старых переменных нет — см. 9. Версия и дата обновления — `TODO: проверить` |

Flutter-строки нет: компонент web, Mobile-вариантов в Core kit нет.

## 2. Когда использовать
Почему два стиля: `Filled` — segmented control, 2–4 варианта одного объекта без смены URL; `Inline` — навигация между разделами (свободный гайд).

| Используем | Не используем → что вместо |
|---|---|
| • 2–4 равнозначных вида одного объекта без смены роута/URL → `Style=Filled` (свободный гайд: «Tab bar в стиле Filled по сути и есть Segmented control — отдельный компонент заводить не нужно») | • Отдельный segmented control → `Tabs, Style=Filled`, свой компонент не заводим (свободный гайд) |
| • Навигация между независимыми разделами → `Style=Inline` (свободный гайд) | • Фильтр с множественным выбором → `Filter chips`. `TODO: проверить` |
| • Фильтр списка по статусу со счётчиком — «Опубликованные 16 · Черновики 16 · Архивные 10» (✏️ Table (Катя)) | • Больше 4 вариантов → `TODO: проверить`, что вместо |
| • Разделы карточки курса — «Мое обучение · О курсе · Назначения» (✅ Modal, ✅ Progress-circle-bar) | • Шаги процесса по порядку → Steppers на странице ✏️ Steppers. `TODO: проверить` |

`TODO: проверить` — сценарии «Используем» 3–4 собраны по 15 инстансам `Tabs` в макетах (`getInstancesAsync` по 16 вариантам, 2026-09-29); все они `Size=lg, Style=Filled, Inverted=Yes`, 2–3 таба. Правила 1–2 — из свободного гайда, решения команды в `ds/decisions.md` нет.

## 3. Анатомия
Пример: инстанс `Tabs, ↕ Size=lg, 🖇️ Style=Filled, 🔲 Inverted=Yes` с тремя `Tab` («Опубликованные» активный, «Черновики», «Архивные»), и `Tabs, ↕ Size=lg, 🖇️ Style=Inline` для маркера 7.

| № | Элемент | Что это (слой / компонент) | Обязательный | Стиль и токены |
|---|---|---|---|---|
| 1 | **Контейнер** | `Tabs`, слот `tabs` — ряд табов, подложка у `Filled` | да | `bg/pale/secondary-light` или белый (`Inverted=Yes`), `Radius/radius-md` |
| 2 | **Tab активный** | `Tab`, `🔘 Active=Yes` — выбранный вид | да | `Body/sm-medium` (Medium), фон `bg/pale/secondary` |
| 3 | **Tab неактивный** | `Tab`, `🔘 Active=No` — остальные виды | да | `Body/sm-regular` (Regular), без фона |
| 4 | **Icon** | `magicoon`, `iconType` — иконка перед текстом | нет (`👁️ Show Icon `) | 16 (md — 20), `icon/*` как текст |
| 5 | **Label** | текстовый слой `Tab` (`𝐓 Text `) — название, одна строка | да, кроме `Icon Only=Yes` | `Body/sm-*`, `text/*` по состоянию |
| 6 | **Counter** | `Counter-badge` — число после текста | нет (`👁️ Show Сounter`) | `Size=md` 16, `Radius/radius-full`, `Caption/xxs-medium` |
| 7 | **Индикатор** | `blue line` — линия 2 снизу | только `Style=Inline` | высота 2, `border/brand/primary` |

Стили текста — для `Tab sm`; у `Tab md` — `Body/md-*`. Все значения по размерам и состояниям — в 9.

`Counter-badge` — отдельный компонент Core kit (remote). `magicoon` — иконка по умолчанию в `iconType`, из другой библиотеки (remote).

**Вложенный компонент: `Counter-badge`** (`8454:7170`, remote; реестр — 0% на Tokens). Почему отдельно: цвет счётчика меняется вместе с активностью таба, а не задаётся руками.
- Форма: радиус `Radius/radius-full` (1000), ширина от высоты (min-width = высота), число растягивает по ширине.
- Размеры: `Size=sm` 12 — `Caption/xxxs-medium` (8/8), padding 2 со всех сторон (`Spacing/spacing-0x-xxs`); `Size=md` 16 — `Caption/xxs-medium` (10/12), padding по бокам 4 (`Spacing/spacing-1x-xs`), сверху и снизу 2; `Size=lg` 20 — `Caption/xxs-medium`, padding 4 со всех сторон.
- Цвета (все — примитивы, кроме Blue):
  - `Color=Pale blue, Inverted=No` — заливка `pale_blue/solid-500` (#5D7FBD), текст `text/neutral/white`;
  - `Color=Pale blue, Inverted=Yes` — заливка `pale_blue/solid-50` (#F2F4F8), обводка `pale_blue/alpha-200` (#5D7FBD33), текст `pale_blue/solid-600` (#3B5991);
  - `Color=Blue, Inverted=Yes` — заливка `bg/brand/secondary-light`, обводка `border/brand/secondary`, текст `text/brand/primary`;
  - `Color=Gray, Inverted=Yes` — заливка `neutral/gray/solid-50` (#F7F7F7), обводка `border/neutral/primary`, текст `text/neutral/tertiary` (#3D3D3D);
  - `Color=Gray, Inverted=No` — заливка `neutral/gray/solid-350` (#949494), текст `text/neutral/white`.
- Обводка 1, у `Size=sm` — 0,5, нет токена.
- Какой вариант в каком состоянии таба — в 9, таблица «Tab — цвета по состояниям».

## 4. Свойства
Два компонента: `Tabs` — группа, `Tab` — элемент внутри слота `tabs`. Меняете вид группы — меняйте `Tabs`; текст, иконку, счётчик и активный таб — у `Tab` внутри.

### Tabs — группа
Оси комбинируются не полностью: `Filled` — 3 размера × 2 `Inverted` × 2 `Icon Only` = 12; `Inline` — 2 размера × `Inverted=No` × 2 `Icon Only` = 4. Итого 16.

#### ↕ Size
Высота группы. Почему `Tabs` выше `Tab` на 8: у `Filled` подложка 4 со всех сторон.
Линейка: `Size=md` 36 · `lg` 40 · `xl` 48 (`Filled`); `sm` 32 · `lg` 40 (`Inline`).
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
Табы группы. По умолчанию — 2 `Tab`. Preferred — набор `Tab`. Третий и следующие табы — копией `Tab` внутри слота.

### Tab — элемент
Полный набор для `Filled`: 3 размера × 2 `Icon Only` × 2 `Inverted` × 8 сочетаний `Active`/`State` = 96. `Inline` — только `Inverted=Yes`: 2 × 2 × 8 = 32. Итого 128.

#### ↕ Size
Линейка: `Size=xs` 28 · `sm` 32 · `md` 40 (`Filled`); `sm` 32 · `md` 40 (`Inline`).
Значения: `xs` (по умолчанию), `sm`, `md`. `xs` — только у `Filled`.

Размеры `Tabs` и `Tab` называются по-разному: `Tabs md` → `Tab xs`, `lg` → `sm`, `xl` → `md` (`Filled`); `Tabs sm` → `Tab sm`, `lg` → `md` (`Inline`). В чек-листе `11202:19468` — четвёртая шкала: lg 40, md 36, sm 32, xs 28. `TODO: проверить` — привести к одной шкале.

#### 🖇️ Style · 🔲 Inverted · ❇️ Icon Only
Те же, что у `Tabs`. Значения по умолчанию: `Style=Filled`, `Inverted=No`, `Icon Only=No`. У `Tab, Filled` `Inverted` меняет только фон активного таба: `No` — `bg/pale/secondary`, `Yes` — `bg/white/white-primary`. Неактивные табы одинаковые.

#### 🔘 Active
Выбранный таб.
Ряд примеров: `Active=Yes` · `Active=No`.
Значения: `Yes` (по умолчанию), `No`. В группе один `Active=Yes` (свободный гайд). Меняет вес текста: `Active=Yes` — Medium, `Active=No` — Regular.

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
Состояния — у `Tab` (`⚙️. State`). У `Tabs` оси State нет. Почему вес шрифта важен: Medium у активного отличает выбранный таб не только цветом.

Ряды примеров (`Tab, Size=md`):
- `Filled, Active=No`: `Default` · `Hover` · `Pressed` · `Focus` · `Disabled`
- `Filled, Active=Yes`: `Default` · `Focus` · `Disabled`
- `Inline, Active=No`: `Default` · `Hover` · `Pressed` · `Focus` · `Disabled`
- `Inline, Active=Yes`: `Default` · `Focus` · `Disabled`

Цвета, вес шрифта и вариант `Counter-badge` по состояниям — таблица в 9.

- У активного таба нет Hover и Pressed. В свободном гайде написано, что у `Active=Yes` только Default — устарело: в компоненте есть ещё Focus и Disabled.
- Вес шрифта не меняется по состояниям: у `Active=Yes` Medium во всех, у `Active=No` Regular во всех (в т. ч. Hover, Pressed, Disabled).
- Иконка — в цвет текста токенами `icon/*` той же роли. Исключение — Pressed в `Filled`: у `xs` `icon/pale/secondary-pressed`, у `sm` и `md` — `icon/pale/secondary-hover`. `TODO: проверить` — ошибка или решение.
- `Inline, Active=No`: на Hover и Pressed меняется только фон, текст и иконка остаются `text/neutral/quaternary`.
- Линия `Inline` у неактивного таба есть, но прозрачная (opacity 0).
- Прототипных переходов между состояниями нет.

## 6. Поведение и контент
Пара примеров: «Все 20 · В процессе 10 · Пройденные 10» (ширина по тексту) · `Icon Only` со счётчиком в углу. Почему группа «плавает» по ширине: у `Tab` нет max-width, таб растёт под текст.

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

## 8. В интерфейсе
Пример — «Управление курсами» (✏️ Table (Катя), инстанс `20916:7929` в `20916:7920`): заголовок страницы → `Tabs, lg, Filled, Inverted=Yes` «Опубликованные 16 · Черновики 16 · Архивные 10» (активный — «Черновики») → поиск → таблица. Табы стоят на сером фоне страницы, над белой карточкой таблицы.

Почему так: компонент не управляет контентом, только переключением — под табами меняется выборка таблицы, а не страница (свободный гайд).

Второй сценарий из макетов — разделы курса «Мое обучение · О курсе · Назначения» над белой карточкой раздела (✅ Modal, `22410:4405`).

## 9. Спецификация (web)
Три таблицы: группа, размеры элемента, цвета по состояниям. Почему у `Inline` отступ не растёт с размером: паддинг 16 у `tab body` и в `sm`, и в `md`, растут только высота, зазор, шрифт и иконка.

### Tabs — группа
| Свойство | `Filled` | `Inline` |
|---|---|---|
| высота | md 36, lg 40, xl 48, нет токена. = высота `Tab` + 4 + 4 | sm 32, lg 40, hug |
| padding | `Spacing/spacing-1x-xs` (4) со всех сторон | 0 |
| зазор между табами | 4. В xl — `Spacing/spacing-1x-xs`, в md и lg — нет токена | `Spacing/spacing-x` (0) |
| радиус | `Radius/radius-md` (12) | — |
| фон | `Inverted=No` — `bg/pale/secondary-light` (#5D7FBD14); `Inverted=Yes` — `bg/white/white-primary` (#FFFFFF). `Icon Only=Yes, Inverted=No` — две заливки: белая + `bg/pale/secondary-light`. `TODO: проверить` | нет |
| обводка | `Inverted=Yes` — 1, нет токена, `border/pale/secondary-light` (#5D7FBD14); `Inverted=No` — нет | снизу 1, внутри, нет токена, `border/neutral/primary` (#E3E3E3) |
| `Tab` внутри | md → `xs`, lg → `sm`, xl → `md` | sm → `sm`, lg → `md` |

### Tab — размеры
| Свойство | `Filled` xs | `Filled` sm | `Filled` md | `Inline` sm | `Inline` md |
|---|---|---|---|---|---|
| высота | 28 | 32 | 40 | 32 | 40 |
| padding по бокам | `Spacing/spacing-2x-sm` (8) | `Spacing/spacing-3x-md` (12) | `Spacing/spacing-3x-md` (12) | `Spacing/spacing-4x-lg` (16), у `tab body` | = 16 |
| зазор icon — label — counter | `Spacing/spacing-1x-xs` (4) | `Spacing/spacing-1,5x-s` (6) | `Spacing/spacing-2x-sm` (8) | `Spacing/spacing-1,5x-s` (6) | `Spacing/spacing-2x-sm` (8) |
| радиус | `Radius/radius-sm` (8) | = | = | верх `Radius/radius-sm` (8), низ `Radius/radius-x` (0) | = |
| Label, `Active=Yes` | `Body/sm-medium` (14/20) | `Body/sm-medium` | `Body/md-medium` (16/22) | `Body/sm-medium` | `Body/md-medium` |
| Label, `Active=No` | `Body/sm-regular` (14/20) | `Body/sm-regular` | `Body/md-regular` (16/22) | `Body/sm-regular` | `Body/md-regular` |
| Icon | 16 | 16 | 20 | 16 | 20 |
| Counter | `Counter-badge, Size=md` (16) | `Size=md` (16) | `Size=lg` (20) | `Size=md` (16) | `Size=md` (16) |
| `Icon Only`, размер | 28 × 28 | 32 × 32 | 40 × 40 | 32 × 32, зазор 4 без токена | 40 × 40 |
| `Icon Only`, Counter | `Size=sm` (12), absolute | `Size=sm` (12) | `Size=md` (16); x 25, y −4 от угла таба | `Size=sm` (12) | `Size=md` (16) |
| `blue line` | — | — | — | высота 2, радиус сверху 2, нет токена; `border/brand/primary` (#008EFF) | = |

### Tab — цвета по состояниям
| Состояние | `Filled, Active=No` | `Filled, Active=Yes` | `Inline, Active=No` | `Inline, Active=Yes` |
|---|---|---|---|---|
| вес текста | Regular | Medium | Regular | Medium |
| Default | без фона; текст `text/pale/secondary` (#728DC0), иконка `icon/pale/secondary` | фон `bg/pale/secondary` (#5D7FBD1F) или белый при `Tab Inverted=Yes`; текст `text/pale/primary` (#4D6FAD), иконка `icon/pale/primary` | без фона; текст `text/neutral/quaternary` (#949494), иконка `icon/neutral/quaternary` | текст `text/brand/primary`, иконка `icon/brand/primary`, линия `border/brand/primary` (#008EFF) |
| Hover | фон `bg/pale/secondary-hover` (#5D7FBD33), текст `text/pale/secondary-hover` (#5D7FBD), иконка `icon/pale/secondary-hover` | нет | фон `bg/neutral/secondary-hover` (#F7F7F7), текст не меняется | нет |
| Pressed | фон `bg/pale/secondary-pressed` (#5D7FBD4D), текст `text/pale/secondary-pressed` (#3B5991); иконка — см. 5 | нет | фон `bg/neutral/secondary-pressed` (#EDEDED), текст не меняется | нет |
| Focus | как Default + обводка 1 `border/neutral/white` внутри + тень 0, 0, 0, 3 `effects/focus-default` (#728DC0) | то же | то же | то же |
| Disabled | текст `text/pale/disabled` (#9CACC9), иконка `icon/pale/disabled` | фон `bg/pale/disabled` (#5D7FBD14), текст `text/pale/disabled` | текст `text/neutral/disabled` (#C9C9C9), иконка `icon/neutral/disabled` | текст `text/neutral/disabled`, линия `border/neutral/disabled` (#EDEDED) |
| `Counter-badge` | `Pale blue, Inverted=Yes` (светлый) во всех состояниях | `Pale blue, Inverted=No` (сплошной); Disabled — `Inverted=Yes` | `Gray, Inverted=Yes` | `Blue, Inverted=Yes`; Disabled — `Gray, Inverted=No` |

**Counter у `Icon Only=Yes, Filled`** — не как в таблице и не единообразно: `Active=No` — у `xs` и `sm` светлый (`Inverted=Yes`), у `md` сплошной (`Inverted=No`), у `sm, Tab Inverted=Yes` в Focus и Disabled тоже сплошной; `Active=Yes, Disabled` — у `xs` светлый, у `sm` и `md` сплошной. `TODO: проверить` — привести к правилу таблицы. У `Icon Only, Inline` — как в таблице.

`TODO: проверить` — примитивы в `Counter-badge` (`pale_blue/*`, `neutral/gray/*`; перепривязка — через `ds-token-update` на странице Counter-badge).

**Токены** (проверка привязок в ветке, 2026-09-29, по key коллекций 🧩 Tokens; не полный прогон `component-token-audit.js`): старых переменных нет. Без переменной: `Tab` — 71 поле, `Tabs` — 28, как в реестре. В реестре (main, 2026-09-25) старых — 173 и 48. `TODO: проверить` — перепривязали в ветке или реестр устарел. Без токена:
- обводка Focus 1 (`border-sm` в коллекции `Border` — 1);
- тень Focus 0, 0, 0, 3 `effects/focus-default` — те же параметры, что у стиля `States/focus-state`, но стиль не применён;
- радиус `blue line` 2 (есть `Radius/radius-xxs` = 2);
- зазор 4 в `tab body` у `Inline, Icon Only=Yes` и в слоте `Tabs` md/lg (есть `Spacing/spacing-1x-xs`);
- обводка контейнера `Tabs` 1; обводка `Counter-badge` 1 и 0,5.

**Mantine:** компонент и пропсы ↔ `Style`, `Size`, `Inverted`, `Icon Only` — `TODO: фронты`.

**a11y:**
- Клавиатура: в свободном гайде «переключение — по клику или клавиатуре». Стрелки, Home/End, Tab-стоп, активация по фокусу или по Enter — `TODO: фронты`.
- Роли `tablist` / `tab` / `tabpanel`, `aria-selected`, связь таба с панелью — `TODO: фронты`.
- Фокус: `State=Focus` — белая обводка 1 внутри и кольцо 3 `effects/focus-default` (#728DC0), контраст кольца к белому 3,3:1.
- Выбранный таб отличается не только цветом: Medium против Regular, у `Filled` — фон, у `Inline` — линия.
- Контраст текста ниже 4,5:1 (текст 14–16, Regular у неактивных, Medium у активных):
  - неактивный `Filled` #728DC0 — 3,3:1 на белом, 3,1:1 на подложке `Inverted=No`;
  - активный `Filled` #4D6FAD на `bg/pale/secondary` поверх белого — 4,4:1 (так в макетах, `Tabs, Inverted=Yes`); на белом (`Tabs, Inverted=No`) — 5,0:1;
  - Hover `Filled` #5D7FBD — 3,2:1;
  - `Inline`: активный #008EFF — 3,3:1, неактивный #949494 — 3,0:1.
  `TODO: проверить` — поднять контраст токенов текста или принять осознанно.
- `Icon Only`: у таба нет текста — `aria-label` обязателен. `TODO: фронты`.
- Хит-зона: `Filled xs` — 28, `Icon Only xs` — 28 × 28. `TODO: проверить` — минимум 24 по WCAG 2.5.8 соблюдён; 44 для тач — нет.

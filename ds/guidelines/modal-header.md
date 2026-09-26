Источник: Core kit `17100:18553` (main), 2026-09-26. Скилл ds-guideline 0.2.0. Черновик — перенести в Figma после ревью.

# Modal header

## 1. Modal header — обложка
Шапка модального окна: заголовок, описание, статус, кнопки «назад» и «закрыть». На Web — верх модалки `Modal`, на Mobile — шапка bottom sheet с drag handle.

<!-- Описание взято из свободного гайда на странице ✅ Modal header, фрейм `Main Container` `19442:22424` (в ds/components.md гайдлайн числится как «нет»). -->

**Скопировать себе:**
- `Modal header, 📌 Type=Web, ↕ Size=lg, 📐 Align=Left` — верх обычной модалки. Так он стоит в `Modal` по умолчанию.
- `Modal header, 📌 Type=Mobile, ↕ Size=lg, 📐 Align=Left`, `🔘 Sheet header`=true — шапка bottom sheet.
- `Modal header, 📐 Align=Center`, `🏞️ Illustration`=true — подтверждение или результат с картинкой.

| Ссылка | Где |
|---|---|
| Компонент в Core kit | `17100:18553`, страница ✅ Modal header. 32 варианта |
| Storybook | `TODO: фронты` |
| Flutter | `TODO: мобильщики` |
| Статус и версия | ✅ в Core kit, 76% на 🧩 Tokens (аудит 2026-09-26). Версия и дата обновления — `TODO: проверить` |

## 2. Когда использовать
| Используем | Не используем → что вместо |
|---|---|
| • Верх любой модалки `Modal` — там он стоит по умолчанию (`Type=Web, Size=lg, Align=Left`) | • Сообщение внутри страницы с заголовком и крестиком → `Alert`. `TODO: проверить` |
| • Шапка bottom sheet на Mobile — `Type=Mobile`, `🔘 Sheet header`=true | • Заголовок поповера → `Popover` (свой `Title`). `TODO: проверить` |
| • Многошаговая модалка — `⬅️ Back`=true, `Align=Left` | • Заголовок страницы → `TODO:` какой компонент, в Core kit его нет |
| • Подтверждение или результат с картинкой — `Align=Center` + `Illustration` (пример на ✅ Modal: «Применить изменения?») | • Старые `Header` / `Header 2.0` — в «Не использовать» → `Modal header`. `TODO: проверить`, что замена — этот компонент |

`TODO: проверить` — сценарии собраны по 33 инстансам на странице ✅ Modal. На других страницах Core kit инстансов нет, правила команды нет.

## 3. Анатомия
Пример: инстанс `Modal header, 📌 Type=Web, ↕ Size=lg, 📐 Align=Left`, `⬅️ Back`=true, `✅ Status`=true, текст «Ссылка для ИИ-скрининга создана» / «Скопируйте приглашение и отправьте его кандидату.» Рядом — `Type=Mobile, Size=lg, Align=Center` для маркеров 7 и 8.

1. **Close button** (`Close button` `19079:20662`) — закрывает модалку
2. **Back** (`arrow-left`) — возврат на предыдущий шаг
3. **Status** (`OLD Badge` `9763:4426` в `Status container`) — статус рядом с заголовком
4. **Title** (`Title`) — заголовок модалки, до 2 строк
5. **Description** (`Description`) — пояснение под заголовком, до 3 строк
6. **Top** (`Top`) — ряд: Back, Title, Status
7. **Illustration** (слот `Illustration`) — картинка над текстом, только `Align=Center`
8. **Sheet header** (`Sheet header` с `Drag handle`) — полоска свайпа, только `Type=Mobile`

`Drag handle` — слой, не компонент. `arrow-left` — иконка, не компонент.

`arrow-left` в `Type=Mobile, Size=md` взят из другой библиотеки (remote), в остальных вариантах — локальный. `TODO: проверить`, какой правильный.

## 4. Свойства
Пять осей Variant комбинируются полностью, пропусков нет: 2 × 2 × 2 × 2 × 2 = 32 варианта.

### 📌 Type
Платформа: Web — модалка, Mobile — шапка bottom sheet.
Ряд примеров: `Type=Web` · `Type=Mobile` (оба `Size=lg, Align=Left`).
Значения: `Web` (по умолчанию), `Mobile`. На Mobile текст на ступень мельче, паддинги меньше, есть `Sheet header` — см. 9.

### ↕ Size
Размер шапки: меняет типографику, паддинги, высоту бейджа и иллюстрации — см. 8.
Ряд примеров: `Size=lg` · `Size=md` (оба `Type=Web, Align=Left`).
Значения: `lg` (по умолчанию), `md`.

### 📐 Align
Выравнивание текста. Center — текст по центру, есть слот `Illustration`.
Ряд примеров: `Align=Left` · `Align=Center` (с иллюстрацией).
Значения: `Left` (по умолчанию), `Center`. В `Align=Center` нет слоёв `arrow-left` и `Status container`, в `Align=Left` нет слота.

### 🔳 Border
Линия снизу — отделяет шапку от контента.
Ряд примеров: `Border=False` · `Border=True`.
Значения: `False` (по умолчанию), `True`. На Web ещё увеличивает нижний паддинг (8 → 24 в lg, 8 → 20 в md Left). На Mobile высоту не меняет.

### ❏ Shadow
Тень вниз — отделяет шапку от контента.
Ряд примеров: `Shadow=False` · `Shadow=True`.
Значения: `False` (по умолчанию), `True`. Параметры тени — см. 8.

Когда включать `Border` или `Shadow` — см. 6 «Прокрутка».

### 𝐓 Title
Текст заголовка. Обязательный.
Ряд примеров: «Title» в одну строку · «Очень длинный заголовок, который умещается только в 2 строки» (инстанс `19528:4763` на ✅ Modal).
Значения: текст, по умолчанию «Title». До 2 строк, дальше многоточие — см. 6.

### 👁️ Description · 𝐓 Description text
Пояснение под заголовком.
Ряд примеров: `👁️ Description`=true · `👁️ Description`=false.
Значения: `👁️ Description` — true (по умолчанию) / false; `𝐓 Description text` — текст, по умолчанию «Description». До 3 строк, дальше многоточие. Нет пояснения — выключите `👁️ Description`, не оставляйте «Description».

### ✅ Status
Статус объекта рядом с заголовком.
Ряд примеров: `✅ Status`=false · `✅ Status`=true (`Align=Left`).
Значения: false (по умолчанию) / true. Не действует при `Align=Center`.

Внутри — `OLD Badge`, `Color=Green`: Web lg — `Size=lg` (28), остальные — `Size=sm` (20). Цвета: фон `bg/success/secondary-light` (#12A54314), бордер `border/success/secondary` (#12A5431F), текст `text/success/primary` (#12A543). Цвета привязаны к старым локальным переменным Core kit с теми же именами. Замена на `Badge` `23457:2960` снимет это целиком.

- Смысл статуса в шапке и разрешённые цвета — `TODO:` уточнить.
- Срок жизни статуса — `TODO:`.
- Выбор другого цвета или текста статуса отдельным свойством не вынесен — только оверрайдом инстанса. `TODO: проверить`, нужен ли вложенный instance swap.

### ⬅️ Back
Возврат на предыдущий шаг в многошаговой модалке.
Ряд примеров: `⬅️ Back`=false · `⬅️ Back`=true (`Align=Left`).
Значения: false (по умолчанию) / true. Не действует при `Align=Center`: на ✅ Modal два инстанса Center стоят с `⬅️ Back`=true, стрелки не видно.

### ✖️ Close
Кнопка закрытия.
Ряд примеров: `✖️ Close`=true · `✖️ Close`=false.
Значения: true (по умолчанию) / false. `✖️ Close` выключаем только если закрыть модалку можно другим способом. `TODO: проверить` — на ✅ Modal так сделано в подтверждении «Применить изменения?», правила нет.

### 🔘 Sheet header
Полоска свайпа bottom sheet.
Ряд примеров: `🔘 Sheet header`=true · `🔘 Sheet header`=false (оба `Type=Mobile`).
Значения: true (по умолчанию) / false. Не действует при `Type=Web`.

### 🏞️ Illustration · слот Illustration
Картинка над текстом для подтверждения или результата.
Ряд примеров: `🏞️ Illustration`=true · `🏞️ Illustration`=false (оба `Align=Center`).
Значения: `🏞️ Illustration` — true (по умолчанию) / false; слот `Illustration` — preferredValues не заданы. Не действует при `Align=Left`.

Слот тянется на ширину контента, иллюстрация — по центру. По умолчанию в слоте `Document Upload` — копия № 1 из `ds/illustrations.md` («Ошибка загрузки», исходник 160 × 160). Брать можно только из списка «Используем» в `ds/illustrations.md`. Кто разрешает новые иллюстрации — `TODO:` уточнить у владельца компонента. Размеры — см. 8 и 9.

### Мёртвые сочетания
`⬅️ Back` и `✅ Status` не действуют при `Align=Center`; `🏞️ Illustration` — при `Align=Left`; `🔘 Sheet header` — при `Type=Web`.

`TODO: проверить` — скрыть мёртвые свойства нельзя: Figma показывает все Boolean во всех вариантах. Нужно ли вынести Center в отдельный компонент — решение по API (`skills/design-systems`).

## 5. Состояния
У `Modal header` оси State нет. Состояния есть только у вложенного `Close button` (`⚙️ State`, 4 варианта). Внутри `Modal header` он всегда `Default`.

Ряд примеров: `Default` · `Hover` · `Pressed` · `Focus` (`Disabled` не существует).

- **Default** — круг `neutral/gray/solid-75` (#EDEDED)
- **Hover** — круг `neutral/gray/solid-85` (#E8E8E8)
- **Pressed** — круг `neutral/gray/solid-100` (#E3E3E3)
- **Focus** — круг как Default + обводка 3 `effects/focus-default` (#728DC0) по контуру 44

Иконка во всех состояниях — `icon/neutral/secondary` (#666666). Web и Mobile используют один и тот же `Close button`. В прототипе: Default → Hover по наведению, Hover → Pressed по нажатию.

Круг привязан к примитивам Tokens, а не к семантике. По значениям совпадают `bg/neutral/quaternary`, `bg/neutral/quaternary hover`, `bg/neutral/quaternary pressed`. `TODO: проверить` — перепривязать через `ds-token-update`. Focus собран вручную (DROP_SHADOW 0, 0, 0, 3), параметры те же, что у стиля `States/focus-state`, но стиль не применён.

`arrow-left` — просто иконка, состояний у неё нет (в свободном гайде: «Статична: отдельного компонента с hover/focus/pressed-состояниями в файле нет»).

## 6. Поведение и контент
Пара примеров: «Title» в одну строку · «Очень длинный заголовок, который умещается только в 2 строки» (инстанс `19528:4763` на ✅ Modal).

- **Title:** максимум 2 строки, дальше многоточие. В свободном гайде на странице написано «одна строка», в компоненте — 2. `TODO: проверить`, какое правило верное. Не влезает — сократите, не переносите смысл в Description.
- **Description:** максимум 3 строки, дальше многоточие.
- **Ширина под текст на 375:** Web lg — 375 минус 24 на два = 327, Web md Left — 335, Mobile — 343.
- **Close button и текст:** кнопка стоит поверх ряда `Top` (absolute) и не занимает места, поэтому высота шапки от неё не зависит. Title не резервирует под неё место: длинная строка заходит под круг (Web: круг с 331, текст до 351). `TODO: проверить` — нужен правый паддинг у `Top` на ширину кнопки.
- **Лимит символов:** не задан. `TODO:` посчитать на Web lg (`Heading/H4`, ширина 327) с запасом на казахский плюс 30%.
- **Прокрутка:** при прокрутке `Body` шапка в `Modal` остаётся на месте (Body — отдельный слот со скроллом). `TODO: проверить` — отделять шапку от контента `Border=True` или `Shadow=True`, правила нет.
- **Адаптив:** ширина фиксированная 375; в `Modal` инстанс растянут до 560. Web и Mobile — разные варианты (`📌 Type`), не брейкпоинт. Какой `Type` на каком брейкпоинте — `TODO: проверить`.
- **Анимация:** в компоненте нет. `TODO: проверить`, нужна ли, и если да — с `prefers-reduced-motion`.

## 7. Делаем / не делаем
| Делаем | Не делаем |
|---|---|
| Back и Status — с `Align=Left` | Не включаем Back и Status в Center |
| Иллюстрацию — только в `Align=Center` | Не ставим картинку в Left вручную |
| Title до 2 строк | Не пишем заголовок в 3 строки |
| Закрываем через `Close button` | Не рисуем свой крестик |
| Статус — `Badge` `23457:2960` после замены | Не добавляем новые `OLD Badge` |
| Mobile — с `Type=Mobile` | Не ставим Web-шапку в bottom sheet |

`TODO: проверить` — все пункты выведены из структуры компонента, утверждённых правил команды нет.

## 8. Спецификация (web)
Общее для Web lg и md. Состояния есть только у `Close button` — в колонке «По состояниям».

| Элемент | Свойство | Значение (токен) | По состояниям |
|---|---|---|---|
| Контейнер | ширина | 375, нет токена. Фиксированная; в `Modal` растянут до 560 | — |
| Контейнер | высота | hug | — |
| Контейнер | радиус | верх `Radius/radius-xl` (24), низ `Radius/radius-x` (0). Совпадает с радиусом `Modal` (24) | — |
| Контейнер | фон | `bg/white/white-primary` (#FFFFFF) | — |
| Контейнер | бордер (`Border=True`) | только снизу, 1 без токена, `border/neutral/secondary` (#EDEDED) | — |
| Контейнер | тень (`Shadow=True`) | 0, 5, 15, 0, цвет — старая `effects/shadow-low`. Те же параметры, что у стиля `Below/low`, но стиль не применён | — |
| `Top` | зазор | `Spacing/spacing-2x-sm` (8): Back, Title, Status | — |
| Title — Description | зазор | `Spacing/spacing-1x-xs` (4) | — |
| Title | цвет | `text/neutral/primary` (#0E0E0E) | — |
| Description | цвет | `text/neutral/secondary` (#666666) | — |
| `arrow-left` | размер | 24, нет токена | нет состояний |
| `Close button` | размер | 44 × 44, радиус `Radius/radius-md` (12); круг 24, `Radius/radius-full`; иконка `times` 18 | круг: Default `neutral/gray/solid-75` (#EDEDED), Hover `neutral/gray/solid-85` (#E8E8E8), Pressed `neutral/gray/solid-100` (#E3E3E3), Focus — обводка 3 `effects/focus-default` (#728DC0) |
| `Close button` | позиция | absolute, 10 от верха и правого края, нет токена | — |
| `Close button` | иконка | `icon/neutral/secondary` (#666666) | одинаковая во всех |
| Иллюстрация — текст (`Align=Center`) | зазор | `Spacing/spacing-4x-lg` (16) | — |

### Size=lg
| Элемент | Свойство | Значение (токен) | По состояниям |
|---|---|---|---|
| Контейнер | padding | `Spacing/spacing-6x-xll` (24) сверху и по бокам, `Spacing/spacing-2x-sm` (8) снизу. С `Border=True` снизу тоже 24 | — |
| Контейнер | высота (Left) | 24 + 32 + 4 + 20 + 8 = 88 | — |
| Title | стиль | `Heading/H4` (24/32) | — |
| Description | стиль | `Body/sm-regular` (14/20) | — |
| `Status container` | высота | 32, фиксированная, нет токена. Под высоту строки Title | — |
| `OLD Badge` | размер | `Size=lg` (28) | — |
| Иллюстрация | размер | 120 | — |

### Size=md
| Элемент | Свойство | Значение (токен) | По состояниям |
|---|---|---|---|
| Контейнер, Left | padding | `Spacing/spacing-5x-xl` (20) сверху и по бокам, `Spacing/spacing-2x-sm` (8) снизу. С `Border=True` снизу 20 | — |
| Контейнер, Center | padding | `Spacing/spacing-6x-xll` (24), снизу `Spacing/spacing-2x-sm` (8). Не 20, как в md Left. `TODO: проверить` — похоже на ошибку | — |
| Контейнер | высота (Left) | 20 + 24 + 4 + 20 + 8 = 76 | — |
| Title | стиль | `Heading/H6` (18/24) | — |
| Description | стиль | `Body/sm-regular` (14/20) | — |
| `Status container` | высота | 24, фиксированная, нет токена | — |
| `OLD Badge` | размер | `Size=sm` (20) | — |
| Иллюстрация | размер | 112 | — |

**Токены** (аудит `component-token-audit.js`, 2026-09-26): 71% полей на 🧩 Tokens, по правилам реестра — 76% (552 / 176 / 0). Старые привязки:
- иллюстрация по умолчанию в слоте — старые примитивы `blue/solid-400`, `pale_blue/solid-50`, `neutral/white/solid`, `red/solid-400`. `TODO:` можно ли примитивы в иллюстрациях — открытый вопрос в `ds/tokens.md`;
- `OLD Badge` — старые `bg/success/secondary-light`, `border/success/secondary`, `Spacing/*`, `Radius/radius-full` (у всех есть близнец в Tokens);
- тень `Shadow=True` — старые `effects/shadow-low`, `Blur/blur-sm`, `Spread/none`;
- нулевые зазоры `Status container` и `Sheet header` — старый `Spacing/spacing-x` (0).

**Mantine:** компонент и пропсы ↔ свойства Figma — `TODO: фронты`.

**a11y:**
- Фокус: у `Close button` есть `State=Focus` — обводка 3 `effects/focus-default` (#728DC0), контраст к белому 3,3:1. У `arrow-left` состояния фокуса нет. `TODO: фронты` — как фокусируется Back.
- Хит-зона `Close button` 44 при видимом круге 24 — как в свободном гайде на странице: «соответствует WCAG 2.5.5». Хит-зона `arrow-left` (24) не задана — `TODO: проверить`.
- Клавиатура: закрытие по Esc, порядок табуляции (Back → Close), куда уходит фокус при открытии — в компоненте не заданы. `TODO: фронты`.
- aria: роль диалога, связь Title и Description с модалкой, подпись у `Close button` и `arrow-left` (иконки без текста) — в компоненте не заданы. `TODO: фронты`.
- Контраст текста на `bg/white/white-primary`: Title #0E0E0E — 19,3:1, Description #666666 — 5,7:1. Иконка `Close button` #666666 на круге: Default 4,9:1, Pressed 4,5:1.

## 9. Flutter
`Modal header` кроссплатформенный: `📌 Type=Mobile` — шапка bottom sheet.

| Свойство Figma | Виджет / параметр Flutter | Комментарий |
|---|---|---|
| `Modal header, 📌 Type=Mobile` | `TODO: мобильщики` | шапка bottom sheet |
| `↕ Size=lg` / `md` | `TODO: мобильщики` | типографика — таблица ниже |
| `📐 Align=Left` / `Center` | `TODO: мобильщики` | |
| `🔳 Border` | `TODO: мобильщики` | |
| `❏ Shadow` | `TODO: мобильщики` | |
| `𝐓 Title` | `TODO: мобильщики` | до 2 строк |
| `👁️ Description` · `𝐓 Description text` | `TODO: мобильщики` | до 3 строк |
| `✅ Status` | `TODO: мобильщики` | только `Align=Left` |
| `⬅️ Back` | `TODO: мобильщики` | только `Align=Left` |
| `✖️ Close` | `TODO: мобильщики` | |
| `🔘 Sheet header` | `TODO: мобильщики` | drag handle |
| `🏞️ Illustration` · слот | `TODO: мобильщики` | только `Align=Center` |

### Спецификация Mobile
| Элемент | Свойство | lg | md |
|---|---|---|---|
| Контейнер | ширина | 375, нет токена. Подходит `frame/layout-frame-mobile-sm` (375), но он не привязан | = |
| Корень | padding | `Spacing/spacing-1x-xs` (4) сверху и снизу | = |
| `Container` | padding | `Spacing/spacing-3x-md` (12) сверху и снизу, `Spacing/spacing-4x-lg` (16) по бокам. В `Align=Center` боковых нет (0) | = |
| Title | стиль | `Heading/H6` (18/24) | `Heading/sub-md` (16/22) |
| Description | стиль | Left — `Body/xs-regular` (12/16), Center — `Body/sm-regular` (14/20) | `Body/xs-regular` (12/16) |
| `Status container` | высота | 24, нет токена | 24, нет токена |
| `OLD Badge` | размер | `Size=sm` (20) | `Size=sm` (20) |
| `arrow-left` | размер | 20, нет токена | 20, нет токена |
| `Close button` | позиция | absolute, 8 от верха и правого края | = |
| `Drag handle` | размер, цвет | 48 × 4, `Radius/radius-full`, `bg/neutral/quaternary` (#EDEDED). Размер без токена | = |
| Бордер (`Border=True`) | толщина | `border-sm` (1), stroke по центру, высоту не меняет | = |
| Иллюстрация | размер | 112 | 100 |
| Иллюстрация — текст | зазор | 4 + `Spacing/spacing-3x-md` (12): зазор `Content` плюс верхний паддинг `Container` | = |
| Слот `Illustration` | padding | `Spacing/spacing-3x-md` (12) сверху, `Spacing/spacing-4x-lg` (16) по бокам | = |

Mobile lg: Description в Left — 12, в Center — 14. `TODO: проверить` — расхождение или решение.

**Отличия от web:**
- Сверху `Sheet header`: `Drag handle` 48 × 4 по центру. Выключается `🔘 Sheet header`. Контраст `Drag handle` к фону 1,2:1 — `TODO: проверить`, достаточно ли для индикатора.
- Текст на ступень мельче Web, боковые паддинги — 16 против 24 и 20 на Web.
- `Close button` — 8 от верха и правого края, на Web — 10. `arrow-left` — 20, на Web — 24.
- Тап-таргеты: `Close button` — 44 × 44. У `arrow-left` своей хит-зоны нет — `TODO: мобильщики`.
- Свайп, тайминги открытия и закрытия в компоненте не заданы. `TODO: проверить` — нужны ли правила.
- Safe area в компоненте не задана — `TODO: мобильщики`.
- В `Align=Center` у текста нет боковых паддингов: Title тянется на все 375. `TODO: проверить` — похоже на ошибку.

## 10. Служебное
- **Связанные компоненты:**
  - `Close button` `19079:20662` — вложен, закрывает модалку; 4 состояния.
  - `Badge` `23457:2960` — замена `OLD Badge` `9763:4426` в `Status container`. `OLD Badge` — в списке «Не использовать» (`ds/components.md`). В Sidebar её уже сделали, в Modal header ещё нет.
  - `Modal` `18908:9356` — обёртка: `Modal header` + `Body` + `Button group`.
  - Иллюстрации — из `ds/illustrations.md`, список «Используем».
  - `Header` `15024:16114`, `Header 2.0` `18667:7886` — старые прототипы, секция «Старые прототипы», не использовать.
- **Как добавить Modal header в модалку:**
  1. Это модалка или bottom sheet? Нет — см. «Не используем» в 2.
  2. Платформа: Web → `Type=Web`, Mobile → `Type=Mobile`. На Mobile решите, нужен ли `🔘 Sheet header`.
  3. Нужны иллюстрация, `⬅️ Back` или `✅ Status`? Иллюстрация — только `Align=Center`. Back и Status — только `Align=Left`. Всё сразу нельзя.
  4. Заголовок: до 2 строк с запасом на казахский плюс 30%.
  5. Description: до 3 строк или выключить `👁️ Description`.
  6. Контент под шапкой скроллится → `Border=True` или `Shadow=True`. `TODO: проверить` — правила нет.
- **Открытые вопросы:**
  1. Мёртвые свойства: `⬅️ Back`, `✅ Status` при `Align=Center`; `🏞️ Illustration` при `Align=Left`; `🔘 Sheet header` на Web — разделить компонент или оставить → `skills/design-systems`.
  2. Длинный Title заходит под `Close button` — правый паддинг у `Top` → владелец компонента.
  3. Статус на `OLD Badge` → `Badge` `23457:2960` → владелец компонента.
  4. Паддинги: Web md Center 24 vs md Left 20; Mobile Center без боковых; Mobile lg Description 12 (Left) vs 14 (Center) → владелец компонента.
  5. В `ds/components.md` гайдлайн «нет», но на странице есть свободный гайд `19442:22424` — учесть при перевыгрузке реестра.
  - Title: до 2 строк (компонент) или одна строка (свободный гайд)? → Zhandos.
  - Новые свойства и варианты добавляет только владелец компонента — `TODO:` кто владелец.
- **История:**
  - 2026-09-26 — черновик, 13 секций (ds-guideline 0.1.0), свёрстан в ветке `bRwFkumYDoKh1OQv5a5dYp`.
  - 2026-09-26 — перестроен в 10 разделов по `templates/component-guideline.md` (ds-guideline 0.2.0).
- **Покрытие:** Разделов 10 (из 10 применимых — 10), на фактах 9 (1–6, 8–10), TODO: 50 (26 перенесены из версии 0.1.0; 24 новых: фронты 5, мобильщики 15, проверить 4).

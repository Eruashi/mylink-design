Источник: Core kit `17100:18553` (main), 2026-09-26. Скилл ds-guideline 0.1.0. Черновик — перенести в Figma после ревью.

# Modal header — guideline

## 01 — Обзор

**Modal header**

Шапка модального окна: заголовок, описание, статус, кнопки «назад» и «закрыть». На Web — верх модалки `Modal`, на Mobile — шапка bottom sheet с drag handle.

<!-- Описание взято из свободного гайда на странице ✅ Modal header, фрейм `Main Container` `19442:22424` (в ds/components.md гайдлайн числится как «нет»). -->

| Когда использовать | Когда не использовать |
|---|---|
| • Верх любой модалки `Modal` — там он стоит по умолчанию (`Type=Web, Size=lg, Align=Left`) | • Сообщение внутри страницы с заголовком и крестиком — это `Alert`. `TODO: проверить` |
| • Шапка bottom sheet на Mobile — `Type=Mobile`, `🔘 Sheet header`=true | • Заголовок поповера — это `Popover` (свой `Title`). `TODO: проверить` |
| • Многошаговая модалка — `⬅️ Back`=true, `Align=Left` | • Заголовок страницы — `TODO:` какой компонент, в Core kit его нет |
| • Подтверждение или результат с картинкой — `Align=Center` + `Illustration` (пример на ✅ Modal: «Применить изменения?») | • Старые `Header` / `Header 2.0` — в «Не использовать». `TODO: проверить`, что замена — этот компонент |

`TODO: проверить` — сценарии собраны по 33 инстансам на странице ✅ Modal. На других страницах Core kit инстансов нет, правила команды нет.

## 02 — Анатомия

Пример: инстанс `Modal header, 📌 Type=Web, ↕ Size=lg, 📐 Align=Left`, `⬅️ Back`=true, `✅ Status`=true, текст «Ссылка для ИИ-скрининга создана» / «Скопируйте приглашение и отправьте его кандидату.»
_Подпись: Modal header, 📌 Type=Web, ↕ Size=lg, 📐 Align=Left_

1. `Close button` — закрывает модалку
2. `arrow-left` — возврат на предыдущий шаг
3. `OLD Badge` в `Status container` — статус рядом с заголовком
4. `Title` — заголовок модалки, до 2 строк
5. `Description` — пояснение под заголовком, до 3 строк
6. `Top` — ряд: Back, Title, Status
7. `Illustration` (слот) — картинка над текстом, только `Align=Center`
8. `Sheet header` с `Drag handle` — полоска свайпа, только `Type=Mobile`

## 03 — Семейство

| Компонент | Роль | Назначение | Обязателен |
|---|---|---|---|
| `Modal header` `17100:18553` | контейнер | шапка модалки и bottom sheet | да |
| `Close button` `19079:20662` | лист | закрыть модалку | нет: `✖️ Close`, по умолчанию true |
| `arrow-left` | лист (иконка) | шаг назад | нет: `⬅️ Back`, по умолчанию false |
| `OLD Badge` `9763:4426` | лист | статус объекта | нет: `✅ Status`, по умолчанию false |
| `Illustration` | слот | иллюстрация над текстом | нет: `🏞️ Illustration`, только `Align=Center` |
| `Drag handle` (слой, не компонент) | разделитель | индикатор свайпа | нет: `🔘 Sheet header`, только `Type=Mobile` |
| `Modal` `18908:9356` | обёртка | модалка: `Modal header` + `Body` + `Button group` | — |
| `Header` `15024:16114`, `Header 2.0` `18667:7886` | — | старые прототипы, секция «Старые прототипы» | не использовать |

`OLD Badge` — в списке «Не использовать» (`ds/components.md`), замена — `Badge` `23457:2960`. В Sidebar её уже сделали, в Modal header ещё нет.

`arrow-left` в `Type=Mobile, Size=md` взят из другой библиотеки (remote), в остальных вариантах — локальный. `TODO: проверить`, какой правильный.

## 04 — Размеры

| Параметр | Значение | Комментарий |
|---|---|---|
| Ширина | 375, нет токена | Фиксированная. В `Modal` инстанс растянут до 560. Для Mobile подходит `frame/layout-frame-mobile-sm` (375), но он не привязан |
| Высота | hug | Web lg Left: 24 + 32 + 4 + 20 + 8 = 88. Web md Left: 20 + 24 + 4 + 20 + 8 = 76 |
| Паддинги Web lg | `Spacing/spacing-6x-xll` (24) сверху и по бокам, `Spacing/spacing-2x-sm` (8) снизу | С `Border=True` снизу тоже 24 |
| Паддинги Web md, Left | `Spacing/spacing-5x-xl` (20) сверху и по бокам, `Spacing/spacing-2x-sm` (8) снизу | С `Border=True` снизу 20 |
| Паддинги Web md, Center | `Spacing/spacing-6x-xll` (24), снизу `Spacing/spacing-2x-sm` (8) | Не 20, как в md Left. `TODO: проверить` — похоже на ошибку |
| Паддинги Mobile | корень: `Spacing/spacing-1x-xs` (4) сверху и снизу; `Container`: `Spacing/spacing-3x-md` (12) сверху и снизу, `Spacing/spacing-4x-lg` (16) по бокам | В `Align=Center` у `Container` боковых паддингов нет (0) |
| Зазор Title — Description | `Spacing/spacing-1x-xs` (4) | Во всех вариантах |
| Зазор в ряду `Top` | `Spacing/spacing-2x-sm` (8) | Back, Title, Status |
| Зазор иллюстрация — текст | Web: `Spacing/spacing-4x-lg` (16). Mobile: 4 + `Spacing/spacing-3x-md` (12) | На Mobile — зазор `Content` плюс верхний паддинг `Container` |
| Радиус | верх `Radius/radius-xl` (24), низ `Radius/radius-x` (0) | Совпадает с радиусом `Modal` (24) |
| Бордер (`Border=True`) | только снизу, 1, `border/neutral/secondary` (#EDEDED) | Толщина: Mobile — `border-sm` (1), Web — 1 без токена |
| Тень (`Shadow=True`) | 0, 5, 15, 0, цвет — старая `effects/shadow-low` | Те же параметры, что у стиля `Below/low`, но стиль не применён |
| Фон | `bg/white/white-primary` (#FFFFFF) | |
| `Close button` | 44 × 44, радиус `Radius/radius-md` (12); круг 24, `Radius/radius-full`; иконка `times` 18 | Позиция absolute: Web — 10 от верха и правого края, Mobile — 8. Нет токена |
| `arrow-left` | Web — 24, Mobile — 20 | Нет токена |
| `Drag handle` | 48 × 4, `Radius/radius-full`, `bg/neutral/quaternary` (#EDEDED) | Размер без токена |
| Высота `Status container` | Web lg — 32, остальные — 24 | Фиксированная, нет токена. Под высоту строки Title |

| Тип · размер | Title | Description |
|---|---|---|
| Web · lg | `Heading/H4` (24/32) | `Body/sm-regular` (14/20) |
| Web · md | `Heading/H6` (18/24) | `Body/sm-regular` (14/20) |
| Mobile · lg | `Heading/H6` (18/24) | Left — `Body/xs-regular` (12/16), Center — `Body/sm-regular` (14/20) |
| Mobile · md | `Heading/sub-md` (16/22) | `Body/xs-regular` (12/16) |

Цвет Title — `text/neutral/primary` (#0E0E0E), Description — `text/neutral/secondary` (#666666).

`Close button` лежит поверх контента (absolute) и не занимает места в ряду `Top`. Поэтому высота шапки не зависит от кнопки. Резерва под неё справа нет — см. 11.

Mobile lg: Description в Left — 12, в Center — 14. `TODO: проверить` — расхождение или решение.

Токены (аудит `component-token-audit.js`, 2026-09-26): 71% полей на 🧩 Tokens, по правилам реестра — 76% (552 / 176 / 0). Старые привязки:
- иллюстрация по умолчанию в слоте — старые примитивы `blue/solid-400`, `pale_blue/solid-50`, `neutral/white/solid`, `red/solid-400`;
- `OLD Badge` — старые `bg/success/secondary-light`, `border/success/secondary`, `Spacing/*`, `Radius/radius-full` (у всех есть близнец в Tokens);
- тень `Shadow=True` — старые `effects/shadow-low`, `Blur/blur-sm`, `Spread/none`;
- нулевые зазоры `Status container` и `Sheet header` — старый `Spacing/spacing-x` (0).

## 05 — Свойства

### `Modal header`

| Свойство | Тип | Значения | Комментарий |
|---|---|---|---|
| `📌 Type` | Variant | Web, Mobile | Mobile — шапка bottom sheet |
| `↕ Size` | Variant | lg, md | Меняет типографику и паддинги, см. 04 |
| `📐 Align` | Variant | Left, Center | Center — текст по центру, есть слот `Illustration` |
| `🔳 Border` | Variant | False, True | Линия снизу. На Web ещё увеличивает нижний паддинг |
| `❏ Shadow` | Variant | False, True | Тень вниз |
| `𝐓 Title` | Text | «Title» | До 2 строк, дальше многоточие |
| `👁️ Description` | Boolean | true / false | По умолчанию true |
| `𝐓 Description text` | Text | «Description» | До 3 строк, дальше многоточие |
| `✅ Status` | Boolean | true / false | Только `Align=Left` |
| `⬅️ Back` | Boolean | true / false | Только `Align=Left` |
| `✖️ Close` | Boolean | true / false | По умолчанию true |
| `🔘 Sheet header` | Boolean | true / false | Только `Type=Mobile`. По умолчанию true |
| `🏞️ Illustration` | Boolean | true / false | Только `Align=Center`. По умолчанию true |
| `Illustration` | Slot | — | Только `Align=Center`. preferredValues не заданы |

В `Align=Center` нет слоёв `arrow-left` и `Status container`: `⬅️ Back` и `✅ Status` там ничего не делают. На ✅ Modal два инстанса Center стоят с `⬅️ Back`=true, стрелки не видно. В `Align=Left` нет слота: `🏞️ Illustration` там ничего не делает. На Web нет `Sheet header`: `🔘 Sheet header` ничего не делает. Все пять осей комбинируются полностью, пропусков нет. Итого 32 варианта.

`TODO: проверить` — скрыть мёртвые свойства нельзя: Figma показывает все Boolean во всех вариантах. Нужно ли вынести Center в отдельный компонент — решение по API (`skills/design-systems`).

### `Close button`

| Свойство | Тип | Значения | Комментарий |
|---|---|---|---|
| `⚙️ State` | Variant | Default, Hover, Pressed, Focus | Внутри `Modal header` всегда Default |

Итого 4 варианта.

## 06 — Состояния

У `Modal header` оси State нет. Состояния есть только у `Close button`. `arrow-left` — просто иконка, состояний у неё нет.

| State \ Type | Web | Mobile |
|---|---|---|
| Default · круг `neutral/gray/solid-75` (#EDEDED) | ✓ | ✓ |
| Hover · круг `neutral/gray/solid-85` (#E8E8E8) | ✓ | ✓ |
| Pressed · круг `neutral/gray/solid-100` (#E3E3E3) | ✓ | ✓ |
| Focus · круг как Default + обводка 3 `effects/focus-default` (#728DC0) по контуру 44 | ✓ | ✓ |
| Disabled | не существует | не существует |

Иконка во всех состояниях — `icon/neutral/secondary` (#666666). Web и Mobile используют один и тот же `Close button`.

Круг привязан к примитивам Tokens, а не к семантике. По значениям совпадают `bg/neutral/quaternary`, `bg/neutral/quaternary hover`, `bg/neutral/quaternary pressed`. `TODO: проверить` — перепривязать через `ds-token-update`. Focus собран вручную (DROP_SHADOW 0, 0, 0, 3), параметры те же, что у стиля `States/focus-state`, но стиль не применён.

Хит-зона 44 при видимом круге 24 — как в свободном гайде на странице: «соответствует WCAG 2.5.5».

## 07 — Вложенность

Не применимо: Modal header не вкладывается сам в себя и не содержит уровней.

## 08 — Статус

| Тип | Цвет | Что означает | Срок жизни | Состояние |
|---|---|---|---|---|
| `OLD Badge`, `Color=Green` (Web lg — `Size=lg`, 28; остальные — `Size=sm`, 20) | фон `bg/success/secondary-light` (#12A54314), бордер `border/success/secondary` (#12A5431F), текст `text/success/primary` (#12A543) | `TODO:` какой смысл у статуса в шапке и какие цвета разрешены | `TODO:` | только `Align=Left` |

Цвета привязаны к старым локальным переменным Core kit с теми же именами. Замена на `Badge` `23457:2960` снимет это целиком.

Выбор другого цвета или текста статуса отдельным свойством не вынесен — только оверрайдом инстанса. `TODO: проверить`, нужен ли вложенный instance swap.

## 09 — Иллюстрация

Иллюстрация есть только в `Align=Center`: слот `Illustration` над текстом, включается `🏞️ Illustration`. По умолчанию в слоте `Document Upload` — копия № 1 из `ds/illustrations.md` («Ошибка загрузки», исходник 160 × 160). Кто разрешает новые иллюстрации — `TODO:` уточнить у владельца компонента. Брать можно только из списка «Используем» в `ds/illustrations.md`.

| Type \ Size | lg | md |
|---|---|---|
| Web | 120 | 112 |
| Mobile | 112 | 100 |

Слот тянется на ширину контента, иллюстрация — по центру. На Mobile у слота свои паддинги: `Spacing/spacing-3x-md` (12) сверху, `Spacing/spacing-4x-lg` (16) по бокам.

Анимации в компоненте нет. `TODO: проверить`, нужна ли, и если да — с `prefers-reduced-motion`.

Оформление иллюстрации по умолчанию привязано к старым примитивам Core kit. `TODO:` можно ли примитивы в иллюстрациях — открытый вопрос в `ds/tokens.md`.

## 10 — Mobile (bottom sheet)

Пример: `Modal header, 📌 Type=Mobile, ↕ Size=lg, 📐 Align=Left`, `🔘 Sheet header`=true.
_Подпись: Type Mobile · Size lg · Align Left_

- Сверху `Sheet header`: `Drag handle` 48 × 4 по центру. Выключается `🔘 Sheet header`.
- Текст на ступень мельче Web: lg — `Heading/H6`, md — `Heading/sub-md`. Description — `Body/xs-regular`, кроме lg Center.
- Боковые паддинги — `Spacing/spacing-4x-lg` (16) против 24 и 20 на Web.
- `Close button` — 8 от верха и правого края. На Web — 10.
- `Border=True` не меняет высоту: линия рисуется поверх (stroke по центру), паддинги те же.
- `arrow-left` — 20, на Web — 24.
- Свайп, тайминги открытия и закрытия в компоненте не заданы. `TODO: проверить` — нужны ли правила.
- В `Align=Center` у текста нет боковых паддингов: Title тянется на все 375. `TODO: проверить` — похоже на ошибку.

## 11 — Длинный текст и прокрутка

Сравнение: «Title» в одну строку против «Очень длинный заголовок, который умещается только в 2 строки» (пример на ✅ Modal, инстанс `19528:4763`).

- Title — максимум 2 строки, дальше многоточие. В свободном гайде на странице написано «одна строка», в компоненте — 2. `TODO: проверить`, какое правило верное.
- Description — максимум 3 строки, дальше многоточие.
- Ширина под текст на 375: Web lg — 375 минус 24 на два = 327, Web md Left — 335, Mobile — 343.
- `Close button` стоит поверх ряда `Top`. Title не резервирует под него место: длинная строка заходит под круг (Web: круг с 331, текст до 351). `TODO: проверить` — нужен правый паддинг у `Top` на ширину кнопки.
- Лимит символов не задан. `TODO:` посчитать на Web lg (`Heading/H4`, ширина 327) с запасом на казахский плюс 30%.
- При прокрутке `Body` шапка в `Modal` остаётся на месте (Body — отдельный слот со скроллом). `TODO: проверить` — отделять шапку от контента `Border=True` или `Shadow=True`, правила нет.

## 12 — Как добавить Modal header в модалку

1. Это модалка или bottom sheet? Нет — см. «Когда не использовать» в 01.
2. Платформа: Web → `Type=Web`, Mobile → `Type=Mobile`. На Mobile решите, нужен ли `🔘 Sheet header`.
3. Нужны иллюстрация, `⬅️ Back` или `✅ Status`? Иллюстрация — только `Align=Center`. Back и Status — только `Align=Left`. Всё сразу нельзя.
4. Заголовок: до 2 строк с запасом на казахский плюс 30%. Не влезает — сократите, не переносите смысл в Description.
5. Description: до 3 строк. Нет пояснения — выключите `👁️ Description`, не оставляйте «Description».
6. Контент под шапкой скроллится → `Border=True` или `Shadow=True`. `TODO: проверить` — правила нет.

`✖️ Close` выключаем только если закрыть модалку можно другим способом. `TODO: проверить` — на ✅ Modal так сделано в подтверждении «Применить изменения?», правила нет. Новые свойства и варианты добавляет только владелец компонента — `TODO:` кто владелец.

## 13 — Делаем и не делаем

| Делаем | Не делаем |
|---|---|
| • Back и Status — с `Align=Left` | • Не включаем Back и Status в Center |
| • Иллюстрацию — только в `Align=Center` | • Не ставим картинку в Left вручную |
| • Title до 2 строк | • Не пишем заголовок в 3 строки |
| • Закрываем через `Close button` | • Не рисуем свой крестик |
| • Статус — `Badge` `23457:2960` после замены | • Не добавляем новые `OLD Badge` |
| • Mobile — с `Type=Mobile` | • Не ставим Web-шапку в bottom sheet |

`TODO: проверить` — все пункты выведены из структуры компонента, утверждённых правил команды нет.

---

Секций заполнено 13 из 13 (07 — «Не применимо»), из них на фактах 9 (02–06, 08–11); TODO: 26.

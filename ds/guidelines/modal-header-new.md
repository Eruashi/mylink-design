Источник: Core kit `23671:17095` (`Modal header` `23671:17096`), сабкомпоненты `23671:19160` (ветка `vfBuhFdEz5CETkwRBeIWI7`), 2026-09-30. Скилл ds-guideline 0.5.0. Черновик — перенести в Figma после ревью.

# Modal header (new)

Общий гайд: компонент `Modal header` и его сабкомпоненты `Close button` `19079:20662` и `Icon` `23671:19161` (секция «Additional components»).

## 1. Modal header — обложка
Шапка модального окна и дровера: заголовок, описание, кнопки «назад» и «закрыть», иконка, статус, шаги и медиа. Ширина задаётся размером: lg 720, md 560, sm 420.

<!-- Описание — по компоненту и свободному гайду «Modal header — гайдлайн и дизайн-спек» v1.0 `23827:78619` на странице ✅ Modal header. -->

**Скопировать себе:**
- `Modal header, ↕ Size=md, 📐 Align=Left` — обычная модалка с формой («Создание вакансии», пример `23671:17925`).
- `Modal header, ↕ Size=md, 📐 Align=Center` — подтверждение («Удалить документ?», пример `23671:17960`).
- `Modal header, ↕ Size=md, 📐 Align=Left, 🔳 Border=True`, `✅ Status`=true — дровер со списком («Вопросы для ИИ-скрининга», пример `23671:18004`).

| Ссылка | Где |
|---|---|
| Компонент в Core kit | `Modal header` `23671:17096` — 24 варианта, секция `23671:17095`; `Close button` `19079:20662` — 4 варианта; `Icon` `23671:19161` — 5 вариантов (секция `23671:19160`). Страница ✅ Modal header, ветка `vfBuhFdEz5CETkwRBeIWI7` |
| Storybook | `TODO: фронты` |
| Статус и версия | В ветке, в продуктовых макетах ещё не используется (на ✅ Modal стоит старый `17100:18553`). В реестре `ds/components.md` и `ds/component-props.md` нового компонента нет (реестр по main). Версия и дата — `TODO: проверить` |

Flutter-строки нет: Mobile-вариантов (`📌 Type`) в новом компоненте нет.

## 2. Когда использовать
Почему два выравнивания: `Left` — информационный сценарий (форма, список, шаги), `Center` — короткий фокусный (подтверждение, результат) (свободный гайд v1.0).

| Используем | Не используем → что вместо |
|---|---|
| • Шапка модалки с формой — `Align=Left` («Создание вакансии», md) | • Своя шапка из текста и крестика → `Modal header` |
| • Подтверждение действия — `Align=Center` («Удалить документ?», md) | • Заголовок страницы → `TODO: проверить`, какой компонент |
| • Шапка дровера со списком — `Align=Left, Border=True`, `✅ Status` («Вопросы для ИИ-скрининга») | • Старые `Header` / `Header 2.0` (секция «Старые прототипы») → `Modal header`. `TODO: проверить` |
| • Многошаговый сценарий — `👁️ Stepper` (свободный гайд) | • Старый `Modal header` `17100:18553` в новых макетах → новый. `TODO: проверить` план замены на ✅ Modal |
| • Приветствие или результат с картинкой — `🏞️ Media` («Использование с картинкой») | |

`TODO: проверить` — сценарии собраны по 5 инстансам в секции «Примеры использования» `23671:17913` (разделы «Модальные окна», «Дровер», «Использование с картинкой») и свободному гайду v1.0. Других инстансов нового компонента, кроме гайда и тестового, в файле нет (`getInstancesAsync` по 24 вариантам, 2026-09-30).

**Размер:** lg 720, md 560, sm 420 — ширина модалки. В свободном гайде: «Size совпадает с шириной модалки: 720 / 560 / 420». Все 5 примеров — md.

## 3. Анатомия
Пример: инстанс `Modal header, ↕ Size=lg, 📐 Align=Left` с `⬅️ Back`, `✅ Status`, `👁️ Stepper`, `🏞️ Media`; рядом `↕ Size=md, 📐 Align=Left` с `👁️ Icon` для маркера 3.

| № | Элемент | Что это (слой / компонент) | Обязательный | Стиль и токены |
|---|---|---|---|---|
| 1 | **Контейнер** | корень варианта — вертикальный стек | да | `bg/white/white-primary`, верх `Radius/radius-xl` (24) |
| 2 | **Back** | `arrow-left` — иконка, не компонент | нет (`⬅️ Back`) | 24, `icon/neutral/quaternary` (#ADADAD). В `Center` — absolute 24 × 24 от левого верхнего угла |
| 3 | **Icon** | сабкомпонент `Icon` — смысловая иконка перед Title | нет (`👁️ Icon`) | 32, радиус `Radius/radius-sm` (8), цвет по `Color` |
| 4 | **Title** | текстовый слой `Title` (`𝐓 Title`) | да | `Heading/H4` (md — `H5`, sm — `H6`), `text/neutral/primary` |
| 5 | **Status** | `Badge` `23457:3021` в `Status container` | нет (`✅ Status`) | `Badge, Style=Green, Size=sm, Inverted=Yes, Round=Yes` (20) |
| 6 | **Description** | текстовый слой `Description` (`𝐓 Description text`) | нет (`👁️ Description`, по умолчанию да) | `Body/md-regular` (md, sm — `Body/sm-regular`), `text/neutral/secondary` |
| 7 | **Close** | сабкомпонент `Close button` | нет (`✖️ Close`, по умолчанию да) | 44 × 44, absolute 10 от верха и правого края |
| 8 | **Stepper** | `Stepper / Bar` (remote), `Steps=Custom, Type=Regular` | нет (`👁️ Stepper`) | 3 шага по умолчанию, под текстом |
| 9 | **Media** | слот `media` — иллюстрация или изображение | нет (`🏞️ Media`) | радиус `Radius/radius-lg` (16), высота 120 (md, sm — 100) |

Ряд Title: Back → Icon → Title → Status, зазор `Spacing/spacing-2x-sm` (8). `Left`: текст → Stepper → Media. `Center`: Media → текст → Stepper.

**Сабкомпонент `Close button`** (`19079:20662`): хит-зона 44 × 44, радиус `Radius/radius-md` (12); видимый круг 24, `Radius/radius-full`; иконка `times` 18, `icon/neutral/secondary` (#666666). Цвет круга и кольцо Focus — в 5 и 9.

**Сабкомпонент `Icon`** (`23671:19161`): 32 × 32, padding `Spacing/spacing-2x-sm` (8), радиус `Radius/radius-sm` (8), обводка `border-sm` (1) внутри; иконка 16 (`Icon select`, по умолчанию `magicoon`). 5 цветов — в 4 и 9.

- В `Modal header` стоит не локальный `Icon` из «Additional components», а remote `Icon` из другой библиотеки (set key `b46c14e4…`; у локального `dc1bc66a…`, 0 инстансов). `TODO: проверить` — какой источник правильный.
- `Stepper / Bar` — remote (set key `dd70c2ec…`), в реестре Core kit его нет. `TODO: проверить` — из какой библиотеки и будет ли он в Core kit.
- Иконка по умолчанию в `Icon` разная: lg — `Color=Warning`, md и sm — `Color=Info`. `TODO: проверить`.

## 4. Свойства
Три компонента: `Modal header` — шапка; `Close button` и `Icon` — сабкомпоненты внутри. Меняете вид шапки — свойства `Modal header`; цвет иконки, текст статуса, шаги — у вложенных инстансов.

### Modal header
Четыре оси Variant комбинируются полностью: 3 × 2 × 2 × 2 = 24 варианта.

#### ↕ Size
Ширина, типографика и паддинги. Почему три размера: размер = ширина модалки.
Линейка: `Size=lg` 720 · `md` 560 · `sm` 420.
Значения: `lg` (по умолчанию), `md`, `sm`.

#### 📐 Align
Тип сценария: информационный или фокусный.
Ряд примеров: `Align=Left` · `Align=Center`.
Значения: `Left` (по умолчанию), `Center`. В `Center` Title, Status и Icon по центру, Back — absolute слева сверху, Media — над текстом.

#### 🔳 Border · ❏ Shadow
Отделяют шапку от контента. Можно вместе (свободный гайд: «Border и Shadow не взаимоисключающие»).
Ряд примеров: `Border=True` · `Shadow=True`.
Значения: оба `False` (по умолчанию) / `True`. `Border=True` увеличивает нижний паддинг: lg 8 → 24, md 8 → 20, sm 8 → 16.

#### 𝐓 Title
Текст заголовка. Обязательный. По умолчанию «Title». Лимит — см. 6.

#### 👁️ Description · 𝐓 Description text
Пояснение под заголовком.
Значения: `👁️ Description` — true (по умолчанию) / false; `𝐓 Description text` — по умолчанию «Description».

#### ✖️ Close
Кнопка закрытия. true (по умолчанию) / false. Когда выключать — `TODO: проверить` (в примере с картинкой `✖️ Close`=false).

#### ⬅️ Back · 👁️ Icon
Ведущий элемент ряда Title: навигация назад или смысловая иконка.
Ряд примеров: `⬅️ Back`=true · `👁️ Icon`=true.
Значения: оба false (по умолчанию) / true. Работают в обоих `Align`. Свободный гайд запрещает Back и Icon вместе и Icon в `Center` — компонент это не ограничивает.

#### ✅ Status
Статус объекта рядом с Title. false (по умолчанию) / true. Внутри `Badge, Green, sm`; текст и цвет — оверрайдом вложенного `Badge`. Работает в обоих `Align`; свободный гайд запрещает Status в `Center`. Смысл и допустимые цвета статуса — `TODO: проверить`.

#### 👁️ Stepper
Шаги многошагового сценария. false (по умолчанию) / true. Число шагов и вид — свойства вложенного `Stepper / Bar` (`Steps`, `▣ Type=Regular / Compact`).

#### 🏞️ Media · слот media
Иллюстрация или изображение.
Ряд примеров: `🏞️ Media`=true в `Left` · в `Center`.
Значения: `🏞️ Media` — false (по умолчанию) / true; слот `media` — `allowPreferredValuesOnly`=true, preferred-значений нет. Описание слота: «Использовать только с Иллюстрацией или с Изображением». В слоте по умолчанию — `Document Upload` 120 (md, sm — 100). Какие иллюстрации брать — `ds/illustrations.md`, список «Используем». `TODO: проверить` — задать preferred-значения, сейчас список пуст и при `allowPreferredValuesOnly` ничего не выбрать.

**Мёртвых сочетаний нет:** все Boolean работают во всех 24 вариантах (проверено инстансами 2026-09-30).

### Close button
#### ⚙️ State
Значения: `Default` (по умолчанию), `Hover`, `Pressed`, `Focus`. Внутри `Modal header` — всегда `Default`. Ряд — в 5.

### Icon
#### Color
Ряд примеров: `Info` · `Warning` · `Critical` · `Success` · `Neutral`.
Значения: `Info` (по умолчанию), `Warning`, `Critical`, `Success`, `Neutral`. Когда какой цвет — `TODO: проверить`.

#### Icon select
Instance swap, по умолчанию `magicoon`, preferred — 1 иконка (`magicoon`). Размер 16.

## 5. Состояния
У `Modal header` и `Icon` оси State нет. Состояния — у `Close button` (`⚙️ State`).

Ряд примеров (1×): `Default` · `Hover` · `Pressed` · `Focus`. `Disabled` нет.

- Меняется только заливка круга: `bg/neutral/quaternary` (#EDEDED) → `bg/neutral/quaternary hover` (#E8E8E8) → `bg/neutral/quaternary pressed` (#E3E3E3). Имена состояний — через пробел, не через дефис.
- Focus: круг как Default + стиль `States/focus-state` (0, 0, 0, 3, `effects/focus-default` #728DC0) на хит-зоне 44.
- Иконка во всех состояниях — `icon/neutral/secondary` (#666666).
- Прототип: Default → Hover по наведению, Hover → Pressed по нажатию.
- `arrow-left` — иконка без состояний. `TODO: фронты` — hover и focus у Back.

## 6. Поведение и контент
Пара примеров: короткий Title · длинный Title (дефект). Почему важно: Close стоит absolute и не резервирует место в ряду Title.

- **Title:** в компоненте max 2 строки, но слой `Title` — auto width (`WIDTH_AND_HEIGHT`), поэтому не переносится: длинная строка уходит под `Close button`, обрезается краем и выталкивает `Status`. `TODO: проверить` — `textAutoResize = HEIGHT` + FILL и правый отступ под Close (lg и md — 30, sm — 34 перекрытия). Лимит символов с запасом +30% на казахский — `TODO: проверить`.
- **Description:** многоточие после max строк. lg `Left` — 1 строка; lg `Center`, md, sm — 3. `TODO: проверить` — 1 строка у lg `Left` ошибка или решение.
- **Close button и текст:** Close absolute, 10 от верха и правого края во всех размерах; высота шапки от него не зависит.
- **Media:** `Left` — под текстом и Stepper; `Center` — над текстом. Свободный гайд: «Разное расположение Media для Align Center и Align Left сделано намеренно».
- **Stepper:** ширина фиксированная, не по ширине текста: lg 672; md `Left` 520, `Center` 512; sm `Left` 380, `Center` 372. `TODO: проверить` — сделать FILL.
- **Прокрутка:** `Border` — «когда header нужно явно отделить от тела модалки», `Shadow` — «для прокручиваемого или визуально насыщенного контента» (свободный гайд). Решения команды нет — `TODO: проверить`.
- **Адаптив:** ширина фиксированная по размеру. Какой размер на каком брейкпоинте — `TODO: проверить`.
- **Анимация:** в компоненте нет. `TODO: проверить`.

## 7. Делаем / не делаем
| Делаем | Не делаем |
|---|---|
| Один ведущий элемент: Back или Icon | Не включаем Back и Icon вместе |
| `Center` — Title, Description, Close | Не ставим Status и Icon в `Center` |
| Пояснение по делу или `👁️ Description`=false | Не оставляем «Description» |
| Media — только иллюстрация или изображение | Не кладём в слот UI и текст |

Пункты 1, 2 и 4 — из свободного гайда v1.0 и описания слота; компонент их не ограничивает. `TODO: проверить` — утвердить как правила команды. Пункт 3 выведен из примеров.

## 8. В интерфейсе
Пример — дровер «Вопросы для ИИ-скрининга» (раздел «Дровер», `23671:17991`): `Modal header, md, Left, Border=True`, `✅ Status`=true → список вопросов «Заполнено: 0 из 1» → футер с подсказкой и кнопками. Дровер 630 × 984 справа поверх затемнения `#0E0E0E` 20%.

Почему так: `Border=True` отделяет шапку от прокручиваемого списка, Status показывает состояние объекта рядом с заголовком.

## 9. Спецификация (web)
Три таблицы: `Modal header` по размерам, `Close button` по состояниям, `Icon` по цветам.

### Modal header
| Свойство | lg | md | sm |
|---|---|---|---|
| ширина | 720, нет токена, фиксированная | 560 | 420 |
| высота, `Border=False` / `True` | 90 / 106 | 80 / 92 | 76 / 84 |
| padding корня | `Spacing/spacing-3x-md` (12) сверху и по бокам, снизу `Spacing/spacing-2x-sm` (8) | = | `Spacing/spacing-2x-sm` (8) со всех сторон |
| padding снизу, `Border=True` | `Spacing/spacing-6x-xll` (24) | `Spacing/spacing-5x-xl` (20) | `Spacing/spacing-4x-lg` (16) |
| padding блока текста (`Top` / `Stack/Vertical`) | `Spacing/spacing-3x-md` (12) сверху и по бокам. Итого отступ текста 24 | = 24 | = 12, итого 20 |
| Title | `Heading/H4` (24/32, −0,5) | `Heading/H5` (20/24) | `Heading/H6` (18/24) |
| Description | `Body/md-regular` (16/22); `Left` 1 строка, `Center` 3 | `Body/sm-regular` (14/20), 3 строки | = |
| зазоры | ряд Title `Spacing/spacing-2x-sm` (8); Title — Description и между блоками `Spacing/spacing-1x-xs` (4) | = | = |
| Media | 696 × 120, `Radius/radius-lg` (16) | 536 × 100 | 404 × 100 |
| Stepper | ширина 672; padding сверху `Left` 12 (`spacing-3x-md`), `Center` 4 (`spacing-1x-xs`) | `Left` 520, `Center` 512 | `Left` 380, `Center` 372 |
| фон, радиус | `bg/white/white-primary` (#FFFFFF); верх `Radius/radius-xl` (24), низ `Radius/radius-x` (0) | = | = |
| Border / Shadow | снизу 1 `border-sm`, `border/neutral/secondary` (#EDEDED), по центру линии / стиль `Below/medium` (0, 8, 36, 0; `effects/shadow-medium` #191B1D 10%, `Blur/blur-md`) | = | = |

Цвета: Title `text/neutral/primary` (#0E0E0E), Description `text/neutral/secondary` (#666666), `arrow-left` `icon/neutral/quaternary` (#ADADAD), 24 во всех размерах. Status — `Badge, Size=sm` (20, padding 4 / 8, `Caption/xxs-medium`, `text/success/primary`). `Close button` — absolute, 10 от верха и правого края. `arrow-left` в `Center` — absolute 24, 24.

### Close button
| Свойство | Default | Hover | Pressed | Focus |
|---|---|---|---|---|
| круг 24, `Radius/radius-full` | `bg/neutral/quaternary` (#EDEDED) | `bg/neutral/quaternary hover` (#E8E8E8) | `bg/neutral/quaternary pressed` (#E3E3E3) | как Default |
| иконка `times` 18 | `icon/neutral/secondary` (#666666) | = | = | = |
| хит-зона 44 × 44, `Radius/radius-md` (12) | без заливки | = | = | `bg/neutral/focus-outline` (0%) + `States/focus-state` |

### Icon
| Color | фон | обводка 1 `border-sm` | иконка 16 |
|---|---|---|---|
| `Info` | `bg/pale/secondary-light` (#5D7FBD 8%) | `border/pale/secondary` (#5D7FBD 12%) | `icon/pale/primary` (#5D7FBD) |
| `Warning` | `bg/warning/secondary-light` (#FF7B00 8%) | `border/warning/secondary` (#FF7B00 12%) | `icon/warning/primary` (#FF7B00) |
| `Critical` | `bg/critical/secondary-light` (#EE2B2B 8%) | `border/critical/secondary` (#EE2B2B 12%) | `icon/critical/primary` (#EE2B2B) |
| `Success` | `bg/success/secondary-light` (#12A543 8%) | `border/success/secondary` (#12A543 12%) | `icon/success/primary` (#12A543) |
| `Neutral` | `bg/neutral/secondary` (#FAFAFA) | `border/neutral/primary` (#E3E3E3) | `icon/neutral/primary` (#2B2B2B) |

Размер 32 × 32, padding `Spacing/spacing-2x-sm` (8), радиус `Radius/radius-sm` (8) — одинаково у всех цветов.

**Токены** (упрощённая проверка по key коллекций 🧩 Tokens в ветке, 2026-09-30; не полный прогон `component-token-audit.js`):
- `Modal header`: 2654 привязки к семантике и числам Tokens, 240 — к примитивам Tokens, 168 — к старым локальным переменным, сырых нет. Все примитивы и старые — в иллюстрации по умолчанию в слоте `media` (`pale_blue/solid-50` из локальной `Primitives`, `Blur/blur-sm` и `Spread/none` из локальной `Numbers`; примитивы Tokens `blue/solid-400`, `red/solid-400`, `pale_blue/solid-50`, `neutral/white/solid`). Без иллюстрации — 100% на Tokens. Текстовые и эффект-стили — все из Tokens.
- `Close button`: 78 на Tokens, 4 старых — зазор круга `Spacing/spacing-x` (0) из локальной `Numbers`.
- `Icon`: 80 на Tokens, старых нет.
- Без токена: ширина корня (720 / 560 / 420), позиция `Close button` 10, позиция `arrow-left` 24, высота Media 120 / 100, ширина Stepper.
- `TODO: проверить` — можно ли примитивы в иллюстрациях (открытый вопрос в `ds/tokens.md`).

**Mantine:** компонент и пропсы ↔ `Size`, `Align`, `Border`, `Shadow` — `TODO: фронты`.

**a11y:**
- Контраст `arrow-left` #ADADAD на белом — 2,2:1, ниже 3:1 для элементов управления (WCAG 1.4.11). `TODO: проверить` — поднять цвет иконки Back.
- Фокус: `Close button, State=Focus` — кольцо 3 `effects/focus-default` (#728DC0), контраст к белому 3,3:1. У `arrow-left` фокуса нет — `TODO: фронты`.
- Хит-зона `Close button` 44 × 44 при круге 24. У `arrow-left` своей хит-зоны нет (24) — `TODO: проверить`.
- Иконка Close #666666 на круге: Default 4,9:1, Hover 4,7:1, Pressed 4,5:1. Круг #EDEDED на белом — 1,2:1 (граница кнопки держится на иконке).
- Текст: Title #0E0E0E — 19,3:1, Description #666666 — 5,7:1 на белом. Текст статуса `Badge` #12A543 на светло-зелёном — около 3:1 при размере 10 — вопрос к `Badge`.
- Клавиатура (Esc, порядок табуляции Back → Close, фокус при открытии), роль диалога, связь Title и Description, подписи у Close и Back — `TODO: фронты`.

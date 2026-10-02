Источник: Core kit 12133:4599 (ветка QbTS4UqcIFOYBGNAzKeD13), 2026-10-02. Скилл ds-guideline 0.8.1.

# Alert

## 1. Обложка
Сообщение о статусе внутри страницы или блока: успех, информация, предупреждение, ошибка.

**Скопировать себе:**
- `Alert, 📌 Type=Compact, 🎛️ Variant=Subtle, ⚙️ State=Warning, 🔘 Action=No action` — предупреждение над контентом страницы («Создайте первый урок, чтобы опубликовать курс», страница курса `21002:39216`).
- `Alert, 📌 Type=Regular, 🎛️ Variant=Subtle, ⚙️ State=Error, 🔘 Action=Close button` — ошибка с пояснением: Title «Не удалось сохранить изменения», Description «Проверьте подключение к интернету и попробуйте ещё раз» (текст по ревью дизайнеров 2026-10-02).

| Ссылка | Где |
|---|---|
| Компонент | `Alert` `12133:4599`, страница ✅ Alert (`11784:1336`) |
| Storybook | `TODO: фронты` |
| Flutter | `TODO: мобильщики` (страница в блоке ✦ CROSS-PLATFORM) |

## 2. Коротко
| 72 | 2 | 6 | 3 |
|---|---|---|---|
| варианта | типа | состояний | опции контента |

72 = 2 `📌 Type` × 2 `🎛️ Variant` × 6 `⚙️ State` × 3 `🔘 Action`. Размера (`Size`) нет — роль размера играет `📌 Type` (Regular / Compact). Опции контента: `𝐓 Description`, `📝 Details`, `✖ Close icon`.

## 3. Когда использовать
| Используем | Не используем → что вместо |
|---|---|
| Условие, без которого не продолжить (Compact, Warning — реальный макет курса) | Итог действия на пару секунд → `Toast` `14541:3720` |
| Ошибка или сбой, который не исчезнет сам | Пояснение к элементу → `Tooltip` `9006:5294` |
| | Ошибка в поле → `Standard input`, `🔴 Error=True` `10676:25160` |

`TODO: проверить` — списки выведены из старого гайда (`20011:196707`: «информационные, успешные, предупреждающие и критические уведомления»), реального использования (Compact Warning на страницах курса) и наличия Toast / Tooltip / поля с ошибкой в файле; компонент их не ограничивает. `Notification` `19692:5486` (тёмный снекбар со стопкой) — граница с Alert не описана, `TODO: проверить`.

На канвасе — `_Guide/When`, `Layout=Tiles`: у каждого пункта белая плитка 180 с примером, текст под ней. Примеры: Alert Compact Warning «Создайте первый урок, чтобы опубликовать курс»; Alert Regular Error «Не удалось сохранить изменения» + «Проверьте подключение к интернету и попробуйте ещё раз»; Toast `Compact, Success` «Курс опубликован» + кнопка «Отменить»; Tooltip `Bottom, Start` «Курс увидят только ученики группы»; Standard input `Email, md, Filled, Error` — значение «a.ivanova@mail», ошибка «Введите почту в формате name@mail.ru».

## 4. Анатомия
Пример: `Alert, Type=Regular, Variant=Subtle, State=Information, Action=Button`, `📝 Details`=true; второй — `Action=Close button` (маркер 7).

| № | Элемент | Что это (слой / компонент) | Обязательный | Стиль и токены |
|---|---|---|---|---|
| 1 | Контейнер | корень варианта, auto layout VERTICAL, ширина 486 FIXED, высота hug | да | фон и обводка по State и Variant (раздел 10), `Radius/radius-md` (12) |
| 2 | Иконка статуса | инстанс иконки по State (`info-circle` — Default, Information; `check-circle` — Success; `exclamation-circle` — Warning, Error, Neutral); свойства нет | да | 20, Compact 16, нет токена; `icon/<роль>/primary` |
| 3 | Title | текст `𝐓 Title`, `maxLines` 3, обрезка «…» | да | 14/20 Medium, Compact 12/16 Medium; текстовый стиль не привязан; `text/neutral/primary` (Outlined — `text/<роль>/primary`) |
| 4 | Description | текст `𝐓 Description text` | нет (`𝐓 Description`, по умолчанию да), только Regular | 14/20 Regular; `text/neutral/secondary` |
| 5 | Кнопка | инстанс `button ` (`↕ Size=xs, 🖇️ Style=Neutral, 📌 Type=Primary`), текст «Undo» по умолчанию (в гайде — «Открыть») | только `Action=Button` | высота 28, `bg/neutral/tertiary`, `text/neutral/white` |
| 6 | Details | фрейм `Container`: 3 строки `Info Row` (Label 120 + Value) | нет (`📝 Details`, по умолчанию нет), только Regular | `Radius/radius-sm` (8), фон по State (раздел 10) |
| 7 | Close icon | инстанс иконки `times` | только `Action=Close button` (`✖ Close icon`, по умолчанию да) | 20, Compact 16; `icon/neutral/secondary` |

Сабкомпонентов нет: кнопка и иконки — библиотечные инстансы без своей настройки в Alert; Details — фрейм, не компонент.

## 5. Свойства
### Тип: 📌 Type
`Type=Regular` (по умолчанию) · `Type=Compact`. Compact: Title 12/16, иконка 16, без Description и Details (слоёв нет), центрирование по вертикали.

### Оформление: 🎛️ Variant
`Variant=Subtle` (по умолчанию) — заливка `bg/<роль>/secondary-light`, Title нейтральный. `Variant=Outlined` — фон `bg/white/white-primary`, обводка `border/neutral/primary` `border-sm` (1), Title цветом State.

### Действие: 🔘 Action
`Action=No action` (по умолчанию) · `Action=Close button` · `Action=Button`.
- `✖ Close icon` действует только при `Action=Close button`; `false` даёт тот же вид, что `No action`.
- Текст кнопки — свойство вложенного `button ` (`𝐓 Text`), по умолчанию «Undo» (англ.); в примерах гайда — «Открыть» / «Создать урок».

### Контент: 𝐓 Description · 📝 Details
Базовый · `𝐓 Description=false` · `📝 Details=true`. Не действуют при `Type=Compact`.
- Details: 3 строки Label / Value, тексты — правкой слоёв (свойств нет), число строк не меняется. По умолчанию — «Добавил(а) / Курмашева А.И.», «Дата добавления / 26.07.2023», «Комментарий / Кандидат отлично прошел собеседование».

## 6. Состояния
`⚙️ State`: Default · Information · Success · Warning · Error · Neutral. Это смысл сообщения (цвет и иконка), а не интерактивные состояния: Hover, Pressed, Focus, Disabled нет. Цвета — раздел 10.

На канвасе таблица «Цвета по State» стоит в этом разделе, а не в «Спецификации»: иначе «Спецификация» 1538 > 1200.

## 7. Поведение и контент
| Так | Не так / сейчас так |
|---|---|
| Title в 1–2 строки | Сейчас так: Title до 3 строк, дальше обрезка «…» (`maxLines` 3, `ENDING`) — проверено тестовым инстансом |
| Description коротко | Сейчас так: Description без лимита строк (`maxLines` нет), алерт растёт в высоту |
| `Compact, Action=No action` — высота 40 | Сейчас так: `Compact, Action=Button` — 52 (кнопка 28 + паддинги), при узкой ширине текст переносится |

- Ширина 486 FIXED, не зависит от текста; тексты FILL + перенос. В продукте инстансы 486.
- Старый гайд: «при Action=Button Title максимум 2 строки, Description максимум 3» — в компоненте Title 3 строки, Description без лимита; не подтвердилось.
- Лимит символов Title с запасом +30% на казахский — `TODO: проверить`.

## 8. Делаем / не делаем
| Делаем | Не делаем |
|---|---|
| Compact — для короткого сообщения в строку | Не пишем длинный текст в Compact |
| State по смыслу: ошибка — Error | Не красим ошибку в Success или Information |

`TODO: проверить` — пара 1 из старого гайда («Compact — только для коротких однострочных сообщений»), пара 2 — из значений State; компонент их не ограничивает.

## 9. В интерфейсе
Табель — дровер «Создание табеля» (макет `24215:5061`, вставлен Zhandos в ветку): клон блока `Body` `24215:5070` — карточка `.Timesheet summary` + `Alert, Type=Regular, Variant=Subtle, State=Warning, Action=Close button` (текущий `Alert` `12133:4599`). Title «Отправьте табель на согласование до 10 ноября», Description «Потом он уйдёт в архив со статусом «Не отправлен», и редактировать его будет нельзя». Шапка, футер и скрытый `Top` не клонировались.

## 10. Спецификация (web)
Разметка: `Alert, Type=Regular, Variant=Subtle, State=Neutral, Action=Button`, `📝 Details`=true, 1× (Neutral — чтобы заливки паддингов и зазоров были видны).

| Маркер | Что | Regular | Compact |
|---|---|---|---|
| A | ширина | 486, нет токена | = |
| B | паддинг | `Spacing/spacing-3x-md` (12) | = |
| C | иконка | 20, нет токена | 16 |
| D | иконка → текст | `Spacing/spacing-2x-sm` (8) | = |
| E | Title → Description | `Spacing/spacing-1x-xs` (4) | нет Description |
| F | текст → действие | `Spacing/spacing-3x-md` (12) | = |
| G | до Details | `Spacing/spacing-3x-md` (12) | нет Details |
| H | Details | паддинг `Spacing/spacing-3x-md` (12), строки `Spacing/spacing-2x-sm` (8), Label → Value `Spacing/spacing-6x-xll` (24), Label 120, радиус `Radius/radius-sm` (8) | нет Details |
| I | радиус, обводка | `Radius/radius-md` (12); Outlined — `border-sm` (1) | = |
| J | высота | 68 без Details (180 с Details), hug | 40; с кнопкой 52 |

Текст: Title 14/20 Medium (Compact 12/16 Medium), Description и Details 14/20 Regular. Текстовые стили не привязаны: размер и высота строки — значениями, `family/Inter` и `weight/*` — переменными локальной коллекции `Typography` (не 🧩 Tokens).

**Цвета по State** (`<роль>`):

| State | фон, Subtle | иконка | Title, Outlined |
|---|---|---|---|
| Default | `bg/pale/secondary-light` (8%) | `icon/pale/primary` | `text/pale/primary` |
| Information | `bg/brand/secondary-light` (8%) | `icon/brand/primary` | `text/brand/primary` |
| Success | `bg/success/secondary-light` (8%) | `icon/success/primary` | `text/success/primary` |
| Warning | `bg/warning/secondary-light` (8%) | `icon/warning/primary` | `text/warning/primary` |
| Error | `bg/critical/secondary-light` (8%) | `icon/critical/primary` | `text/critical/primary` |
| Neutral | `bg/neutral/secondary` (#FAFAFA) | `icon/neutral/tertiary` | `text/neutral/tertiary` |

Outlined: фон `bg/white/white-primary`, обводка `border/neutral/primary` (#E3E3E3). Subtle: Title `text/neutral/primary`. Description — `text/neutral/secondary` везде. Details: фон Subtle — как у контейнера, Outlined — `bg/neutral/secondary`.

**Токены** (полный перебор 72 вариантов, 5916 привязок): контейнер, отступы, иконки, Title, Description, кнопка — 🧩 Tokens (`Semantic colors`, `Numbers`, `Border`). Не на 🧩 Tokens:
- Details (`Container`, Label, Value) — фон и цвета текстов на локальных копиях переменных (коллекция `Semantic` в Core kit);
- радиус вложенной кнопки — оверрайд на локальную `Radius/radius-sm` (коллекция `Numbers` в Core kit);
- `family/Inter`, `weight/medium`, `weight/regular` у всех текстов — локальная коллекция `Typography`.
Без токена: ширина 486, размер иконок 20 / 16, размер шрифта и высота строки.

Старый гайд: «Default — синий, Information — голубой» → фактически Default — `pale` (#5D7FBD), Information — `brand` (#008EFF).

**Mantine:** `TODO: фронты`.

## 11. Flutter
| Свойство Figma | Виджет / параметр Flutter | Комментарий |
|---|---|---|
| `📌 Type` | `TODO: мобильщики` | |
| `🎛️ Variant` | `TODO: мобильщики` | |
| `⚙️ State` | `TODO: мобильщики` | |
| `🔘 Action`, `✖ Close icon` | `TODO: мобильщики` | |
| `𝐓 Description`, `📝 Details` | `TODO: мобильщики` | |

**Отличия от web:** `TODO: мобильщики`. Мобильных вариантов в Figma нет; хит-зона Close icon 20 / 16 меньше 44.

---
Тексты примеров на канвасе (по ревью дизайнеров 2026-10-02, одна пара Title / Description на State, в подблоках «Свойств» — одинаковые): Default «Новые уроки появятся в понедельник» / «Мы пришлём уведомление, когда курс обновится»; Information «Кандидат прошёл собеседование» / «Примите решение по кандидату до 15 октября»; Success «Табель отправлен на согласование» / «Руководитель получит уведомление и проверит данные»; Warning «Отправьте табель на согласование до 10 ноября» / «Потом он уйдёт в архив со статусом «Не отправлен»» (Compact — «Создайте первый урок, чтобы опубликовать курс»); Error «Не удалось сохранить изменения» / «Проверьте подключение к интернету и попробуйте ещё раз»; Neutral «Кандидат перенесён в резерв» / «Вернуть его в воронку можно в любой момент». Кнопка — «Открыть» (Compact Warning — «Создать урок»).

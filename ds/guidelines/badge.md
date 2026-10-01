Источник: Core kit `23457:2960` (ветка `QbTS4UqcIFOYBGNAzKeD13`), 2026-10-01. Скилл ds-guideline 0.6.0.

# Badge

## 1. Обложка
Короткая цветная метка статуса или признака объекта.

**Скопировать себе:**
- `Badge, 🎨 Style=Green, ↕ Size=md, ◐ Inverted=Yes, 🔘 Round=Yes`, иконки выкл. — статус в таблице («Активный», «Сотрудники» `17685:515538`).
- `Badge, 🎨 Style=Green, ↕ Size=sm, ◐ Inverted=No, 🔘 Round=No`, иконки выкл. — метка пункта меню («Новое», `Sidebar` `23716:25414`).
- `Badge, 🎨 Style=Green, ↕ Size=sm, ◐ Inverted=Yes, 🔘 Round=Yes` — статус у заголовка (`Modal header`, `✅ Status`).

| Ссылка | Где |
|---|---|
| Компонент | `Badge` `23457:2960`, страница ✅ Badge (`8253:5009`) |
| Storybook | `TODO: фронты` |
| Flutter | `TODO: мобильщики` (страница в блоке ✦ CROSS-PLATFORM) |

## 2. Коротко
| 132 | 3 | 11 | 5 |
|---|---|---|---|
| варианта | размера | стилей | опций контента |

132 = 11 `🎨 Style` × 3 `↕ Size` × 2 `◐ Inverted` × 2 `🔘 Round`. Опции контента: `👈 Left icon`, `👉 Right icon`, `👁️ Counter`, `🖲️ Left icon`, `🖲️ Right icon`.

## 3. Когда использовать
| Используем | Не используем → что вместо |
|---|---|
| Статус объекта в таблице или карточке | Число непрочитанного → `Counter-badge` |
| Метка пункта меню: Новое, Скоро, Бета | Точка-индикатор → `Dot-badge` |
| Статус рядом с заголовком модалки | Фильтр или выбор → `Chips`. `TODO: проверить` |
| | Действие по клику → `TODO: проверить` (у Badge нет состояний) |

Сценарии «Используем» — по реальным макетам (раздел 8) и `Modal header`. `TODO: проверить` — утвердить списки.

## 4. Анатомия
Пример: `Badge, Style=Blue, Size=lg, Inverted=Yes, Round=Yes`, `👁️ Counter`=true.

| № | Элемент | Что это | Обязательный | Стиль и токены |
|---|---|---|---|---|
| 1 | Контейнер | корень варианта, auto layout | да | фон и обводка по Style (10), радиус `Radius/radius-full` (1000) / `Radius/radius-sm` (8) |
| 2 | Left icon | инстанс иконки, по умолчанию `oclock` 16 | нет (`👈 Left icon`, по умолчанию да) | 12 / 16 / 20, нет токена; `icon/<роль>/primary` |
| 3 | Label | текст (`𝐓 Label`) | да | `Body/sm-medium` / `Body/xs-medium` / `Caption/xxs-medium`; `text/<роль>/primary` |
| 4 | Counter | текстовый слой `10` | нет (`👁️ Counter`, по умолчанию нет) | стиль и цвет как у Label; число — правкой слоя, свойства нет |
| 5 | Right icon | инстанс иконки, по умолчанию `oclock` 24, уменьшен | нет (`👉 Right icon`, по умолчанию да) | как Left icon |

Порядок: Left icon → Label → Counter → Right icon. Сабкомпонентов нет: иконки — библиотечные инстансы через `🖲️`, Counter — текстовый слой, а не `Counter-badge`.

## 5. Свойства
### Цвет: 🎨 Style · ◐ Inverted
Два ряда по 11: `Inverted=Yes` (по умолчанию) — светлый фон с обводкой; `Inverted=No` — сплошная заливка, белый текст.
Значения Style: `Blue` (по умолчанию), `Red`, `Green`, `Orange`, `Gray`, `Pale blue`, `Purple`, `Pink`, `Cyan`, `Yellow`, `Black`. Смысл цветов — `TODO: проверить` (WEB-Табель: Pale blue — «На заполнении», Orange — «На согласовании у HR»; старый фрейм `17405:24494`: Green — активный и приглашён, Purple — отпуска и командировка, Orange — больничный).

### Форма: 🔘 Round
`Round=Yes` (по умолчанию) — `Radius/radius-full`; `Round=No` — `Radius/radius-sm` (8). В таблице, карточках WEB-Табель и `Modal header` — `Yes`, в Sidebar — `No`. При высоте 20–28 разница почти не видна.

### Размер: ↕ Size
Линейка: `sm` 20 (по умолчанию) · `md` 24 · `lg` 28. Меняются высота, иконка и текстовый стиль; паддинги и зазор одинаковые.

### Контент: 👈 👉 👁️ 🖲️
Базовый (иконки выкл.) · `👈 Left icon`=true · `👉 Right icon`=true · `🖲️ Right icon`=`info-circle` · `👁️ Counter`=true.
- По умолчанию обе иконки включены (`oclock`). В «Сотрудниках» и Sidebar иконки выключены, в WEB-Табель — одна слева по смыслу (карандаш у «На заполнении», часы у «На согласовании у HR»). `🖲️` — preferred-значений нет, подходит любая иконка.
- `info-circle` справа — в примерах статусов на странице (`Статусы` `10197:13234`), рядом с тултипом (`tasks/tabel-list-spec-v2.md`: «бейдж статуса с тултипом»).

## 6. Поведение и контент
| Так | Не так / сейчас так |
|---|---|
| Label в 1–2 слова | Сейчас так: Label без переноса и обрезки, бейдж растёт в ширину (auto width, `maxWidth` нет) |
| `Red, sm, Inverted=No, Round=Yes` — высота 20 | Сейчас так: `Blue, sm, Inverted=No, Round=Yes` `23457:2966` — высота 16 вместо 20 |
| `Black, Inverted=Yes`, `👁️ Counter`=true — число тёмное | Сейчас так: `Black, md, Inverted=Yes, Round=Yes` `23457:3186` — число `text/neutral/white`, не видно |

- Лимит символов Label с запасом +30% на казахский — `TODO: проверить`.
- Адаптив: размер фиксированный, бейдж не сжимается. Какой Size в мобильных макетах — `TODO: мобильщики`.

## 7. Делаем / не делаем
| Делаем | Не делаем |
|---|---|
| Иконка по смыслу или без иконок | Не оставляем обе иконки по умолчанию |
| Один статус — один цвет везде | Не красим один статус разными цветами |
| Статусы в списке — Inverted=Yes | Не заливаем каждый статус в списке |

`TODO: проверить` — пары выведены из реальных макетов (раздел 8) и дефолтов компонента; компонент их не ограничивает. Находка: в `Modal header` (`✅ Status`) вложенный Badge показывает обе `oclock` и текст «Label».

## 8. В интерфейсе
- WEB-Табель, «Табельщик · В работе · карточки» — экран, вставленный дизайнером в ветку (`24021:6795`, страница ✅ Badge): `Style=Pale blue` «На заполнении» и `Style=Orange` «На согласовании у HR», `Size=md, Inverted=Yes, Round=Yes`, `👈 Left icon`=true. Это новый `Badge` из библиотеки main (remote, key `8da66ed6…`), не `OLD Badge`.

Только реальный экран на новом `Badge`: WEB-Табель. «Сотрудники» `17685:515538` и Sidebar `23716:25414` в ветке пока на `OLD Badge` `9763:4426` — в гайд не берём (подмена в клоне = не реальный пример, решение Zhandos 2026-10-01).

## 9. Спецификация (web)
Разметка: `Badge, Style=Gray, Size=lg, Inverted=Yes, Round=Yes`, обе иконки, 1× (Gray — чтобы заливки паддингов и зазоров были видны на фоне).

| Маркер | Что | lg | md | sm |
|---|---|---|---|---|
| A | высота | 28, нет токена | 24 | 20 |
| B | паддинг по горизонтали | `Spacing/spacing-2x-sm` (8) | = | = |
| C | паддинг по вертикали | `Spacing/spacing-1x-xs` (4) | = | = |
| D | зазор | `Spacing/spacing-1x-xs` (4) | = | = |
| E | иконка | 20, нет токена | 16 | 12 |
| F | радиус | `Round=Yes` `Radius/radius-full` (1000), `No` `Radius/radius-sm` (8) | = | = |
| G | обводка, только `Inverted=Yes` | `border-sm` (1), внутри | = | = |
| H | текст | `Body/sm-medium` (14/20) | `Body/xs-medium` (12/16) | `Caption/xxs-medium` (10/12) |

Ширина — hug по контенту. Высота FIXED.

**Цвета по Style.** Шаблон, `<роль>`: Blue → `brand`, Red → `critical`, Green → `success`, Orange → `warning`, Pale blue → `pale`, Purple / Pink / Cyan / Yellow — то же имя.

| ◐ Inverted | фон | обводка | текст | иконка |
|---|---|---|---|---|
| `Yes` | `bg/<роль>/secondary-light` (8%) | `border/<роль>/secondary` (12%; Purple 15%, Pink 20%) | `text/<роль>/primary` | `icon/<роль>/primary` |
| `No` | `bg/<роль>/primary` | нет | `text/neutral/white` | `icon/neutral/white` |

Исключения:
- `Gray`: `Yes` — `bg/neutral/secondary` (#FAFAFA), `border/neutral/primary` (#E3E3E3), `text/neutral/tertiary` (#3D3D3D), `icon/neutral/secondary` (#666666); `No` — фон на примитиве `neutral/gray/solid-350` (#949494), иконка `icon/neutral/secondary-light` (#FAFAFA).
- `Black`: `Yes` — фон и обводка на примитивах `neutral/black/alpha-1000` (5%) и `neutral/black/alpha-900` (10%), `text/neutral/primary`, `icon/neutral/tertiary`; `No` — `bg/neutral/tertiary` (#2B2B2B).
- `Pale blue, Yes` — текст `text/pale/primary` (#4D6FAD), иконка `icon/pale/primary` (#5D7FBD).

**Токены:** все привязки — на 🧩 Tokens, старых и сырых нет (полный перебор 132 вариантов, 2026-10-01). Примитивы вместо семантики — 3 поля: фон `Gray, No`; фон и обводка `Black, Yes`. Без токена: высота, размер иконок.

**a11y:**
- Контраст текста ниже 4,5:1 у 15 из 22 сочетаний Style × Inverted (текст 10–14). Ниже 3:1: Yellow 1,5 / 1,6, Cyan 2,1 / 2,2, Orange 2,4 / 2,6. Проходят: Purple, Black (оба), Gray и Pale blue — только `Inverted=Yes`. `TODO: проверить` — что делать (затемнить текст, запретить стили для текста).
- Статус передаётся текстом, не только цветом — Label обязателен.
- Не интерактивный: состояний и фокуса нет.
- Роль и озвучивание (`status`, aria-label у иконок) — `TODO: фронты`.

**Mantine:** компонент и пропсы ↔ `Style`, `Size`, `Inverted`, `Round` — `TODO: фронты`.

## 10. Flutter
| Свойство Figma | Виджет / параметр Flutter | Комментарий |
|---|---|---|
| `🎨 Style` | `TODO: мобильщики` | |
| `↕ Size` | `TODO: мобильщики` | |
| `◐ Inverted` | `TODO: мобильщики` | |
| `🔘 Round` | `TODO: мобильщики` | |
| `👈 / 👉 icon`, `👁️ Counter` | `TODO: мобильщики` | |

**Отличия от web:** `TODO: мобильщики`. В Figma мобильных вариантов нет.

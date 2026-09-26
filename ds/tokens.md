# Токены — 🧩 Tokens

> Сгенерировано из Figma 2026-09-25, file key `5m462BWVr7bof44q3U3bjN`. Не править руками — перевыгрузка: «обнови реестр» (скрипт `ds/_scripts/tokens-export.js`).

Итого: 11 коллекций, 573 переменных (COLOR 468, FLOAT 95, STRING 8, BOOLEAN 2), 29 текстовых стилей, 13 эффект-стилей, 6 грид-стилей, 0 paint-стилей (цвета — только переменными).

## Правила

**Решения команды:**
- В компонентах используем семантические токены (`Semantic colors`), не примитивы.
- Нет подходящего семантического токена — не подставляем молча примитив, а предлагаем новый токен.

**Что видно в файле:**
- Семантика: `<свойство>/<роль>/<вариант>`. Свойство: `bg`, `border`, `icon`, `text`. Роль: `neutral`, `white` (только в `bg`), `brand`, `critical`, `success`, `warning`, `pale`, `purple`, `pink`, `cyan`, `yellow`. Вариант: `primary`, `secondary`, `tertiary`, `quaternary`, `muted`, `disabled`, `white`, `secondary-light`, `on-primary-*`, `on-secondary-*`. Состояния — суффиксом `-hover`, `-pressed`, `-disabled`. Исключения — `effects/<имя>` и `overlays/<имя>`: два уровня.
- 253 из 256 семантических токенов — алиасы на `Primitives colors`. Три исключения задают сырое значение: `effects/shadow-*`.
- Примитивы: `<палитра>/solid-<шаг>` и `<палитра>/alpha-<шаг>`. У нейтральных есть промежуточный уровень: `neutral/<gray|black|white>/<solid|alpha>-<шаг>`.
- Numbers: `Radius/radius-<размер>`, `Spacing/spacing-<N>x-<размер>`. База отступов — 4 px: `1x` = 4, `2x` = 8, …
- Скоупы заданы только у числовых переменных (`CORNER_RADIUS`, `GAP`, `EFFECT_FLOAT`, `STROKE_FLOAT`, `WIDTH_HEIGHT`, `FONT_SIZE`, `LINE_HEIGHT`, `LETTER_SPACING`) и у `family/Inter` (`FONT_FAMILY`). У всех цветов — `ALL_SCOPES`.
- Layout-коллекции привязываются через промежуточные переменные: в макетах биндим `Sidebar/*`, `Screens/*`, `Content/*`, а не `Layout/*` и не `auto/*`. Так сказано в описаниях переменных.
- Изменения переменных записываются на странице Changelog в колонки: «Версия», «Тип задачи» (`[feat]`, `[refactor]`, `[fix]`, `[docs]`), «Описание», «Кто делал», «Выполнено», «Передано», «Статус передачи».
- TODO: кто утверждает новый семантический токен и какой нужен минимум (вариант + hover/pressed или один токен)?
- TODO: сужать ли скоупы у цветов (сейчас везде `ALL_SCOPES`, т. е. `text/*` можно поставить в заливку)?
- TODO: можно ли использовать примитивы напрямую вне компонентов (иллюстрации, маркетинг)? Иллюстрации сейчас привязаны к примитивам: см. `ds/illustrations.md`.
- TODO: как писать состояния — через дефис или пробел? В файле есть оба варианта: `tertiary-hover` и `tertiary hover`.
- TODO: планируется ли тёмная тема или другие моды у `Semantic colors`? Сейчас там один мод, `Default`.

## Коллекции

Описаний у коллекций в файле нет, поэтому в последней колонке — что в них лежит.

| Коллекция | Моды | Переменных | Содержимое |
|---|---|---|---|
| `Numbers` | Default | 34 | Radius (11), Spacing (18), Blur (3), Spread (2) |
| `Primitives colors` | Hex | 212 | палитры solid/alpha, 0 алиасов |
| `Semantic colors` | Default | 256 | bg 88, border 56, icon 62, text 44, effects 4, overlays 2; 253 алиаса |
| `Typography` | Mode 1 | 36 | family, size, line-height, letter-spacing, weight |
| `Blur` | Blur | 3 | blur-sm/md/lg |
| `Spread` | Spread | 2 | none, focus |
| `Border` | Border | 4 | толщины обводки |
| `Layout` | Mode 1 | 15 | контрольные ширины/высоты раскладки |
| `Screens` | Desktop 1440, Desktop 1920, Desktop 1280, Desktop 1024, Tablet 768, Mobile 393, Mobile 375, Mobile 360 | 7 | значения по ширине экрана (3 — алиасы на Layout) |
| `Content` | Default, Wide | 1 | макс. ширина колонки контента |
| `Sidebar` | Auto, Full, Compact, Mobile, Hidden | 3 | режим, видимость и ширина сайдбара |

## Семантические цвета

Один мод — `Default`. Колонка Hex — значение примитива, на который ссылается токен: для проверки контраста. Для alpha в скобках указана непрозрачность.

### bg (88)

| Токен | → Примитив | Hex | Описание |
|---|---|---|---|
| `bg/neutral/primary` | `pale_blue/solid-50` | #F2F4F8 |  |
| `bg/neutral/secondary` | `neutral/gray/solid-25` | #FAFAFA |  |
| `bg/neutral/secondary-hover` | `neutral/gray/solid-50` | #F7F7F7 |  |
| `bg/neutral/secondary-pressed` | `neutral/gray/solid-75` | #EDEDED |  |
| `bg/neutral/tertiary` | `neutral/gray/solid-800` | #2B2B2B |  |
| `bg/neutral/tertiary hover` | `neutral/gray/solid-700` | #3D3D3D |  |
| `bg/neutral/tertiary pressed` | `neutral/gray/solid-600` | #525252 |  |
| `bg/neutral/quaternary` | `neutral/gray/solid-75` | #EDEDED |  |
| `bg/neutral/quaternary hover` | `neutral/gray/solid-85` | #E8E8E8 |  |
| `bg/neutral/quaternary pressed` | `neutral/gray/solid-100` | #E3E3E3 |  |
| `bg/neutral/disabled` | `neutral/gray/solid-50` | #F7F7F7 |  |
| `bg/neutral/disabled secondary` | `neutral/gray/solid-75` | #EDEDED |  |
| `bg/neutral/focus-outline` | `neutral/white/alpha` | #FFFFFF00 (0%) |  |
| `bg/white/white-primary` | `neutral/white/solid` | #FFFFFF |  |
| `bg/white/white-primary-hover` | `neutral/white/alpha-75` | #FFFFFFD9 (85%) |  |
| `bg/white/white-primary-pressed` | `neutral/white/alpha-125` | #FFFFFFBF (75%) |  |
| `bg/white/white-secondary` | `neutral/white/alpha-350` | #FFFFFF8C (55%) |  |
| `bg/white/white-secondary-hover` | `neutral/white/alpha-400` | #FFFFFF80 (50%) |  |
| `bg/white/white-secondary-pressed` | `neutral/white/alpha-450` | #FFFFFF73 (45%) |  |
| `bg/brand/primary` | `blue/solid-500` | #008EFF |  |
| `bg/brand/primary-hover` | `blue/solid-600` | #0680E0 |  |
| `bg/brand/primary-pressed` | `blue/solid-700` | #0F70BD |  |
| `bg/brand/primary-disabled` | `blue/solid-300` | #A5D6FD |  |
| `bg/brand/secondary-light` | `blue/alpha-50` | #008EFF14 (8%) |  |
| `bg/brand/secondary` | `blue/alpha-100` | #008EFF1F (12%) |  |
| `bg/brand/secondary-hover` | `blue/alpha-200` | #008EFF33 (20%) |  |
| `bg/brand/secondary-pressed` | `blue/alpha-300` | #008EFF4D (30%) |  |
| `bg/brand/secondary-disabled` | `blue/alpha-50` | #008EFF14 (8%) |  |
| `bg/critical/primary` | `red/solid-500` | #EE2B2B |  |
| `bg/critical/primary-hover` | `red/solid-600` | #D41111 |  |
| `bg/critical/primary-pressed` | `red/solid-700` | #AA0D0D |  |
| `bg/critical/secondary-light` | `red/alpha-50` | #EE2B2B14 (8%) |  |
| `bg/critical/secondary` | `red/alpha-100` | #EE2B2B1F (12%) |  |
| `bg/critical/secondary-hover` | `red/alpha-200` | #EE2B2B33 (20%) |  |
| `bg/critical/secondary-pressed` | `red/alpha-300` | #EE2B2B4D (30%) |  |
| `bg/success/primary` | `green/solid-500` | #12A543 |  |
| `bg/success/primary-hover` | `green/solid-600` | #0DA03F |  |
| `bg/success/primary-pressed` | `green/solid-700` | #0E8135 |  |
| `bg/success/secondary-light` | `green/alpha-50` | #12A54314 (8%) |  |
| `bg/success/secondary` | `green/alpha-100` | #12A5431F (12%) |  |
| `bg/success/secondary-hover` | `green/alpha-200` | #12A54333 (20%) |  |
| `bg/success/secondary-pressed` | `green/alpha-300` | #12A5434D (30%) |  |
| `bg/success/tertiary` | `green/solid-400` | #67C787 |  |
| `bg/success/tertiary-hover` | `green/solid-500` | #12A543 |  |
| `bg/success/tertiary-pressed` | `green/solid-600` | #0DA03F |  |
| `bg/warning/primary` | `orange/solid-500` | #FF7B00 |  |
| `bg/warning/primary-hover` | `orange/solid-600` | #F07300 |  |
| `bg/warning/primary-pressed` | `orange/solid-700` | #E06C00 |  |
| `bg/warning/secondary-light` | `orange/alpha-50` | #FF7B0014 (8%) |  |
| `bg/warning/secondary` | `orange/alpha-100` | #FF7B001F (12%) |  |
| `bg/warning/secondary-hover` | `orange/alpha-200` | #FF7B0033 (20%) |  |
| `bg/warning/secondary-pressed` | `orange/alpha-300` | #FF7B004D (30%) |  |
| `bg/pale/primary` | `pale_blue/solid-500` | #5D7FBD |  |
| `bg/pale/primary-hover` | `pale_blue/solid-600` | #3B5991 |  |
| `bg/pale/primary-pressed` | `pale_blue/solid-700` | #2C436D |  |
| `bg/pale/secondary-light` | `pale_blue/alpha-50` | #5D7FBD14 (8%) |  |
| `bg/pale/secondary` | `pale_blue/alpha-100` | #5D7FBD1F (12%) |  |
| `bg/pale/secondary-hover` | `pale_blue/alpha-200` | #5D7FBD33 (20%) |  |
| `bg/pale/secondary-pressed` | `pale_blue/alpha-300` | #5D7FBD4D (30%) |  |
| `bg/pale/disabled` | `pale_blue/alpha-50` | #5D7FBD14 (8%) |  |
| `bg/purple/primary` | `purple/solid-500` | #802DD2 |  |
| `bg/purple/primary-hover` | `purple/solid-600` | #661FAD |  |
| `bg/purple/primary-pressed` | `purple/solid-700` | #4D1782 |  |
| `bg/purple/secondary-light` | `purple/alpha-50` | #802DD214 (8%) |  |
| `bg/purple/secondary` | `purple/alpha-100` | #802DD226 (15%) |  |
| `bg/purple/secondary-hover` | `purple/alpha-200` | #802DD233 (20%) |  |
| `bg/purple/secondary-pressed` | `purple/alpha-300` | #802DD24D (30%) |  |
| `bg/pink/primary` | `pink/solid-500` | #E83182 |  |
| `bg/pink/primary-hover` | `pink/solid-600` | #CF1763 |  |
| `bg/pink/primary-pressed` | `pink/solid-700` | #A1124B |  |
| `bg/pink/secondary-light` | `pink/alpha-50` | #E8318214 (8%) |  |
| `bg/pink/secondary` | `pink/alpha-100` | #E831821F (12%) |  |
| `bg/pink/secondary-hover` | `pink/alpha-200` | #E8318233 (20%) |  |
| `bg/pink/secondary-pressed` | `pink/alpha-300` | #E831824D (30%) |  |
| `bg/cyan/primary` | `cyan/solid-500` | #0DBCF2 |  |
| `bg/cyan/primary-hover` | `cyan/solid-600` | #0BA9DA |  |
| `bg/cyan/primary-pressed` | `cyan/solid-700` | #007599 |  |
| `bg/cyan/secondary-light` | `cyan/alpha-50` | #0DBCF214 (8%) |  |
| `bg/cyan/secondary` | `cyan/alpha-100` | #0DBCF21F (12%) |  |
| `bg/cyan/secondary-hover` | `cyan/alpha-200` | #0DBCF233 (20%) |  |
| `bg/cyan/secondary-pressed` | `cyan/alpha-300` | #0DBCF24D (30%) |  |
| `bg/yellow/primary` | `yellow/solid-500` | #FDC621 |  |
| `bg/yellow/primary-hover` | `yellow/solid-600` | #EDB402 |  |
| `bg/yellow/primary-pressed` | `yellow/solid-700` | #D9A502 |  |
| `bg/yellow/secondary-light` | `yellow/alpha-50` | #FDC62114 (8%) |  |
| `bg/yellow/secondary` | `yellow/alpha-100` | #FDC6211F (12%) |  |
| `bg/yellow/secondary-hover` | `yellow/alpha-200` | #FDC62133 (20%) |  |
| `bg/yellow/secondary-pressed` | `yellow/alpha-300` | #FDC6214D (30%) |  |

### border (56)

| Токен | → Примитив | Hex | Описание |
|---|---|---|---|
| `border/neutral/primary` | `neutral/gray/solid-100` | #E3E3E3 |  |
| `border/neutral/secondary` | `neutral/gray/solid-75` | #EDEDED |  |
| `border/neutral/hover` | `neutral/gray/solid-150` | #C9C9C9 |  |
| `border/neutral/pressed` | `neutral/gray/solid-200` | #BDBDBD |  |
| `border/neutral/disabled` | `neutral/gray/solid-75` | #EDEDED |  |
| `border/neutral/white` | `neutral/white/solid` | #FFFFFF |  |
| `border/brand/primary` | `blue/solid-500` | #008EFF |  |
| `border/brand/primary-hover` | `blue/solid-600` | #0680E0 |  |
| `border/brand/primary-pressed` | `blue/solid-700` | #0F70BD |  |
| `border/brand/primary-disabled` | `neutral/white/alpha-800` | #FFFFFF33 (20%) |  |
| `border/brand/secondary` | `blue/alpha-100` | #008EFF1F (12%) |  |
| `border/brand/tertiary` | `blue/alpha-450` | #008EFFA6 (65%) |  |
| `border/brand/secondary-hover` | `blue/alpha-200` | #008EFF33 (20%) |  |
| `border/brand/secondary-disabled` | `blue/alpha-50` | #008EFF14 (8%) |  |
| `border/critical/primary` | `red/solid-500` | #EE2B2B |  |
| `border/critical/primary-hover` | `red/solid-600` | #D41111 |  |
| `border/critical/primary-pressed` | `red/solid-700` | #AA0D0D |  |
| `border/critical/secondary` | `red/alpha-100` | #EE2B2B1F (12%) |  |
| `border/critical/tertiary` | `red/alpha-450` | #EE2B2BA6 (65%) |  |
| `border/success/primary` | `green/solid-500` | #12A543 |  |
| `border/success/primary-hover` | `green/solid-600` | #0DA03F |  |
| `border/success/primary-pressed` | `green/solid-700` | #0E8135 |  |
| `border/success/secondary` | `green/alpha-100` | #12A5431F (12%) |  |
| `border/success/tertiary` | `green/alpha-450` | #12A543A6 (65%) |  |
| `border/warning/primary` | `orange/solid-500` | #FF7B00 |  |
| `border/warning/primary-hover` | `orange/solid-600` | #F07300 |  |
| `border/warning/primary-pressed` | `orange/solid-700` | #E06C00 |  |
| `border/warning/secondary` | `orange/alpha-100` | #FF7B001F (12%) |  |
| `border/warning/tertiary` | `orange/alpha-450` | #FF7B00A6 (65%) |  |
| `border/pale/primary` | `pale_blue/solid-500` | #5D7FBD |  |
| `border/pale/primary-hover` | `pale_blue/solid-525` | #4D6FAD |  |
| `border/pale/primary-pressed` | `pale_blue/solid-600` | #3B5991 |  |
| `border/pale/secondary-light` | `pale_blue/alpha-50` | #5D7FBD14 (8%) |  |
| `border/pale/secondary` | `pale_blue/alpha-100` | #5D7FBD1F (12%) |  |
| `border/pale/secondary-hover` | `pale_blue/alpha-200` | #5D7FBD33 (20%) |  |
| `border/pale/secondary-pressed` | `pale_blue/alpha-300` | #5D7FBD4D (30%) |  |
| `border/purple/primary` | `purple/solid-500` | #802DD2 |  |
| `border/purple/primary-hover` | `purple/solid-600` | #661FAD |  |
| `border/purple/primary-pressed` | `purple/solid-700` | #4D1782 |  |
| `border/purple/secondary` | `purple/alpha-100` | #802DD226 (15%) |  |
| `border/purple/tertiary` | `purple/alpha-450` | #802DD2A6 (65%) |  |
| `border/pink/primary` | `pink/solid-500` | #E83182 |  |
| `border/pink/primary-hover` | `pink/solid-600` | #CF1763 |  |
| `border/pink/primary-pressed` | `pink/solid-700` | #A1124B |  |
| `border/pink/secondary` | `pink/alpha-200` | #E8318233 (20%) |  |
| `border/pink/tertiary` | `pink/alpha-450` | #E83182A6 (65%) |  |
| `border/cyan/primary` | `cyan/solid-500` | #0DBCF2 |  |
| `border/cyan/primary-hover` | `cyan/solid-600` | #0BA9DA |  |
| `border/cyan/primary-pressed` | `cyan/solid-700` | #007599 |  |
| `border/cyan/secondary` | `cyan/alpha-100` | #0DBCF21F (12%) |  |
| `border/cyan/tertiary` | `cyan/alpha-450` | #0DBCF2A6 (65%) |  |
| `border/yellow/primary` | `yellow/solid-500` | #FDC621 |  |
| `border/yellow/primary-hover` | `yellow/solid-600` | #EDB402 |  |
| `border/yellow/primary-pressed` | `yellow/solid-700` | #D9A502 |  |
| `border/yellow/secondary` | `yellow/alpha-100` | #FDC6211F (12%) |  |
| `border/yellow/tertiary` | `yellow/alpha-450` | #FDC621A6 (65%) |  |

### icon (62)

| Токен | → Примитив | Hex | Описание |
|---|---|---|---|
| `icon/neutral/primary` | `neutral/gray/solid-800` | #2B2B2B |  |
| `icon/neutral/secondary` | `neutral/gray/solid-500` | #666666 |  |
| `icon/neutral/secondary-hover` | `neutral/gray/solid-600` | #525252 |  |
| `icon/neutral/secondary-pressed` | `neutral/gray/solid-700` | #3D3D3D |  |
| `icon/neutral/tertiary` | `neutral/gray/solid-700` | #3D3D3D | Вторичный цвет для описания, в случае возникновения кейсов где сложно читается secondary |
| `icon/neutral/tertiary-hover` | `neutral/gray/solid-800` | #2B2B2B | Вторичный цвет для описания, в случае возникновения кейсов где сложно читается secondary |
| `icon/neutral/tertiary-pressed` | `neutral/gray/solid-900` | #1A1A1A | Вторичный цвет для описания, в случае возникновения кейсов где сложно читается secondary |
| `icon/neutral/quaternary` | `neutral/gray/solid-250` | #ADADAD | Для плейсхолдеров |
| `icon/neutral/disabled` | `neutral/gray/solid-125` | #D6D6D6 |  |
| `icon/neutral/secondary-light` | `neutral/gray/solid-25` | #FAFAFA |  |
| `icon/neutral/white` | `neutral/white/solid` | #FFFFFF |  |
| `icon/brand/primary` | `blue/solid-500` | #008EFF |  |
| `icon/brand/primary-hover` | `blue/solid-600` | #0680E0 |  |
| `icon/brand/primary-pressed` | `blue/solid-700` | #0F70BD |  |
| `icon/brand/on-primary-disabled` | `neutral/white/alpha-200` | #FFFFFFB2 (70%) |  |
| `icon/brand/secondary-light` | `blue/alpha-50` | #008EFF14 (8%) |  |
| `icon/brand/secondary` | `blue/alpha-100` | #008EFF1F (12%) |  |
| `icon/brand/secondary-hover` | `blue/alpha-200` | #008EFF33 (20%) |  |
| `icon/brand/on-secondary-disabled` | `blue/solid-300` | #A5D6FD |  |
| `icon/critical/primary` | `red/solid-500` | #EE2B2B |  |
| `icon/critical/primary-hover` | `red/solid-600` | #D41111 |  |
| `icon/critical/primary-pressed` | `red/solid-700` | #AA0D0D |  |
| `icon/critical/secondary-light` | `red/alpha-50` | #EE2B2B14 (8%) |  |
| `icon/critical/secondary` | `red/alpha-100` | #EE2B2B1F (12%) |  |
| `icon/critical/secondary-hover` | `red/alpha-200` | #EE2B2B33 (20%) |  |
| `icon/success/primary` | `green/solid-500` | #12A543 |  |
| `icon/success/primary-hover` | `green/solid-600` | #0DA03F |  |
| `icon/success/secondary-light` | `green/alpha-50` | #12A54314 (8%) |  |
| `icon/success/secondary` | `green/alpha-100` | #12A5431F (12%) |  |
| `icon/success/secondary-hover` | `green/alpha-200` | #12A54333 (20%) |  |
| `icon/warning/primary` | `orange/solid-500` | #FF7B00 |  |
| `icon/warning/primary-hover` | `orange/solid-600` | #F07300 |  |
| `icon/warning/secondary-light` | `orange/alpha-50` | #FF7B0014 (8%) |  |
| `icon/warning/secondary` | `orange/alpha-100` | #FF7B001F (12%) |  |
| `icon/warning/secondary-hover` | `orange/alpha-200` | #FF7B0033 (20%) |  |
| `icon/pale/primary` | `pale_blue/solid-500` | #5D7FBD |  |
| `icon/pale/primary-hover` | `pale_blue/solid-600` | #3B5991 |  |
| `icon/pale/primary-pressed` | `pale_blue/solid-700` | #2C436D |  |
| `icon/pale/secondary` | `pale_blue/solid-400` | #728DC0 |  |
| `icon/pale/secondary-hover` | `pale_blue/solid-500` | #5D7FBD |  |
| `icon/pale/secondary-pressed` | `pale_blue/solid-600` | #3B5991 |  |
| `icon/pale/disabled` | `pale_blue/solid-300` | #9CACC9 |  |
| `icon/purple/primary` | `purple/solid-500` | #802DD2 |  |
| `icon/purple/primary-hover` | `purple/solid-600` | #661FAD |  |
| `icon/purple/secondary-light` | `purple/alpha-50` | #802DD214 (8%) |  |
| `icon/purple/secondary` | `purple/alpha-100` | #802DD226 (15%) |  |
| `icon/purple/secondary-hover` | `purple/alpha-200` | #802DD233 (20%) |  |
| `icon/pink/primary` | `pink/solid-500` | #E83182 |  |
| `icon/pink/primary-hover` | `pink/solid-600` | #CF1763 |  |
| `icon/pink/secondary-light` | `pink/alpha-50` | #E8318214 (8%) |  |
| `icon/pink/secondary` | `pink/alpha-100` | #E831821F (12%) |  |
| `icon/pink/secondary-hover` | `pink/alpha-200` | #E8318233 (20%) |  |
| `icon/cyan/primary` | `cyan/solid-500` | #0DBCF2 |  |
| `icon/cyan/primary-hover` | `cyan/solid-600` | #0BA9DA |  |
| `icon/cyan/secondary-light` | `cyan/alpha-50` | #0DBCF214 (8%) |  |
| `icon/cyan/secondary` | `cyan/alpha-100` | #0DBCF21F (12%) |  |
| `icon/cyan/secondary-hover` | `cyan/alpha-200` | #0DBCF233 (20%) |  |
| `icon/yellow/primary` | `yellow/solid-500` | #FDC621 |  |
| `icon/yellow/primary-hover` | `yellow/solid-600` | #EDB402 |  |
| `icon/yellow/secondary-light` | `yellow/alpha-50` | #FDC62114 (8%) |  |
| `icon/yellow/secondary` | `yellow/alpha-100` | #FDC6211F (12%) |  |
| `icon/yellow/secondary-hover` | `yellow/alpha-200` | #FDC62133 (20%) |  |

### text (44)

| Токен | → Примитив | Hex | Описание |
|---|---|---|---|
| `text/neutral/primary` | `neutral/black/solid` | #0E0E0E |  |
| `text/neutral/secondary` | `neutral/gray/solid-500` | #666666 | Цвет для описания, сабтайтлов |
| `text/neutral/tertiary` | `neutral/gray/solid-700` | #3D3D3D | Вторичный цвет для описания, в случае возникновения кейсов где сложно читается secondary |
| `text/neutral/tertiary-hover` | `neutral/gray/solid-800` | #2B2B2B | Вторичный цвет для описания, в случае возникновения кейсов где сложно читается secondary |
| `text/neutral/tertiary-pressed` | `neutral/gray/solid-900` | #1A1A1A | Вторичный цвет для описания, в случае возникновения кейсов где сложно читается secondary |
| `text/neutral/quaternary` | `neutral/gray/solid-350` | #949494 | Для плейсхолдеров |
| `text/neutral/muted` | `neutral/gray/solid-250` | #ADADAD | Для плейсхолдеров |
| `text/neutral/disabled` | `neutral/gray/solid-150` | #C9C9C9 |  |
| `text/neutral/white` | `neutral/white/solid` | #FFFFFF |  |
| `text/brand/primary` | `blue/solid-500` | #008EFF |  |
| `text/brand/primary-hover` | `blue/solid-600` | #0680E0 |  |
| `text/brand/primary-pressed` | `blue/solid-700` | #0F70BD |  |
| `text/brand/on-primary-muted` | `neutral/white/alpha-250` | #FFFFFFA6 (65%) | текст для праймари блю дизейбл состояния |
| `text/brand/on-primary-disabled` | `neutral/white/alpha-200` | #FFFFFFB2 (70%) | текст для праймари блю дизейбл состояния |
| `text/brand/on-secondary-muted` | `blue/alpha-425` | #008EFF8C (55%) |  |
| `text/brand/on-secondary-disabled` | `blue/solid-300` | #A5D6FD | текст для секондари блю дизейбл состояния |
| `text/critical/primary` | `red/solid-500` | #EE2B2B |  |
| `text/critical/primary-hover` | `red/solid-600` | #D41111 |  |
| `text/critical/primary-pressed` | `red/solid-700` | #AA0D0D |  |
| `text/success/primary` | `green/solid-500` | #12A543 |  |
| `text/success/primary-hover` | `green/solid-600` | #0DA03F |  |
| `text/success/primary-pressed` | `green/solid-700` | #0E8135 |  |
| `text/warning/primary` | `orange/solid-500` | #FF7B00 |  |
| `text/warning/primary-hover` | `orange/solid-600` | #F07300 |  |
| `text/warning/primary-pressed` | `orange/solid-700` | #E06C00 |  |
| `text/pale/primary` | `pale_blue/solid-525` | #4D6FAD |  |
| `text/pale/primary-hover` | `pale_blue/solid-600` | #3B5991 |  |
| `text/pale/primary-pressed` | `pale_blue/solid-700` | #2C436D |  |
| `text/pale/secondary` | `pale_blue/solid-400` | #728DC0 |  |
| `text/pale/secondary-hover` | `pale_blue/solid-500` | #5D7FBD |  |
| `text/pale/secondary-pressed` | `pale_blue/solid-600` | #3B5991 |  |
| `text/pale/disabled` | `pale_blue/solid-300` | #9CACC9 |  |
| `text/purple/primary` | `purple/solid-500` | #802DD2 |  |
| `text/purple/primary-hover` | `purple/solid-600` | #661FAD |  |
| `text/purple/primary-pressed` | `purple/solid-700` | #4D1782 |  |
| `text/pink/primary` | `pink/solid-500` | #E83182 |  |
| `text/pink/primary-hover` | `pink/solid-600` | #CF1763 |  |
| `text/pink/primary-pressed` | `pink/solid-700` | #A1124B |  |
| `text/cyan/primary` | `cyan/solid-500` | #0DBCF2 |  |
| `text/cyan/primary-hover` | `cyan/solid-600` | #0BA9DA |  |
| `text/cyan/primary-pressed` | `cyan/solid-700` | #007599 |  |
| `text/yellow/primary` | `yellow/solid-500` | #FDC621 |  |
| `text/yellow/primary-hover` | `yellow/solid-600` | #EDB402 |  |
| `text/yellow/primary-pressed` | `yellow/solid-700` | #D9A502 |  |

### effects (4)

| Токен | → Примитив | Hex | Описание |
|---|---|---|---|
| `effects/focus-default` | `pale_blue/solid-400` | #728DC0 |  |
| `effects/shadow-low` | — (raw) | #3A444F13 (7%) |  |
| `effects/shadow-medium` | — (raw) | #191B1D1A (10%) |  |
| `effects/shadow-high` | — (raw) | #14151620 (13%) |  |

### overlays (2)

| Токен | → Примитив | Hex | Описание |
|---|---|---|---|
| `overlays/primary` | `neutral/black/alpha-800` | #0E0E0E33 (20%) |  |
| `overlays/black` | `neutral/gray/solid-900` | #1A1A1A |  |

## Примитивы

Один мод — `Hex`. У всех 212 переменных `ALL_SCOPES`, описаний нет. Alpha — `#RRGGBBAA`, в скобках непрозрачность.

| Палитра | Значения |
|---|---|
| `neutral/gray` solid (17) | solid-25 #FAFAFA, solid-50 #F7F7F7, solid-75 #EDEDED, solid-85 #E8E8E8, solid-100 #E3E3E3, solid-125 #D6D6D6, solid-150 #C9C9C9, solid-200 #BDBDBD, solid-250 #ADADAD, solid-300 #A1A1A1, solid-350 #949494, solid-400 #878787, solid-500 #666666, solid-600 #525252, solid-700 #3D3D3D, solid-800 #2B2B2B, solid-900 #1A1A1A |
| `neutral/black` solid (1) | solid #0E0E0E |
| `neutral/black` alpha (18) | alpha-25 #0E0E0EF2 (95%), alpha-50 #0E0E0EE5 (90%), alpha-75 #0E0E0ED9 (85%), alpha-100 #0E0E0ECC (80%), alpha-125 #0E0E0EBF (75%), alpha-200 #0E0E0EB2 (70%), alpha-250 #0E0E0EA6 (65%), alpha-300 #0E0E0E99 (60%), alpha-350 #0E0E0E8C (55%), alpha-400 #0E0E0E80 (50%), alpha-450 #0E0E0E73 (45%), alpha-500 #0E0E0E66 (40%), alpha-550 #0E0E0E59 (35%), alpha-600 #0E0E0E4D (30%), alpha-700 #0E0E0E40 (25%), alpha-800 #0E0E0E33 (20%), alpha-900 #0E0E0E1A (10%), alpha-1000 #0E0E0E0D (5%) |
| `neutral/white` solid (1) | solid #FFFFFF |
| `neutral/white` alpha (19) | alpha #FFFFFF00 (0%), alpha-25 #FFFFFFF2 (95%), alpha-50 #FFFFFFE5 (90%), alpha-75 #FFFFFFD9 (85%), alpha-100 #FFFFFFCC (80%), alpha-125 #FFFFFFBF (75%), alpha-200 #FFFFFFB2 (70%), alpha-250 #FFFFFFA6 (65%), alpha-300 #FFFFFF99 (60%), alpha-350 #FFFFFF8C (55%), alpha-400 #FFFFFF80 (50%), alpha-450 #FFFFFF73 (45%), alpha-500 #FFFFFF66 (40%), alpha-550 #FFFFFF59 (35%), alpha-600 #FFFFFF4D (30%), alpha-700 #FFFFFF40 (25%), alpha-800 #FFFFFF33 (20%), alpha-900 #FFFFFF1A (10%), alpha-1000 #FFFFFF0D (5%) |
| `blue` solid (11) | solid-50 #E6F4FE, solid-100 #D6EDFF, solid-200 #C3E4FD, solid-300 #A5D6FD, solid-350 #83C8FE, solid-400 #69BBFC, solid-500 #008EFF, solid-600 #0680E0, solid-700 #0F70BD, solid-800 #0A4676, solid-900 #041C2F |
| `blue` alpha (8) | alpha-50 #008EFF14 (8%), alpha-100 #008EFF1F (12%), alpha-200 #008EFF33 (20%), alpha-300 #008EFF4D (30%), alpha-400 #008EFF73 (45%), alpha-425 #008EFF8C (55%), alpha-450 #008EFFA6 (65%), alpha-500 #008EFFCC (80%) |
| `pale_blue` solid (11) | solid-50 #F2F4F8, solid-100 #DEE3ED, solid-200 #BDC7DB, solid-300 #9CACC9, solid-400 #728DC0, solid-500 #5D7FBD, solid-525 #4D6FAD, solid-600 #3B5991, solid-700 #2C436D, solid-800 #1E2D48, solid-900 #0F1624 |
| `pale_blue` alpha (7) | alpha-50 #5D7FBD14 (8%), alpha-100 #5D7FBD1F (12%), alpha-200 #5D7FBD33 (20%), alpha-300 #5D7FBD4D (30%), alpha-400 #5D7FBD73 (45%), alpha-450 #5D7FBDA6 (65%), alpha-500 #5D7FBDCC (80%) |
| `red` solid (10) | solid-50 #FDF1F1, solid-100 #FCE3E3, solid-200 #FAD1D1, solid-300 #F7B5B5, solid-400 #F47171, solid-500 #EE2B2B, solid-600 #D41111, solid-700 #AA0D0D, solid-800 #760A0A, solid-900 #470606 |
| `red` alpha (7) | alpha-50 #EE2B2B14 (8%), alpha-100 #EE2B2B1F (12%), alpha-200 #EE2B2B33 (20%), alpha-300 #EE2B2B4D (30%), alpha-400 #EE2B2B73 (45%), alpha-450 #EE2B2BA6 (65%), alpha-500 #EE2B2BCC (80%) |
| `orange` solid (10) | solid-50 #FEF2E6, solid-100 #FEE5CD, solid-200 #FDD5AF, solid-300 #FFBA7C, solid-400 #FBA251, solid-500 #FF7B00, solid-600 #F07300, solid-700 #E06C00, solid-800 #C25D00, solid-900 #4D2500 |
| `orange` alpha (7) | alpha-50 #FF7B0014 (8%), alpha-100 #FF7B001F (12%), alpha-200 #FF7B0033 (20%), alpha-300 #FF7B004D (30%), alpha-400 #FF7B0073 (45%), alpha-450 #FF7B00A6 (65%), alpha-500 #FF7B00CC (80%) |
| `green` solid (10) | solid-50 #E8FCEF, solid-100 #D5F6E0, solid-200 #C4F2D3, solid-300 #A3EBBB, solid-400 #67C787, solid-500 #12A543, solid-600 #0DA03F, solid-700 #0E8135, solid-800 #07401A, solid-900 #031A0A |
| `green` alpha (7) | alpha-50 #12A54314 (8%), alpha-100 #12A5431F (12%), alpha-200 #12A54333 (20%), alpha-300 #12A5434D (30%), alpha-400 #12A54373 (45%), alpha-450 #12A543A6 (65%), alpha-500 #12A543CC (80%) |
| `yellow` solid (10) | solid-50 #FDF9CE, solid-100 #FDF7B4, solid-200 #FEF08A, solid-300 #FDE45E, solid-400 #FDDA3F, solid-500 #FDC621, solid-600 #EDB402, solid-700 #D9A502, solid-800 #B18602, solid-900 #7E6001 |
| `yellow` alpha (7) | alpha-50 #FDC62114 (8%), alpha-100 #FDC6211F (12%), alpha-200 #FDC62133 (20%), alpha-300 #FDC6214D (30%), alpha-400 #FDC62173 (45%), alpha-450 #FDC621A6 (65%), alpha-500 #FDC621CC (80%) |
| `cyan` solid (10) | solid-50 #E5F9FF, solid-100 #CCF3FF, solid-200 #99E7FF, solid-300 #66DBFF, solid-400 #33CFFF, solid-500 #0DBCF2, solid-600 #0BA9DA, solid-700 #007599, solid-800 #004E66, solid-900 #002733 |
| `cyan` alpha (7) | alpha-50 #0DBCF214 (8%), alpha-100 #0DBCF21F (12%), alpha-200 #0DBCF233 (20%), alpha-300 #0DBCF24D (30%), alpha-400 #0DBCF273 (45%), alpha-450 #0DBCF2A6 (65%), alpha-500 #0DBCF2CC (80%) |
| `purple` solid (10) | solid-50 #F2E9FB, solid-100 #E5D4F7, solid-200 #CCA8F0, solid-300 #B27DE8, solid-400 #9952E0, solid-500 #802DD2, solid-600 #661FAD, solid-700 #4D1782, solid-800 #330F57, solid-900 #270B41 |
| `purple` alpha (7) | alpha-50 #802DD214 (8%), alpha-100 #802DD226 (15%), alpha-200 #802DD233 (20%), alpha-300 #802DD24D (30%), alpha-400 #802DD273 (45%), alpha-450 #802DD2A6 (65%), alpha-500 #802DD2CC (80%) |
| `pink` solid (10) | solid-50 #FDEDF6, solid-100 #FAD1E7, solid-200 #F7BADA, solid-300 #F28CC2, solid-400 #ED5EA5, solid-500 #E83182, solid-600 #CF1763, solid-700 #A1124B, solid-800 #800033, solid-900 #450820 |
| `pink` alpha (7) | alpha-50 #E8318214 (8%), alpha-100 #E831821F (12%), alpha-200 #E8318233 (20%), alpha-300 #E831824D (30%), alpha-400 #E8318273 (45%), alpha-450 #E83182A6 (65%), alpha-500 #E83182CC (80%) |

## Numbers

Коллекция `Numbers`, мод `Default`.

| Radius (`CORNER_RADIUS`) | Значение | | Spacing (`GAP`) | Значение |
|---|---|---|---|---|
| `Radius/radius-x` | 0 | | `Spacing/spacing-x` | 0 |
| `Radius/radius-xxs` | 2 | | `Spacing/spacing-0x-xxs` | 2 |
| `Radius/radius-xs` | 4 | | `Spacing/spacing-1x-xs` | 4 |
| `Radius/radius-s` | 6 | | `Spacing/spacing-1,5x-s` | 6 — «Использовать только в редких случаях» |
| `Radius/radius-sm` | 8 | | `Spacing/spacing-2x-sm` | 8 |
| `Radius/radius-md` | 12 | | `Spacing/spacing-3x-md` | 12 |
| `Radius/radius-lg` | 16 | | `Spacing/spacing-4x-lg` | 16 |
| `Radius/radius-xl` | 24 | | `Spacing/spacing-5x-xl` | 20 |
| `Radius/radius-xxl` | 32 | | `Spacing/spacing-6x-xll` | 24 |
| `Radius/radius-3xl` | 64 | | `Spacing/spacing-7x` | 28 |
| `Radius/radius-full` | 1000 | | `Spacing/spacing-8x` | 32 |
| | | | `Spacing/spacing-9x` | 36 |
| | | | `Spacing/spacing-10x` | 40 |
| | | | `Spacing/spacing-12x` | 48 |
| | | | `Spacing/spacing-14x` | 56 |
| | | | `Spacing/spacing-16x` | 64 |
| | | | `Spacing/spacing-24x` | 96 |
| | | | `Spacing/spacing-32x` | 128 |

| Токен | Значение | Скоуп |
|---|---|---|
| `Blur/blur-sm` · `Blur/blur-md` · `Blur/blur-lg` (Numbers) | 15 · 36 · 48 | `EFFECT_FLOAT` |
| `Spread/none` · `Spread/focus` (Numbers) | 0 · 3 | `EFFECT_FLOAT` |
| `blur-sm` · `blur-md` · `blur-lg` (коллекция `Blur`) | 15 · 36 · 48 | `EFFECT_FLOAT` |
| `none` · `focus` (коллекция `Spread`) | 0 · 3 | `EFFECT_FLOAT` |
| `border-xs` · `border-sm` · `border-md` · `border-lg` (коллекция `Border`) | 0.5 · 1 · 1.5 · 2 | `STROKE_FLOAT` |

## Typography variables

Коллекция `Typography`, мод `Mode 1`. Описаний нет.

| Шаг | `size/*` | `line-height/*` |
|---|---|---|
| 7xl | 86 | 88 |
| 6xl | 56 | 60 |
| 5xl | 40 | 48 |
| 4xl | 32 | 38 |
| 3xl | 28 | 36 |
| 2xl | 24 | 32 |
| 1xl | 20 | 26 |
| xl | 18 | 24 |
| lg | 16 | 22 |
| md | 14 | 20 |
| sm | 12 | 16 |
| xs | 10 | 12 |
| xxs | 8 | 8 |

| Токен | Значение |
|---|---|
| `family/Inter` | "Inter" (STRING, `FONT_FAMILY`) |
| `weight/regular` · `weight/medium` · `weight/semi-bold` · `weight/bold` | "400" · "500" · "600" · "700" (STRING, `ALL_SCOPES`) |
| `letter-spacing/xxs` · `xs` · `sm` · `md` · `lg` | 0 · 0 · -0.25 · -0.5 · -2 |

Шкала `letter-spacing/*` не совпадает со шкалой `size/*`. `letter-spacing/lg` (-2) стоит у `Display/lg` (86 px), а не у текста 16 px.

## Layout, Screens, Content, Sidebar

### Layout (мод `Mode 1`, все `WIDTH_HEIGHT`)

| Токен | Значение | Описание (сокращено) |
|---|---|---|
| `sidebar/layout-sidebar-width-full` | 260 | Ширина развёрнутого сайдбара (Full), не тянется. Напрямую не привязываем: инстанс Sidebar → `Sidebar/layout-sidebar-width`. |
| `sidebar/layout-sidebar-width-compact` | 68 | Ширина свёрнутого сайдбара (Compact). Напрямую не привязываем. |
| `header/layout-header-height-desktop` | 60 | Высота шапки сайдбара и шапки страницы от 1024. Закреплена, не скроллится. |
| `header/layout-header-height-mobile` | 52 | Высота шапки до 1024. Одно значение для мобильного сайдбара и страницы, чтобы логотип не прыгал. |
| `content/layout-content-max-width-default` | 1140 | Макс. ширина колонки без паддингов: min(1140, вьюпорт − сайдбар − 2×паддинг). Паддинг 20 от 1024, 16 ниже. Колонка центрируется. |
| `content/layout-content-max-width-wide` | 1332 | Широкая колонка — только по решению дизайнера под конкретный экран. Максимум — от 1632 (Full) / 1440 (Compact). |
| `content/layout-column-min-compact` | 280 | Мин. ширина колонки в плотной раскладке: 3 на десктопе, 2 на планшете, 1 на мобилке. |
| `frame/layout-frame-mobile-xs` | 360 | Самый узкий массовый телефон, контент 328. Проверка переносов и перевода (+30%). |
| `frame/layout-frame-mobile-sm` | 375 | Основная мобильная ширина, контент 343. Здесь же — короткий экран 667 (клавиатура, sticky). |
| `frame/layout-frame-mobile-md` | 393 | Проверка, что макет тянется шире 375, контент 361. |
| `frame/layout-frame-tablet` | 768 | Планшет: шапка 52, меню на весь экран, паддинг 16, контент 736. |
| `frame/layout-frame-desktop-xs` | 1024 | Мин. десктоп, первая ширина с сайдбаром: Compact, шапка 60, контент 916. |
| `frame/layout-frame-desktop-sm` | 1280 | Порог автосворачивания сайдбара (**«предложение, не утверждено»**). Full → контент 980, Compact → 1140. |
| `frame/layout-frame-desktop-md` | 1440 | Базовая ширина макетов. Контент 1140: при Full полей нет, при Compact — по 96. |
| `frame/layout-frame-desktop-lg` | 1920 | Большой монитор: при Full контент 1140, поля по 240. |

### Screens (8 модов)

| Токен | Тип / скоуп | D1440 | D1920 | D1280 | D1024 | T768 | M393 | M375 | M360 |
|---|---|---|---|---|---|---|---|---|---|
| `frame/layout-frame-width` | F / `WIDTH_HEIGHT` | → desktop-md | → desktop-lg | → desktop-sm | → desktop-xs | → tablet | → mobile-md | → mobile-sm | → mobile-xs |
| `content/layout-content-padding` | F / `GAP` | → spacing-5x-xl (20) | 20 | 20 | 20 | → spacing-4x-lg (16) | 16 | 16 | 16 |
| `column/layout-column-min-default` | F / `WIDTH_HEIGHT` | 400 | 400 | 400 | 400 | 360 | 320 | 320 | 320 |
| `auto/layout-sidebar-width-auto` | F / `WIDTH_HEIGHT` | → width-full | → width-full | → width-full | → width-compact | → frame-width | → frame-width | → frame-width | → frame-width |
| `auto/layout-sidebar-mode-auto` | S / `ALL_SCOPES` | Full | Full | Full | Compact | Mobile | Mobile | Mobile | Mobile |
| `auto/layout-sidebar-visible-auto` | B / `ALL_SCOPES` | true | true | true | true | false | false | false | false |
| `header/layout-header-size` | S / `ALL_SCOPES` | Desktop | Desktop | Desktop | Desktop | Mobile | Mobile | Mobile | Mobile |

Описания:
- `frame/layout-frame-width` — ширина корневого фрейма экрана. Каждый мод ссылается на свою ширину из Layout, перепривязывать вручную не нужно.
- `content/layout-content-padding` — паддинг контентной области со всех сторон. Ставится на родителя колонки, а не на саму колонку.
- `column/layout-column-min-default` — мин. ширина колонки в обычной раскладке: 2 колонки на десктопе, 1 на планшете и мобилке. На планшете 2×360+20 = 740 > 736.
- `auto/*` — источники автоматики для коллекции Sidebar. В макетах их не привязываем, биндим `Sidebar/*`.
- `header/layout-header-size` — совпадает со свойством Size компонента Header. Привязывается к variant-свойству инстанса.

### Content (моды Default / Wide)

| Токен | Default | Wide | Описание |
|---|---|---|---|
| `layout-content-max-width` (`WIDTH_HEIGHT`) | → `content/layout-content-max-width-default` (1140) | → `content/layout-content-max-width-wide` (1332) | Wide — по решению дизайнера под конкретный экран. Переключается модом коллекции на фрейме. |

### Sidebar (моды Auto / Full / Compact / Mobile / Hidden)

| Токен | Auto | Full | Compact | Mobile | Hidden |
|---|---|---|---|---|---|
| `layout-sidebar-mode` (S, `ALL_SCOPES`) | → `auto/layout-sidebar-mode-auto` | "Full" | "Compact" | "Mobile" | → `auto/layout-sidebar-mode-auto` |
| `layout-sidebar-visible` (B, `ALL_SCOPES`) | → `auto/layout-sidebar-visible-auto` | true | true | true | false |
| `layout-sidebar-width` (F, `WIDTH_HEIGHT`) | → `auto/layout-sidebar-width-auto` | → `…-width-full` (260) | → `…-width-compact` (68) | → `frame/layout-frame-width` | → `auto/layout-sidebar-width-auto` |

Описания:
- `layout-sidebar-mode` — привязывается к свойству Mode инстанса Sidebar. Full, Compact и Mobile — ручное переопределение для макета конкретного состояния. Hidden — значение не используется. Mobile на десктопной ширине — осознанный мокап, а не проверка адаптива.
- `layout-sidebar-visible` — привязывается к видимости инстанса Sidebar. Hidden скрывает сайдбар всегда: для экранов без навигации (логин, онбординг, публичные страницы).
- `layout-sidebar-width` — привязывается к ширине инстанса Sidebar вместе с `layout-sidebar-mode`. Mobile — ширина текущего экрана.

## Текстовые стили

Семейство у всех — Inter. У всех стилей привязаны только `fontFamily` и `fontStyle`. `fontSize`, `lineHeight` и `letterSpacing` не привязаны ни в одном стиле: значения стоят числами. Line-height и letter-spacing — в px.

| Стиль | Начертание | Size | LH | LS | Привязки | Описание |
|---|---|---|---|---|---|---|
| `Display/lg` | Semi Bold | 86 | 88 | -2 | family, style → **удалённые** `font/family/Inter`, `font/weight/SemiBold` | |
| `Display/md` | Bold | 56 | 60 | 0 | family, style → **удалённые** `font/family/Inter`, `font/weight/Bold` | |
| `Heading/H1` | Bold | 40 | 48 | -0.5 | `family/Inter`, `weight/bold` | |
| `Heading/H2` | Bold | 32 | 38 | -0.5 | то же | |
| `Heading/H3` | Bold | 28 | 36 | -0.5 | то же | |
| `Heading/H4` | Bold | 24 | 32 | -0.5 | то же | |
| `Heading/H5` | Bold | 20 | 24 | -0.5 | то же | |
| `Heading/H6` | Bold | 18 | 24 | -0.5 | то же | |
| `Heading/sub-md` | Bold | 16 | 22 | -0.25 | то же | |
| `Heading/sub-sm` | Bold | 14 | 20 | -0.25 | то же | |
| `Heading/sub-xs` | Bold | 12 | 16 | -0.25 | то же | |
| `Body/lg-semibold` · `-medium` · `-regular` | Semi Bold · Medium · Regular | 18 | 24 | 0 | `family/Inter`, `weight/semi-bold` · `medium` · `regular` | |
| `Body/md-semibold` · `-medium` · `-regular` | Semi Bold · Medium · Regular | 16 | 22 | 0 | то же | |
| `Body/sm-semibold` · `-medium` · `-regular` | Semi Bold · Medium · Regular | 14 | 20 | 0 | то же | |
| `Body/xs-semibold` · `-medium` · `-regular` | Semi Bold · Medium · Regular | 12 | 16 | 0 | то же | |
| `Caption/xxs-semibold` · `-medium` · `-regular` | Semi Bold · Medium · Regular | 10 | 12 | 0 | то же | |
| `Caption/xxxs-semibold` · `-medium` · `-regular` | **SemiBold** · Medium · Regular | 8 | 8 | 0 | то же | «Badge / Counter» |

## Эффекты

Все эффекты — `DROP_SHADOW`. Цвет, blur и spread привязаны к переменным: цвет — к `effects/*` из `Semantic colors`, blur и spread — к `Blur/*` и `Spread/*` из **`Numbers`**, не из отдельных коллекций. Offset не привязан. Описаний нет.

| Стиль | Параметры (x, y, blur, spread, цвет) |
|---|---|
| `States/focus-state` | 0, 0, 0, 3, `effects/focus-default` (#728DC0). Spread не привязан, стоит числом 3. |
| `Above/low` · `Above/medium` · `Above/high` | 0,-5,15,0 `shadow-low` · 0,-8,36,0 `shadow-medium` · 0,-16,48,0 `shadow-high` |
| `Below/low` · `Below/medium` · `Below/high` | 0,5,15,0 · 0,8,36,0 · 0,16,48,0 |
| `Right/low` · `Right/medium` · `Right/high` | 5,0,15,0 · **8,8**,36,0 · 16,0,48,0 |
| `Left/low` · `Left/medium` · `Left/high` | -5,0,15,0 · -8,0,36,0 · -16,0,48,0 |

Цвета: `shadow-low` #3A444F13 (7%), `shadow-medium` #191B1D1A (10%), `shadow-high` #14151620 (13%).

## Сетки

Все сетки — `COLUMNS`, цвет #FF00001A. Описаний нет. Страница с сетками называется «▢ Grid (старые)».

| Стиль | Параметры |
|---|---|
| `Layout/Large` | 12 колонок, CENTER, ширина 72, gutter 24 |
| `Layout/Medium` | 8 колонок, STRETCH, gutter 24, отступ 24 |
| `Layout/Small` | 4 колонки, STRETCH, gutter 16, отступ 16 |
| `Sub-grids/Large` | 12 колонок, STRETCH, gutter 24, отступ 0 |
| `Sub-grids/Medium` | 8 колонок, STRETCH, gutter 24, отступ 0 |
| `Sub-grids/Small` | 4 колонки, STRETCH, gutter 16, отступ 0 |

## Замечания

- **Дубли Blur/Spread.** `Numbers` содержит `Blur/blur-sm|md|lg` и `Spread/none|focus`. Отдельные коллекции `Blur` и `Spread` дублируют их с теми же значениями. Эффект-стили привязаны к версиям из `Numbers`, а отдельные коллекции ни к чему не привязаны. Border из `Numbers` удалён 02.07.2026 (Changelog, `[refactor]`), теперь он только в коллекции `Border`.
- **`ALL_SCOPES`.** Стоит у всех 212 примитивов, всех 256 семантических цветов, `weight/*` (4), 3 переменных `Screens` и 2 переменных `Sidebar` (STRING/BOOLEAN).
- **Нет описаний** у 533 из 573 переменных: Primitives 212/212, Semantic 243/256, Numbers 33/34, Typography 36/36, Blur 3/3, Spread 2/2, Border 4/4. У Layout, Screens, Content и Sidebar описаны все переменные. У текстовых стилей описание есть только у `Caption/xxxs-*`, у эффектов и сеток описаний нет.
- **Странные имена:**
  - `Spacing/spacing-6x-xll` — должно быть `xxl`?
  - `Spacing/spacing-1,5x-s` — запятая в имени.
  - `Spacing/spacing-0x-xxs` = 2, хотя `0x` означает 0.
  - `spacing-x` и `radius-x` = 0.
  - Пробел вместо дефиса: `bg/neutral/tertiary hover`, `tertiary pressed`, `quaternary hover`, `quaternary pressed`, `disabled secondary`.
  - `bg/white/white-*` повторяет роль в варианте.
  - `line-height/1xl` и `size/1xl` рядом с `xl`.
- **Имена модов:** `Hex` (Primitives), `Mode 1` (Typography, Layout). У `Blur`, `Spread` и `Border` мод назван как сама коллекция.
- **Тени заданы сырым значением.** `effects/shadow-low`, `shadow-medium` и `shadow-high` — не алиасы. Их цвета (#3A444F, #191B1D, #141516) не встречаются в примитивах.
- **`bg/neutral/primary` → `pale_blue/solid-50`**: нейтральный фон ссылается на цветную палитру.
- **Одинаковые значения у разных вариантов.** Например:
  - `bg/neutral/secondary-hover` = `bg/neutral/disabled` (gray-50);
  - `bg/neutral/secondary-pressed` = `quaternary` = `disabled secondary` (gray-75);
  - `border/neutral/secondary` = `border/neutral/disabled`;
  - `icon/neutral/primary` = `icon/neutral/tertiary-hover`;
  - `bg/success/primary` = `bg/success/tertiary-hover`;
  - `bg/brand/secondary-light` = `bg/brand/secondary-disabled`;
  - `bg/pale/secondary-light` = `bg/pale/disabled`;
  - `text/pale/primary-hover` = `text/pale/secondary-pressed`.
- **Неполные наборы.**
  - У `icon/success`, `icon/warning`, `icon/purple`, `icon/pink`, `icon/cyan` и `icon/yellow` нет `primary-pressed`, а у `icon/brand`, `icon/critical`, `icon/pale` он есть.
  - У `text/critical|success|warning|purple|pink|cyan|yellow` есть только `primary` с hover/pressed.
  - У `border/purple|pink|cyan|yellow` нет `secondary-light`/`-hover`/`-pressed`, у `border/pale` они есть.
  - `border/pink/secondary` → `pink/alpha-200`, у остальных палитр `secondary` → `alpha-100`.
  - Описания `text/neutral/quaternary` и `text/neutral/muted` одинаковые («Для плейсхолдеров»).
  - Описание `text/brand/on-primary-muted` («…дизейбл состояния») совпадает с описанием `on-primary-disabled`.
- **Шкала alpha работает в разные стороны.** У `neutral/white|black/alpha-N` чем больше N, тем прозрачнее: `alpha-25` = 95%, `alpha-1000` = 5%. У цветных `<палитра>/alpha-N` наоборот, чем больше N, тем плотнее: `alpha-50` = 8%, `alpha-500` = 80%. `purple/alpha-100` = 15%, у остальных палитр `alpha-100` = 12%.
- **Примитивы без ссылок.** На 107 из 212 примитивов не ссылается ни один семантический токен.
- **Удалённые переменные в стилях.** `Display/lg` и `Display/md` привязаны к переменным `font/family/Inter`, `font/weight/SemiBold` и `font/weight/Bold`. Их id относятся к коллекции `Typography`, но в её списке этих переменных нет — судя по всему, они удалены. Остальные стили привязаны к `family/Inter` и `weight/*`.
- **Размеры не привязаны.** Текстовые стили не используют `size/*`, `line-height/*` и `letter-spacing/*`. Отсюда расхождение: у `Heading/H5` 20/24, а пара `size/1xl` + `line-height/1xl` даёт 20/26.
- **`Caption/xxxs-semibold`** использует начертание `SemiBold`, остальные стили — `Semi Bold`.
- **`Right/medium`** имеет offset x8 y8, остальные тени сдвинуты по одной оси.
- **Changelog.**
  - На странице остались записи из чужого шаблона: версии 1.0.0–1.3.6 за 2022–2023, авторы @jeffe и @dhoolahan.
  - Записи расходятся с файлом: в логе `on-primary-muted: neutral/white/solid-250`, в файле `neutral/white/alpha-250`. В логе `bg secondary-disabled: blue-solid-50`, в файле `blue/alpha-50`.
- **`frame/layout-frame-desktop-sm`**: порог автосворачивания 1280 помечен в описании как «предложение, не утверждено».

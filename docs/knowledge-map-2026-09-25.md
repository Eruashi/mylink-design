# Карта знаний DS — 2026-09-25

Пункт 1 плана исследования (`docs/problem.md`). Только чтение Figma и репо, ничего не изменено.

Итог: из того, что ИИ нужно знать о DS, в репо есть только status-файл Sidebar и file key в `docs/problem.md`. В Figma всё есть, но перемешано со старой системой.

## Пробелы

| Область | Figma (факты) | Репо | Пробел |
|---|---|---|---|
| Реестр компонентов | Core kit: 70 страниц — 31 «✅», 9 «✏️» (Chat, Empty state, Table, Table (Катя), Actions panel, Filters, Sorting, Steppers, Event popover), 8 «↳»; служебные Archive, Memes, Roadmap, «Обсудить». Легенды статусов нет | Нет | Полный |
| Таксономия токенов | 🧩 Tokens: 11 коллекций, ~573 переменных. Primitives colors 212 (`blue/solid-350`), Semantic colors 256 (253 алиаса; `<свойство>/<роль>/<вариант>`: bg 88, border 56, icon 62, text 44), Numbers 34 (`Radius/radius-md`=12, `Spacing/spacing-2x-sm`=8), Typography 36, Layout 15, Screens (8 режимов, 1920→360), Content, Sidebar (Auto/Full/Compact/Mobile/Hidden) | Нет; в `skills/design-systems` только «только токены» + Mantine | Полный |
| Текстовые стили, эффекты | 29 текстовых (`Heading/H1…H6`, `Body/{lg,md,sm,xs}-{semibold,medium,regular}`, `Caption/*`), 13 эффектов (`States/focus-state`, `{Above,Below,Right,Left}/{low,medium,high}`), 6 сеток; paint-стилей 0 | Только в `sidebar.md` | Полный |
| Нейминг | Компоненты `Семейство/Часть`; properties с эмодзи, но по-разному (Badge `🎨 Style`, Button `🖇️ Style`, Sidebar без эмодзи) | Нет | Полный; нужно принять правило |
| Гайдлайны | Старый формат (Button, Badge: Check list + MoSCoW) и новый — только Sidebar `22381:36525` (13 разделов) и Layout в Tokens `20429:382` | `templates/component-doc.md`, с Figma не сверен (`radius-md`=8, в Figma 12) | Нет эталона и ссылок |
| Паттерны | Фрагменты: Empty state, тех. работы, Error page, Widgets; Layout подробно описан в описаниях 15 переменных | Общие правила в `team/design-principles.md` | Нет списка принятых паттернов со ссылками |
| Иллюстрации | 3 страницы, 0 компонентов. Пак: line 60, solid 60 + 62 (512×512). Секция «Используем» — 10 фреймов 160×160 с дублями и смешанными RU/EN именами. ~20 мусорных фреймов. Стиль: плоский, голубой/серый, круглая подложка, статус-значок. Style guide нет | Почти ничего | Полный |
| Миграция на Tokens | Badge новый 100%, OLD Badge 0%, Button ~72%, Inputs kit ~13%, Empty state 0%, Sidebar (main) ~67%. Старые переменные не находятся ни в одной подключённой библиотеке | Только Sidebar | Нет сводной картины |

## Наблюдения
1. Правки Sidebar из ветки не в main (`Icon FIlled`, `Dot bage` там ещё есть) → status-файл должен указывать, где правка: ветка или main.
2. Старое всплывает первым: `search_design_system("Badge")` первым отдаёт `OLD Badge` (опубликован, 120 вариантов); два разных «Badge» с разными ключами. Без реестра ИИ берёт не тот компонент.
3. Нейминг непоследователен: пробелы в именах (`button `, `👉 Right  Icon`), `Property 1` у loader, `Pale`/`Pale blue`, `Grey`/`Gray`, `spacing-6x-xll`, `spacing-1,5x-s`.
4. Техдолг Tokens: Blur/Spread дублируются, все семантические цвета с ALL_SCOPES, описания у 13 из 256, режимы «Mode 1»/«Hex», страница Changelog — остаток шаблона Atlassian.
5. Текстовые стили почти не применены: Button — 1122 текстовых слоя без стиля, Badge — 240; заливок без переменной — ~1440 и ~516.
6. Репо противоречит Figma: `radius-md` 8 vs 12; «8pt-сетка» в `skills/graphic-design` vs «кратно 4» и spacing 2/6 в Figma.
7. Дёшево и ценно: таксономию токенов можно выгрузить скриптом за один вызов; реестр компонентов (страница/node, статус, % Tokens); список «Используем» по иллюстрациям (10 вместо 180+). Дорого и требует решений: формат properties, эталон гайдлайна (кандидат — Sidebar).
8. Гипотеза: коллекции Semantic/Primitives/Numbers/Typography в файле иллюстраций — отвязанная копия ранней Tokens и источник старых переменных в Core kit. Не сверено.

## Figma MCP: что работает
- `get_metadata` без nodeId отдаёт неполный список страниц (2 из 70) → страницы брать через `use_figma` (`figma.root.children`).
- `get_metadata` на большой ноде переполняет ответ (гайдлайн Sidebar ~94К символов).
- `use_figma` только на чтение — самый надёжный способ: переменные, стили, `componentPropertyDefinitions`, `boundVariables`. `figma.currentPage` не сбрасывается между вызовами — переключать явно.
- `get_variable_defs` не отличает Tokens от старых переменных (нет коллекции/библиотеки).
- `search_design_system` — 1 запрос за вызов.
- `get_libraries`, `get_screenshot`, `whoami` работают.

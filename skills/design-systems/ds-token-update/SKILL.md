---
name: ds-token-update
description: Use this skill whenever a designer wants to check or migrate the tokens used inside a specific Figma component of the team's Core kit — moving a component from old variables or raw values to 🧩 Tokens, finding primitives used where semantic tokens belong, or proposing missing semantic tokens. Trigger on requests like "check tokens in Counter-badge", "migrate this component to Tokens", "which layers are not on tokens", "обнови токены в компоненте", "переведи на Tokens", "проверь токены в бейдже", or a Figma node link with a request to audit colors, spacing, radius, typography or effects. Default mode is a read-only audit report; applying changes in Figma happens only when the user explicitly asks and names a branch. It does NOT cover designing a new component, reviewing component API or behavior (design-systems), creating the token taxonomy itself, or reviewing code/Storybook.
version: 0.2.0
language: ru
domain: design-systems
status: draft
last_updated: 2026-09-26
depends_on: []
related: [design-systems]
tags: [tokens, figma, migration, audit, core-kit]
mirrors: null
---

# Обновление токенов в компоненте

## Когда использовать
- «Проверь токены в Counter-badge»
- «Переведи Dot-badge на Tokens»
- «Какие слои в Button не на токенах?»
- Ссылка на ноду Core kit + «проверь цвета / отступы / типографику».

Скилл не покрывает: API и поведение компонента, стейты (→ `skills/design-systems`); новые компоненты; ревью кода и Storybook.

## Что делает
Находит в компоненте каждое поле (заливка, обводка, отступ, радиус, текст, эффект), которое не на семантическом токене 🧩 Tokens, и подбирает замену из `ds/tokens.md`. На выходе — отчёт по `templates/review-report.md` с покрытием «проверено N из M». Режим по умолчанию — **аудит, Figma только читается**.

## Контекст и принципы
- Источник правды — `ds/tokens.md` (снимок на дату в шапке) и `ds/decisions.md`. Имена токенов — только оттуда.
- В компоненте — семантика. Примитив в компоненте — находка, даже если цвет верный.
- Нет подходящего семантического токена — **не подставлять примитив молча**, а внести в «Нет в источнике» с предложением имени по схеме `<свойство>/<роль>/<вариант>`. Утверждает лид с командой (`ds/decisions.md`).
- Подбор по смыслу слоя, а не только по hex: `text/*` — тексту, `icon/*` — иконке, `bg/*` — заливке фона, `border/*` — обводке. Совпал hex, но роль не та — уверенность «низкая».
- Не трогать то, что в status-файле компонента в «Решено не трогать».
- Полнота важнее скорости: проверяются все варианты скриптом, а не выборка глазами.
- Режим аудита — только чтение **Figma**. Файлы репо (отчёт, status-файл, `feedback.md`) пишет сессия Claude Code.

## Метод

1. **Контекст.** Найди компонент в `ds/components.md` (node, % Tokens) и `ds/component-props.md`. Ищи имя компонента grep-ом по всему `figma-status/**` и `tasks/` — связанные таски и «Решено не трогать» бывают в чужих status-файлах.
2. **Сбор.** Запусти `ds/_scripts/component-token-audit.js` через `use_figma` (только чтение): сначала `MODE='summary'`, затем все страницы `findings` (`LIMIT` ≈ 25; страницы можно запускать параллельно). Без Figma MCP (claude.ai) — попроси выгрузку или скриншоты и честно снизь покрытие.
3. **Классификация** (класс из скрипта):
   - `tokens-semantic` ✅ — ок;
   - `old-twin` ❌ — в Tokens есть одноимённый токен (скрипт даёт `twin`) → перепривязка 1:1, уверенность высокая;
   - `tokens-primitive` ⚠ и `old-primitive` ❌ — примитив → подбор по роли (шаг 4);
   - `old-orphan` ❌ и `raw` ❌ — подбор по роли и значению (шаг 4);
   - флаг `mismatch` — значение переменной ≠ значению ноды → отдельная строка, решение не угадывать.
4. **Подбор замены** (не для `old-twin`):
   - свойство: `bg/*` — заливке фона, `text/*` — тексту, `icon/*` — иконке, `border/*` — обводке;
   - цветовая роль: та же, что у варианта (Pale blue → `pale`, Gray → `neutral`); точный hex чужой роли хуже близкого значения своей;
   - уверенность: **высокая** — свойство, роль и значение совпали; **средняя** — свойство и роль совпали, значение отличается ≤ 1 шаг палитры, или solid ↔ alpha дают близкий цвет на белом; **низкая** — совпал только hex;
   - state-токены (`-hover`, `-pressed`, `-disabled`) для дефолтного состояния не предлагать;
   - текст без стиля → предлагать текстовый стиль Tokens целиком (`Caption/*`, `Body/*`), поля типографики схлопнуть в одну строку;
   - ничего не подошло → «Нет в источнике» с предложением имени.
5. **Отчёт** по `templates/review-report.md`. Группировка: одна строка на паттерн — одинаковые слой + поле + класс, допускается объединять перепривязки 1:1 по нескольким цветам в одну строку («`bg/{brand,critical}/primary` → одноимённые»). Решение: «исправить» / «отдельная таска» / «принять». Риск контраста (a11y) — одной строкой в «Суть»; подробный разбор — отдельной таской.
6. **Применение** — только если пользователь прямо попросил и назвал ветку Figma:
   - по утверждённому отчёту привязать переменные в ветке;
   - перечитать изменённые ноды и выдать диф «было → стало»;
   - перезапустить скрипт: покрытие должно вырасти до ожидаемого;
   - обновить status-файл по `templates/status-file.md`.
7. **Фидбек.** После реального прогона — запись в `feedback.md` рядом.

## Формат вывода
`templates/review-report.md`, таблица расширена под токены: **# · Где (слой · варианты) · Поле · Сейчас · Предлагаю · Уверенность · Вхождений · Решение**. Строка покрытия обязательна: «Проверено N из N полей, K из K вариантов».

## Анти-паттерны
- Подставить примитив, потому что hex совпал.
- Выбрать токен по hex без роли (`text/*` в заливку фона).
- Проверить один-два варианта глазами и написать «всё на токенах».
- Поставить state-токен (`-hover`) в дефолтное состояние, потому что у него точный hex.
- Разложить текст на 6 строк (size, line-height, …), когда есть готовый текстовый стиль.
- Писать в Figma без явной просьбы и ветки; писать в main.
- Придумать имя токена и выдать его как существующее.

## Примеры
✅ «`Counter-badge` · слой `Number` · fill · `old: Semantic/text/white` (#FFFFFF) → `text/neutral/white` · высокая · 42».
❌ «Заливку заменить на `neutral/gray/solid-900`» — примитив в компоненте.
❌ «Все цвета на токенах» без строки «проверено N из M».

## Связи
- **Predecessor:** `skills/design-systems` — если сначала нужно решить судьбу компонента (оставить, пересобрать).
- **Successor:** `skills/design-systems` — ревью API и стейтов после миграции.
- **Conflicts:** нет.

## Источники
- `ds/tokens.md`, `ds/components.md`, `ds/component-props.md`, `ds/decisions.md`.
- `docs/context-from-chat.md` — описание `ds-token-update`.

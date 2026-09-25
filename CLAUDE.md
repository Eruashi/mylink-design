# CLAUDE.md — правила работы с mylink-design

## Что это
Командная база контекста для ИИ-ассистента дизайнеров: `team/`, `people/`, `skills/`, `mirrors/`, `INDEX.md`, `ROUTER.md`, `SCHEMA.md`, `CONTRIBUTING.md`, `PROJECT_INSTRUCTIONS.md`.
Репозиторий подключён к Claude Projects как Project Knowledge через GitHub.
Владелец сессий: Zhandos (`people/Zhandos/`).

## Перед работой
- Прочитай `docs/context-from-chat.md` и `docs/roadmap.md`: там решения и текущая фаза.
- Формат скиллов — по `SCHEMA.md`. Если он противоречит этому файлу — остановись и спроси.

## Формат общения со мной
По разделу «Формат ответа» в `PROJECT_INSTRUCTIONS.md` — единый источник для claude.ai и Claude Code.

## Как работаем
- Перед правкой: план 3–5 пунктов. Если меняется больше 3 файлов — жди моего ок.
- После правки: список изменённых файлов, по одной строке на файл.
- Не выдумывай содержимое `team/` и `people/`. Нет данных — ставь `TODO:` и спрашивай.
- Скилл меняется только диффом с обоснованием из его `feedback.md`.

## Git
- Мелкие правки — коммит прямо в `main`.
- Правки в `team/`, `PROJECT_INSTRUCTIONS.md`, `SCHEMA.md`, `ROUTER.md` — отдельная ветка + PR, мердж после моего ок.
- Сообщения коммитов на русском: `<область>: <что сделано>`. Пример: `skills/ds-review: режим ревью токенов`.
- Перед пушем покажи список коммитов и жди ок.
- После пуша напомни синхронизировать Project Knowledge в claude.ai.

## Работа с Figma (если используешь Figma MCP)
- В Core kit пишешь только в ветку, никогда в main.
- Сначала читаешь ноды, потом пишешь.
- После записи — самопроверка: перечитай изменённые ноды и выдай диф «было → стало».
- В конце сессии обнови status-файл в `figma-status/`. Ограничения API — в `figma-status/figma-limitations.md`.

## Конвенции
- Status-файлы: `figma-status/<файл>/<компонент>.md` по `templates/status-file.md`.
- Фидбек скиллов: `skills/<name>/feedback.md` по `templates/skill-feedback.md`.
- Идеи, коннекторы, фишки для проверки: `docs/research-backlog.md`.

# Roadmap

## Фаза 0. Сетап
- [ ] Клонировать репозиторий в Claude Code
- [ ] Закоммитить файлы переноса контекста

## Фаза 1. Аудит репозитория
Результат: список проблем по приоритету, затем исправления.
- [ ] Файлы, на которые ссылается `PROJECT_INSTRUCTIONS.md`, но которых нет
- [ ] Папки `skills/<domain>/` из таблицы триггеров: какие существуют, какие пустые
- [ ] Противоречия и дубли между `PROJECT_INSTRUCTIONS.md`, `ROUTER.md`, `SCHEMA.md`, `CONTRIBUTING.md`
- [ ] Пустые и шаблонные файлы в `team/` и `people/`
- [ ] Известный баг: в шаге 1B `PROJECT_INSTRUCTIONS.md` имя указано в угловых скобках (`<Zhandos>`), хотя инструкция говорит вставлять без них
- [ ] Шум в протоколе: блок «Использованные скиллы» в каждом ответе, заметки о пустых файлах
- [ ] Соответствие frontmatter всех `SKILL.md` схеме из `SCHEMA.md`

## Фаза 2. Фундамент
- [ ] Правила формата ответов → `PROJECT_INSTRUCTIONS.md` + разделить `tone-of-voice.md`
- [ ] Шаг «Исполнение в Figma» в `PROJECT_INSTRUCTIONS.md`
- [ ] Реестр компонентов: имя, file key, node ID секции и гайдлайна, статус миграции на Tokens
- [ ] Таксономия токенов: неймнинг, примитив vs семантика, когда создавать новый токен
- [ ] `figma-status/figma-limitations.md`
- [ ] Шаблон `figma-file-structure.md` (страница таски, неймнинг)

## Фаза 3. Первые скиллы на живых задачах
- [ ] `task-intake`: черновик → прогон на реальной таске → `feedback.md` → правка
- [ ] `ds-token-update`: черновик → прогон на одной из отдельных тасок Sidebar (Counter-badge, Dot-badge и др.) → `feedback.md` → правка

## Фаза 4. Ресёрч-бэклог
- [ ] Разбирать `docs/research-backlog.md` по одному пункту за сессию

## Дальше (по мере задач)
`figma-task-setup`, `pre-review`, `ds-review`, `dev-tech-review`, `ds-guideline`, `handoff-notes`, `ds-changelog`, `ds-dev-review`

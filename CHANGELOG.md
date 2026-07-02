# Changelog

Все значимые изменения репозитория. Формат вдохновлён [Keep a Changelog](https://keepachangelog.com), версионирование по semver.

Записи группируются по дате, изменения по типу:

- **Added** — новые файлы / скиллы / возможности.
- **Changed** — изменения в существующих файлах.
- **Deprecated** — будет удалено в будущей версии.
- **Removed** — удалено.
- **Fixed** — исправления.
- **Security** — критичные правки.

---

> ## ▶️ Статус ведения: активно (с Phase 4, 2026-07-02)
>
> Пауза (Phase 1–3) снята записью от 2026-07-02 — `skills/design-systems/SKILL.md`
> закрыл последний доменный скилл Phase 4. Упоминания «запиши в `CHANGELOG.md`»
> в `CONTRIBUTING.md` и `SCHEMA.md` снова действуют.

---

## Шаблон записи

```markdown
## YYYY-MM-DD

### Added
- `path/to/file.md` 1.0.0 — описание.

### Changed
- `path/to/file.md` 1.0.0 → 1.1.0 — что изменилось.

### Fixed
- `path/to/file.md` — описание фикса.
```

---

## 2026-07-02 — Phase 4: design-systems закрыт, журнал скорректирован

### Changed
- `INDEX.md` — статус `skills/design-systems/`: «планируется в Фазе 4» → «готов · v1.0.0».
- `CHANGELOG.md`, `CONTRIBUTING.md`, `SCHEMA.md`, `README.md` — снят статус паузы по
  ведению журнала (пауза действовала «до Phase 4»; Phase 4 открыта записью
  `skills/design-systems/SKILL.md` 1.0.0 от 2026-06-30).
- Запись «2026-06-30 — Phase 4 открыта: design-systems» ниже скорректирована:
  пункты, которые на 2026-06-30 фактически не были выполнены (`evals/test-prompts.md`,
  статус в `INDEX.md`, снятие пауз), помечены как невыполненные на тот момент —
  реально закрыты этой записью.

### Notes
- Пауза по `evals/` формально снята вместе с общей паузой (раздел относится к Phase 4,
  Phase 4 открыта), но `evals/test-prompts.md` **всё ещё не создан** — файла нет в
  репозитории. Нужен от Zhandos; после появления — отдельная запись `Added`.

## 2026-06-30 — Phase 4 открыта: design-systems (запись скорректирована 2026-07-02)

> **Corrected 2026-07-02:** эта запись изначально утверждала больше, чем было
> выполнено на момент 2026-06-30. Пункты ниже, помеченные «не выполнено на
> 2026-06-30», реально закрыты записью от 2026-07-02 выше.

### Added
- `skills/design-systems/SKILL.md` 1.0.0 — доменный скилл дизайн-систем. Командный
  слой поверх Mantine: решение «использовать / расширить / создать локальный /
  эскалировать в общий DS», token discipline, мандат полноты стейтов, cross-platform
  (Mantine web / Flutter), DS-audit на соответствие (токены, off-DS, стейты,
  Mantine-fidelity, консистентность, a11y-gate, локализация). Companion —
  `mirrors/anthropic/design-system` (генерик-метод), не дублируется.
- `evals/test-prompts.md` 1.0.0 — **не выполнено на 2026-06-30.** Файл не был
  создан; см. заметку в записи 2026-07-02.

### Changed
- `INDEX.md` — статус `skills/design-systems/`: «планируется в Фазе 4» → «готов · v1.0.0».
  **Не выполнено на 2026-06-30**, фактически внесено 2026-07-02.
- `CHANGELOG.md`, `CONTRIBUTING.md`, `SCHEMA.md`, `README.md` — снят статус паузы по
  ведению журнала и по `evals/`. **Не выполнено на 2026-06-30**, фактически снято
  2026-07-02 (кроме `evals/`, где пауза снята формально, но файл ещё не создан).

## 2026-06-30 — Backfill: Phase 1 (branding) → Phase 3 + frameworks/ (после открытия Phase 4)

> Consolidated-entry. Скиллы и фреймворки ниже закоммичены в Phase 1–3, но в журнал
> не вносились из-за паузы ведения. Оригинальные даты коммитов не восстанавливаем —
> по договорённости фиксируем одной записью. `product-analytics` и `graphic-design`
> уже внесены записью 2026-05-14 и здесь не повторяются.

### Added

- `skills/branding/SKILL.md` 1.0.0 — доменный скилл брендинга (закрывает Phase 1).
  Удержание экрана «в бренде»: разведение слоёв бренд vs DS, проверка узнаваемости и
  голоса, двойственный контекст AM / рынок. Scope — применение бренда в продуктовом
  интерфейсе, НЕ создание бренда / ребрендинг / нейминг. Известное ограничение:
  визуальный бренд-гайд не оцифрован (`team/brand-guidelines.md` не создан).
- `skills/ux-ui-theory/SKILL.md` 1.0.0 — доменный скилл теории (Phase 2). Диагностика
  «почему экран тяжёл» через четыре семьи (эвристики / законы / восприятие / когнитивное):
  назвать принцип → следствие для пользователя → адрес решения в смежном скилле.
  Ссылается на `frameworks/`, не перепечатывает. Семья «когнитивное» файлом пока не покрыта.
- `skills/ux-research/SKILL.md` 1.0.0 — доменный скилл ресёрча (Phase 3). Самостоятельный
  ad-hoc-ресёрч без выделенного UX-researcher'а: research question → метод → материалы →
  полевая работа → синтез. Связка зеркал `user-research` / `research-synthesis`,
  `frameworks/jtbd` и шаблонов. Командные ограничения: captive-аудитория AM, нет
  регулярного дискавери, A/B ограничен незрелой событийной моделью.
- `skills/ux-writing/SKILL.md` 1.0.0 — доменный скилл UX-копирайтинга (Phase 3). Микрокопи
  под бренд-голос и локализацию (+30% длины): опора на зеркало `ux-copy`, обязательный шаг
  проверки перевода. Для user-facing текстов `team/brand-tone.md` побеждает личный
  tone-of-voice.
- `frameworks/nielsen-heuristics.md` 1.0.0 — 10 эвристик Нильсена (семья «эвристики»).
- `frameworks/gestalt-principles.md` 1.0.0 — принципы восприятия формы (семья «восприятие»).
- `frameworks/laws-of-ux.md` 1.0.0 — законы Фиттса, Хика, Миллера, Якоба (семья «законы»).
- `frameworks/jtbd.md` 1.0.0 — Jobs to Be Done как командная методология ресёрча.

### Fixed

- `team/current-projects.md` — починены WTM-роли в team-слое (реестр ролей по WTM приведён
  в порядок). Для HRM / ATS / Mobile состав ролей по-прежнему неполон — зафиксировано как
  известное ограничение (см. `skills/ux-research`, раздел «Ограничения команды»).

## 2026-05-14 — Phase 1: доменные скиллы (product-analytics, graphic-design)

### Added

- `skills/product-analytics/SKILL.md` 1.0.0 — первый доменный скилл. Выбор и проверка
  метрик под фичу: метод из 6 шагов, фреймворки (HEART, AARRR, North Star, фаннел),
  чек-лист плохой метрики, секция «Ограничения команды» (аналитика на стадии настройки,
  ограничения A/B, отсутствие продуктовых аналитиков). Запись добавлена задним числом —
  скилл закоммичен ранее, в журнал внесён не был.
- `skills/graphic-design/SKILL.md` 1.0.0 — второй доменный скилл. Графдизайн-принципы под
  UI-работу: композиция, визуальная иерархия, layout, типографика, цвет, контраст, ритм.
  Метод из 7 шагов, чек-лист визуальных ошибок, секция «Ограничения команды» (Mantine как
  основа компонентов, своя DS поверх, сдержанный визуал B2B HR Tech, WCAG AA как
  обязательный стандарт). Scope: только продуктовые интерфейсы — не постеры, баннеры,
  иллюстрации.

### Notes

- `evals/test-prompts.md` намеренно не заводился: по `README.md` и `INDEX.md` весь раздел
  `evals/` относится к Phase 4. Пункт 7 в `CONTRIBUTING.md` («тестовый запрос в evals/»)
  противоречит этому плану — расхождение зафиксировано, правка `CONTRIBUTING.md` вынесена
  отдельной задачей.
- Phase 1 закрывается после третьего скилла — `skills/branding/`.

---

## 2026-05-12 — Phase 0.5: Team Refactoring (BREAKING)

> **Breaking change:** структура `/personal/` заменена на двухслойную `/team/` + `/people/<name>/`. Это требует миграции на стороне каждого члена команды — см. `people/README.md`.

### Added

- `team/profile.md` 1.0.0 — командный профиль (организация, индустрия, методологии, инструменты, anti-cred).
- `team/design-principles.md` 1.0.0 — командные принципы и обязательные стандарты.
- `team/brand-tone.md` 1.0.0 — бренд-голос продукта для user-facing текстов.
- `team/current-projects.md` 1.0.0 — переехал из `personal/current-projects.md` без изменений.
- `people/README.md` 1.0.0 — onboarding-инструкция для нового члена команды.
- `people/_template/profile.md` 1.0.0 — болванка личного профиля дизайнера.
- `people/_template/tone-of-voice.md` 1.0.0 — болванка личного стиля письма.
- `people/_template/principles.md` 1.0.0 — болванка личных принципов.

### Changed

- `PROJECT_INSTRUCTIONS.md` 1.0.0 → 2.0.0 — переход на двухслойную загрузку (`/team/` + `/people/<active-user>/`). Введён плейсхолдер `<REPLACE_WITH_YOUR_USERNAME>` для каждого члена команды. Добавлены правила конфликта «личное vs командное» по уровням (стиль / стандарты).
- `ROUTER.md` 1.0.0 → 2.0.0 — новая иерархия приоритетов с двумя верхними слоями (`/people/` и `/team/`). Добавлены case study по конфликтам: личные принципы vs командные, личный tone-of-voice vs бренд-голос.

### Removed

- `personal/profile.md` — заменено на `team/profile.md` + `people/_template/profile.md`.
- `personal/tone-of-voice.md` — заменено на `team/brand-tone.md` + `people/_template/tone-of-voice.md`.
- `personal/design-principles.md` — заменено на `team/design-principles.md` + `people/_template/principles.md`.
- `personal/current-projects.md` — переехал в `team/current-projects.md`.

### Migration notes

Каждый член команды должен:
1. Удалить старый PROJECT_INSTRUCTIONS из Claude Project и вставить новый.
2. Заменить `<REPLACE_WITH_YOUR_USERNAME>` на имя своей папки в `/people/`.
3. Создать `/people/<своё-имя>/` и скопировать туда `/people/_template/*` files.
4. Заполнить личные файлы (минимум — `tone-of-voice.md`).

Подробности — в `people/README.md`.

---

## 2026-05-12 — Фаза 0 завершена (Batch A + B + C)

### Added

**Batch A — контракт и персональный контекст:**

- `SCHEMA.md` 1.0.0 — формат `SKILL.md`, frontmatter, структура тела, длина, стилевые правила, зеркала, чеклист готовности.
- `ROUTER.md` 1.0.0 — логика приоритезации скиллов, таблица триггеров по доменам, разрешение конфликтов, цепочки.
- `personal/profile.md` 1.0.0 — опросник по профилю дизайнера.
- `personal/tone-of-voice.md` 1.0.0 — опросник по стилю с местом под примеры текстов.
- `personal/design-principles.md` 1.0.0 — опросник по принципам, стандартам, спорным позициям.
- `personal/current-projects.md` 1.0.0 — шаблон описания активных проектов.

**Batch B — документация и активный промпт:**

- `README.md` 1.0.0 — onboarding репозитория.
- `CHANGELOG.md` 1.0.0 — журнал изменений (этот файл).
- `CONTRIBUTING.md` 1.0.0 — правила добавления и обновления скиллов.
- `PROJECT_INSTRUCTIONS.md` 1.0.0 — шаблон для Claude Project с активной логикой роутинга.

**Batch C — зеркала Anthropic и шаблоны deliverables:**

- `mirrors/anthropic/design-critique/` — SKILL.md (byte-for-byte snapshot 2026-05-12), ATTRIBUTION.md, EXTENSIONS.md.
- `mirrors/anthropic/accessibility-review/` — то же.
- `mirrors/anthropic/design-handoff/` — то же.
- `mirrors/anthropic/design-system/` — то же.
- `mirrors/anthropic/ux-copy/` — то же.
- `mirrors/anthropic/user-research/` — то же.
- `mirrors/anthropic/research-synthesis/` — то же.
- `templates/research-report.md` 1.0.0
- `templates/design-spec.md` 1.0.0
- `templates/ab-test-plan.md` 1.0.0
- `templates/design-critique-template.md` 1.0.0
- `templates/usability-test-script.md` 1.0.0
- `templates/component-doc.md` 1.0.0

### Changed

- `INDEX.md` 0.1.0 → 1.0.0 — переработан под новую структуру: раздел локальных ресурсов (`/personal/`, `/skills/`, `/mirrors/`, `/templates/`, `/frameworks/`) добавлен перед каталогом внешних. Старая раскладка по 15 категориям перегруппирована в 8 доменов + meta. Внешние скиллы помечены как long-tail fallback.

# SCHEMA.md — Формат скиллов

> Контракт для всех `SKILL.md` в репозитории.
> Любой скилл, не соответствующий схеме, считается `draft`.

---

## 1. Структура файла на диске

Каждый скилл — это директория с `SKILL.md` внутри:

```
skills/<domain>/<skill-name>/
├── SKILL.md            # Required
├── references/         # Optional: глубокие материалы, грузятся по требованию
│   ├── deep-topic-1.md
│   └── deep-topic-2.md
├── templates/          # Optional: шаблоны deliverables этого скилла
│   └── output.md
└── examples/           # Optional: good/bad примеры (выноси, если они большие)
    └── case-study.md
```

Корневой `SKILL.md` грузится **всегда**, когда триггерится скилл. Файлы из `references/`, `templates/`, `examples/` подтягиваются **по требованию** (progressive disclosure из стандарта Anthropic).

---

## 2. YAML frontmatter (обязательный)

```yaml
---
name: skill-name                         # kebab-case, совпадает с именем директории
description: When to use this skill — pushy English text with explicit triggers
version: 1.0.0                           # semver
language: ru                             # ru | en | bilingual
domain: ux-writing                       # см. список ниже
status: stable                           # stable | draft | experimental
last_updated: 2026-05-12
depends_on: []                           # список skill-name, без которых не работает
related: []                              # связанные скиллы (для цепочек)
tags: [microcopy, ctas, errors]
mirrors: null                            # если зеркало внешнего скилла — URL оригинала
---
```

### Описание полей

- **`name`** — kebab-case, совпадает с именем директории.
- **`description`** — **только английский**, «pushy» стиль. Это поле — основной триггер для LLM. Включи: что делает + когда использовать + типовые формулировки запросов. Claude по умолчанию склонна *недотриггерить* скиллы — явно перечисляй ситуации.
- **`version`** — semver. Breaking change в формате/выводе → major; новая секция/возможность → minor; фикс/опечатка → patch.
- **`language`** — на каком языке тело скилла. Frontmatter всегда EN.
- **`domain`** — один из:
  `product-design` · `design-systems` · `ux-writing` · `ux-research` · `product-analytics` · `ux-ui-theory` · `graphic-design` · `branding` · `meta`.
- **`status`** — `stable` (готов), `draft` (черновик), `experimental` (тестируем).
- **`depends_on`** — если скилл требует другого как контекст. Роутер подгрузит зависимости автоматически.
- **`related`** — для цепочек (`user-research` → `research-synthesis` → `design-critique`).
- **`tags`** — для поиска и фильтрации в INDEX.md.
- **`mirrors`** — только в `/mirrors/*`. URL оригинала.

### Пример «pushy» description

❌ Слабый: `Helps with UX writing.`

✅ Сильный:
```
Use this skill whenever the user works on interface copy: button labels, error
messages, empty states, onboarding screens, tooltips, microcopy, CTAs, form
validation, or any UI text. Trigger even when the user just shares a screenshot
with text without explicitly asking for copy help.
```

---

## 3. Структура тела скилла

Порядок и наименование секций — строгие, чтобы LLM умела предсказуемо извлекать.

```markdown
# <Skill Title> — на русском

## Когда использовать
Конкретные триггеры с примерами формулировок:
- «Сделай ревью этого экрана»
- «Помоги с текстом ошибки»

## Что делает
Краткое описание, 2–4 предложения. Что на выходе.

## Контекст и принципы
Базовые знания/принципы, на которых строится метод.

## Метод
Пошаговый процесс. Каждый шаг: что делать, что искать, что выдавать.

1. Шаг
2. Шаг
3. Шаг

## Формат вывода
Что должен выдать LLM. Ссылка на `templates/output.md`, если есть.

## Анти-паттерны
Чего НЕ делать. Конкретные ошибки.

## Примеры
Хороший → плохой. Объёмные — в `examples/`.

## Связи
- **Predecessor:** `<skill-name>` — когда вызвать перед
- **Successor:** `<skill-name>` — когда вызвать после
- **Conflicts:** `<skill-name>` — когда не комбинируется

## Источники
- Книги, статьи, авторитетные источники, ссылки
```

---

## 4. Длина

- `SKILL.md` — **до 300 строк**, максимум 500.
- Превышаешь — выноси в `references/`, оставляя в SKILL.md только указатель на конкретный файл с пояснением, когда его читать.

Пример:
```markdown
## Метод
Базовый процесс описан ниже. Для специфики мобильных платформ —
читай `references/mobile-specifics.md`.
```

---

## 5. Стилевые правила

- Frontmatter — **только EN**.
- Тело — **RU**, но индустриальные термины (`affordance`, `cognitive load`, `JTBD`, `North Star`, `tap target`, `empty state`, `microcopy`) остаются на EN.
- Код, имена переменных, имена секций в шаблонах — EN.
- Кавычки: `«ёлочками»` для русского текста, `"прямые"` для кода.
- Единицы: `8pt`, `16px`, `4.5:1` (контраст), `60 сек`.

---

## 6. Зеркала (`/mirrors/`)

Скиллы из внешних источников (Anthropic и т.п.):

1. Сохраняй оригинальную структуру тела один-в-один.
2. В директорию скилла добавляй файл `ATTRIBUTION.md`:
   - Ссылка на оригинал.
   - Лицензия оригинала.
   - Дата снапшота.
   - Хэш коммита (если есть).
3. В frontmatter — `mirrors: <url>`.
4. **Твои дополнения** — в отдельном файле `EXTENSIONS.md` рядом с `SKILL.md`. Не редактируй оригинал — это сломает diff при следующем обновлении.

---

## 7. Версионирование

- Bumping версии — при любом изменении контента, не только при breaking change.
- В `CHANGELOG.md` (на уровне репозитория) — запись формата:
  ```
  ## 2026-05-12
  - `skills/ux-writing/microcopy` 1.0.0 → 1.1.0: добавлена секция про error states
  ```
- Зеркала не версионируются твоим semver — у них дата снапшота из `ATTRIBUTION.md`.

---

## 8. Чеклист готовности скилла

Перед коммитом в `main`:

- [ ] Frontmatter заполнен полностью.
- [ ] `description` на английском, «pushy», явно перечислены триггеры.
- [ ] Тело покрывает все обязательные секции: когда, что, контекст, метод, формат, анти-паттерны, примеры, связи, источники.
- [ ] Связи (`Predecessor` / `Successor` / `Conflicts`) указаны.
- [ ] `<300` строк, либо большие куски вынесены в `references/`.
- [ ] Если зеркало — есть `ATTRIBUTION.md`, оригинал не модифицирован.
- [ ] Запись в `CHANGELOG.md`.
- [ ] Минимум один тестовый запрос проверен (см. `/evals/test-prompts.md`).

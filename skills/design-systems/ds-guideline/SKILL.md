---
name: ds-guideline
description: Use this skill whenever a designer needs a guideline (documentation) for a specific component of the team's Core kit — writing a new guideline, rewriting an old checklist/MoSCoW one into the current format, or filling missing sections. Trigger on requests like "write a guideline for Modal header", "document this component", "make a guideline like Sidebar's", "напиши гайдлайн для компонента", "задокументируй компонент", "гайдлайн по формату Sidebar", or a Core kit node link with a request to describe anatomy, sizes, properties, states and do/don't. Output is a markdown guideline in the repo (ds/guidelines/); Figma is read-only unless the user explicitly asks to write and names a branch. It does NOT cover designing or changing the component, token migration (ds-token-update), or API decisions (design-systems).
version: 0.1.0
language: ru
domain: design-systems
status: draft
last_updated: 2026-09-26
depends_on: []
related: [design-systems, ds-token-update]
tags: [guideline, documentation, component, figma, core-kit]
mirrors: null
---

# Гайдлайн компонента

## Когда использовать
- «Напиши гайдлайн для Modal header»
- «Переведи гайдлайн Button из чек-листа в новый формат»
- «Задокументируй компонент по формату Sidebar»

Скилл не покрывает: изменение самого компонента, миграцию токенов (→ `ds-token-update`), решения по API (→ `skills/design-systems`).

## Что делает
Собирает гайдлайн по `templates/component-guideline.md` (13 секций по эталону Sidebar `22381:36525`) из фактов компонента в Figma и данных `ds/`. Факты (анатомия, размеры, свойства, состояния, токены) — только из источников; правила использования — формулирует сам и помечает `TODO: проверить` там, где это не следует из данных. Результат — `ds/guidelines/<компонент>.md`.

## Контекст и принципы
- **Факт или предположение — видно всегда.** Всё, что не прочитано из Figma или `ds/`, помечено `TODO: проверить` или «уточнить у [кого]». Выдуманное правило хуже пустой секции.
- Имена компонентов, свойств, значений — латиницей как в Figma; токены — полным именем из `ds/tokens.md` со значением.
- Не на токене — так и пишем: «нет токена» (не подставляем похожий).
- Секция не применима — «Не применимо: [почему]», номер не сдвигаем. Слоты 08–11 переименовываются под компонент.
- Тон — как в эталоне: короткие утверждения, прямые запреты, числа без px.
- Figma — только чтение.

## Метод
1. **Контекст.** Найди компонент в `ds/components.md` (node, страница, статус, % Tokens, старый гайдлайн) и `ds/component-props.md`. Grep имени по `figma-status/**`, `tasks/`, `ds/decisions.md`. Есть старый гайдлайн (чек-лист, MoSCoW) — прочитай его как источник требований.
2. **Факты из Figma** (`use_figma`, только чтение):
   - структура слоёв типичного варианта → анатомия (02) и семейство (03: вложенные инстансы и их компоненты);
   - размеры, паддинги, зазоры, радиусы по размерам → 04; токены — прогоном `ds/_scripts/component-token-audit.js` (`MODE='summary'` + findings);
   - `componentPropertyDefinitions` → 05; оси State и др. → матрица 06; отсутствующие сочетания — «не существует»;
   - где компонент используется (инстансы на других страницах Core kit) → «Когда использовать» (01);
   - скриншот типичного варианта — для понимания, в гайдлайн не вставляется.
3. **Сборка** по шаблону. Для каждой секции: сначала факты, затем правила. Правило без источника → `TODO: проверить`.
4. **Проверка перед выдачей:**
   - каждое имя свойства и значения есть в `ds/component-props.md`;
   - каждый токен есть в `ds/tokens.md`;
   - число вариантов в «Итого N» совпадает с Figma;
   - строка покрытия: «Секций заполнено N из 13, из них на фактах K; TODO: M».
5. **Выдача:** файл `ds/guidelines/<компонент>.md` + короткий ответ по «Формату ответа»: вывод, список TODO для пользователя (до 5 главных), следующий шаг.
6. **Фидбек.** Правки пользователя по гайдлайну → запись в `feedback.md` рядом.

## Формат вывода
Файл по `templates/component-guideline.md`. В начале файла одна строка-мета: `Источник: Core kit `<node>` (main), <дата>. Скилл ds-guideline <версия>. Черновик — перенести в Figma после ревью.` В чат — только сводка и TODO.

## Анти-паттерны
- Придумать сценарии «когда использовать» и выдать как решение команды.
- Описать свойство, которого нет в компоненте, или пропустить существующее.
- Голые числа и hex, когда есть токен; токен, которого нет в `ds/tokens.md`.
- Скопировать секции 08–11 Sidebar как есть, не переименовав под компонент.
- Писать гайдлайн в Figma без явной просьбы и ветки.

## Примеры
✅ «Высота — 56 (`Spacing/…` нет токена высоты). Паддинг по горизонтали — `Spacing/spacing-6x-xll` (24).»
✅ «Когда не использовать: заголовок страницы — это `Header`. `TODO: проверить` — вывод по инстансам, правила в команде нет.»
❌ «Используйте Modal header во всех модалках» — не проверено, правила нет.

## Связи
- **Predecessor:** `ds-token-update` — если компонент не на Tokens, сначала аудит, иначе гайдлайн задокументирует старые переменные.
- **Successor:** `skills/design-systems` — ревью API по итогам гайдлайна.
- **Conflicts:** нет.

## Источники
- `templates/component-guideline.md`, эталон Sidebar `22381:36525`, Layout-гайд в Tokens `20429:382`.
- `ds/components.md`, `ds/component-props.md`, `ds/tokens.md`, `ds/decisions.md`.

<!--
Template: Component Documentation
Когда использовать: добавление нового компонента в дизайн-систему или обновление документации существующего.
Дополняющие скиллы: mirrors/anthropic/design-system, mirrors/anthropic/design-handoff, mirrors/anthropic/accessibility-review.
Цель: один источник правды для дизайнеров, разработчиков, QA и контент-команды.
-->

# Component: [Название компонента]

| Поле | Значение |
|---|---|
| **Статус** | _(experimental / beta / stable / deprecated)_ |
| **Версия** | 1.0.0 |
| **Категория** | _(form / navigation / feedback / data display / overlay)_ |
| **Дизайн-токены** | _(использует / не использует — список ниже)_ |
| **Платформа** | _(web / iOS / Android / cross-platform)_ |
| **Связи** | _(скилл design-system, родительские компоненты)_ |
| **Ссылка на Figma** | |
| **Ссылка на код** | |
| **Storybook** | |
| **Maintainer** | |
| **Last updated** | YYYY-MM-DD |

---

## Описание

> 2–4 предложения: что это, что решает, зачем добавлен в DS.

-

---

## Когда использовать

-

## Когда НЕ использовать

> Часто важнее, чем «когда использовать». Указывай альтернативы.

- Не используй для _(сценарий)_ — используй _(альтернативный компонент)_

---

## Анатомия

> Перечисли все составные части компонента. Хорошо сопровождать схемой.

| # | Часть | Описание | Обязательная |
|---|---|---|---|
| 1 | _(например, label)_ | _(назначение)_ | да / нет |
| 2 | | | |

---

## Variants

| Variant | Когда использовать | Визуальное отличие |
|---|---|---|
| _(primary)_ | _(основные действия)_ | _(filled)_ |
| _(secondary)_ | _(вспомогательные)_ | _(outline)_ |
| _(tertiary / ghost)_ | _(низкоприоритетные)_ | _(text)_ |

---

## Sizes

| Size | Token | Когда |
|---|---|---|
| sm | _(размеры)_ | _(контекст)_ |
| md | | _(default)_ |
| lg | | |

---

## Props / API

| Prop | Тип | Default | Required | Описание |
|---|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | no | |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | no | |
| `disabled` | `boolean` | `false` | no | |
| `loading` | `boolean` | `false` | no | |
| `icon` | `ReactNode` | — | no | |
| `onClick` | `() => void` | — | yes | |

---

## States

| State | Условие | Визуальное поведение | Интерактивность |
|---|---|---|---|
| Default | Базовый | _(описание)_ | Полная |
| Hover | Курсор над элементом | _(описание)_ | Полная |
| Active / Pressed | Момент клика / тапа | _(описание)_ | Полная |
| Focus | Получен keyboard focus | _(описание + visible outline)_ | Полная |
| Disabled | `disabled=true` | _(описание)_ | Нет |
| Loading | `loading=true` | _(спиннер, текст скрыт)_ | Нет |
| Error _(если применимо)_ | Ошибка валидации | _(border + сообщение)_ | Полная |

---

## Tokens

> Только токены, без хардкода. Если магическое число — это запах.

| Свойство | Token | Значение |
|---|---|---|
| Padding (md) | `space-component-md-padding-x` / `space-component-md-padding-y` | 16 / 10 |
| Border radius | `radius-md` | 8 |
| Font | `font-body-md-medium` | 14 / 500 |
| Background (primary, default) | `color-primary-default` | #... |
| Background (primary, hover) | `color-primary-hover` | #... |
| Color text | `color-on-primary` | #... |

---

## Accessibility

### Role / Semantics

- **HTML element:** _(button / a / div с role)_
- **ARIA role:** _(если кастомный, например `role="button"`)_
- **ARIA-attributes:** _(aria-label, aria-disabled, aria-busy для loading)_

### Keyboard

| Клавиша | Поведение |
|---|---|
| Tab | Получает focus в порядке источника |
| Shift+Tab | Возвращает focus назад |
| Enter / Space | Триггерит `onClick` |
| Escape | _(если применимо — например, закрытие модалки)_ |

### Screen reader

- **Announced as:** _(пример: «Buy now, button»)_
- **State announcements:** _(disabled, loading — что произносится)_

### Visual

- [ ] Контраст текста ≥ 4.5:1 (normal) или ≥ 3:1 (large)
- [ ] Контраст UI элемента ≥ 3:1 для границы / focus ring
- [ ] Touch target ≥ 44pt на mobile
- [ ] Информация не передаётся ТОЛЬКО цветом
- [ ] Состояние focus визуально различимо

---

## Адаптивность

| Брейкпоинт | Поведение |
|---|---|
| Desktop ≥ 1024px | _(описание)_ |
| Tablet 768–1023px | _(описание)_ |
| Mobile < 768px | _(описание, увеличенный touch target и т.п.)_ |

---

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|---|---|
| _(правильное использование)_ | _(антипаттерн)_ |
| _(правильное использование)_ | _(антипаттерн)_ |

---

## Контент / UX writing

- **Длина текста:** _(рекомендация в символах)_
- **Tone:** _(action verb, без точки в конце, не sentence case или иное)_
- **Локализация:** _(учитывай +30% длины при переводе)_
- **Truncation:** _(как себя ведёт компонент при overflow)_

---

## Code example

```tsx
import { Button } from '@/components/Button';

<Button variant="primary" size="md" onClick={handleClick}>
  Continue
</Button>
```

### С иконкой

```tsx
<Button variant="secondary" icon={<ArrowRight />}>
  Next step
</Button>
```

### Loading state

```tsx
<Button variant="primary" loading>
  Saving...
</Button>
```

---

## Migrating from older versions

_(если компонент обновлён — описание breaking changes и пути миграции)_

| Старая версия | Новая версия | Что делать |
|---|---|---|
| | | |

---

## Connected components

> Компоненты, которые часто используются вместе.

- _(IconButton — для случаев без текста)_
- _(ButtonGroup — для группы из 2+ кнопок)_

---

## Changelog компонента

### 1.0.0 — YYYY-MM-DD

- Initial release

---

## Открытые вопросы

> Что ещё нерешено, на что ждём обратной связи.

-

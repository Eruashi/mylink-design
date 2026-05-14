# Designer Skills Index

> Каталог ресурсов репозитория. Локальные — приоритет, внешние — fallback.
> Все raw-ссылки готовы к загрузке через `web_fetch`.

---

## Навигация

- [Локальные ресурсы](#локальные-ресурсы) — `personal/`, `skills/`, `mirrors/`, `templates/`, `frameworks/`
- [Внешние скиллы по доменам](#внешние-скиллы-по-доменам) — long-tail каталог, fallback
- [Платформенные гайдлайны](#платформенные-гайдлайны)
- [Кросс-cutting](#кросс-cutting) — анимация, графика, инфографика
- [Стратегия и маркетинг](#стратегия-и-маркетинг)
- [Frontend и код](#frontend-и-код)
- [Мета и инструменты](#мета-и-инструменты)
- [Быстрая установка коллекций](#быстрая-установка-коллекций)

---

## Локальные ресурсы

**База:** `https://raw.githubusercontent.com/Eruashi/mylink-design/main/`

### `/team/` — командный контекст (грузится первым)

| Файл | Назначение |
|---|---|
| `team/profile.md` | Кто мы как команда: компания, индустрия, методологии, инструменты |
| `team/design-principles.md` | Командные принципы и обязательные стандарты |
| `team/current-projects.md` | Каталог активных проектов команды |
| `team/brand-tone.md` | Бренд-голос продукта (для user-facing текстов) |

### `/people/` — личный контекст каждого дизайнера

| Файл | Назначение |
|---|---|
| `people/README.md` | Onboarding-инструкция для нового члена команды |
| `people/_template/profile.md` | Болванка: личный профиль |
| `people/_template/tone-of-voice.md` | Болванка: личный стиль письма |
| `people/_template/principles.md` | Болванка: личные принципы |
| `people/<имя>/*` | Файлы конкретного дизайнера |

### `/skills/` — собственные скиллы по 8 доменам

| Домен | Путь | Статус |
|---|---|---|
| Продуктовый дизайн | `skills/product-design/` | планируется в Фазе 4 |
| Дизайн-системы | `skills/design-systems/` | планируется в Фазе 4 |
| UX writing | `skills/ux-writing/` | планируется в Фазе 3 |
| UX исследования | `skills/ux-research/` | планируется в Фазе 3 |
| Продуктовая аналитика | `skills/product-analytics/` | готов · v1.0.0 |
| UX/UI теория | `skills/ux-ui-theory/` | планируется в Фазе 2 |
| Графический дизайн | `skills/graphic-design/` | готов · v1.0.0 |
| Брендинг | `skills/branding/` | планируется в Фазе 1 |

### `/mirrors/anthropic/` — зеркала проверенных скиллов

| Скилл | Путь |
|---|---|
| Design Critique | `mirrors/anthropic/design-critique/SKILL.md` |
| Accessibility Review (WCAG 2.1 AA) | `mirrors/anthropic/accessibility-review/SKILL.md` |
| Design Handoff | `mirrors/anthropic/design-handoff/SKILL.md` |
| Design System | `mirrors/anthropic/design-system/SKILL.md` |
| UX Copy | `mirrors/anthropic/ux-copy/SKILL.md` |
| User Research | `mirrors/anthropic/user-research/SKILL.md` |
| Research Synthesis | `mirrors/anthropic/research-synthesis/SKILL.md` |

Все с `ATTRIBUTION.md` и опциональным `EXTENSIONS.md` рядом.

### `/templates/` — шаблоны deliverables

| Шаблон | Назначение |
|---|---|
| `templates/research-report.md` | Отчёт по UX-исследованию |
| `templates/design-spec.md` | Спецификация дизайна для разработки |
| `templates/ab-test-plan.md` | План A/B-теста |
| `templates/design-critique-template.md` | Структурированное ревью экрана / макета |
| `templates/usability-test-script.md` | Сценарий модерируемого юзабилити-теста |
| `templates/component-doc.md` | Документация компонента дизайн-системы |

### `/frameworks/` — быстрые справочники (cheatsheets)

Будут добавлены в Фазах 1–2. Планируемый минимум: Nielsen 10 heuristics, JTBD, HEART, AARRR, Gestalt principles, Fitts / Hick's law, WCAG 2.2 checklist.

### `/evals/test-prompts.md`

Тестовые запросы для проверки роутинга — добавлено в Фазе 4.

---

## Внешние скиллы по доменам

> Это **fallback**. Локальные `skills/` и `mirrors/` имеют приоритет.

### 🎨 Дизайн-системы и UI

| Скилл | Raw-ссылка |
|---|---|
| Tailwind Design System v4 | `https://raw.githubusercontent.com/wshobson/agents/main/plugins/frontend-mobile-development/skills/tailwind-design-system/SKILL.md` |
| UI Design System (tokens, 8pt grid) | `https://raw.githubusercontent.com/davila7/claude-code-templates/refs/heads/main/cli-tool/components/skills/creative-design/ui-design-system/SKILL.md` |
| Refactoring UI (spacing, color, type) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/refactoring-ui/SKILL.md` |
| Frontend Design — anti-slop | `https://raw.githubusercontent.com/anthropics/skills/main/skills/frontend-design/SKILL.md` |
| Top Design (Awwwards-level) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/top-design/SKILL.md` |
| Web Typography | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/web-typography/SKILL.md` |

### ✍️ UX Writing и контент

| Скилл | Raw-ссылка |
|---|---|
| UX Writing (4 standards, benchmarks, a11y) | `https://raw.githubusercontent.com/content-designer/ux-writing-skill/refs/heads/main/SKILL.md` |
| Copywriting — конверсионные тексты | `https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/copywriting/SKILL.md` |
| StoryBrand Messaging | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/storybrand-messaging/SKILL.md` |
| Made to Stick — SUCCESs framework | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/made-to-stick/SKILL.md` |

### 👤 UX Research

| Скилл | Raw-ссылка |
|---|---|
| UX Researcher (agent) | `https://raw.githubusercontent.com/VoltAgent/awesome-claude-code-subagents/refs/heads/main/categories/08-business-product/ux-researcher.md` |
| Mom Test — интервью без bias | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/mom-test/SKILL.md` |
| Continuous Discovery (Teresa Torres) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/continuous-discovery/SKILL.md` |
| Lean UX | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/lean-ux/SKILL.md` |

### 🧠 UX/UI теория и психология поведения

| Скилл | Raw-ссылка |
|---|---|
| UX Heuristics (Nielsen + Krug) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/ux-heuristics/SKILL.md` |
| Design of Everyday Things (Norman) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/design-everyday-things/SKILL.md` |
| Marketing Psychology — 50+ mental models | `https://raw.githubusercontent.com/coreyhaines31/marketingskills/main/skills/marketing-psychology/SKILL.md` |
| Hooked UX — Hook Model | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/hooked-ux/SKILL.md` |
| Improve Retention — BJ Fogg B=MAP | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/improve-retention/SKILL.md` |
| Influence Psychology — Cialdini 7 principles | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/influence-psychology/SKILL.md` |
| Drive Motivation — AMP (Daniel Pink) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/drive-motivation/SKILL.md` |
| Jobs to Be Done (Clayton Christensen) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/jobs-to-be-done/SKILL.md` |

### 🎭 Брендинг

| Скилл | Raw-ссылка |
|---|---|
| Brandkit — premium brand identity | `https://raw.githubusercontent.com/Leonxlnx/taste-skill/refs/heads/main/skills/brandkit/SKILL.md` |
| Obviously Awesome — positioning | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/obviously-awesome/SKILL.md` |

### 🔍 Ревью, аудит, a11y, handoff (meta)

| Скилл | Raw-ссылка |
|---|---|
| Design Critique (Anthropic) | `https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/refs/heads/main/design/skills/design-critique/SKILL.md` |
| Accessibility Review WCAG 2.1 AA (Anthropic) | `https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/refs/heads/main/design/skills/accessibility-review/SKILL.md` |
| Design Handoff (Anthropic) | `https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/refs/heads/main/design/skills/design-handoff/SKILL.md` |
| Design System (Anthropic) | `https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/refs/heads/main/design/skills/design-system/SKILL.md` |
| UX Copy (Anthropic) | `https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/refs/heads/main/design/skills/ux-copy/SKILL.md` |
| User Research (Anthropic) | `https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/refs/heads/main/design/skills/user-research/SKILL.md` |
| Research Synthesis (Anthropic) | `https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/refs/heads/main/design/skills/research-synthesis/SKILL.md` |
| Web Design Reviewer (screenshots + fixes) | `https://raw.githubusercontent.com/github/awesome-copilot/refs/heads/main/skills/web-design-reviewer/SKILL.md` |
| Web Interface Guidelines (Vercel, 100+ rules) | `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md` |

---

## Платформенные гайдлайны

| Скилл | Raw-ссылка |
|---|---|
| iOS Design Guidelines (HIG) | `https://skills-rank.com/skill/ehmo/platform-design-skills/ios-design-guidelines` |
| iPadOS — Split View, Stage Manager, Pencil | `https://skills-rank.com/skill/ehmo/platform-design-skills/ipados-design-guidelines` |
| macOS — Menu bar, keyboard, windows | `https://skills-rank.com/skill/ehmo/platform-design-skills/macos-design-guidelines` |
| Android — Material Design 3, Material You | `https://skills-rank.com/skill/ehmo/platform-design-skills/android-design-guidelines` |
| iOS HIG (wondelai) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/ios-hig-design/SKILL.md` |

> Вся коллекция ehmo: `npx skills add ehmo/platform-design-skills`

---

## Кросс-cutting

### ✨ Анимация и взаимодействие

| Скилл | Raw-ссылка |
|---|---|
| Interaction Design (Framer Motion) | `https://raw.githubusercontent.com/wshobson/agents/main/plugins/ui-design/skills/interaction-design/SKILL.md` |
| Microinteractions | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/microinteractions/SKILL.md` |
| Three.js Animation | `https://raw.githubusercontent.com/CloudAI-X/threejs-skills/main/skills/threejs-animation/SKILL.md` |
| Taste-Skill — High-Agency Frontend | `https://raw.githubusercontent.com/Leonxlnx/taste-skill/refs/heads/main/skills/taste-skill/SKILL.md` |
| Redesign Existing Projects | `https://raw.githubusercontent.com/Leonxlnx/taste-skill/refs/heads/main/skills/redesign-skill/SKILL.md` |

### 📊 Графика и инфографика

| Скилл | Raw-ссылка |
|---|---|
| Infographic Creator — AntV, 50+ шаблонов | `https://raw.githubusercontent.com/antvis/chart-visualization-skills/refs/heads/master/skills/infographic-creator/SKILL.md` |
| CSS Border Gradient | `https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/css-border-gradient/SKILL.md` |

---

## Стратегия и маркетинг

### 🚀 Продукт и стратегия

| Скилл | Raw-ссылка |
|---|---|
| Inspired Product — empowered teams | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/inspired-product/SKILL.md` |
| Design Sprint — 5-day GV process | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/design-sprint/SKILL.md` |
| Lean Startup — Build-Measure-Learn | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/lean-startup/SKILL.md` |
| CRO Methodology — scientific CRO | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/cro-methodology/SKILL.md` |
| Crossing the Chasm (Geoffrey Moore) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/crossing-the-chasm/SKILL.md` |
| Blue Ocean Strategy — ERRC | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/blue-ocean-strategy/SKILL.md` |
| Traction / EOS (Gino Wickman) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/traction-eos/SKILL.md` |
| Pricing Page — высококонверсионная | `https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/pricing-page/SKILL.md` |

### 📣 Маркетинг и продажи

| Скилл | Raw-ссылка |
|---|---|
| Scorecard Marketing — quiz funnels | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/scorecard-marketing/SKILL.md` |
| Contagious — STEPPS virality | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/contagious/SKILL.md` |
| One-Page Marketing Plan | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/one-page-marketing/SKILL.md` |
| $100M Offers — Grand Slam Offer | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/hundred-million-offers/SKILL.md` |
| Predictable Revenue — Cold Calling 2.0 | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/predictable-revenue/SKILL.md` |
| Negotiation — Chris Voss / FBI tactics | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/negotiation/SKILL.md` |
| Competitive Analyst (agent) | `https://raw.githubusercontent.com/VoltAgent/awesome-claude-code-subagents/refs/heads/main/categories/10-research-analysis/competitive-analyst.md` |

---

## Frontend и код

> Для случаев, когда дизайнерская задача граничит с реализацией.

| Скилл | Raw-ссылка |
|---|---|
| Clean Code (Uncle Bob) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/clean-code/SKILL.md` |
| Clean Architecture — Dependency Rule | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/clean-architecture/SKILL.md` |
| System Design | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/system-design/SKILL.md` |
| High Performance Browser Networking | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/high-perf-browser/SKILL.md` |
| Refactoring Patterns (Martin Fowler) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/refactoring-patterns/SKILL.md` |
| Domain-Driven Design (Eric Evans) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/domain-driven-design/SKILL.md` |
| Pragmatic Programmer | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/pragmatic-programmer/SKILL.md` |
| Software Design Philosophy (Ousterhout) | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/software-design-philosophy/SKILL.md` |
| Release It! — circuit breakers, bulkheads | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/release-it/SKILL.md` |
| DDIA — data-intensive applications | `https://raw.githubusercontent.com/NeverSight/skills_feed/refs/heads/main/data/skills-md/wondelai/skills/ddia-systems/SKILL.md` |

---

## Мета и инструменты

| Скилл | Raw-ссылка |
|---|---|
| Skill Creator — создание своих скиллов | `https://raw.githubusercontent.com/ComposioHQ/awesome-claude-skills/refs/heads/master/skill-creator/SKILL.md` |
| Find Skills — поиск скиллов на skills.sh | `https://raw.githubusercontent.com/vercel-labs/skills/main/skills/find-skills/SKILL.md` |

---

## Быстрая установка коллекций

```bash
# Все wondelai скиллы (38 штук)
npx skills add wondelai/skills

# Платформенный дизайн (iOS, Android, macOS, visionOS и др.)
npx skills add ehmo/platform-design-skills

# Taste-skill пак (9 вариантов frontend)
npx skills add Leonxlnx/taste-skill

# Маркетинг скиллы
npx skills add coreyhaines31/marketingskills

# AntV визуализация
npx skills add antvis/chart-visualization-skills

# Anthropic design plugin (Claude Code / Cowork)
claude plugin install design@knowledge-work-plugins
```

---

*Локальных ресурсов: 4 team + 1 README/template на каждого + 7 зеркал + 6 шаблонов.  
70+ внешних скиллов как fallback.  
Обновлено: 2026-05-12.*

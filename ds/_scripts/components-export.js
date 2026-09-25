/*
 * components-export.js — выгрузка реестра компонентов 💠 Core kit (ds/components.md)
 *
 * Назначение: для каждой страницы собрать компоненты (COMPONENT_SET и одиночные COMPONENT),
 *   варианты, component properties, статус публикации, % привязки к переменным 🧩 Tokens,
 *   гайдлайн-фреймы и формат гайдлайна.
 * Файл: 💠 Core kit, file key PzDKr0egYAQaq9oI0dbJJP (main). Библиотека токенов: 🧩 Tokens (5m462BWVr7bof44q3U3bjN).
 * READ-ONLY: скрипт ничего не меняет в файле — только чтение (getNodeByIdAsync, findAll*, getPublishStatusAsync,
 *   getVariableByIdAsync, getVariableCollectionByIdAsync, teamLibrary.getAvailableLibraryVariableCollectionsAsync).
 *   setCurrentPageAsync — только переключение контекста страницы, не запись.
 *
 * Как запускать: Figma MCP → use_figma(fileKey="PzDKr0egYAQaq9oI0dbJJP", code=<этот файл>),
 *   предварительно подставив PAGE_IDS. Список страниц: `return figma.root.children.map(p=>p.id+'|'+p.name)`
 *   (get_metadata без nodeId показывает не все страницы).
 * Параметры батча:
 *   PAGE_IDS      — 3–5 страниц за вызов (страницы грузятся лениво, большие страницы медленные);
 *                   несколько вызовов можно слать параллельно.
 *   CALC_TOKENS   — считать ли % Tokens (дорого на больших наборах).
 *   MAX_NODES     — лимит обходимых нод на страницу для подсчёта токенов; при превышении — флаг partial.
 *   MAX_COMPS     — сколько компонентов страницы отдавать подробно (остальные — только счётчик).
 *   MAX_SIMPLE    — сколько имён «простых» компонентов (одиночный COMPONENT без properties) отдавать.
 * Выход: компактный JSON [{p,id,nc,c:[{n,id,t,v,pr,ps,tp,tn,oc}],sc,s,g:[{n,id,f}],partial}]
 *   t: S — COMPONENT_SET, C — одиночный COMPONENT; v — число вариантов; pr — properties «имя:тип» (V/B/T/I/S);
 *   ps — publish status (C=CURRENT, U=UNPUBLISHED, C…=CHANGED);
 *   tp — краски [Tokens, old, без переменной]: видимые SOLID/GRADIENT fills+strokes;
 *   tn — числа [Tokens, old, без переменной]: padding×4 и itemSpacing (>0) у auto-layout, cornerRadius (>0),
 *        strokeWeight (если есть stroke), у TEXT — одно поле типографики (fontSize/fontFamily/lineHeight…);
 *   oc — старые коллекции и число привязок; «(local)» — коллекция не из библиотеки;
 *   Tokens = коллекция remote и её key совпадает с коллекцией библиотеки «🧩 Tokens».
 *   Обходятся варианты и их потомки; сам COMPONENT_SET и вложенные INSTANCE (иконки и т.п.) не считаются.
 *   g — гайдлайн-фреймы: f = new<N> (N пронумерованных секций «NN — …»), old-checklist, old-MoSCoW, other.
 */
const PAGE_IDS = ['8253:5009'];
const CALC_TOKENS = true;
const MAX_NODES = 40000;
const MAX_COMPS = 40;
const MAX_SIMPLE = 15;

const TOKENS_LIB = '🧩 Tokens';
const libCols = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();
const TOK = new Set(libCols.filter(c => c.libraryName === TOKENS_LIB).map(c => c.key));
const vCache = {};
async function cls(id) {
  if (vCache[id]) return vCache[id];
  let r = { k: 'O', c: '?' };
  try {
    const v = await figma.variables.getVariableByIdAsync(id);
    if (v) {
      const col = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId);
      if (col) r = { k: (col.remote && TOK.has(col.key)) ? 'T' : 'O', c: col.name + (col.remote ? '' : '(local)') };
      else r = { k: 'O', c: 'no-collection' };
    } else r = { k: 'O', c: 'missing-var' };
  } catch (e) { r = { k: 'O', c: 'err' }; }
  return (vCache[id] = r);
}
const RE_G = /guid|гайд|check ?list|требован/i;
const NUMK = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'itemSpacing'];
const RAD = ['topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius'];
const TXT = ['fontSize', 'fontFamily', 'fontWeight', 'fontStyle', 'lineHeight', 'letterSpacing'];

const result = [];
for (const PID of PAGE_IDS) {
  const page = await figma.getNodeByIdAsync(PID);
  await figma.setCurrentPageAsync(page);
  const all = page.findAllWithCriteria({ types: ['COMPONENT_SET', 'COMPONENT'] })
    .filter(n => n.type === 'COMPONENT_SET' || n.parent.type !== 'COMPONENT_SET');
  let budget = MAX_NODES, partial = false;
  const c = [], simple = [];
  // одиночные COMPONENT без properties (иконки, ассеты) — только имя|id, без подсчёта
  const rich = all.filter(n => { if (n.type === 'COMPONENT_SET') return true; try { return Object.keys(n.componentPropertyDefinitions).length > 0; } catch (e) { return true; } });
  for (const n of all) if (!rich.includes(n)) simple.push(n.name + '|' + n.id);
  for (const n of rich.slice(0, MAX_COMPS)) {
    const o = { n: n.name, id: n.id, t: n.type === 'COMPONENT_SET' ? 'S' : 'C' };
    o.v = n.type === 'COMPONENT_SET' ? n.children.filter(x => x.type === 'COMPONENT').length : 1;
    try {
      const d = n.componentPropertyDefinitions;
      o.pr = Object.keys(d).map(k => k.replace(/#[\d:]+$/, '') + ':' + d[k].type[0]);
    } catch (e) { o.pr = ['err']; }
    try { o.ps = (await n.getPublishStatusAsync())[0]; } catch (e) { o.ps = '?'; }
    if (CALC_TOKENS && budget > 0) {
      // P — краски (fills+strokes), N — числа/типографика; [Tokens, old, unbound]
      const tk = { P: [0, 0, 0], N: [0, 0, 0] }, oc = {};
      const IDX = { T: 0, O: 1 };
      const add = async (grp, alias) => {
        const a = Array.isArray(alias) ? alias[0] : alias;
        if (!a || !a.id) { tk[grp][2]++; return; }
        const r = await cls(a.id); tk[grp][IDX[r.k]]++; if (r.k === 'O') oc[r.c] = (oc[r.c] || 0) + 1;
      };
      // обход: варианты и их потомки; сам COMPONENT_SET (фиолетовая рамка) и вложенные INSTANCE не считаются —
      // привязки вложенных компонентов (иконки и т.п.) считаются на их собственных страницах
      const nodes = [];
      const collect = (x) => { if (x.type === 'INSTANCE') return; nodes.push(x); if ('children' in x) for (const ch of x.children) collect(ch); };
      if (n.type === 'COMPONENT_SET') { for (const v of n.children) collect(v); } else collect(n);
      budget -= nodes.length; if (budget < 0) partial = true;
      for (const x of nodes) {
        const bv = x.boundVariables || {};
        for (const prop of ['fills', 'strokes']) {
          const arr = (prop in x && Array.isArray(x[prop])) ? x[prop] : [];
          for (const p of arr) {
            if (p.visible === false || p.type === 'IMAGE' || p.type === 'VIDEO') continue;
            await add('P', p.boundVariables && p.boundVariables.color);
          }
          if (prop === 'strokes' && arr.some(p => p.visible !== false) && typeof x.strokeWeight === 'number' && x.strokeWeight > 0) {
            await add('N', bv.strokeWeight || bv.strokeTopWeight);
          }
        }
        if ('layoutMode' in x && x.layoutMode && x.layoutMode !== 'NONE') {
          for (const k of NUMK) if (x[k] > 0) await add('N', bv[k]);
        }
        if ('topLeftRadius' in x && RAD.some(k => x[k] > 0)) await add('N', RAD.map(k => bv[k]).find(Boolean));
        if (x.type === 'TEXT') await add('N', TXT.map(k => bv[k]).find(Boolean));
      }
      o.tp = tk.P; o.tn = tk.N; if (Object.keys(oc).length) o.oc = oc;
    }
    c.push(o);
  }
  // guideline frames: depth <= 3, not inside components/instances
  const g = [];
  const walk = (node, depth) => {
    if (depth > 3 || !('children' in node)) return;
    for (const ch of node.children) {
      if (ch.type === 'COMPONENT' || ch.type === 'COMPONENT_SET' || ch.type === 'INSTANCE') continue;
      if ((ch.type === 'FRAME' || ch.type === 'SECTION') && RE_G.test(ch.name)) {
        const kids = ch.children || [];
        const numbered = kids.filter(k => /^\d{2}\s*[—-]/.test(k.name)).length;
        let f = numbered >= 8 ? 'new' + numbered : 'old';
        if (f === 'old') {
          const t = ch.findAllWithCriteria({ types: ['TEXT'] }).slice(0, 400).map(t => t.characters).join(' ');
          f = /moscow|must have|should have/i.test(t) ? 'old-MoSCoW' : (/check ?list/i.test(ch.name) ? 'old-checklist' : 'other');
        }
        g.push({ n: ch.name, id: ch.id, f });
      } else walk(ch, depth + 1);
    }
  };
  walk(page, 1);
  result.push({ p: page.name, id: page.id, nc: all.length, c, sc: simple.length, s: simple.slice(0, MAX_SIMPLE), g, partial: partial || undefined });
}
return result;

/*
 * component-token-audit.js — аудит привязки к токенам одного компонента (COMPONENT_SET или COMPONENT) 💠 Core kit
 *
 * Назначение: по каждому варианту и каждому потомку (вложенные INSTANCE — только сам инстанс, внутрь не заходим)
 *   разобрать каждое поле: fills/strokes, радиусы, отступы/gap, strokeWeight, width/height, у TEXT — текстовый стиль
 *   и типографика, эффекты — и классифицировать.
 *
 * Классы:
 *   tokens-semantic  — переменная/стиль библиотеки 🧩 Tokens (Semantic colors, Numbers, Typography, Border… — всё, кроме примитивов)
 *   tokens-primitive — переменная 🧩 Tokens из «Primitives colors»
 *   old-twin         — привязано не к Tokens (локальная коллекция Core kit, [OLD] Mўlo DS…), но в семантической или числовой
 *                      коллекции Tokens есть близнец (то же имя или имя по карте RENAME) того же типа → перепривязка 1:1.
 *                      В находке twin = {name, collection} — полное имя переменной Tokens и её коллекция.
 *   old-primitive    — привязано к старой коллекции примитивов (имя коллекции содержит «Primitive») или имя вида
 *                      <палитра>/solid-* / alpha-* → подбирать семантический токен по роли, не по имени.
 *   old-orphan       — привязано не к Tokens, близнеца нет (или переменная не найдена) → нужен новый токен / решение лида.
 *   raw              — не привязано: значение как есть (hex+opacity у красок, число у размеров)
 *   n/a              — нулевое непривязанное значение / нет краски / краска скрыта
 *   Фильтр CLASSES=['old'] — все три old-*.
 *
 * Флаг mismatch: {var, node} — у привязанного поля значение переменной (resolveForConsumer для ноды, иначе дефолтный
 *   мод с разворотом алиасов) ≠ фактическому значению ноды. Проверяются числовые поля, типографика (size/LH/LS/weight/
 *   family) и SOLID-краски (hex с альфой). Типичный случай — переменная из отключённой библиотеки: height привязан к
 *   Badge/Small/height = 16, а нода 20. Mismatch входит в ключ дедупа и собирается в summary.mismatches.
 *
 * Размеры без переменной: у корня каждого варианта — width/height всегда (sizing = HUG/FIXED в находке),
 *   у детей auto-layout (не ABSOLUTE) — width/height только при FIXED по этой оси (HUG/FILL пропускаются);
 *   minWidth/maxWidth/minHeight/maxHeight — если заданы (не null). Непривязанное → raw со значением.
 *   Привязанные width/height/min/max/opacity — у любой ноды, с проверкой mismatch.
 *
 *   Tokens определяется по KEY коллекции библиотеки «🧩 Tokens» (как в components-export.js), не по имени:
 *   коллекция Semantic colors иногда видна под старым именем «Semantic», а у локальных старых коллекций Core kit
 *   имена переменных совпадают с Tokens (bg/brand/primary и т.п.).
 *
 * Карта RENAME (ниже) — где имя старой числовой переменной отличается от Tokens (по ds/tokens.md, 2026-09-25):
 *   Border/border-xs|sm|md|lg (старая Numbers) → коллекция Border, border-xs|sm|md|lg (Border удалён из Numbers 02.07.2026);
 *   Blur/*, Spread/* → Numbers, то же имя (к ним привязаны эффект-стили); дубли в коллекциях Blur/Spread — запасной вариант;
 *   radius-* / spacing-* / blur-* без группы → Numbers Radius/… / Spacing/… / Blur/…;
 *   Typography/<x> → Typography <x> (size/*, line-height/*, letter-spacing/*, weight/*, family/*).
 *   Сначала ищется точное имя, потом правила RENAME по порядку; тип переменной (FLOAT/COLOR/STRING) должен совпасть.
 *
 * Текст/эффект-стили Tokens — по key стиля: списки TOKENS_TEXT_STYLES / TOKENS_EFFECT_STYLES вшиты (выгружены из 🧩 Tokens
 *   2026-09-26: 29 текстовых, 13 эффект-стилей). Обновить при добавлении стилей в Tokens: use_figma по файлу
 *   5m462BWVr7bof44q3U3bjN (только чтение) —
 *     return { text: (await figma.getLocalTextStylesAsync()).map(s => s.key).join(' '),
 *              effect: (await figma.getLocalEffectStylesAsync()).map(s => s.key).join(' ') };
 *   и заменить строки ниже.
 *
 * READ-ONLY: ничего не меняет в Figma. Используются только чтение: getNodeByIdAsync, setCurrentPageAsync
 *   (переключение контекста страницы, не запись), getMainComponentAsync, getStyleByIdAsync, getStyledTextSegments,
 *   variables.getVariableByIdAsync / getVariableCollectionByIdAsync, variable.resolveForConsumer,
 *   teamLibrary.getAvailableLibraryVariableCollectionsAsync / getVariablesInLibraryCollectionAsync.
 *   Никаких setter'ов, setBoundVariable, create/remove/rename, setPluginData, import*.
 *
 * Файл: 💠 Core kit, file key PzDKr0egYAQaq9oI0dbJJP (main). Библиотека токенов: 🧩 Tokens (5m462BWVr7bof44q3U3bjN).
 *
 * Параметры (ниже):
 *   NODE_ID    — id COMPONENT_SET или одиночного COMPONENT, напр. '8582:870' (Dot-badge), '8454:7170' (Counter-badge).
 *   MODE       — 'summary': счётчики + старые переменные + mismatches + raw-значения + инстансы + сверка с components-export (compat);
 *                'findings': дедуплицированные находки, страница [OFFSET, OFFSET+LIMIT).
 *   OFFSET, LIMIT — пейджинг находок. Ответ use_figma режется ~20 KB → LIMIT ≈ 25 (находка с hex/twin/mismatch ≈ 500–700 B).
 *                В ответе есть total и next (next = null — последняя страница).
 *   INCLUDE_NA — включать ли n/a в findings (в summary они считаются всегда).
 *   CLASSES    — фильтр классов для findings, напр. ['old-orphan','raw'] или ['old'] (= все old-*); [] — все.
 *
 * Как запускать: Figma MCP → use_figma(fileKey="PzDKr0egYAQaq9oI0dbJJP", code=<этот файл с подставленными параметрами>).
 *   Сначала MODE='summary' (там findingsTotal), потом MODE='findings' с OFFSET = 0, 25, 50, … до findingsTotal.
 *   Каждый вызов независим и только читает, поэтому страницы findings можно запускать параллельно (в одном сообщении).
 *
 * Формат находки: {variant, layerPath, nodeId, field, class, current, hex?, value?, via?, collection?, twin?, mismatch?,
 *   sizing?, count, variants, nVariants}
 *   layerPath — путь от варианта (сам вариант = «.»), дедуп по (layerPath, field, class, current, mismatch) между вариантами;
 *   variant/nodeId — первое вхождение; variants — до 3 имён + «… +N»; count — число совпавших полей; nVariants — вариантов.
 *   current: имя переменной/стиля или сырое значение; hex — итоговый цвет (для привязанных — значение переменной
 *   с разворотом алиасов; если недоступно — текущий цвет краски), альфа — « @NN%»; «*» в конце hex —
 *   у одинаковой находки в разных вариантах разный цвет. value — значение переменной у числовых полей.
 *   via — конечная переменная цепочки алиасов (напр. bg/brand/primary → blue/solid-500).
 *   collection — коллекция старой переменной: «(local)» — локальная в Core kit, «[библиотека]» — remote из другой
 *   библиотеки; twin — {name, collection} в 🧩 Tokens (только old-twin), у old-primitive/old-orphan — null.
 *   sizing — режим размера по оси (FIXED/HUG/FILL) у находок width/height.
 * Скоуп полей: fills, strokes, cornerRadius (или 4 угла, если различаются), paddingLeft/Right/Top/Bottom, itemSpacing
 *   (auto-layout), counterAxisSpacing (wrap), strokeWeight (при видимом stroke; 4 стороны, если различаются),
 *   width/height/min/max (см. «Размеры без переменной»), opacity — если привязана; TEXT: textStyle,
 *   fontSize/lineHeight/letterSpacing/fontFamily и вес (поле fontWeight, или fontStyle — если вес привязан через fontStyle);
 *   при наличии текстового стиля непривязанные поля типографики не считаются — их задаёт стиль; effects: effectStyle
 *   или каждый видимый эффект. Сам INSTANCE аудируется как нода (его fills/strokes/радиусы/размер) + попадает
 *   в summary.instances с именем main component.
 * Отличие от components-export.js (% Tokens в ds/components.md): там padding/gap/radius считаются только при значении > 0,
 *   4 угла радиуса — одно поле, типографика — одно поле на TEXT, инстансы и height/width не считаются. Для сверки
 *   summary.compat считает T/O/U ровно по тем правилам (O = все old-*).
 */
const NODE_ID = '8582:870';
const MODE = 'summary';            // 'summary' | 'findings'
const OFFSET = 0;
const LIMIT = 25;
const INCLUDE_NA = false;
const CLASSES = [];                // [] — все; напр. ['old-orphan','raw'], ['old'] = все old-*

const TOKENS_LIB = '🧩 Tokens';
const PRIMITIVES = 'Primitives colors';
const TOKENS_TEXT_STYLES = 'af1a5c80172ffdb69b22a6d2bab9d701db2cc730 dbc9be187ed83cf0a58c126338154d9be6300062 bf4c796675a7adc48dfe0216352c48d7a3b87924 9185d506ceef8473be6e94d82993697484eab010 59618ef197dcc3cb191296b4cae6615e628afd14 9b20deacb2ac3afb4ae9d50684e0d7f083faef68 d9d96196586bbaffcad3f056b7a974301ab8e5dc 7d09118eb06185b99f30340080a179c6ec680e1b a9e9dab0bd00aca14faf6d201e258eab760761a1 9fa66239c51edcc9ef077db049892edcc9f4e3e3 fabfb746a8f35882ceea4572189a0f202f9cf5d2 48ea51c4d0b9fd999ce61149c80600d70a573fb6 92885cde0ee98fd1fc628c69b219efe9832625c7 ced7a0ce40b62661d4a274c003564cd81d5e6b86 1dce8eea634bebb27adaccc83e5b174351190887 4d5235a8b2e52f2e9c7300a186b86fdcbb25d8dd e43da5c832876e28a2b31aa5fa756af691342fb0 4319239cd0fdf3a68630fdf23606742b3c73d101 74b685a6effb3fe4bc2321979846961396d6c122 4ec5bc7cbf85758ab5d23a852027c63d4839afbd efb1eece2e0b6b2280bef77aef87e8ae59c1fb85 a8f1928c35893875204138811aa2cc5df2d34be1 8cbb0444495c4fad91ba73c52c09d62035cefc37 a1b700354d7570404ba90f5ecad6eac9aeb8782f d6c88edde5da7f84a44d25416b68e83db629c9ed e39ac2d41b1e9e1158b5cd7217d049eca01b2311 7ece09f1e65cf2fac3999733c79328b2d15300ae 30058a9e5c9b9e0934b9069a3a7bcea023274c5c 4f40911d412eac88536096f2f3c117f65b83f2c8'.split(' ');
const TOKENS_EFFECT_STYLES = '9c885f621fa92c42ff63681d38a9498ee5301873 8abfab148664646515127609a91dc2ed82cf0822 3fd6d2dcf0eca64ab338f864bd1e993c9dd611ad c7ec85b2a5a78916c585e6ebfd2c244f44eb8d9a 7ed55d53f51575edbbb1b76bfc7e2f3a74f7cf51 df50fb01c4e35384673e6ef5b459f52c56674b4d 6ac52b83ca25a372dd62aa5288e67d6b421b8004 ef1d28539a889f038a1576835f367450e99b0c5b 8636f90e6bd9a2bee47b4ec959059759b0d89d74 e88fb0843c2829ada234428fcbe4b045d36b1804 54a60a37200f1afd7f5df63414f2c84103796c3e f006b93a19fc1cbb14e149acf1eb9b60fd4ec8f1 30e1ad1d4e8e668d7ee7caf3b7d8933f1fb54a25'.split(' ');
const TXT_STYLE_SET = new Set(TOKENS_TEXT_STYLES), EFF_STYLE_SET = new Set(TOKENS_EFFECT_STYLES);

// карта переименований старое имя → Tokens: [regex, замена, коллекция Tokens]. Точное имя проверяется раньше.
const RENAME = [
  [/^Border\/(.+)$/, '$1', 'Border'],
  [/^Blur\/(.+)$/, 'Blur/$1', 'Numbers'], [/^Blur\/(.+)$/, '$1', 'Blur'],
  [/^Spread\/(.+)$/, 'Spread/$1', 'Numbers'], [/^Spread\/(.+)$/, '$1', 'Spread'],
  [/^(radius-.+)$/, 'Radius/$1', 'Numbers'], [/^(spacing-.+)$/, 'Spacing/$1', 'Numbers'], [/^(blur-.+)$/, 'Blur/$1', 'Numbers'],
  [/^Typography\/(.+)$/, '$1', 'Typography'],
];
const PRIM_NAME = /(^|\/)(solid|alpha)(-[\w.]+)?$/;   // <палитра>/solid-500, neutral/black/alpha-100, neutral/white/solid
const isPrimCol = n => /primitive/i.test(n || '');

// ---------- библиотека Tokens: key коллекции → имя ----------
const libCols = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();
const TOK = {}, LIBNAME = {};
for (const c of libCols) { LIBNAME[c.key] = c.libraryName; if (c.libraryName === TOKENS_LIB) TOK[c.key] = c.name; }
let twinIdx = null; // имя → [{collection, type}] по НЕ-примитивным коллекциям Tokens (грузится лениво)
async function twinOf(v) {
  if (!twinIdx) {
    twinIdx = {};
    for (const key of Object.keys(TOK)) {
      if (TOK[key] === PRIMITIVES) continue;
      try { for (const lv of await figma.teamLibrary.getVariablesInLibraryCollectionAsync(key)) (twinIdx[lv.name] || (twinIdx[lv.name] = [])).push({ collection: TOK[key], type: lv.resolvedType }); } catch (e) {}
    }
  }
  const pick = (name, col) => { const t = (twinIdx[name] || []).find(x => (!col || x.collection === col) && (!v.resolvedType || x.type === v.resolvedType)); return t ? { name, collection: t.collection } : null; };
  let t = pick(v.name);
  for (const [re, rep, col] of RENAME) { if (t) break; if (re.test(v.name)) t = pick(v.name.replace(re, rep), col); }
  return t;
}

// ---------- утилиты ----------
const h2 = x => Math.round(Math.max(0, Math.min(1, x)) * 255).toString(16).padStart(2, '0').toUpperCase();
const hex = (c, op) => {
  const a = (c.a === undefined ? 1 : c.a) * (op === undefined ? 1 : op);
  return '#' + h2(c.r) + h2(c.g) + h2(c.b) + (a < 0.999 ? ' @' + Math.round(a * 100) + '%' : '');
};
const r2 = x => (typeof x === 'number' ? Math.round(x * 100) / 100 : x);
const isMixed = x => x === figma.mixed || typeof x === 'symbol';
const first = a => (Array.isArray(a) ? a[0] : a);
const fmtLH = v => (isMixed(v) ? 'mixed' : v && v.unit ? (v.unit === 'AUTO' ? 'auto' : r2(v.value) + (v.unit === 'PERCENT' ? '%' : 'px')) : r2(v));
const isAlias = x => x && typeof x === 'object' && x.type === 'VARIABLE_ALIAS';

// сравнение значения переменной с фактическим значением ноды
function normVal(x) {
  if (x === undefined || x === null || isMixed(x)) return undefined;
  if (typeof x === 'number') return r2(x);
  if (typeof x === 'boolean') return x;
  if (typeof x === 'string') { const n = Number(x); return x.trim() !== '' && !isNaN(n) ? r2(n) : x.trim().toLowerCase(); }
  if (typeof x === 'object' && 'unit' in x) return x.unit === 'AUTO' ? 'auto' : x.unit === 'PIXELS' ? r2(x.value) : (x.value === 0 ? 0 : r2(x.value) + '%');
  return undefined;
}
function mismatchOf(field, varVal, nodeVal) {
  let a = normVal(varVal); const b = normVal(nodeVal);
  if (field === 'opacity' && typeof a === 'number' && a > 1) a = r2(a / 100); // opacity-переменная в %, нода 0–1
  if (a === undefined || b === undefined) return null;
  if (typeof a === 'number' && typeof b === 'number' ? Math.abs(a - b) < 0.01 : a === b) return null;
  return { var: a, node: b };
}

const vCache = {}, VOBJ = {};
async function resolveValue(v, depth) {
  // значение переменной в дефолтном моде её коллекции, с разворотом алиасов → {val, via: имя конечной переменной цепочки}
  if (!v || depth > 10) return { val: undefined, via: v ? v.name : undefined };
  let col = null;
  try { col = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId); } catch (e) {}
  const vbm = v.valuesByMode || {};
  const mode = col && vbm[col.defaultModeId] !== undefined ? col.defaultModeId : Object.keys(vbm)[0];
  const val = mode !== undefined ? vbm[mode] : undefined;
  if (isAlias(val)) {
    let t = null; try { t = await figma.variables.getVariableByIdAsync(val.id); } catch (e) {}
    return resolveValue(t, depth + 1);
  }
  return { val, via: depth > 0 ? v.name : undefined };
}
// значение переменной для конкретной ноды (учитывает явные моды); если не вышло — дефолтный мод
function consumerValue(id, node, fallback) {
  const v = VOBJ[id];
  if (v && node) { try { const r = v.resolveForConsumer(node); if (r && r.value !== undefined && !isAlias(r.value)) return r.value; } catch (e) {} }
  return fallback;
}
async function clsVar(id) {
  if (vCache[id]) return vCache[id];
  let r = { class: 'old-orphan', current: '?' + id, collection: 'missing-var', twin: null };
  try {
    const v = await figma.variables.getVariableByIdAsync(id);
    if (v) {
      VOBJ[id] = v;
      let col = null;
      try { col = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId); } catch (e) {}
      const tokName = col && col.remote ? TOK[col.key] : undefined;
      const rv = await resolveValue(v, 0);
      r = { current: v.name, type: v.resolvedType, value: rv.val, via: rv.via };
      if (tokName) { r.class = tokName === PRIMITIVES ? 'tokens-primitive' : 'tokens-semantic'; r.collection = tokName; }
      else {
        r.collection = col ? col.name + (col.remote ? ' [' + (LIBNAME[col.key] || 'remote, библиотека не подключена') + ']' : ' (local)') : 'no-collection';
        if ((col && isPrimCol(col.name)) || (v.resolvedType === 'COLOR' && PRIM_NAME.test(v.name))) { r.class = 'old-primitive'; r.twin = null; }
        else { r.twin = await twinOf(v); r.class = r.twin ? 'old-twin' : 'old-orphan'; }
      }
    }
  } catch (e) { r.err = String(e).slice(0, 80); }
  return (vCache[id] = r);
}
const sCache = {};
async function styleInfo(id, kind) {
  if (sCache[id]) return sCache[id];
  let r = { class: 'old-orphan', current: '?style ' + id };
  try {
    const s = await figma.getStyleByIdAsync(id);
    if (s) {
      const tok = s.remote && (kind === 'text' ? TXT_STYLE_SET : EFF_STYLE_SET).has(s.key);
      r = { class: tok ? 'tokens-semantic' : 'old-orphan', current: s.name + (s.remote ? '' : ' (local)') };
    }
  } catch (e) {}
  return (sCache[id] = r);
}
const isOld = c => c.indexOf('old-') === 0;

// ---------- сбор полей ----------
const recs = [];         // {variant, path, nodeId, field, class, current, hex, collection, twin, mismatch, sizing}
const instances = {};    // path|main → {path, main, count, variants}
let nodesVisited = 0;
const push = (ctx, field, o) => recs.push(Object.assign({ variant: ctx.variant, path: ctx.path, nodeId: ctx.id, field }, o));
const varRec = (c, extra) => Object.assign({ class: c.class, current: c.current, via: c.via, collection: c.collection, twin: c.twin }, extra);

async function paintField(ctx, field, p) {
  if (p.visible === false) return push(ctx, field, { class: 'n/a', current: 'hidden ' + p.type });
  if (p.type === 'IMAGE' || p.type === 'VIDEO' || p.type === 'PATTERN') return push(ctx, field, { class: 'n/a', current: p.type });
  if (p.type === 'SOLID') {
    const a = p.boundVariables && p.boundVariables.color;
    if (a && a.id) {
      const c = await clsVar(a.id);
      // у привязанной краски paint.opacity = альфа переменной — не перемножаем
      const vv = consumerValue(a.id, ctx.node, c.value);
      const nh = hex(p.color, p.opacity);
      const vh = vv && typeof vv === 'object' && 'r' in vv ? hex(vv) : undefined;
      return push(ctx, field, varRec(c, { hex: vh || nh, mismatch: vh && vh !== nh ? { var: vh, node: nh } : undefined }));
    }
    return push(ctx, field, { class: 'raw', current: hex(p.color, p.opacity), hex: hex(p.color, p.opacity) });
  }
  if (p.type && p.type.indexOf('GRADIENT') === 0) {
    const stops = p.gradientStops || [];
    const b = stops.map(s => s.boundVariables && s.boundVariables.color).find(x => x && x.id);
    const hx = stops.map(s => hex(s.color, p.opacity)).join(' → ');
    if (b) { const c = await clsVar(b.id); return push(ctx, field, varRec(c, { current: p.type + ' ' + c.current + (stops.length > 1 ? ' (+' + (stops.length - 1) + ' stops)' : ''), hex: hx, via: undefined })); }
    return push(ctx, field, { class: 'raw', current: p.type, hex: hx });
  }
  return push(ctx, field, { class: 'n/a', current: String(p.type) });
}
// opts: onlyBound — непривязанное не писать; nodeVal — фактическое значение ноды для mismatch (или функция от значения
// переменной), по умолчанию value; sizing — режим размера для width/height
async function numField(ctx, field, alias, value, opts) {
  opts = opts || {};
  const a = first(alias);
  if (a && a.id) {
    const c = await clsVar(a.id);
    const vv = consumerValue(a.id, ctx.node, c.value);
    const nv = 'nodeVal' in opts ? (typeof opts.nodeVal === 'function' ? opts.nodeVal(vv) : opts.nodeVal) : value;
    return push(ctx, field, varRec(c, { value: r2(isAlias(vv) ? undefined : vv), mismatch: mismatchOf(field, vv, nv) || undefined, sizing: opts.sizing }));
  }
  if (opts.onlyBound) return;
  if (isMixed(value)) return push(ctx, field, { class: 'raw', current: 'mixed' });
  if (value === 0 || value === null || value === undefined) return push(ctx, field, { class: 'n/a', current: r2(value) === undefined ? null : r2(value) });
  return push(ctx, field, { class: 'raw', current: typeof value === 'object' ? fmtLH(value) : r2(value), sizing: opts.sizing });
}
// 4 угла / 4 стороны: одно поле, если значение и привязка совпадают, иначе по отдельности
async function quadField(ctx, name, keys, x, bv, fallbackKey) {
  const ids = keys.map(k => (first(bv[k]) || {}).id || (fallbackKey && (first(bv[fallbackKey]) || {}).id) || null);
  const vals = keys.map(k => x[k]);
  if (ids.every(i => i === ids[0]) && vals.every(v => v === vals[0])) return numField(ctx, name, ids[0] ? { id: ids[0] } : null, vals[0]);
  for (let i = 0; i < keys.length; i++) await numField(ctx, keys[i], ids[i] ? { id: ids[i] } : null, vals[i]);
}

const RAD = ['topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius'];
const SW = ['strokeTopWeight', 'strokeRightWeight', 'strokeBottomWeight', 'strokeLeftWeight'];
const PAD = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'];
const SIZE = ['width', 'height'], MINMAX = ['minWidth', 'maxWidth', 'minHeight', 'maxHeight'];
const TXT = ['fontSize', 'lineHeight', 'letterSpacing', 'fontWeight', 'fontFamily']; // fontWeight = привязка fontWeight или fontStyle

async function auditNode(x, ctx) {
  nodesVisited++;
  const bv = x.boundVariables || {};
  if (x.type === 'INSTANCE') {
    let main = '?';
    try {
      const m = await x.getMainComponentAsync();
      if (m) main = (m.parent && m.parent.type === 'COMPONENT_SET' ? m.parent.name + ' / ' : '') + m.name + (m.remote ? ' (remote)' : '');
    } catch (e) {}
    const k = ctx.path + '|' + main;
    const it = instances[k] || (instances[k] = { layerPath: ctx.path, main, count: 0, variants: [] });
    it.count++; if (it.variants.length < 4) it.variants.push(ctx.variant);
  }
  // краски
  for (const prop of ['fills', 'strokes']) {
    if (!(prop in x)) continue;
    const arr = x[prop];
    if (isMixed(arr)) { // TEXT со смешанными заливками по сегментам
      if (prop === 'fills' && x.type === 'TEXT') {
        const segs = x.getStyledTextSegments(['fills']);
        const seen = new Set();
        for (const s of segs) for (const p of s.fills) { const key = JSON.stringify(p); if (seen.has(key)) continue; seen.add(key); await paintField(ctx, 'fills', p); }
      }
      continue;
    }
    if (!Array.isArray(arr)) continue;
    if (arr.length === 0) { push(ctx, prop, { class: 'n/a', current: 'none' }); continue; }
    for (const p of arr) await paintField(ctx, prop, p);
  }
  // strokeWeight — только при видимом stroke
  const hasStroke = Array.isArray(x.strokes) && x.strokes.some(p => p.visible !== false);
  if (hasStroke && 'strokeWeight' in x) {
    if ('strokeTopWeight' in x) await quadField(ctx, 'strokeWeight', SW, x, bv, 'strokeWeight');
    else await numField(ctx, 'strokeWeight', bv.strokeWeight, x.strokeWeight);
  }
  // радиусы
  if ('topLeftRadius' in x) await quadField(ctx, 'cornerRadius', RAD, x, bv);
  else if ('cornerRadius' in x && !isMixed(x.cornerRadius)) await numField(ctx, 'cornerRadius', bv.cornerRadius, x.cornerRadius);
  // auto-layout
  if ('layoutMode' in x && x.layoutMode && x.layoutMode !== 'NONE') {
    for (const k of PAD) await numField(ctx, k, bv[k], x[k]);
    await numField(ctx, 'itemSpacing', bv.itemSpacing, x.itemSpacing);
    if (x.layoutWrap === 'WRAP') await numField(ctx, 'counterAxisSpacing', bv.counterAxisSpacing, x.counterAxisSpacing);
  }
  // размеры: корень варианта — всегда; ребёнок auto-layout — только FIXED по оси; min/max — если заданы; привязанные — всегда
  const isRoot = ctx.path === '.';
  const par = x.parent;
  const inAL = !isRoot && par && 'layoutMode' in par && par.layoutMode && par.layoutMode !== 'NONE' && x.layoutPositioning !== 'ABSOLUTE';
  for (const k of SIZE) {
    if (!(k in x)) continue;
    const sz = k === 'width' ? x.layoutSizingHorizontal : x.layoutSizingVertical;
    const report = isRoot || (inAL && sz === 'FIXED');
    await numField(ctx, k, bv[k], x[k], { onlyBound: !report, sizing: sz });
  }
  for (const k of MINMAX) {
    if (!(k in x)) continue;
    if (bv[k] || (x[k] !== null && x[k] !== undefined && (isRoot || inAL || (x.layoutMode && x.layoutMode !== 'NONE')))) await numField(ctx, k, bv[k], x[k]);
  }
  if (bv.opacity) await numField(ctx, 'opacity', bv.opacity, x.opacity, { onlyBound: true });
  // типографика
  if (x.type === 'TEXT') {
    let styleIds = [];
    if (isMixed(x.textStyleId)) styleIds = [...new Set(x.getStyledTextSegments(['textStyleId']).map(s => s.textStyleId))];
    else styleIds = [x.textStyleId];
    for (const sid of styleIds) {
      if (!sid) {
        const fn = isMixed(x.fontName) ? 'mixed' : x.fontName.family + ' ' + x.fontName.style;
        push(ctx, 'textStyle', { class: 'raw', current: 'no style: ' + fn + ' ' + (isMixed(x.fontSize) ? 'mixed' : r2(x.fontSize)) + '/' + fmtLH(x.lineHeight) });
      } else { const s = await styleInfo(sid, 'text'); push(ctx, 'textStyle', { class: s.class, current: s.current }); }
    }
    const hasStyle = styleIds.some(Boolean);
    const fnm = isMixed(x.fontName) ? undefined : x.fontName;
    for (const k of TXT) {
      let val, field = k, alias = bv[k], nodeVal;
      if (k === 'fontFamily') { val = isMixed(x.fontName) ? x.fontName : x.fontName.family; nodeVal = fnm && fnm.family; }
      else if (k === 'fontWeight') { // вес можно привязать и к fontWeight (FLOAT), и к fontStyle (STRING) — считаем одним полем
        if (!bv.fontWeight && bv.fontStyle) { field = 'fontStyle'; alias = bv.fontStyle; }
        val = isMixed(x.fontWeight) ? x.fontWeight : x.fontWeight + (isMixed(x.fontName) ? '' : ' (' + x.fontName.style + ')');
        // переменная «500» сравнивается с fontWeight, «Medium» — с fontStyle
        nodeVal = vv => (typeof normVal(vv) === 'number' ? x.fontWeight : fnm && fnm.style);
      }
      else { val = x[k]; nodeVal = x[k]; }
      if (k === 'lineHeight' || k === 'letterSpacing') val = isMixed(val) ? val : fmtLH(val);
      await numField(ctx, field, alias, val, { onlyBound: hasStyle, nodeVal });
    }
  }
  // эффекты
  if ('effects' in x) {
    const esid = x.effectStyleId;
    if (esid && !isMixed(esid)) { const s = await styleInfo(esid, 'effect'); push(ctx, 'effectStyle', { class: s.class, current: s.current }); }
    else if (Array.isArray(x.effects)) {
      for (let i = 0; i < x.effects.length; i++) {
        const e = x.effects[i];
        if (e.visible === false) continue;
        const a = e.boundVariables && e.boundVariables.color;
        const desc = e.type + (e.offset ? ' ' + r2(e.offset.x) + ',' + r2(e.offset.y) : '') + (e.radius !== undefined ? ' blur ' + r2(e.radius) : '') + (e.spread ? ' spread ' + r2(e.spread) : '');
        if (a && a.id) { const c = await clsVar(a.id); push(ctx, 'effect', varRec(c, { current: c.current + ' (' + desc + ')', hex: e.color ? hex(e.color) : undefined, via: undefined })); }
        else push(ctx, 'effect', { class: 'raw', current: desc, hex: e.color ? hex(e.color) : undefined });
      }
    }
  }
}

// ---------- сверка с components-export.js (те же правила: без инстансов, T/O/U) ----------
const compat = { paints: [0, 0, 0], numbers: [0, 0, 0] };
const CIDX = { 'tokens-semantic': 0, 'tokens-primitive': 0, 'old-twin': 1, 'old-primitive': 1, 'old-orphan': 1 };
async function compatAdd(grp, alias) {
  const a = first(alias);
  if (!a || !a.id) { compat[grp][2]++; return; }
  compat[grp][CIDX[(await clsVar(a.id)).class]]++;
}
async function compatNode(x) {
  const bv = x.boundVariables || {};
  for (const prop of ['fills', 'strokes']) {
    const arr = (prop in x && Array.isArray(x[prop])) ? x[prop] : [];
    for (const p of arr) { if (p.visible === false || p.type === 'IMAGE' || p.type === 'VIDEO') continue; await compatAdd('paints', p.boundVariables && p.boundVariables.color); }
    if (prop === 'strokes' && arr.some(p => p.visible !== false) && typeof x.strokeWeight === 'number' && x.strokeWeight > 0) await compatAdd('numbers', bv.strokeWeight || bv.strokeTopWeight);
  }
  if ('layoutMode' in x && x.layoutMode && x.layoutMode !== 'NONE') for (const k of [...PAD, 'itemSpacing']) if (x[k] > 0) await compatAdd('numbers', bv[k]);
  if ('topLeftRadius' in x && RAD.some(k => x[k] > 0)) await compatAdd('numbers', RAD.map(k => bv[k]).find(Boolean));
  if (x.type === 'TEXT') await compatAdd('numbers', ['fontSize', 'fontFamily', 'fontWeight', 'fontStyle', 'lineHeight', 'letterSpacing'].map(k => bv[k]).find(Boolean));
}

// ---------- обход ----------
const root = await figma.getNodeByIdAsync(NODE_ID);
if (!root) throw new Error('Node not found: ' + NODE_ID);
let page = root; while (page && page.type !== 'PAGE') page = page.parent;
await figma.setCurrentPageAsync(page);
const variants = root.type === 'COMPONENT_SET' ? root.children.filter(c => c.type === 'COMPONENT') : [root];
async function walk(x, ctx, isRoot) {
  await auditNode(x, ctx);
  if (x.type !== 'INSTANCE') await compatNode(x);
  if (x.type === 'INSTANCE' || !('children' in x)) return;
  for (const ch of x.children) await walk(ch, { variant: ctx.variant, id: ch.id, node: ch, path: (isRoot ? '' : ctx.path + ' / ') + ch.name }, false);
}
for (const v of variants) await walk(v, { variant: v.name, id: v.id, node: v, path: '.' }, true);

// ---------- агрегаты ----------
const byClass = {}, byFieldType = {};
for (const r of recs) {
  byClass[r.class] = (byClass[r.class] || 0) + 1;
  const ft = byFieldType[r.field] || (byFieldType[r.field] = {});
  ft[r.class] = (ft[r.class] || 0) + 1;
}
const counted = recs.filter(r => r.class !== 'n/a').length;
const tok = (byClass['tokens-semantic'] || 0) + (byClass['tokens-primitive'] || 0);
const mmKey = m => (m ? JSON.stringify(m) : '');

// дедуп находок
const wantClass = c => !CLASSES.length || CLASSES.includes(c) || (isOld(c) && CLASSES.includes('old'));
const dmap = new Map();
for (const r of recs) {
  if (r.class === 'n/a' && !INCLUDE_NA) continue;
  if (!wantClass(r.class)) continue;
  const k = [r.path, r.field, r.class, r.current, mmKey(r.mismatch)].join('\u0001');
  let d = dmap.get(k);
  if (!d) {
    d = { variant: r.variant, layerPath: r.path, nodeId: r.nodeId, field: r.field, class: r.class, current: r.current };
    if (r.hex !== undefined) d.hex = r.hex;
    if (r.via) d.via = r.via;
    if (r.value !== undefined && r.value !== r.current) d.value = r.value;
    if (r.collection && isOld(r.class)) d.collection = r.collection;
    if (isOld(r.class)) d.twin = r.twin || null;
    if (r.mismatch) d.mismatch = r.mismatch;
    if (r.sizing) d.sizing = r.sizing;
    d.count = 0; d._v = [];
    dmap.set(k, d);
  } else if (d.hex !== undefined && r.hex !== undefined && d.hex !== r.hex && !String(d.hex).endsWith('*')) d.hex += '*'; // * — hex отличается между вхождениями
  d.count++;
  if (!d._v.includes(r.variant)) d._v.push(r.variant);
}
const ORDER = { 'old-orphan': 0, 'old-primitive': 1, 'old-twin': 2, raw: 3, 'tokens-primitive': 4, 'tokens-semantic': 5, 'n/a': 6 };
const findings = [...dmap.values()].sort((a, b) => ORDER[a.class] - ORDER[b.class] || (a.layerPath < b.layerPath ? -1 : a.layerPath > b.layerPath ? 1 : 0) || (a.field < b.field ? -1 : a.field > b.field ? 1 : 0) || (String(a.current) < String(b.current) ? -1 : 1));
const vlist = v => (v.length > 3 ? v.slice(0, 3).concat('… +' + (v.length - 3)) : v);
for (const d of findings) { d.variants = vlist(d._v); d.nVariants = d._v.length; delete d._v; }

if (MODE === 'summary') {
  const oldVars = {}, rawVals = {}, mms = {};
  for (const r of recs) {
    if (isOld(r.class)) {
      const k = r.current + '|' + r.collection;
      const o = oldVars[k] || (oldVars[k] = { name: r.current, class: r.class, collection: r.collection, twin: r.twin || null, value: r.hex || r.value, via: r.via, uses: 0, fields: [] });
      o.uses++; if (!o.fields.includes(r.field)) o.fields.push(r.field);
    } else if (r.class === 'raw') {
      const k = r.field + '|' + r.current;
      rawVals[k] = (rawVals[k] || 0) + 1;
    }
    if (r.mismatch) {
      const k = [r.path, r.field, r.current, mmKey(r.mismatch)].join('|');
      const m = mms[k] || (mms[k] = { layerPath: r.path, field: r.field, current: r.current, var: r.mismatch.var, node: r.mismatch.node, count: 0, _v: [] });
      m.count++; if (!m._v.includes(r.variant)) m._v.push(r.variant);
    }
  }
  const mismatches = Object.values(mms).map(m => { m.variants = vlist(m._v); m.nVariants = m._v.length; delete m._v; return m; });
  return {
    summary: {
      nodeName: root.name, nodeId: root.id, type: root.type, page: page.name, variants: variants.length, nodesVisited,
      fields: recs.length, countedFields: counted, tokensShare: counted ? Math.round(tok / counted * 100) + '%' : '—',
      byClass, byFieldType, mismatchFields: recs.filter(r => r.mismatch).length, findingsTotal: findings.length,
    },
    compat: { note: 'правила components-export.js: T/O/U, без инстансов', paints: compat.paints, numbers: compat.numbers, total: [0, 1, 2].map(i => compat.paints[i] + compat.numbers[i]) },
    oldVariables: Object.values(oldVars).sort((a, b) => b.uses - a.uses),
    mismatches,
    rawValues: Object.entries(rawVals).map(([k, n]) => k + ' ×' + n),
    instances: Object.values(instances),
  };
}
return { nodeName: root.name, total: findings.length, offset: OFFSET, limit: LIMIT, next: OFFSET + LIMIT < findings.length ? OFFSET + LIMIT : null, findings: findings.slice(OFFSET, OFFSET + LIMIT) };

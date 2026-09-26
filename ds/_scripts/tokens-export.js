// tokens-export.js
// Назначение: выгрузка переменных (variables), текстовых/эффект/грид-стилей из файла «🧩 Tokens»
//             для генерации ds/tokens.md.
// File key:   5m462BWVr7bof44q3U3bjN
// РЕЖИМ:      READ-ONLY. Скрипт ничего не меняет в Figma: только get*/чтение свойств.
//             Никаких setter'ов, create*, remove, setValueForMode и т.п.
// Как запускать: через Figma MCP -> use_figma(fileKey="5m462BWVr7bof44q3U3bjN", code=<этот файл>).
//             Вывод большой, поэтому он режется на части: поменяй PART / OFFSET / LIMIT и
//             запускай несколько раз.
//   PART = 'meta'      — коллекции, моды, счётчики, скоупы, пустые описания
//   PART = 'vars'      — переменные коллекций из COLLECTIONS, срез [OFFSET, OFFSET+LIMIT) в каждой
//                        формат строки: name | type | scopes | mode=value;... | description
//                        значение: '→ <имя алиаса>' или raw (#RRGGBB / #RRGGBBAA / число / строка)
//   PART = 'text'      — текстовые стили (+ привязанные переменные)
//   PART = 'effects'   — эффект-стили (+ привязанные переменные)
//   PART = 'grids'     — грид-стили
// Для Semantic colors (256) используй LIMIT ~90 и 3 прогона; для Primitives colors (212) — LIMIT ~110.

const PART = 'meta';
const COLLECTIONS = ['Semantic colors']; // напр. ['Numbers','Typography','Blur','Spread','Border','Layout','Screens','Content','Sidebar']
const OFFSET = 0;
const LIMIT = 90;

const h2 = x => Math.round(x * 255).toString(16).padStart(2, '0').toUpperCase();
const hex = c => '#' + h2(c.r) + h2(c.g) + h2(c.b) + (c.a !== undefined && c.a < 1 ? h2(c.a) : '');
const cols = await figma.variables.getLocalVariableCollectionsAsync();
const all = await figma.variables.getLocalVariablesAsync();
const byId = {};
for (const v of all) byId[v.id] = v;
const colName = {};
for (const c of cols) colName[c.id] = c.name;

async function aliasName(id) {
  let v = byId[id];
  if (!v) { try { v = await figma.variables.getVariableByIdAsync(id); } catch (e) {} }
  if (!v) return '?' + id;
  const ext = byId[id] ? '' : ' (внешн.)';
  return v.name + ext;
}
async function fmt(val, type) {
  if (val && typeof val === 'object' && val.type === 'VARIABLE_ALIAS') return '→ ' + await aliasName(val.id);
  if (type === 'COLOR') return hex(val);
  if (typeof val === 'number') return String(Math.round(val * 1000) / 1000);
  return JSON.stringify(val);
}

if (PART === 'meta') {
  return cols.map(c => {
    const vs = c.variableIds.map(id => byId[id]).filter(Boolean);
    const scopes = {};
    for (const v of vs) { const k = v.scopes.join('+'); scopes[k] = (scopes[k] || 0) + 1; }
    return {
      name: c.name, modes: c.modes.map(m => m.name), n: vs.length,
      aliases: vs.filter(v => Object.values(v.valuesByMode).some(x => x && x.type === 'VARIABLE_ALIAS')).length,
      noDesc: vs.filter(v => !v.description).length,
      scopes, hidden: vs.filter(v => v.hiddenFromPublishing).length,
      codeSyntax: vs.filter(v => Object.keys(v.codeSyntax || {}).length).length
    };
  });
}

if (PART === 'vars') {
  const res = {};
  for (const name of COLLECTIONS) {
    const c = cols.find(x => x.name === name);
    const vs = c.variableIds.map(id => byId[id]).filter(Boolean).slice(OFFSET, OFFSET + LIMIT);
    const out = [];
    for (const v of vs) {
      const parts = [];
      for (const m of c.modes) parts.push((c.modes.length > 1 ? m.name + '=' : '') + await fmt(v.valuesByMode[m.modeId], v.resolvedType));
      out.push([v.name, v.resolvedType[0], v.scopes.join('+'), parts.join('; '), (v.description || '').replace(/\n+/g, ' ')].join(' | '));
    }
    res[name] = { total: c.variableIds.length, from: OFFSET, lines: out.join('\n') };
  }
  return res;
}

async function bound(bv) {
  if (!bv) return '';
  const o = [];
  for (const k of Object.keys(bv)) {
    const b = bv[k];
    const arr = Array.isArray(b) ? b : [b];
    for (const x of arr) if (x && x.id) o.push(k + '→' + await aliasName(x.id));
  }
  return o.join(', ');
}

if (PART === 'text') {
  const ts = await figma.getLocalTextStylesAsync();
  const out = [];
  for (const s of ts) {
    const lh = s.lineHeight.unit === 'AUTO' ? 'auto' : s.lineHeight.value + (s.lineHeight.unit === 'PERCENT' ? '%' : '');
    const ls = s.letterSpacing.value + (s.letterSpacing.unit === 'PERCENT' ? '%' : '');
    out.push([s.name, s.fontName.family, s.fontName.style, s.fontSize, lh, ls, s.paragraphSpacing, s.textCase, s.textDecoration, await bound(s.boundVariables), (s.description || '').replace(/\n+/g, ' ')].join(' | '));
  }
  return out.join('\n');
}

if (PART === 'effects') {
  const es = await figma.getLocalEffectStylesAsync();
  const out = [];
  for (const s of es) {
    const eff = [];
    for (const e of s.effects) {
      let p = e.type + (e.visible === false ? '(hidden)' : '');
      if (e.color) p += ' ' + hex(e.color);
      if (e.offset) p += ` x${e.offset.x} y${e.offset.y}`;
      if (e.radius !== undefined) p += ` blur${e.radius}`;
      if (e.spread !== undefined) p += ` spread${e.spread}`;
      if (e.blurType) p += ' ' + e.blurType;
      const b = await bound(e.boundVariables);
      if (b) p += ' [' + b + ']';
      eff.push(p);
    }
    out.push([s.name, eff.join(' + '), (s.description || '').replace(/\n+/g, ' ')].join(' | '));
  }
  return out.join('\n');
}

if (PART === 'grids') {
  const gs = await figma.getLocalGridStylesAsync();
  return gs.map(s => [s.name, s.layoutGrids.map(g => {
    let p = g.pattern;
    if (g.pattern !== 'GRID') p += ` ${g.alignment} count${g.count} gutter${g.gutterSize} offset${g.offset}` + (g.sectionSize !== undefined ? ` size${g.sectionSize}` : '');
    else p += ` size${g.sectionSize}`;
    if (g.color) p += ' ' + hex(g.color);
    return p;
  }).join(' + '), (s.description || '').replace(/\n+/g, ' ')].join(' | ')).join('\n');
}

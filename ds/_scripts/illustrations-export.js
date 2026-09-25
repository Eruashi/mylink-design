// illustrations-export.js
// Назначение: инвентаризация файла «Illustrations» для генерации ds/illustrations.md:
//             страницы, секции («Используем», «Пак иллюстарций», «Черновик»), мусор на верхнем уровне,
//             стиль элементов «Используем»: заливки (hex + привязанные переменные), градиенты, тени.
// File key:   cw2NXTA5EnPfb1TzZxk1FH  (стартовая страница «Illustration draft», node 20002:2)
// РЕЖИМ:      READ-ONLY. Только чтение свойств и get*Async. Никаких setter'ов, create*, remove и т.п.
// Как запускать: через Figma MCP -> use_figma(fileKey="cw2NXTA5EnPfb1TzZxk1FH", code=<этот файл>).
//   PART = 'structure' — страницы, верхний уровень страницы 20002:2, содержимое секций
//   PART = 'style'     — стиль каждого элемента «Используем» (frame 20002:12566)
// Скриншоты: get_screenshot(fileKey, nodeId="20002:12566", enableBase64Response=true) — прокси блокирует
//   скачивание по URL с figma.com, поэтому base64.
// Если id секций поменялись — найди их по имени в выводе 'structure' и обнови константы ниже.

const PART = 'structure';
const PAGE_ID = '20002:2';
const USE_ROW_ID = '20002:12566';      // «Используем» > Illustrations (горизонтальный auto-layout, 10 фреймов)
const SECTIONS = { use: '20002:12565', pack: '20002:8991', draft: '20002:12472' };

const page = await figma.getNodeByIdAsync(PAGE_ID);
await figma.setCurrentPageAsync(page);
const d = n => ({ id: n.id, type: n.type, name: n.name, w: Math.round(n.width), h: Math.round(n.height), kids: 'children' in n ? n.children.length : 0 });
const h2 = x => Math.round(x * 255).toString(16).padStart(2, '0').toUpperCase();
const hex = (c, o) => '#' + h2(c.r) + h2(c.g) + h2(c.b) + (c.a !== undefined && c.a < 1 ? h2(c.a) : '') + (o !== undefined && o < 1 ? '@' + Math.round(o * 100) + '%' : '');

if (PART === 'structure') {
  const pages = figma.root.children.map(p => ({ id: p.id, name: p.name }));
  const top = page.children.map(d);
  const pack = await figma.getNodeByIdAsync(SECTIONS.pack);
  const draft = await figma.getNodeByIdAsync(SECTIONS.draft);
  const use = await figma.getNodeByIdAsync(SECTIONS.use);
  const cols = (await figma.variables.getLocalVariableCollectionsAsync()).map(c => ({ name: c.name, n: c.variableIds.length, modes: c.modes.map(m => m.name) }));
  return {
    pages, top, localCollections: cols,
    components: page.findAllWithCriteria({ types: ['COMPONENT', 'COMPONENT_SET'] }).length,
    use: use.children.map(c => ({ ...d(c), children: 'children' in c ? c.children.map(d) : [] })),
    pack: pack.children.map(c => ({ ...d(c), names: 'children' in c ? c.children.map(x => x.name + ' ' + Math.round(x.width) + 'x' + Math.round(x.height)).join(', ') : '' })),
    draft: draft.children.map(d)
  };
}

if (PART === 'style') {
  const root = await figma.getNodeByIdAsync(USE_ROW_ID);
  const cache = {};
  async function vn(id) {
    if (cache[id] !== undefined) return cache[id];
    let v = null; try { v = await figma.variables.getVariableByIdAsync(id); } catch (e) {}
    return (cache[id] = v ? v.name + (v.remote ? ' [lib]' : ' [local]') : '?' + id);
  }
  const items = [];
  const total = { varByHex: {}, grads: {}, effects: {}, effectStyles: {} };
  for (const it of root.children) {
    const fills = {};
    for (const n of [it, ...it.findAll(() => true)]) {
      if ('fills' in n && Array.isArray(n.fills)) for (const f of n.fills) {
        if (f.visible === false) continue;
        if (f.type === 'SOLID') {
          const k = hex(f.color, f.opacity) + (n.opacity < 1 ? ' node@' + Math.round(n.opacity * 100) + '%' : '');
          fills[k] = (fills[k] || 0) + 1;
          if (f.boundVariables && f.boundVariables.color) total.varByHex[hex(f.color, f.opacity)] = await vn(f.boundVariables.color.id);
        } else if (f.type.startsWith('GRADIENT')) {
          const k = f.type + ' ' + f.gradientStops.map(s => hex(s.color) + '@' + Math.round(s.position * 100)).join(' → ');
          total.grads[k] = (total.grads[k] || 0) + 1;
        }
      }
      if ('effects' in n) for (const e of n.effects) {
        const k = e.type + ' ' + (e.color ? hex(e.color) : '') + ' x' + (e.offset ? e.offset.x : '') + ' y' + (e.offset ? e.offset.y : '') + ' blur' + e.radius + ' spread' + (e.spread || 0);
        total.effects[k] = (total.effects[k] || 0) + 1;
      }
      if ('effectStyleId' in n && n.effectStyleId) {
        let s = null; try { s = await figma.getStyleByIdAsync(n.effectStyleId); } catch (e) {}
        const k = s ? s.name + (s.remote ? ' [lib]' : '') : n.effectStyleId;
        total.effectStyles[k] = (total.effectStyles[k] || 0) + 1;
      }
    }
    const bgShape = it.children[0];
    items.push({ id: it.id, name: it.name, w: it.width, h: it.height, frameFill: it.fills.map(f => f.type === 'SOLID' ? hex(f.color) : f.type), clips: it.clipsContent,
      bgShape: bgShape.name + ' ' + bgShape.type + ' ' + Math.round(bgShape.width) + 'x' + Math.round(bgShape.height) + ' @' + Math.round(bgShape.x) + ',' + Math.round(bgShape.y), fills });
  }
  return { gap: root.itemSpacing, layout: root.layoutMode, items, ...total };
}

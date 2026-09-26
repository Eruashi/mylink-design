/*
 * component-props-export.js — выгрузка component properties со значениями из 💠 Core kit (ds/component-props.md)
 *
 * Назначение: для каждого COMPONENT_SET / COMPONENT с properties из реестра ds/components.md отдать
 *   componentPropertyDefinitions целиком: имя (как в Figma, с суффиксом #id отдельно), тип, для VARIANT —
 *   все variantOptions в порядке Figma, defaultValue; для INSTANCE_SWAP — имя компонента по умолчанию и
 *   число preferredValues; плюс число вариантов набора.
 * Файл: 💠 Core kit, file key PzDKr0egYAQaq9oI0dbJJP (main).
 * READ-ONLY: только чтение — getNodeByIdAsync, componentPropertyDefinitions, children, setCurrentPageAsync
 *   (переключение контекста, не запись). Никаких set…, create…, remove().
 *
 * Как запускать: Figma MCP → use_figma(fileKey="PzDKr0egYAQaq9oI0dbJJP", code=<этот файл>),
 *   подставив в NODE_IDS node id из колонки node реестра ds/components.md (логотипы, ⌘ Icons, ⌘ Logos
 *   и одиночные без properties пропускаются).
 * Батчи: NODE_IDS — до ~40 нод за вызов: ответ use_figma обрезается на 20 КБ (Flags — 200 значений,
 *   Toast — длинные тексты; при обрезке перезапустить хвост отдельно). Вызовы можно слать параллельно.
 *   Переключать страницу не нужно: getNodeByIdAsync находит набор на любой странице, children и
 *   componentPropertyDefinitions доступны (проверено 2026-09-26). PAGE_ID — на случай, если children
 *   окажутся недоступны (v = null): тогда один вызов на страницу с её наборами.
 * Выход: компактный JSON [{id,n,t,pg,v,p:[[name,type,default,extra]]}] или {id,err}
 *   name — ключ Figma как есть, с суффиксом #id у BOOLEAN/TEXT/INSTANCE_SWAP/SLOT (в md суффикс отрезается);
 *   t: S — COMPONENT_SET, C — COMPONENT; v — число вариантов (COMPONENT-детей набора); pg — страница;
 *   type: V/B/T/I/SLOT (VARIANT/BOOLEAN/TEXT/INSTANCE_SWAP/SLOT);
 *   extra: для V — массив variantOptions; для I — [имя компонента по умолчанию (набор), число preferredValues].
 *   err «Component set has existing errors» — набор с конфликтом вариантов (Table cell): properties
 *   восстанавливаются по n.children.map(c => c.name).
 * Сверка после переноса в md: пробелы/кириллица в именах — пересчитать по JSON; TEXT может содержать U+2028.
 */
const PAGE_ID = null;
const NODE_IDS = ['23457:2960'];

if (PAGE_ID) await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE_ID));
const T = { VARIANT: 'V', BOOLEAN: 'B', TEXT: 'T', INSTANCE_SWAP: 'I', SLOT: 'SLOT' };
const pageOf = (n) => { let x = n; while (x && x.type !== 'PAGE') x = x.parent; return x ? x.name : '?'; };
const out = [];
for (const id of NODE_IDS) {
  try {
    let n = await figma.getNodeByIdAsync(id);
    if (!n) { out.push({ id, err: 'not found' }); continue; }
    if (n.type === 'COMPONENT' && n.parent && n.parent.type === 'COMPONENT_SET') n = n.parent; // владелец properties — набор
    const o = { id, n: n.name, t: n.type === 'COMPONENT_SET' ? 'S' : 'C', pg: pageOf(n) };
    try { o.v = n.type === 'COMPONENT_SET' ? n.children.filter(c => c.type === 'COMPONENT').length : 1; } catch (e) { o.v = null; }
    let d;
    try { d = n.componentPropertyDefinitions; } catch (e) { o.err = String(e.message || e).slice(0, 120); out.push(o); continue; }
    o.p = [];
    for (const k of Object.keys(d)) {
      const def = d[k];
      const row = [k, T[def.type] || def.type, def.defaultValue];
      if (def.type === 'VARIANT') row.push(def.variantOptions || []);
      if (def.type === 'INSTANCE_SWAP') {
        let dn = def.defaultValue;
        try { const c = await figma.getNodeByIdAsync(def.defaultValue); if (c) dn = c.name + (c.parent && c.parent.type === 'COMPONENT_SET' ? ' (' + c.parent.name + ')' : ''); } catch (e) {}
        row.push([dn, def.preferredValues ? def.preferredValues.length : 0]);
      }
      o.p.push(row);
    }
    out.push(o);
  } catch (e) { out.push({ id, err: String(e.message || e).slice(0, 120) }); }
}
return out;

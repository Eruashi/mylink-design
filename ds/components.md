# Реестр компонентов — 💠 Core kit
> Сгенерировано из Figma 2026-09-25, file key `PzDKr0egYAQaq9oI0dbJJP` (main). Не править руками — перевыгрузка: «обнови реестр» (`ds/_scripts/components-export.js`). Правки из веток Figma сюда не попадают, пока ветку не смерджили.

## Как читать
- Статус страницы — по префиксу имени: ✅ — 31 страница, ✏️ — 9, ↳ — 8 (лежат в конце файла, после разделителя `----------------------------`, почти без переменных), без префикса — ассеты и служебные. Что именно значат ✅/✏️/↳ — в TODO.
- **% Tokens** = доля полей, привязанных к переменным библиотеки 🧩 Tokens (сверка по key коллекции), по всем вариантам набора; сам `COMPONENT_SET` и вложенные инстансы (иконки, кнопки внутри) не считаются — они считаются на своих страницах. Поля: видимые fills/strokes + padding/itemSpacing/radius/strokeWeight + типографика у TEXT. «кр.» — доля только по краскам. Тройка `T/O/U` — Tokens / старые переменные / без переменной.
- Node: без пометки — опубликован и актуален; `Ch` — опубликован, но есть неопубликованные правки; `U` — не опубликован. Гайдлайн: `13 секций` — новый формат (как Sidebar); `секции` — `_Status` + «Section — …»; `MoSCoW` — фрейм «Требования и обновления»; `чек-лист` — «Check list»/«checklist ds»; `свободный` — своя структура.

## Компоненты
| Компонент | Страница (статус) | node | Варианты | Properties | % Tokens (T/O/U) | Гайдлайн |
|---|---|---|---|---|---|---|
| `button ` | Button ✅ | `10223:9875` · Ch | 972 | 14: `Left Icon `, `👈 Left Icon`, `Right Icon`, `👉 Right  Icon`, `🔢 Counter` +9 | **37%** (кр. 80%) 2344/3293/707 | чек-лист `9130:3438`<br>MoSCoW `18224:119734` |
| `loader` | Button ✅ | `7610:2038` | 6 | 1: `Property 1` | **0%** (кр. 0%) 0/36/0 | ↑ |
| `white button` | Button ✅ | `10916:7801` · Ch | 144 | 13: `Left Icon `, `👈 Left Icon`, `Right Icon`, `👉 Right  Icon`, `🔢 Counter` +8 | **36%** (кр. 94%) 329/510/73 | ↑ |
| `link button` | Link ✅ | `7983:8072` · Ch | 36 | 11: `👉 Show Right  Icon`, `👈 Show Left Icon`, `𝐓 Text `, `Left Icon `, `Right Icon` +6 | **16%** (кр. 43%) 36/150/36 | MoSCoW `19573:14495` |
| `Flags` | Flags & Logos ✅ | `8245:5340` | 200 | 1: `Country` | **0%** (кр. 0%) 0/0/1140 | нет |
| + 30 одиночных без properties | Flags & Logos ✅ | — | — | — | не считалось | ↑ |
| `Text area input` | Inputs kit ✅ | `10676:24575` · Ch | 32 | 18: `𝐓 Label text`, `𝐓 Label`, `✱ Required`, `𝐓 Placeholder`, `𝐓 Filled placeholder` +13 | **4%** (кр. 0%) 32/736/0 | свободный `13515:17429`<br>MoSCoW `18665:8192` |
| `OTP Input base` | Inputs kit ✅ | `10676:25039` · Ch | 8 | 4: `Filled text`, `⚙️ State`, `◉ Filled`, `🔴 Error` | **0%** (кр. 0%) 0/79/0 | ↑ |
| `OTP Input` | Inputs kit ✅ | `10676:25053` · Ch | 8 | 9: `𝐓 Label text`, `𝐓 Caption`, `𝐓 Label`, `👁️ Show caption`, `✱ Required` +4 | **0%** (кр. 0%) 0/64/8 | ↑ |
| `Search input` | Inputs kit ✅ | `10676:22761` · Ch | 18 | 10: `👁️ Show caption`, `👈 Left icon`, `👈 Right icon`, `𝐓 Caption`, `𝐓 Placeholder` +5 | **0%** (кр. 0%) 0/258/0 | ↑ |
| `Standard input` | Inputs kit ✅ | `10676:25160` · Ch | 255 | 27: `𝐓 Label`, `👁️ Show caption`, `✱ Required`, `👈 Left icon`, `👉 Right icon` +22 | **0%** (кр. 0%) 0/5307/17 | ↑ |
| `Progress bar` | Inputs kit ✅ | `10676:25445` | 6 | 1: `Color` | **0%** (кр. 0%) 0/23/1 | ↑ |
| `Validation` | Inputs kit ✅ | `10676:27020` · Ch | 2 | 12: `Error text`, `List item 1`, `List item 2`, `List item 3`, `List item 4` +7 | **0%** (кр. 0%) 0/10/0 | ↑ |
| `List item` | Inputs kit ✅ | `10676:27032` · Ch | 3 | 2: `Text`, `State` | **0%** (кр. 0%) 0/9/0 | ↑ |
| + 1 одиночных без properties | Inputs kit ✅ | — | — | — | не считалось | ↑ |
| `Chips` | Chips ✅ | `9493:1368` · Ch | 36 | 11: `Text`, `◀️L -icon`, `▶️R - icon`, `Left icon`, `Right icon` +6 | **81%** (кр. 100%) 386/90/0 | MoSCoW `17992:896`<br>свободный `18766:52`<br>секции `19915:1983` |
| `Input & Assist chips` | Chips ✅ | `9757:2147` · Ch | 12 | 9: `▶️R - icon`, `Counter`, `Text`, `◀️L -icon`, `Left icon` +4 | **84%** (кр. 100%) 104/12/8 | ↑ |
| `Filter chips` | Chips ✅ | `19826:1859` · Ch | 20 | 9: `👁️ Left icon`, `❇️ Action`, `👁️ Counter`, `🔢 Count`, `👈 Left icon` +4 | **85%** (кр. 100%) 312/40/16 | ↑ |
| `Action` | Chips ✅ | `19826:6125` | 40 | 5: `Variants`, `⚙️ State`, `↕ Size`, `📌 Type`, `◉ On-selected` | **100%** (кр. 100%) 86/0/0 | ↑ |
| + 1 одиночных без properties | Chips ✅ | — | — | — | не считалось | ↑ |
| `Avatar` | Avatars ✅ | `10517:19853` · Ch | 479 | 8: `Status`, `Text`, `Instance`, `Type`, `Shape` +3 | **87%** (кр. 93%) 1548/180/48 | чек-лист `9516:26238`<br>чек-лист `9516:27095` |
| `Popover` | Popover ✅ | `8413:16659` · Ch | 12 | 10: `Title`, `Description`, `Actions`, `Buttons`, `Pages` +5 | **0%** (кр. 0%) 0/167/61 | нет |
| `Dot` | Popover ✅ | `14453:783` | 2 | 1: `state` | **0%** (кр. 0%) 0/4/0 | ↑ |
| `Tooltip` | Tooltip ✅ | `9006:5294` · Ch | 12 | 5: `Left icon`, `Text`, `MarkerColor`, `Position`, `Align` | **0%** (кр. 0%) 0/132/0 | чек-лист `8909:3136` |
| + 1 одиночных без properties | Tooltip ✅ | — | — | — | не считалось | ↑ |
| `Skeleton loader` | Skeleton loader ✅ | `22032:8703` | 4 | 2: `Animation`, `Style` | **17%** (кр. 25%) 2/4/6 | свободный `22081:5282` |
| `OLD Badge` | Badge ✅ | `9763:4426` | 120 | 10: `Left icon`, `Right icon`, `◀️ Left icon`, `◀️ Right icon`, `Label` +5 | **0%** (кр. 0%) 0/1370/70 | чек-лист `11077:19461`<br>MoSCoW `16683:10932` |
| `Badge` | Badge ✅ | `23457:2960` | 132 | 10: `👈 Left icon`, `👉 Right icon`, `🖲️ Left icon`, `🖲️ Right icon`, `𝐓 Label` +5 | **100%** (кр. 100%) 1584/0/0 | ↑ |
| `Counter-badge` | Counter badge & dot ✅ | `8454:7170` · Ch | 42 | 5: `Number`, `Type`, `Color`, `Size`, `Inverted` | **0%** (кр. 0%) 0/420/0 | нет |
| `Dot-badge` | Counter badge & dot ✅ | `8582:870` | 4 | 1: `Color` | **0%** (кр. 0%) 0/8/0 | ↑ |
| `horizontal scroll croll asset` | Scroll ✅ | `12893:14029` | 3 | 1: `state` | **0%** (кр. 0%) 0/6/21 | нет |
| `vertical scroll asset` | Scroll ✅ | `12893:14036` | 3 | 1: `state` | **0%** (кр. 0%) 0/6/18 | ↑ |
| `radiobutton` | Radio selector ✅ | `11522:4664` · Ch | 20 | 4: `𝐓 Text`, `↕ Size`, `🔘 Filled`, `⚙️ State` | **0%** (кр. 0%) 0/108/45 | чек-лист `10273:4302` |
| `text` | Radio selector ✅ | `11529:4053` · Ch | 2 | 4: `Hint text`, `Hint placeholder`, `Description placeholder`, `Size` | **0%** (кр. 0%) 0/8/0 | ↑ |
| `checkbox` | Checkbox selector ✅ | `11679:8759` · Ch | 30 | 5: `𝐓 text`, `↕ Size`, `☑️ Filled`, `⛔️ Indeterminate`, `⚙️ State` | **0%** (кр. 0%) 0/111/55 | нет |
| `Select All` | Checkbox selector ✅ | `15039:14850` · Ch | 15 | 4: `𝐓 Text`, `↕ Size`, `📌 Type`, `⚙️ State` | **0%** (кр. 0%) 0/126/0 | ↑ |
| `switch` | Switch selector ✅ | `11679:22873` · Ch | 30 | 4: `𝐓 Text`, `↕ Size`, `☑️ Filled`, `⚙️ State` | **0%** (кр. 0%) 0/238/26 | нет |
| `Date picker (старое)` | Date picker ✅ | `12857:14972` · Ch | 21 | 4: `Type`, `Filled`, `Month & Year picker`, `Mobile` | **0%** (кр. 0%) 0/674/58 | нет |
| `Date picker` | Date picker ✅ | `16819:11812` · Ch | 24 | 7: `𝐓 Range`, `𝐓 Counter`, `👁️ Action bar`, `🖥️ Platform`, `📍 Type` +2 | **66%** (кр. 92%) 573/250/42 | ↑ |
| `Month picker` | Date picker ✅ | `16930:15032` · Ch | 18 | 7: `𝐓 Range`, `𝐓 Counter`, `👁️ Action bar`, `🖥️ Platform`, `📍 Type` +2 | **82%** (кр. 94%) 471/72/32 | ↑ |
| `Year picker` | Date picker ✅ | `16930:21286` · Ch | 12 | 6: `𝐓 Range`, `𝐓 Counter`, `👁️ Action bar`, `🖥️ Platform`, `📍 Type` +1 | **80%** (кр. 91%) 334/60/26 | ↑ |
| `number-datepicker` | Date picker ✅ | `16825:19226` · Ch | 36 | 7: `𝐓 Number`, `🖥️ Platform`, `⚙️ State`, `☑️ Selected`, `🗓️ Other month` +2 | **82%** (кр. 74%) 329/36/37 | ↑ |
| `month-year-datepicker` | Date picker ✅ | `16825:19279` · Ch | 12 | 4: `𝐓 Text`, `🖥️ Platform`, `⚙️ State`, `☑️ Selected` | **81%** (кр. 100%) 100/14/10 | ↑ |
| `cell-month-year-datepicker` | Date picker ✅ | `16825:19310` · Ch | 18 | 6: `𝐓 Text`, `🖥️ Platform`, `⚙️ State`, `☑️ Selected`, `🗓️ Current date` +1 | **87%** (кр. 100%) 120/18/0 | ↑ |
| `day-datepicker` | Date picker ✅ | `12857:3139` · Ch | 1 | 1: `𝐓 Day` | **0%** (кр. 0%) 0/7/0 | ↑ |
| `Calendar мобилка` | Date picker ✅ | `16918:13937` · Ch | 9 | 4: `↕ Size`, `📍 Type`, `◉ Filled`, `🔭 View` | **14%** (кр. 83%) 67/353/52 | ↑ |
| `Toast` | Toast ✅ | `14541:3720` · Ch | 10 | 18: `▨ Bg layer 2`, `▨ Bg layer 1`, `⏻ Progress`, `⏻ Button`, `✖ Close icon` +13 | **78%** (кр. 63%) 324/55/35 | чек-лист `11067:17386`<br>чек-лист `11067:18247` |
| `Selection Item` | Selection List ✅ | `14409:41076` · Ch | 160 | 13: `𝐓 Text`, `👁️ Arrow right`, `𝐓 Description`, `👁️ Description`, `🖲️ Icon` +8 | **3%** (кр. 9%) 56/1768/0 | нет |
| `Selection List` | Selection List ✅ | `14536:38144` · Ch | 128 | 9: `👁️ Scroll`, `👁️ Choose all`, `👁️ Action bar`, `👁️ Search`, `View` +4 | **0%** (кр. 0%) 0/1728/0 | ↑ |
| `Action Item` | Action list ✅ | `14409:41231` · Ch | 72 | 7: `𝐓 Text`, `👁️ Icon`, `🖲️ Icon`, `↕ Size`, `📍 Type` +2 | **0%** (кр. 0%) 0/657/0 | MoSCoW `19564:30728` |
| `Action list` | Action list ✅ | `14492:26123` · Ch | 12 | 4: `👁️ Scroll`, `View`, `➡️ Right side`, `🖲️ Icon` | **0%** (кр. 0%) 0/54/0 | ↑ |
| `Modal header` | Modal header ✅ | `17100:18553` · Ch | 32 | 14: `👁️ Description`, `𝐓 Description text`, `𝐓 Title`, `✅ Status`, `✖️ Close` +9 | **76%** (кр. 48%) 552/176/0 | нет |
| `Close button` | Modal header ✅ | `19079:20662` | 4 | 1: `⚙️ State` | **100%** (кр. 100%) 13/0/0 | ↑ |
| `Header` | Modal header ✅ | `15024:16114` · Ch | 2 | 7: `⬅️ Back`, `🔘 Description`, `𝐓 Text Title`, `𝐓 Text Description`, `✅ Status` +2 | **61%** (кр. 88%) 19/11/1 | ↑ |
| `Header 2.0` | Modal header ✅ | `18667:7886` | 2 | 7: `Description`, `Illustration`, `Icon Back`, `Description text`, `Title text` +2 | **53%** (кр. 32%) 20/11/7 | ↑ |
| `Modal` | Modal ✅ | `18908:9356` · Ch | 1 | 2: `Body`, `👁️ Body` | **67%** (кр. 50%) 4/2/0 | нет |
| `Button group` | Buttons group ✅ | `14940:10716` · Ch | 9 | 4: `🔘 Second button`, `↕️ Direction`, `🟰 Gap`, `⬌ Full Width` | **79%** (кр. 100%) 11/2/1 | нет |
| `Tab` | Tabs ✅ | `19398:15862` · Ch | 128 | 10: `👁️ Show Сounter`, `𝐓 Text `, `👁️ Show Icon `, `iconType`, `↕ Size` +5 | **69%** (кр. 100%) 555/173/71 | чек-лист `11202:19468`<br>свободный `19500:12562` |
| `Tabs` | Tabs ✅ | `19398:16535` · Ch | 16 | 5: `tabs`, `↕ Size`, `🔲 Inverted`, `❇️ Icon Only`, `🖇️ Style` | **34%** (кр. 100%) 39/48/28 | ↑ |
| `Notification` | Notification ✅ | `19692:5486` · Ch | 24 | 9: `𝐓 Text `, ` Icon`, `👁️ Actions`, `👁️ Left icon`, `👁️ Close button` +4 | **95%** (кр. 100%) 872/48/0 | секции `19945:9996` |
| `Alert` | Alert ✅ | `12133:4599` · Ch | 72 | 10: `📝 Details`, `✖ Close icon`, `𝐓 Description`, `𝐓 Description text`, `𝐓 Title` +5 | **68%** (кр. 47%) 1227/573/0 | чек-лист `11803:1326`<br>чек-лист `11803:2161`<br>MoSCoW `18255:6659`<br>секции `20011:196707` |
| `toolbar-button` | Text editor toolbar ✅ | `22099:23635` | 8 | 4: `Icon`, `🎨 Theme`, `⚙️ State`, `✔ Selected` | **100%** (кр. 100%) 14/0/0 | секции `22099:23782`<br>секции `22099:23993` |
| `Alignment` | Text editor toolbar ✅ | `22099:23652` | 8 | 2: `Property 1`, `Property 2` | **0%** (кр. —) 0/0/8 | ↑ |
| `Color` | Text editor toolbar ✅ | `22099:23669` | 18 | 2: `Color`, `State` | **100%** (кр. 100%) 54/0/0 | ↑ |
| `Headings` | Text editor toolbar ✅ | `22099:23706` | 12 | 2: `Type`, `State` | **33%** (кр. 50%) 12/0/24 | ↑ |
| `Toolbar units` | Text editor toolbar ✅ | `22099:23743` | 12 | 2: `State`, `Type` | **95%** (кр. 100%) 74/4/0 | ↑ |
| `Text-editor-toolbar` | Text editor toolbar ✅ | `22099:20707` | 124 | 4: `🎨 Mode`, `📌 Type`, `⚙️ State`, `↕ Size` | **79%** (кр. 85%) 2758/0/754 | ↑ |
| + 14 одиночных без properties | Text editor toolbar ✅ | — | — | — | не считалось | ↑ |
| `Rich Text Area` | Rich Text Area ✅ | `22187:5055` · Ch | 30 | 11: `𝐓 Show label`, `👁️ Caption`, `𝐓 Label text`, `𝐓 Input text`, `👁️ Scroll` +6 | **73%** (кр. 86%) 577/182/33 | секции `22187:5333` |
| `Progress-circle-bar` | Progress-circle-bar ✅ | `21086:161011` | 21 | 8: `1-40`, `41-99`, `Text`, `80-99`, `%` +3 | **47%** (кр. 87%) 71/12/67 | нет |
| `Lesson done icon` | Progress-circle-bar ✅ | `21300:16265` | 4 | 2: `Size`, `inverted` | **67%** (кр. 100%) 8/0/4 | ↑ |
| `Sidebar/Item` | Sidebar ✅ | `21818:1370` · Ch | 26 | 11: `👁️ Chevron`, `Label`, `Chevron`, `👁️ Badge`, `👁️ Counter` +6 | **94%** (кр. 100%) 214/13/0 | 13 секций `22381:36525` |
| `Sidebar/Item AI` | Sidebar ✅ | `22699:10143` · Ch | 18 | 10: `👁️ Chevron`, `Label`, `Chevron`, `👁️ Badge`, `👁️ Counter` +5 | **90%** (кр. 83%) 136/9/6 | ↑ |
| `Sidebar/SubItem` | Sidebar ✅ | `22045:4322` · Ch | 9 | 8: `👁️ Counter`, `Icon Regular`, `Label`, `👁️ Badge`, `👁️ Icon` +3 | **90%** (кр. 100%) 80/9/0 | ↑ |
| `Sidebar/SubItem Rail` | Sidebar ✅ | `22127:5459` · Ch | 2 | 1: `Selection` | **67%** (кр. 100%) 4/0/2 | ↑ |
| `Sidebar/Section` | Sidebar ✅ | `22127:5810` · Ch | 8 | 4: `List`, `Mode`, `Expanded`, `Selection` | **73%** (кр. 100%) 22/0/8 | ↑ |
| `Sidebar` | Sidebar ✅ | `22127:6645` · Ch | 2 | 2: `Scroll`, `Mode` | **100%** (кр. 100%) 12/0/0 | ↑ |
| `Sidebar/Popover` | Sidebar ✅ | `22161:10227` | 1 | 1: `List` | **100%** (кр. 100%) 10/0/0 | ↑ |
| `Sidebar/Popover Item` | Sidebar ✅ | `22164:10238` | 9 | 8: `Label`, `👁️ Icon`, `Icon Regular`, `👁️ Counter`, `Dot bage` +3 | **89%** (кр. 100%) 72/9/0 | ↑ |
| `Sidebar/Header` | Sidebar ✅ | `22196:11974` | 2 | 1: `Mode` | **78%** (кр. 50%) 18/2/3 | ↑ |
| `Sidebar / Scrollbar` | Sidebar ✅ | `22491:61807` | 3 | 1: `Position` | **80%** (кр. 0%) 12/0/3 | ↑ |
| + 70 одиночных без properties | Sidebar ✅ | — | — | — | не считалось | ↑ |
| `loader beksar` | Loading-spinner ✅ | `2201:36` | 4 | 1: `state` | **0%** (кр. 0%) 0/0/12 | свободный `22958:72712`<br>секции `23006:491` |
| `Loader` | Loading-spinner ✅ | `22874:152` · U | 18 | 2: `↕ Size`, `❇️ Color` | нет полей | ↑ |
| `Loader / Motion` | Loading-spinner ✅ | `22886:40` · U | 38 | 4: `⚙️ Phase`, `📌 Type`, `◉ Filled`, `≈ Result` | **40%** (кр. 47%) 94/0/142 | ↑ |
| `Control` | Pagination ✅ | `20247:113020` · Ch | 10 | 3: `𝐓 Page`, `☑️ Selected`, `⚙️ State` | **85%** (кр. 100%) 56/10/0 | секции `20391:13260` |
| `Label` | Pagination ✅ | `20328:112637` · Ch | 1 | 1: `𝐓 Text` | **75%** (кр. 100%) 3/1/0 | ↑ |
| `Items` | Pagination ✅ | `20335:112935` · Ch | 4 | 1: `Layout` | **100%** (кр. —) 8/0/0 | ↑ |
| `Pagination` | Pagination ✅ | `20358:112755` · Ch | 2 | 4: `👁️ Controls`, `👁️ Edges`, `👁️ Pages`, `Layout` | **100%** (кр. 100%) 18/0/0 | ↑ |
| `Pagination bar` | Pagination ✅ | `20384:131262` · Ch | 2 | 2: `𝐓 Counter`, `Left side` | **100%** (кр. 100%) 5/0/0 | ↑ |
| `Page size` | Pagination ✅ | `20423:126138` · Ch | 3 | 2: `Open`, `Position` | **100%** (кр. 100%) 11/0/0 | ↑ |
| + 1 одиночных без properties | Pagination ✅ | — | — | — | не считалось | ↑ |
| `Message input` | Chat ✏️ | `10676:24528` · Ch | 6 | 6: `𝐓 Placeholder`, `😀 Show emoji`, `📎 Show file`, `↕ Size`, `⚙️ State` +1 | **0%** (кр. 0%) 0/77/0 | MoSCoW `16638:9566` |
| `Chatroom` | Chat ✏️ | `10676:25032` · Ch | 2 | 1: `↕ Size` | **0%** (кр. 0%) 0/18/0 | ↑ |
| `CommentComposer` | Chat ✏️ | `20103:19063` · Ch | 16 | 18: `𝐓 Label text`, `𝐓 Label`, `✱ Required`, `𝐓 Placeholder`, `𝐓 Filled placeholder` +13 | **7%** (кр. 0%) 32/400/0 | ↑ |
| `EmptyState` | Empty state ✏️ | `858:3726` | 4 | 2: `state`, `size` | **0%** (кр. 0%) 0/4/48 | нет |
| `Empty state` | Empty state ✏️ | `15092:17295` · Ch | 2 | 3: `Title`, `Description`, `📱 Size` | **0%** (кр. 0%) 0/34/6 | ↑ |
| `Table (free-component)` | Table ✏️ | `17382:11339` | 3 | 2: `Type`, `Breakpoint` | **0%** (кр. 0%) 0/15/0 | нет |
| `Table header` | Table ✏️ | `17385:24277` · Ch | 1 | 1: `Content` | **90%** (кр. 100%) 9/1/0 | ↑ |
| `Table header cell` | Table ✏️ | `17403:5300` · Ch | 4 | 5: `Content`, `𝐓 Text`, `👁️ Sort`, `⏹️ Slot`, `⚙️ State` | **79%** (кр. 64%) 26/7/0 | ↑ |
| `Table cell` | Table ✏️ | `17403:5416` · U | 5 | ⚠ ошибка набора | **81%** (кр. 80%) 34/5/3 | ↑ |
| `Table` | Table ✏️ | `17634:111243` · Ch | 1 | 1: `Table content` | **100%** (кр. 100%) 2/0/0 | ↑ |
| + 1 одиночных без properties | Table ✏️ | — | — | — | не считалось | ↑ |
| `Table / Header Cell` | Table (Катя) ✏️ | `20450:298704` · Ch | 1 | 3: `Label`, `Show Checkbox`, `Show Sort` | **56%** (кр. 100%) 5/2/2 | секции `20969:6742`<br>секции `21063:210492` |
| `Table` | Table (Катя) ✏️ | `20449:297165` · Ch | 6 | 13: `Checkbox`, `Content`, `Left content`, `Title`, `SubText` +8 | **60%** (кр. 88%) 54/15/21 | ↑ |
| `Progress-circle` | Table (Катя) ✏️ | `20916:17206` | 16 | 6: `1-40`, `41-99`, `%`, `Size`, `bg` +1 | **48%** (кр. 76%) 50/9/46 | ↑ |
| `filter-button` | Filters ✏️ | `18061:33749` · Ch | 16 | 6: `Counter`, `Show Icon container`, `Count`, `Size`, `Icon button` +1 | **62%** (кр. 100%) 134/58/24 | свободный `19967:1326` |
| `sorting-button` | Sorting ✏️ | `18063:194` · Ch | 16 | 7: `Text`, `Active=True`, `Text`, `Size`, `State` +2 | **78%** (кр. 100%) 112/24/8 | нет |
| `Form/Default/Yes` | Steppers ✏️ | `15829:9326` · Ch | 1 | 2: `Text`, `Icon` | **0%** (кр. 0%) 0/9/0 | нет |
| `Form/Default/Yes` | Steppers ✏️ | `15829:9329` · Ch | 1 | 2: `Text`, `Icon` | **0%** (кр. 0%) 0/9/1 | ↑ |
| `Form/Hover/No` | Steppers ✏️ | `15811:8845` · Ch | 1 | 2: `Text`, `Icon` | **0%** (кр. 0%) 0/9/0 | ↑ |
| `Form/Hover/No` | Steppers ✏️ | `15811:8626` · Ch | 1 | 2: `Text`, `Icon` | **0%** (кр. 0%) 0/9/1 | ↑ |
| `Circle from ` | Steppers ✏️ | `15531:11180` | 5 | 1: `State` | **6%** (кр. 10%) 1/8/7 | ↑ |
| `Subsection ` | Steppers ✏️ | `15531:11189` · Ch | 5 | 4: `Text`, `Type`, `State`, `Done` | **0%** (кр. 0%) 0/23/80 | ↑ |
| `Sidebar/Form 1` | Steppers ✏️ | `15531:11417` · Ch | 10 | 1: `Stages` | **0%** (кр. 0%) 0/60/10 | ↑ |
| `Sidebar/Form 2` | Steppers ✏️ | `15810:7166` · Ch | 9 | 1: `Property 3` | **0%** (кр. 0%) 0/54/9 | ↑ |
| `Sidebar` | Steppers ✏️ | `15810:7375` · Ch | 2 | 1: `State` | нет полей | ↑ |
| `item profile` | Steppers ✏️ | `15851:21789` · Ch | 3 | 6: `Text`, `Icon`, `Suspections`, `Chevron`, `State` +1 | **0%** (кр. 0%) 0/27/3 | ↑ |
| `Profile` | Steppers ✏️ | `17269:6452` · Ch | 4 | 5: `Text`, `Icon`, `Can open`, `State`, `Subsection` | **0%** (кр. 0%) 0/36/2 | ↑ |
| `Circle` | Steppers ✏️ | `17269:6519` | 5 | 1: `State` | **0%** (кр. 0%) 0/9/7 | ↑ |
| `Subsection ` | Steppers ✏️ | `17269:6528` · Ch | 5 | 2: `Text`, `State` | **0%** (кр. 0%) 0/22/80 | ↑ |
| `Form` | Steppers ✏️ | `15531:11113` · Ch | 6 | 4: `Text`, `Icon`, `State`, `Active` | **0%** (кр. 0%) 0/54/3 | ↑ |
| `Sidebar` | Steppers ✏️ | `17822:4615` · Ch | 2 | 1: `Mode` | нет полей | ↑ |
| `steps` | Steppers ✏️ | `16665:10048` | 5 | 1: `state` | **0%** (кр. 0%) 0/0/270 | ↑ |
| + 1 одиночных без properties | Steppers ✏️ | — | — | — | не считалось | ↑ |
| `Events popover` | Event popover ✏️ | `23497:4860` · U | 1 | 3: `Show title`, `Show sent`, `Show approved` | **100%** (кр. 100%) 14/0/0 | нет |
| `Tools panel` | Tool head panel | `21059:18214` · Ch | 4 | 2: `Left panel open`, `Text state` | **31%** (кр. 100%) 32/0/72 | нет |
| 20 наборов логотипов (`Mycar`, `Hyundai`, `BMW`, `Logos`, `My car logos`…) | Логотипы партнеров | `7447:37` (стр.) | 2–44 | `type`/`size`/`color` | **0%** 0/40/410 | нет |
| `status` | Table ↳ | `16116:42729` | 4 | 3: `signed`, `online`, `process` | **0%** (кр. 0%) 0/38/20 | нет |
| + 1 одиночных без properties | Table ↳ | — | — | — | не считалось | ↑ |
| `file_default` | File ↳ | `900:3195` | 7 | 1: `Type` | **0%** (кр. 0%) 0/0/35 | нет |
| `Files_colored` | File ↳ | `900:3258` | 12 | 1: `type` | **0%** (кр. 0%) 0/0/79 | ↑ |
| `placeholder` | File ↳ | `902:1019` | 10 | 6: `Size`, `Default`, `On hover`, `Loder`, `Failed` +1 | **0%** (кр. 0%) 0/0/90 | ↑ |
| `Document upload` | File ↳ | `902:1830` · Ch | 8 | 2: `state`, `size` | **0%** (кр. 0%) 0/32/96 | ↑ |
| + 1 одиночных без properties | File ↳ | — | — | — | не считалось | ↑ |
| `Error page` | Error page ↳ | `855:5457` | 2 | 1: `state` | **0%** (кр. 0%) 0/0/14 | нет |
| `atom` | Breadcrumb ↳ | `41:4471` | 2 | 2: `Text`, `active` | **0%** (кр. 0%) 0/0/6 | нет |
| + 1 одиночных без properties | Breadcrumb ↳ | — | — | — | не считалось | ↑ |
| `Widget` | Widgets ↳ | `412:4671` | 11 | 2: ` notification`, `View` | **0%** (кр. 0%) 0/0/413 | нет |
| `Header` | Header ↳ | `412:4933` | 2 | 1: `Size` | **0%** (кр. 0%) 0/0/18 | нет |
| `Hidden info` | Skeleton ↳ | `7376:62720` | 3 | 1: `Var` | **0%** (кр. 0%) 0/0/5 | нет |
| `Logo`, `Component 1` (U, ⚠ ошибка набора), `Logo Mylink Favicon`, `mylink team logo` (U) | ⌘ Logos | `3:3` (стр.) | 3–9 | — | не считалось | нет |
| 2746 иконок (одиночные COMPONENT, 66 групп) | ⌘ Icons | `825:3224` (стр.) | — | — | не считалось | нет |

## Не использовать
| Компонент | node | Почему | Вместо |
|---|---|---|---|
| `OLD Badge` | `9763:4426` | OLD в имени, 0% Tokens; опубликован (key `459ba140…`) | `Badge` `23457:2960` (key `8da66ed6…`, 100% Tokens) |
| `Badge` (Navigation) | `19983:26254` | дубль имени, 4 варианта `Type`, лежит на служебной странице Navigation рядом с `Component card`; опубликован (key `5b06d8ef…`) — третий «Badge» в поиске | `Badge` `23457:2960` |
| `Date picker (старое)` | `12857:14972` | «старое» в имени, 0% Tokens | `Date picker` `16819:11812` |
| `Mycar PRO old - menu` | `7449:237` | old в имени | `Mycar PRO new - menu` `7449:216` |
| `Progress-circle` | `20916:17206` | дубль: те же properties, что у `Progress-circle-bar` (там ещё `Text`, `80-99`); лежит на ✏️ Table (Катя) | TODO: `Progress-circle-bar` `21086:161011`? |
| `EmptyState` / `Empty state` | `858:3726` / `15092:17295` | два набора на одной странице, оба 0% Tokens | TODO |
| `loader` / `Loader` / `loader beksar` | `7610:2038` / `22874:152` / `2201:36` | три лоадера: на Button (`Property 1`), новый `Loader` не опубликован, `loader beksar` без переменных | TODO |
| `Header` / `Header 2.0` | `15024:16114` / `18667:7886` | две версии хедера модалки + `Header` `412:4933` на ↳ Header | TODO |
| `Table` ×2 | `17634:111243` / `20449:297165` | одинаковое имя на ✏️ Table и ✏️ Table (Катя); ещё `Table` `1406:457` на ↳ Table | TODO |
| `Sidebar` ×2, `Sidebar/Form 1`, `Sidebar/Form 2`, `Sidebar/Profile` (Steppers) | `15810:7375`, `17822:4615`, `15531:11417`, `15810:7166`, `15531:11432` | имя пересекается с `Sidebar` `22127:6645` и `Sidebar/*` | переименовать (TODO) |
| `Subsection ` ×2, `Form/Default/Yes` ×2, `Form/Hover/No` ×2 (Steppers) | `15531:11189`/`17269:6528`, `15829:9326`/`15829:9329`, `15811:8845`/`15811:8626` | дубли имён внутри страницы | TODO |
| `Component 1` ×2 | `8655:131` (⌘ Logos) / `16554:7659` (Ресурсы) | безымянные наборы | TODO |

## Служебные страницы
⛳️ Start here (`151:8612`), Navigation (`20003:1971`: `Component card`, `Badge`, `Meta`, гайд `Component Card Guideline` `20000:638`), Changelog & UI bugs (`18565:118084`: `task type`), Обсудить (`19973:9826`: `Content Panel`, `Card`), Components logic (`20695:3806`, пустая), Ресурсы (`7449:605`: `Component 1`, `Notification (iPhone)`, `iPhone/Notification (Unlocked)`), Roadmap (`8709:3221`), Archive (`175:3448`, пустая), Memes (`6295:85`), Обложки (`8734:1467`: 7 компонентов обложек), Checklist (`4006:3941`: `list item`), Cover (`0:1`); разделители `-------`, `------`, `----------------------------`, `-`; заголовки разделов ✦ CROSS-PLATFORM (`4003:1718`) и ✦ Web-kit (`16289:567`) — пустые.

## Замечания
- **Старые переменные — «висячие».** Коллекции `Semantic`, `Numbers`, `Typography`, `Primitives` (в таблице «old») локальные (`remote=false`), но в файле их нет: `getLocalVariableCollectionsAsync` пуст, в коллекциях 0 переменных. Привязки остались от удалённых коллекций. Ещё старые привязки ведут в недоступные библиотеки: `Typography` (не Tokens), `Primitives`, `Themes`, `theme`, `Size`, плюс `Number Values` из `[OLD] Mўlo DS`. `screenSize` в посчитанных наборах не встретился.
- Коллекция Tokens `Semantic colors` в части привязок видна под старым именем `Semantic` (тот же key `b6cb7279…`) — по имени её легко спутать со старой.
- Цифры отличаются от известной выборки: Badge 100% и OLD Badge 0% совпадают, остальные нет — выборку считали иначе. `button ` — 80% по краскам, но 37% всего (числа и типографика в основном старые). `Sidebar` — 100%; если считать и вложенные инстансы, выходит 75%. `Inputs kit` — 0% по краскам.
- Из 148 наборов у 18 ≥90% Tokens, у 76 — 0% (из них 29 вообще без переменных: ↳‑страницы, логотипы, `Flags`, `steps`, `Widget`).
- Публикация: 84 набора `Ch` (неопубликованные правки), 6 `U`: `Loader`, `Loader / Motion`, `Table cell`, `Events popover`, `Changan Auto`, `Component 1`. У `Table cell` `17403:5416`, `Changan Auto` `7449:476`, `Component 1` `8655:131` — «Component set has existing errors» (конфликт вариантов).
- Sidebar: секция `22127:6467` и гайд `22381:36525` (13 секций) есть и в main — единственный гайд в новом формате. Правки из ветки `ahiQGs5RWn9cX6wCqlZUgz` здесь не видны.
- Пробелы в конце: `button `, `Circle from `, `Subsection `, `Mycar PRO new `, страницы `Tooltip `, `Scroll `, `Rich Text Area `; в properties: `Left Icon `, `𝐓 Text `, `👁️ Show Icon `, пробел в начале: ` 𝐓 Loading Text `, ` Icon` (Notification), ` notification` (Widget).
- Двойные пробелы: `👉 Right  Icon` (`button `, `white button`), `👉 Show Right  Icon` (`link button`); в Toast 1–4 пробела после `𝐓` (`𝐓   Info title`).
- `Property 1/2/3`: `loader`, `Alignment`, `Sidebar/Form 2`, `Meta`.
- Разные эмодзи у одного смысла: Style — `🎨 Style` (Badge) и `🖇️ Style` (button, Tab, Notification); Type — `📌 Type` и `📍 Type` (Date picker, Action Item); Size — `↕ Size`, `≈≈ Size` (Standard input), `Size`; `⚙️. State` (Tab, с точкой); у Sidebar/*, Popover, Tooltip, Chips эмодзи нет. Значения Style тоже разные: Button `Blue/Neutral/Critical`, Notification `Primary/Critical/Success/Warning`, Tab `Filled/Inline`.
- Pale / Pale blue: Badge `Pale blue`, Skeleton `Style: Gray/Pale`, Sidebar-иконки `Sidebar/Pale/*` и `Icon Pale`. Серый везде `Gray` (Grey не встретился).
- Кириллица внутри латиницы: `🔢 Сurrency` (Standard input), `👁️ Show Сounter` (Tab). Опечатки: `Icon FIlled`, `Dot bage`, `Icon buton`, `Loder`, `Suspections`, `Color schme`, `horizontal scroll croll asset`, фрейм `Guidline` (Tabs).
- Регистр и стиль имён вперемешку: `state`/`State`, `size`/`Size`; `filter-button`, `sorting-button`, `toolbar-button` в kebab-case рядом с `Filter chips`.
- ⌘ Icons: 2746 иконок, но уникальных имён 1384 — почти каждое имя встречается дважды (группы 01–29 повторяются, есть группа `outline`). Поиск по имени иконки даёт две разные.
- Страницы без компонентов: ✏️ Actions panel (только MoSCoW-фрейм), ↳ Footer (один `Footer` без properties), Archive и Components logic пустые, ✦ CROSS-PLATFORM / ✦ Web-kit.
- Дубли гайдов: на Avatars, Toast, Alert одновременно `checklist ds` и `Check list`; на Text editor toolbar два фрейма `text-editor-toolbar-guideline`; на Chips — три гайд-фрейма.
- Страница без префикса статуса `Tool head panel` стоит среди ✏️ и содержит `Tools panel` (100% по краскам).

## TODO
- Что значат статусы: ✅ — готов и опубликован? ✏️ — в работе? ↳ — подстраницы или legacy? (они после разделителя в конце файла, 0% Tokens.)
- Какой `Badge` канонический? По данным — `Badge` `23457:2960` (key `8da66ed6…`), а `Badge` на Navigation (`5b06d8ef…`) служебный. Подтвердить и снять публикацию служебного или переименовать его.
- Дубли из «Не использовать» с пометкой TODO: какой оставить (`EmptyState`/`Empty state`, три лоадера, `Header`/`Header 2.0`, два `Table`, `Progress-circle`).
- Старые «висячие» коллекции (`Semantic`, `Numbers`, `Typography`, `Primitives`): мигрировать привязки на Tokens или это осознанный legacy?
- Статус `Ch` у 84 наборов: публикация отложена намеренно?

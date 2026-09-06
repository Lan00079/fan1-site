// fan1.top site-wide i18n — shared across index/games/kw*/privacy/changelog
// Language preference stored in localStorage key "fan1_lang" (default "zh")
(function () {
  var SITE_I18N = {
    zh: {
      // nav
      navHome: "首页",
      navGames: "游戏库",
      navDownload: "下载工具",
      navPrivacy: "隐私政策",
      langBtn: "EN",
      // index.html
      pageTitle: "fan1 汉化工具 - 日本网页游戏一键中文化下载",
      pageDesc: "fan1 汉化工具：日本 freem 网页游戏一键汉化，RPG Maker MV/MZ 与 Wolf RPG 引擎支持，内置 AI 翻译与人工校对，下载即用。",
      heroTitle: "fan1 汉化工具",
      heroSub: "日本 freem 网页游戏 · 一键中文化 · 下载即用",
      badgeMV: "RPG Maker MV / MZ",
      badgeWolf: "Wolf RPG",
      badgeAI: "AI 翻译 + 人工校对",
      badgeWin: "Windows 免安装",
      dlTitle: "下载 fan1 汉化工具",
      dlMeta: "v1.6 · Windows 7+ · 约 149MB · 绿色免安装，解压即用",
      dlBtn: "⬇ 立即下载（zip · 92MB）",
      dlMirror: "国内下载慢？点此加速镜像 ↗",
      dlHint: "解压后双击 freem-cn.exe 即用（附使用说明.txt）",
      dlWarn: '⚠ 浏览器提示"文件可能存在危险"？本工具为无签名绿色软件——点击下载条右侧 ⋮ → 保留 即可。工具完全本地运行、不联网收集数据，可自行病毒扫描验证。',
      whatTitle: "它是什么",
      whatBody: '一个为日本 <b>freem.ne.jp</b> 网页游戏社区打造的本地汉化工具：粘贴游戏编号或网址，自动下载、提取文本、AI 翻译、注入运行——全程在本机完成，游戏更新后译文自动续用。',
      featEngine: "🎮 全引擎覆盖",
      featEngineDesc: "RPG Maker MV/MZ 与 Wolf RPG 双引擎结构化提取，文本零漏译。",
      featAI: "🤖 AI + 人工双轨",
      featAIDesc: "内置任意 OpenAI 兼容接口接入；译文人话风格可调，支持逐条人工校对。",
      featSpeed: "🚀 极速体验",
      featSpeedDesc: "三镜像并行下载与启动预取加速，游玩全程本地缓存毫秒级响应。",
      featLocal: "🔒 本地运行",
      featLocalDesc: "单文件绿色版，配置与游戏数据全部留在自己电脑上。",
      updatesTitle: "最新动态",
      updatesAll: "查看全部更新 →",
      stepsTitle: "三步开玩",
      step1: "<b>下载并双击运行</b> —— 工具自动在浏览器打开控制台页面。",
      step2: '<b>粘贴游戏编号</b>（freem.ne.jp 游戏页 URL 里的数字），点击"启动"—— 下载、提取、翻译自动完成。',
      step3: '<b>点击"进入游戏"</b> —— 享受中文版！进度存档与原版一致。',
      stepsNote: '翻译需要配置一个 AI 接口（任意 OpenAI 兼容 API，如小米 MiMo 等），在控制台"翻译接口"卡里填入即可。',
      faqTitle: "常见问题",
      faqSafe: "<b>安全吗？</b>工具完全本地运行，不收集任何数据；杀毒软件误报可加白名单（绿色单文件常见）。",
      faqDiff: "<b>和直接玩日文版有什么区别？</b>剧情、菜单、物品全部中文化，且保留原版存档兼容。",
      faqSupport: "<b>支持哪些游戏？</b>freem.ne.jp 上的 RPG Maker MV/MZ 网页版与 Wolf RPG 下载版。",
      footerLine1: "fan1.top · fan1 汉化工具官方网站 · ",
      footerLine2: "本站与 freem.ne.jp 无关联；游戏版权归原作者所有，译文仅供学习交流",
      // games.html
      gamesTitle: "已收录游戏库 - fan1 汉化工具",
      gamesDesc: "fan1 汉化工具已收录的 freem 免费游戏库：RPG Maker MV/MZ 与 WOLF RPG Editor 作品，持续更新中。",
      gamesH1: "已收录游戏库",
      gamesSub: "已收录 281 款 freem 免费游戏，本批生成 90 款详情页，持续扩充中。点击卡片查看详情与原页下载。",
      gamesFooter: "fan1.top · fan1 汉化工具 · ",
      gamesFooterDisc: "游戏版权归原作者所有，译文仅供学习交流",
      // privacy.html
      privTitle: "隐私政策 - fan1 汉化工具",
      privH1: "隐私政策",
      privMeta: "fan1.top · fan1 汉化工具 · 更新于 2026-09",
      privLocalH2: "工具本地运行",
      privLocalP: "fan1 汉化工具完全在您的电脑上本地运行，不收集、不上传任何个人信息。",
      privLocalLi1: "您的翻译接口配置（API 地址/密钥）仅保存在本机 exe 同目录的 games 文件夹，不经过我们的服务器。",
      privLocalLi2: "游戏数据、缓存与译文全部保存在本地，删除 games 文件夹即彻底清除。",
      privSiteH2: "本网站（fan1.top）",
      privSiteLi1: "本站为静态页面（GitHub Pages），不设用户账号、不设登录、不收集表单信息。",
      privSiteLi2: "本站接入第三方广告服务（HilltopAds），它们可能通过 Cookie 采集访问数据用于广告投放，详见服务商隐私政策。您可通过浏览器设置管理或清除 Cookie。",
      privNetH2: "工具的网络行为",
      privNetLi1: "下载游戏资源时连接 freem.ne.jp 及其 CDN（fgamearchives.com / fplay.xyz）。",
      privNetLi2: "启动时的版本检查仅访问 GitHub Releases 读取最新版本号，不含任何个人标识。",
      privNetLi3: "工具内广告（如启用）由第三方广告服务商按其政策处理。",
      privContactH2: "联系方式",
      privContactP: "对本政策有疑问可通过 GitHub 仓库 issue 联系。",
      backHome: "← 返回首页",
      // changelog.html
      clTitle: "更新日志 - fan1 汉化工具",
      clH1: "更新日志",
      clMeta: "fan1.top · fan1 汉化工具 · 新汉化与新功能会在这里第一时间公布",
      clLoading: "加载中…",
      clEmpty: "暂无更新记录。",
      clError: "更新记录加载失败，请稍后重试。",
      // kw common
      kwCtaBtn: "⬇ 立即下载 fan1 汉化工具",
      kwCtaSub: "Windows 7+ · 约 149MB · 绿色免安装，解压即用",
      kwFeatTitle: "它能做什么",
      kwFeat1: "<b>双引擎覆盖</b> —— RPG Maker MV / MZ 与 WOLF RPG Editor 结构化提取，文本零漏译。",
      kwFeat2: "<b>AI + 人工双轨</b> —— 内置任意 OpenAI 兼容接口；译文人话风格可调，支持逐条人工校对。",
      kwFeat3: "<b>本机运行 · 不联网</b> —— 单文件绿色版，配置与游戏数据全部留在自己电脑，不上传任何数据。",
      kwFeat4: "<b>极速体验</b> —— 多镜像并行下载与本地缓存，启动和游玩都快。",
      kwFeat5: "<b>译文续用 · 存档兼容</b> —— 游戏更新后已有译文自动续用，进度存档与原版一致。",
      kwStepsTitle: "三步开玩",
      kwStep1: "<b>下载并双击运行</b> —— 工具自动在浏览器打开控制台。",
      kwStep2: '<b>粘贴游戏编号</b>（freem 游戏页 URL 里的数字），点击"启动" —— 下载、提取、翻译自动完成。',
      kwStep3: '<b>点击"进入游戏"</b> —— 享受中文版！',
      kwRelPrefix: "相关：",
      kwDisc: "fan1 汉化工具完全在你的电脑上本地运行，不收集、不上传任何个人信息。游戏本体版权归原作者，本站仅提供工具与索引、与 freem.ne.jp 无关联，译文仅供学习交流。",
      kwFooter: "fan1.top · fan1 汉化工具 · ",
      kwFooterDisc: "游戏版权归原作者所有，译文仅供学习交流",
      // kw page-specific titles/descriptions
      kwRpgTitle: "RPG Maker MV MZ 汉化 - fan1 汉化工具",
      kwRpgDesc: "用 fan1 汉化工具把 RPG Maker MV、MZ 做的日文游戏一键翻成中文：结构化提取文本、AI 翻译、注回工程，菜单剧情物品不漏译。",
      kwRpgH1: "RPG Maker MV / MZ 游戏怎么汉化？",
      kwRpgP1: '很多优秀的日式独立游戏是用 <b>RPG Maker MV、MZ</b> 制作的，发布在 freem 等平台，却只有日文。fan1 汉化工具专门解决这件事——把 MV/MZ 工程里的文本<b>结构化提取</b>出来，用 AI 翻成中文再<b>注回去</b>，菜单、剧情、物品名一次到位，不漏译。',
      kwRpgP2: "不需要你懂日文，也不用手动改文件。粘贴一个游戏编号，工具自动完成下载、提取、翻译和注入，翻完直接就能玩中文版。",
      kwWolfTitle: "WOLF RPG Editor 汉化 ウディタ - fan1 汉化工具",
      kwWolfDesc: "用 fan1 汉化工具汉化 WOLF RPG Editor（ウディタ）做的日文游戏：解析工程、提取文本、AI 翻译注回，保留原版存档兼容。",
      kwWolfH1: "WOLF RPG Editor（ウディタ）游戏汉化",
      kwWolfP1: '<b>ウディタ（WOLF RPG Editor）</b>是另一款在日本独立圈很流行的游戏引擎。fan1 同样支持它的汉化流程：解析工程数据、提取可译文本、AI 翻译后再写回，整个过程在本机完成，并<b>保留与原版通用的存档</b>。',
      kwWolfP2: "和 RPG Maker 作品一样，你只需提供游戏来源，剩下的下载、翻译、打包都由工具自动处理。",
      kwFreemTitle: "freem 游戏 中文 ふりーむ 汉化 - fan1 汉化工具",
      kwFreemDesc: "freem（ふりーむ）上的日文免费游戏一键汉化：fan1 工具自动下载、AI 翻译、注入中文，RPG Maker 与 Wolf RPG 双引擎支持。",
      kwFreemH1: "freem（ふりーむ）日文免费游戏怎么变中文？",
      kwFreemP1: '<b>freem.ne.jp</b>（ふりーむ）是日本最大的免费独立游戏平台之一，上面有大量优秀的 RPG、解谜、恐怖等小游戏——但几乎全是日文。fan1 汉化工具就是为这些游戏而生：粘贴游戏编号或网址，自动下载、提取文本、AI 翻译、注入运行，<b>全程在本机完成</b>。',
      kwFreemP2: "支持 RPG Maker MV/MZ 网页版与 Wolf RPG 下载版两大主流引擎，覆盖绝大多数 freem 作品。",
      kwWebTitle: "网页游戏 汉化工具 日文游戏 一键汉化 - fan1 汉化工具",
      kwWebDesc: "日文网页游戏一键汉化工具：支持 freem 平台的 RPG Maker MV/MZ 与 Wolf RPG，AI 翻译+人工校对，本地运行不联网。",
      kwWebH1: "日文网页游戏一键汉化工具",
      kwWebP1: '喜欢玩日本 freem 上的网页游戏却被日文劝退？fan1 汉化工具帮你<b>一键汉化</b>：粘贴游戏链接，自动下载、提取、翻译、注入——不用懂日文、不用改文件，翻完直接在浏览器里玩中文版。',
      kwWebP2: "支持 RPG Maker MV/MZ 网页版与 Wolf RPG 下载版，覆盖 freem 上绝大多数作品。工具完全本地运行，不上传任何数据。",
      kwJrpgTitle: "日式 RPG 中文 汉化 下载 - fan1 汉化工具",
      kwJrpgDesc: "日式 RPG 中文汉化下载：fan1 工具把 freem 上的日文 RPG Maker / Wolf RPG 游戏翻译成中文，AI+人工双轨，下载即用。",
      kwJrpgH1: "日式 RPG 中文汉化下载",
      kwJrpgP1: '想找<b>日式 RPG 中文版</b>？freem 上有大量优质日式独立 RPG，但几乎都是日文。fan1 汉化工具帮你把它们翻译成中文：粘贴游戏编号，自动下载、AI 翻译、注入运行——<b>菜单、剧情、物品名全覆盖</b>，进度存档与原版兼容。',
      kwJrpgP2: "支持 RPG Maker MV/MZ 与 Wolf RPG 双引擎，覆盖 freem 上绝大多数日式 RPG 作品。"
    },
    en: {
      navHome: "Home",
      navGames: "Games",
      navDownload: "Download",
      navPrivacy: "Privacy",
      langBtn: "中文",
      pageTitle: "fan1 Localization Tool - One-Click Japanese Web Game Translation",
      pageDesc: "fan1 Localization Tool: One-click translation for Japanese freem web games. Supports RPG Maker MV/MZ and Wolf RPG with built-in AI translation and manual proofreading.",
      heroTitle: "fan1 Localization Tool",
      heroSub: "Japanese freem Web Games · One-Click Translation · Ready to Play",
      badgeMV: "RPG Maker MV / MZ",
      badgeWolf: "Wolf RPG",
      badgeAI: "AI Translation + Proofreading",
      badgeWin: "Windows Portable",
      dlTitle: "Download fan1 Localization Tool",
      dlMeta: "v1.6 · Windows 7+ · ~149MB · Portable, no installation needed",
      dlBtn: "⬇ Download Now (zip · 92MB)",
      dlMirror: "Slow download? Try mirror ↗",
      dlHint: "Unzip and double-click freem-cn.exe to start (includes readme.txt)",
      dlWarn: '⚠ Browser warns "file may be dangerous"? This is an unsigned portable app — click ⋮ → Keep on the download bar. The tool runs entirely locally and collects no data. Feel free to virus-scan it yourself.',
      whatTitle: "What Is It?",
      whatBody: 'A local localization tool built for the Japanese <b>freem.ne.jp</b> web game community: paste a game ID or URL, and it automatically downloads, extracts text, translates with AI, and injects the translation — all done on your machine. Translations persist through game updates.',
      featEngine: "🎮 Full Engine Coverage",
      featEngineDesc: "Structured extraction for RPG Maker MV/MZ and Wolf RPG — zero missed strings.",
      featAI: "🤖 AI + Manual Dual Track",
      featAIDesc: "Connect any OpenAI-compatible API; adjustable translation style with per-line manual proofreading.",
      featSpeed: "🚀 Lightning Fast",
      featSpeedDesc: "Triple-mirror parallel downloads and startup prefetch for instant local gameplay.",
      featLocal: "🔒 Runs Locally",
      featLocalDesc: "Single-file portable edition — all config and game data stays on your computer.",
      updatesTitle: "Latest Updates",
      updatesAll: "View all updates →",
      stepsTitle: "Three Steps to Play",
      step1: "<b>Download & run</b> — the tool opens a console page in your browser automatically.",
      step2: '<b>Paste the game ID</b> (the number in the freem.ne.jp game page URL), click "Start" — download, extraction, and translation happen automatically.',
      step3: '<b>Click "Enter Game"</b> — enjoy the localized version! Save files are compatible with the original.',
      stepsNote: 'Translation requires an AI API endpoint (any OpenAI-compatible API, e.g. MiMo). Configure it in the "Translation API" card on the console.',
      faqTitle: "FAQ",
      faqSafe: "<b>Is it safe?</b> The tool runs entirely locally and collects no data. Antivirus false positives are common for portable apps — add to whitelist if needed.",
      faqDiff: "<b>How is it different from playing in Japanese?</b> Story, menus, and items are all translated, while maintaining save file compatibility with the original.",
      faqSupport: "<b>Which games are supported?</b> RPG Maker MV/MZ web versions and Wolf RPG downloads from freem.ne.jp.",
      footerLine1: "fan1.top · fan1 Localization Tool Official Site · ",
      footerLine2: "Not affiliated with freem.ne.jp; game copyrights belong to their respective authors. Translations are for learning purposes only.",
      gamesTitle: "Game Library - fan1 Localization Tool",
      gamesDesc: "freem free game library indexed by fan1 Localization Tool: RPG Maker MV/MZ and WOLF RPG Editor titles, continuously expanding.",
      gamesH1: "Game Library",
      gamesSub: "281 freem free games indexed, 90 detail pages generated in this batch. More coming soon. Click a card for details and original download.",
      gamesFooter: "fan1.top · fan1 Localization Tool · ",
      gamesFooterDisc: "Game copyrights belong to their respective authors. Translations are for learning purposes only.",
      privTitle: "Privacy Policy - fan1 Localization Tool",
      privH1: "Privacy Policy",
      privMeta: "fan1.top · fan1 Localization Tool · Updated 2026-09",
      privLocalH2: "Tool Runs Locally",
      privLocalP: "fan1 Localization Tool runs entirely on your computer. It does not collect or upload any personal information.",
      privLocalLi1: "Your translation API configuration (endpoint/key) is saved only in the games folder next to the exe — it never passes through our servers.",
      privLocalLi2: "Game data, cache, and translations are all stored locally. Deleting the games folder removes everything.",
      privSiteH2: "This Website (fan1.top)",
      privSiteLi1: "This is a static site (GitHub Pages) with no user accounts, no login, and no form data collection.",
      privSiteLi2: "Third-party ad services (HilltopAds) may use cookies for ad targeting. See their privacy policies for details. You can manage or clear cookies via your browser settings.",
      privNetH2: "Tool Network Activity",
      privNetLi1: "Downloads game resources from freem.ne.jp and its CDNs (fgamearchives.com / fplay.xyz).",
      privNetLi2: "Version check on startup only reads the latest version number from GitHub Releases — no personal identifiers are sent.",
      privNetLi3: "In-tool ads (if enabled) are handled by third-party ad providers per their own policies.",
      privContactH2: "Contact",
      privContactP: "For questions about this policy, please open an issue on the GitHub repository.",
      backHome: "← Back to Home",
      clTitle: "Changelog - fan1 Localization Tool",
      clH1: "Changelog",
      clMeta: "fan1.top · fan1 Localization Tool · New translations and features are announced here first",
      clLoading: "Loading…",
      clEmpty: "No update records yet.",
      clError: "Failed to load updates. Please try again later.",
      kwCtaBtn: "⬇ Download fan1 Localization Tool",
      kwCtaSub: "Windows 7+ · ~149MB · Portable, no installation needed",
      kwFeatTitle: "What It Can Do",
      kwFeat1: "<b>Dual Engine Coverage</b> — Structured extraction for RPG Maker MV/MZ and WOLF RPG Editor. Zero missed strings.",
      kwFeat2: "<b>AI + Manual Dual Track</b> — Connect any OpenAI-compatible API; adjustable style with per-line proofreading.",
      kwFeat3: "<b>Runs Locally</b> — Single-file portable edition. All config and game data stays on your machine.",
      kwFeat4: "<b>Lightning Fast</b> — Multi-mirror parallel downloads and local caching for instant gameplay.",
      kwFeat5: "<b>Persistent Translations</b> — Existing translations carry over after game updates. Save files stay compatible.",
      kwStepsTitle: "Three Steps to Play",
      kwStep1: "<b>Download & run</b> — the tool opens a console page in your browser.",
      kwStep2: '<b>Paste the game ID</b> (the number in the freem game page URL), click "Start" — download, extraction, and translation happen automatically.',
      kwStep3: '<b>Click "Enter Game"</b> — enjoy the localized version!',
      kwRelPrefix: "Related: ",
      kwDisc: "fan1 Localization Tool runs entirely on your computer. It does not collect or upload any personal data. Game copyrights belong to their respective authors. This site provides tools and indexes only and is not affiliated with freem.ne.jp. Translations are for learning purposes only.",
      kwFooter: "fan1.top · fan1 Localization Tool · ",
      kwFooterDisc: "Game copyrights belong to their respective authors. Translations are for learning purposes only.",
      kwRpgTitle: "RPG Maker MV MZ Localization - fan1 Tool",
      kwRpgDesc: "Translate RPG Maker MV/MZ Japanese games to Chinese/English with fan1: structured text extraction, AI translation, re-injection. Menus, story, and items fully covered.",
      kwRpgH1: "How to Localize RPG Maker MV / MZ Games?",
      kwRpgP1: 'Many excellent Japanese indie games are made with <b>RPG Maker MV and MZ</b>, published on platforms like freem — but only in Japanese. fan1 Localization Tool solves this: it <b>structurally extracts</b> text from MV/MZ projects, translates it with AI, and <b>injects it back</b>. Menus, story dialogue, and item names are all covered in one pass.',
      kwRpgP2: "No Japanese knowledge or manual file editing required. Paste a game ID and the tool handles download, extraction, translation, and injection automatically.",
      kwWolfTitle: "WOLF RPG Editor Localization - fan1 Tool",
      kwWolfDesc: "Localize WOLF RPG Editor (Wodita) Japanese games with fan1: parse project data, extract text, AI translate and re-inject. Save files stay compatible.",
      kwWolfH1: "WOLF RPG Editor (Wodita) Game Localization",
      kwWolfP1: '<b>WOLF RPG Editor (Wodita)</b> is another popular game engine in the Japanese indie scene. fan1 supports its localization workflow too: parse project data, extract translatable text, translate with AI, and write it back — all done locally, with <b>save files compatible with the original</b>.',
      kwWolfP2: "Just like RPG Maker titles, you only need to provide the game source. The tool handles download, translation, and packaging automatically.",
      kwFreemTitle: "freem Games Translation - fan1 Tool",
      kwFreemDesc: "One-click translation for freem Japanese free games: fan1 auto-downloads, AI translates, and injects. Supports RPG Maker and Wolf RPG dual engines.",
      kwFreemH1: "How to Translate freem Japanese Free Games?",
      kwFreemP1: '<b>freem.ne.jp</b> is one of Japan\'s largest free indie game platforms, hosting tons of great RPGs, puzzle games, and horror titles — almost all in Japanese. fan1 Localization Tool is built for these games: paste a game ID or URL, and it auto-downloads, extracts text, translates with AI, and injects the result — <b>all done on your machine</b>.',
      kwFreemP2: "Supports both RPG Maker MV/MZ web versions and Wolf RPG downloads, covering the vast majority of freem titles.",
      kwWebTitle: "Web Game Localization Tool - fan1",
      kwWebDesc: "One-click localization for Japanese web games: supports freem platform RPG Maker MV/MZ and Wolf RPG. AI translation + manual proofreading, runs locally.",
      kwWebH1: "One-Click Japanese Web Game Localization",
      kwWebP1: 'Love Japanese freem web games but held back by the language barrier? fan1 Localization Tool helps you <b>localize in one click</b>: paste a game link, and it auto-downloads, extracts, translates, and injects — no Japanese knowledge or file editing needed. Play the localized version right in your browser.',
      kwWebP2: "Supports RPG Maker MV/MZ web versions and Wolf RPG downloads, covering most freem titles. The tool runs entirely locally and uploads nothing.",
      kwJrpgTitle: "Japanese RPG Localization Download - fan1 Tool",
      kwJrpgDesc: "Japanese RPG localization download: fan1 translates freem Japanese RPG Maker / Wolf RPG games with AI + manual dual track. Download and play.",
      kwJrpgH1: "Japanese RPG Localization Download",
      kwJrpgP1: 'Looking for <b>Japanese RPGs in your language</b>? freem hosts tons of quality indie Japanese RPGs, but almost all are in Japanese. fan1 Localization Tool translates them for you: paste a game ID, and it auto-downloads, AI-translates, and injects — <b>menus, story, and items all covered</b>. Save files remain compatible with the original.',
      kwJrpgP2: "Supports RPG Maker MV/MZ and Wolf RPG dual engines, covering the vast majority of Japanese RPG titles on freem."
    }
  };

  // Expose globally
  window.SITE_I18N = SITE_I18N;

  function detectBrowserLang() {
    try {
      var cands = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "zh"];
      for (var i = 0; i < cands.length; i++) {
        var l = String(cands[i] || "").toLowerCase();
        if (l.indexOf("zh") === 0) return "zh";   // zh / zh-CN / zh-TW / zh-HK 都归中文
      }
      return "en";                                 // 非中文环境默认英文
    } catch (e) { return "zh"; }
  }
  function getLang() {
    // 手动切换优先(localStorage 有记录则尊重); 未设置过 → 按浏览器语言自动判定
    try {
      var saved = localStorage.getItem("fan1_lang");
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) {}
    return detectBrowserLang();
  }
  function setLang(lang) {
    try { localStorage.setItem("fan1_lang", lang); } catch (e) {}
  }
  window.getSiteLang = getLang;
  window.setSiteLang = setLang;

  function ST(key) {
    var lang = getLang();
    return (SITE_I18N[lang] && SITE_I18N[lang][key]) || (SITE_I18N.zh[key]) || key;
  }
  window.ST = ST;

  function applySiteI18n() {
    var lang = getLang();
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    // Update title and meta description if keys exist for this page
    var titleKey = document.body.getAttribute("data-i18n-page");
    if (titleKey) {
      if (SITE_I18N[lang] && SITE_I18N[lang][titleKey + "Title"]) document.title = SITE_I18N[lang][titleKey + "Title"];
      if (SITE_I18N[lang] && SITE_I18N[lang][titleKey + "Desc"]) {
        var metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", SITE_I18N[lang][titleKey + "Desc"]);
      }
    }
    // Apply data-i18n attributes
    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute("data-i18n");
      var val = ST(key);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = val;
      } else if (el.getAttribute("data-i18n-html") === "1") {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
    // Update lang toggle button text
    var btn = document.getElementById("langToggleBtn");
    if (btn) btn.textContent = ST("langBtn");
  }
  window.applySiteI18n = applySiteI18n;

  function toggleSiteLang() {
    var cur = getLang();
    var next = cur === "zh" ? "en" : "zh";
    setLang(next);
    applySiteI18n();
  }
  window.toggleSiteLang = toggleSiteLang;
})();

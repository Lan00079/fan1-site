// 2026-09-06 Option B: 保护三 banner iframe 不被 popunder 透明层劫持点击
// 背景: popunder 引擎(runIframeWrappers)给页面所有 iframe 盖 z-index 2147483647 的透明点击层,
//       点 banner 实际点的是透明层 → 弹 popunder 且 banner 跳转失效。
// 方案: 捕获阶段拦截 .ad-cell / #adBottom 内的点击冒泡 → 点击直达 banner 自身跳转, 不触发 popunder autobind。
// 仅呈现层/事件层保护, 不改广告代码, 不动 popunder 的其他收入(页面其余区域照常)。
(function () {
    function protect(sel) {
        var els = document.querySelectorAll(sel);
        els.forEach(function (el) {
            ["click", "mousedown", "mouseup", "touchstart"].forEach(function (t) {
                el.addEventListener(t, function (e) { e.stopPropagation(); }, true);
            });
        });
    }
    function protectAll() {
        protect(".ad-row .ad-cell");   // index 三 banner
        protect("#adBottom");          // tool.html 底部双 banner(若存在)
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", protectAll);
    } else {
        protectAll();
    }
    // 引擎每 3s 重挂透明层 → 我们也周期性重挂拦截(便宜且稳)
    setInterval(protectAll, 3000);
})();

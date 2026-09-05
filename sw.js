// 2026-09-05: Monetag MultiPush(3nbf4.com zone 11663706) 退役存根 —— 替换原推送 SW。
// 已安装旧 SW 的客户端在下次访问时按字节差异检测到本文件并更新, activate 时自注销:
// 清空已有通知 → unregister, 不再接收任何推送。页面侧注册调用保留(index.html), 用于触发本次更新。
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil((async function () {
    try { (await self.registration.getNotifications()).forEach(function (n) { n.close(); }); } catch (err) {}
    try { await self.registration.unregister(); } catch (err) {}
  })());
});

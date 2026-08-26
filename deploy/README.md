# fan1.top 部署手册

## 一、GitHub Pages（Adsterra 审核用真实站点）
1. GitHub 新建公开仓库（任意名, 如 fan1-site），把本目录(除 deploy/)推上去:
   - 网页端直接 "uploading files" 拖入即可（CNAME 文件必须在根目录）
2. 仓库 Settings → Pages → Source: Deploy from branch / main / root
3. 仓库根 CNAME 文件已写 fan1.top；Pages 生效后再做 DNS
4. 阿里云 DNS 控制台（fan1.top）添加记录:
   - 类型 CNAME, 主机记录 @, 记录值 <你的GitHub用户名>.github.io.
   - 类型 CNAME, 主机记录 www, 记录值 同上
   （@ 的 CNAME 阿里云不允许时改用显性 URL 转发到 www，或把 Pages 改用 www.fan1.top）
5. Settings → Pages 勾选 Enforce HTTPS（GitHub 自动签真证书，几分钟生效）

## 二、本地工具的真证书（DNS-01，见 issue-cert.cmd）
- 阿里云 RAM 建仅 DNS 权限子账号 → 填入脚本 → 运行一次
- 产出 D:\fanyi\tool\certs\fan1.top.{key,crt}，之后自动续期

## 三、Adsterra
- Websites → Add website → fan1.top → 等审核（站点必须已可访问）
- 过审后建 3 个 banner 位（728x90 / 320x50 / 468x60）→ 代码交给开发侧接线

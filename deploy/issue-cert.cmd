@echo off
REM issue-cert.cmd — fan1.top Let's Encrypt 证书签发/续期（DNS-01, 阿里云 DNS API）
REM 前置(一次性):
REM   1) 安装 acme.sh: 打开 Git Bash 执行
REM      curl https://get.acme.sh | sh -s email=你的邮箱@example.com
REM   2) 阿里云控制台 -> AccessKey 管理 -> 创建"仅云解析 DNS 权限"的 RAM 子账号,
REM      拿到 AccessKey ID / Secret, 填到下面两行(或设系统环境变量 Ali_Key / Ali_Secret)
set Ali_Key=填入AccessKey_ID
set Ali_Secret=填入AccessKey_Secret
REM 签发(DNS-01 全自动, 无需公网端口) 并安装到工具目录
"%USERPROFILE%\.acme.sh\acme.sh" --issue --dns dns_ali -d fan1.top --keylength ec-256
"%USERPROFILE%\.acme.sh\acme.sh" --install-cert -d fan1.top --ecc ^
  --key-file       D:\fanyi\tool\certs\fan1.top.key ^
  --fullchain-file D:\fanyi\tool\certs\fan1.top.crt ^
  --reloadcmd     "echo cert-updated %date% %time% >> D:\fanyi\tool\certs\renew.log"
echo.
echo 完成: D:\fanyi\tool\certs\fan1.top.{key,crt}  (acme.sh 每天自动检查, 60天自动续期)
pause

@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 正在启动本地预览：http://127.0.0.1:8080/
echo 预览期间请勿关闭本窗口，看完按 Ctrl+C 结束。
start "" http://127.0.0.1:8080/
python -m http.server 8080

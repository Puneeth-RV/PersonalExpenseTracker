@echo off
echo Starting Expense Tracker...

:: Find MongoDB installation automatically
set MONGOD_PATH=
for /d %%i in ("C:\Program Files\MongoDB\Server\*") do set MONGOD_PATH=%%i\bin\mongod.exe

if not exist "%MONGOD_PATH%" (
    echo [ERROR] MongoDB not found! Please install it from:
    echo https://www.mongodb.com/try/download/community
    pause
    exit
)

echo [OK] MongoDB found at: %MONGOD_PATH%

:: Create local data folder
mkdir data\db 2>nul

:: Start MongoDB
start "MongoDB" cmd /k ""%MONGOD_PATH%" --dbpath ./data/db"
timeout /t 3 /nobreak

:: Start Backend
start "Backend" cmd /k "cd backend && npm install && node server.js"
timeout /t 5 /nobreak

:: Start Frontend
start "Frontend" cmd /k "cd frontend && npm install && npm start"

echo.
echo Done! Open http://localhost:3000 in your browser.
pause

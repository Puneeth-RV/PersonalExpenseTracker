@echo off

echo ========================================
echo   Checking dependencies...
echo ========================================

:: Check Node.js
node -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is NOT installed!
    echo Please download and install it from: https://nodejs.org
    pause
    exit
) ELSE (
    echo [OK] Node.js is installed.
)

:: Check npm
npm -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npm is NOT installed!
    echo Please reinstall Node.js from: https://nodejs.org
    pause
    exit
) ELSE (
    echo [OK] npm is installed.
)

:: Check MongoDB (using where instead of mongod --version to avoid hanging)
where mongod >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] MongoDB is NOT installed!
    echo Please download and install it from: https://www.mongodb.com/try/download/community
    echo Choose Windows and install it, then run this script again.
    pause
    exit
) ELSE (
    echo [OK] MongoDB is installed.
)

echo ========================================
echo   All dependencies found! Starting app...
echo ========================================
timeout /t 2 /nobreak

echo Starting MongoDB...
start "MongoDB" mongod
timeout /t 3 /nobreak

echo Installing backend dependencies and starting server...
cd backend
npm install
start "Backend" node server.js
cd ..

timeout /t 2 /nobreak

echo Installing frontend dependencies and starting React app...
cd frontend
npm install
start "Frontend" npm start

echo.
echo ========================================
echo   All done!
echo   Open browser at: http://localhost:3000
echo ========================================
pause

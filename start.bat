@echo off
echo Starting Expense Tracker...

start "MongoDB" cmd /k "mkdir C:\data\db 2>nul && mongod"
timeout /t 3 /nobreak

start "Backend" cmd /k "cd backend && npm install && node server.js"
timeout /t 5 /nobreak

start "Frontend" cmd /k "cd frontend && npm install && npm start"

echo Done! Open http://localhost:3000 in your browser.
pause

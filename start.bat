@echo off
echo Starting Expense Tracker...

start "Backend" cmd /k "cd backend && npm install && node server.js"
timeout /t 8 /nobreak

start "Frontend" cmd /k "cd frontend && npm install && npm start"

echo Done! Open http://localhost:3000 in your browser.
pause

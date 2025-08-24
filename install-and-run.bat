@echo off
echo 🚀 Setting up Portfolio for Windows...
echo ======================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install it from nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js found

REM Install dependencies
echo 📦 Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed

REM Start the development server
echo 🎯 Starting development server...
echo    Backend: http://localhost:5000
echo    This includes both API and frontend
echo.

npx tsx server/local-index.ts

pause
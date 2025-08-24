#!/bin/bash

echo "🚀 Setting up Portfolio for Mac/Linux..."
echo "======================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it from nodejs.org"
    exit 1
fi

echo "✅ Node.js found ($(node --version))"

# Install dependencies
echo "📦 Installing dependencies..."
if ! npm install; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed"

# Start the development server
echo "🎯 Starting development server..."
echo "   Backend: http://localhost:5000"
echo "   This includes both API and frontend"
echo

npx tsx server/local-index.ts
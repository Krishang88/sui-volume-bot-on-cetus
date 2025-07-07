#!/bin/bash

# SUI Volume Bot Start Script
echo "🚀 Starting SUI Volume Bot..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ .env file not found. Please run setup.sh first."
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Create logs directory if it doesn't exist
mkdir -p logs

# Start the bot with logging
echo "🤖 Starting bot..."
npm start 2>&1 | tee logs/bot-$(date +%Y%m%d-%H%M%S).log

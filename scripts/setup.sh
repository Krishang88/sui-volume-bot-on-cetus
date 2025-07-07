#!/bin/bash

# SUI Volume Bot Setup Script
echo "🚀 Setting up SUI Volume Bot..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 20 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "❌ Node.js version 20 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "⚠️  Please configure your .env file with your settings"
else
    echo "✅ .env file already exists"
fi

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p logs
mkdir -p data

# Set proper permissions
echo "🔐 Setting permissions..."
chmod 600 .env
chmod 755 scripts/*.sh

echo "✅ Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Configure your .env file with your settings"
echo "2. Run 'npm test' to verify everything is working"
echo "3. Run 'npm start' to start the bot"
echo ""
echo "📖 For more information, see the README.md file"

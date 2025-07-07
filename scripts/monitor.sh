#!/bin/bash

# SUI Volume Bot Monitoring Script
echo "📊 SUI Volume Bot Monitor"

# Check if bot is running
if pgrep -f "node index.js" > /dev/null; then
    echo "✅ Bot is running"
    echo "📈 Process ID: $(pgrep -f 'node index.js')"
else
    echo "❌ Bot is not running"
fi

# Check recent logs
echo ""
echo "📋 Recent logs:"
tail -n 20 logs/bot-*.log 2>/dev/null || echo "No log files found"

# Check wallet data
echo ""
echo "💰 Wallet data:"
if [ -f "data.json" ]; then
    echo "✅ data.json exists"
    echo "📊 Wallet count: $(jq length data.json 2>/dev/null || echo 'Unknown')"
else
    echo "❌ data.json not found"
fi

# Check environment
echo ""
echo "⚙️ Environment check:"
if [ -f ".env" ]; then
    echo "✅ .env file exists"
    if grep -q "PRIVATE_KEY" .env; then
        echo "✅ PRIVATE_KEY configured"
    else
        echo "❌ PRIVATE_KEY not configured"
    fi
    if grep -q "POOL_ID" .env; then
        echo "✅ POOL_ID configured"
    else
        echo "❌ POOL_ID not configured"
    fi
else
    echo "❌ .env file not found"
fi

echo ""
echo "🔍 For detailed monitoring, check the logs directory"

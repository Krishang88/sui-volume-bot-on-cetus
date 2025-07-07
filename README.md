# 🚀 SUI Volume Bot for Cetus DEX

A sophisticated automated trading bot designed to increase trading volume and liquidity on the **Cetus DEX** through intelligent buy/sell operations on the SUI blockchain.

[![Telegram](https://img.shields.io/badge/Telegram-Contact%20Me-blue?style=for-the-badge&logo=telegram)](https://t.me/cashblaze129)

## 🌟 Features

- **🔄 Automated Volume Generation** - Continuous buy/sell swaps to boost trading volume
- **💰 Multi-Wallet Distribution** - Spreads operations across multiple wallets for enhanced impact
- **⚡ Gas Optimization** - Smart fee management and transaction optimization
- **🎯 Customizable Parameters** - Adjustable trade amounts, intervals, and wallet distribution
- **🛡️ Error Handling** - Robust error recovery and transaction monitoring
- **📊 Real-time Monitoring** - Live transaction tracking and balance monitoring
- **🔧 Easy Configuration** - Simple environment-based setup

## 📋 Prerequisites

- Node.js (v20 or higher)
- npm or yarn package manager
- SUI wallet with sufficient balance
- Cetus DEX pool access

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/cashblaze129/sui-volume-bot-on-cetus.git
cd sui-volume-bot-on-cetus
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Configure the following environment variables:

```env
# Network Configuration
NETWORK=mainnet
RPC_ENDPOINT=https://fullnode.mainnet.sui.io
RPC_WEBSOCKET_ENDPOINT=wss://fullnode.mainnet.sui.io

# Wallet Configuration
PRIVATE_KEY=your_wallet_private_key_here

# Trading Parameters
POOL_ID=your_cetus_pool_id_here
SWAP_AMOUNT_MIN=1
SWAP_AMOUNT_MAX=10
BUY_INTERVAL_MIN=30
BUY_INTERVAL_MAX=120
DISTRIBUTE_INTERVAL_MIN=60
DISTRIBUTE_INTERVAL_MAX=300
```

### 4. Run the Bot
```bash
npm start
# or
yarn start
```

## ⚙️ Configuration Options

### Trading Parameters
- `SWAP_AMOUNT_MIN/MAX`: Range of SUI amounts for each swap (in SUI)
- `BUY_INTERVAL_MIN/MAX`: Time intervals between buy operations (in seconds)
- `DISTRIBUTE_INTERVAL_MIN/MAX`: Time intervals between wallet distributions (in seconds)

### Network Settings
- `NETWORK`: Target network (mainnet/testnet)
- `RPC_ENDPOINT`: SUI RPC endpoint for blockchain interactions
- `RPC_WEBSOCKET_ENDPOINT`: WebSocket endpoint for real-time updates

## 🔧 Advanced Usage

### Custom Pool Configuration
To use a specific Cetus pool, update the `POOL_ID` in your `.env` file:

```env
POOL_ID=0x1234567890abcdef...  # Your specific pool ID
```

### Multi-Wallet Operations
The bot automatically creates and manages multiple wallets for volume distribution. Wallets are stored in `data.json` and can be managed through the utility functions.

### Monitoring and Logs
The bot provides detailed logging including:
- Transaction hashes with SuiScan links
- Wallet addresses and balances
- Swap operation details
- Error messages and recovery attempts

## 📊 Performance Optimization

### Gas Fee Management
- Automatic priority fee calculation
- Transaction batching for efficiency
- Smart retry mechanisms

### Volume Distribution
- Random amount generation within configured ranges
- Multi-wallet rotation for natural trading patterns
- Dynamic interval adjustment

## 🛡️ Security Considerations

⚠️ **Important Security Notes:**
- Never share your private keys
- Use dedicated wallets for bot operations
- Monitor transactions regularly
- Start with small amounts for testing
- Keep your `.env` file secure and never commit it to version control

## 📁 Project Structure

```
sui-volume-bot-on-cetus/
├── src/                    # Source code
│   ├── index.js           # Main exports
│   ├── suiKit.js          # SUI interaction utilities
│   ├── swap.js            # Swap operations
│   └── types/             # Type definitions
├── utils/                  # Utility functions
│   ├── index.js           # Utility exports
│   └── utils.js           # Core utilities
├── constants/              # Configuration constants
│   ├── constants.js       # Environment variables
│   └── index.js           # Constants exports
├── index.js               # Main bot entry point
├── gather.js              # Data gathering utilities
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🔍 Troubleshooting

### Common Issues

1. **Insufficient Balance**
   ```
   Error: Not enough SUI in main wallet
   ```
   Solution: Ensure your main wallet has sufficient SUI balance

2. **RPC Connection Issues**
   ```
   Error: RPC endpoint not responding
   ```
   Solution: Check your RPC endpoint configuration and network connectivity

3. **Pool Not Found**
   ```
   Error: Pool ID not found
   ```
   Solution: Verify your pool ID is correct and accessible

### Debug Mode
Enable detailed logging by setting the `DEBUG` environment variable:

```env
DEBUG=true
```

# API Documentation

## Overview

The SUI Volume Bot provides a comprehensive API for managing automated trading operations on the Cetus DEX.

## Core Functions

### SuiKit Class

The main interface for SUI blockchain interactions.

#### Constructor
```javascript
const suiKit = new SuiKit({
  secretKey: 'your_private_key',
  fullnodeUrls: ['https://fullnode.mainnet.sui.io']
});
```

#### Methods

##### getBalance(coinType)
Returns the balance of a specific coin type.

```javascript
const balance = await suiKit.getBalance('0x2::sui::SUI');
console.log(`Balance: ${balance.totalBalance}`);
```

##### getAddress()
Returns the wallet address.

```javascript
const address = suiKit.getAddress();
console.log(`Address: ${address}`);
```

##### transferSui(to, amount)
Transfers SUI to another address.

```javascript
const result = await suiKit.transferSui(
  '0x1234567890abcdef...',
  1000000000 // 1 SUI in MIST
);
```

### Swap Operations

#### swap(client, sdk, keypair, amount, buy)
Executes a swap operation on Cetus DEX.

```javascript
const result = await swap(client, sdk, keypair, amount, true); // buy
const result = await swap(client, sdk, keypair, amount, false); // sell
```

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NETWORK` | Target network | `mainnet` |
| `RPC_ENDPOINT` | SUI RPC endpoint | Required |
| `PRIVATE_KEY` | Wallet private key | Required |
| `POOL_ID` | Cetus pool ID | Required |
| `SWAP_AMOUNT_MIN` | Minimum swap amount | `1` |
| `SWAP_AMOUNT_MAX` | Maximum swap amount | `10` |
| `BUY_INTERVAL_MIN` | Minimum buy interval | `30` |
| `BUY_INTERVAL_MAX` | Maximum buy interval | `120` |

## Error Handling

The bot includes comprehensive error handling for:
- Network connectivity issues
- Insufficient balance errors
- Transaction failures
- RPC endpoint errors

## Examples

### Basic Usage
```javascript
const { SuiKit } = require('./src');
const { retrieveEnvVariable } = require('./utils/utils');

const client = new SuiClient({ 
  url: retrieveEnvVariable('RPC_ENDPOINT') 
});

const suiKit = new SuiKit({ 
  secretKey: retrieveEnvVariable('PRIVATE_KEY'),
  fullnodeUrls: [retrieveEnvVariable('RPC_ENDPOINT')]
});

// Get balance
const balance = await suiKit.getBalance('0x2::sui::SUI');
console.log(`Balance: ${balance.totalBalance}`);
```

### Advanced Usage
```javascript
// Custom swap parameters
const customSwap = async (amount, isBuy) => {
  const sdk = initCetusSDK({
    network: 'mainnet',
    fullNodeUrl: RPC_ENDPOINT,
    simulationAccount: suiKit.getAddress()
  });
  
  return await swap(client, sdk, suiKit.getKeypair(), amount, isBuy);
};
```

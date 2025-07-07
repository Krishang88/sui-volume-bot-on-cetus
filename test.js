/**
 * Test file for SUI Volume Booster Bot
 * Run with: npm test
 */

const { retrieveEnvVariable, randVal, sleep } = require('./utils/utils');
const { NETWORK, RPC_ENDPOINT, POOL_ID } = require('./constants/constants');

console.log('🧪 Running SUI Volume Booster Bot Tests...\n');

// Test environment variables
async function testEnvironmentVariables() {
  console.log('📋 Testing Environment Variables...');
  
  try {
    const network = NETWORK;
    const rpcEndpoint = RPC_ENDPOINT;
    const poolId = POOL_ID;
    
    console.log(`✅ Network: ${network}`);
    console.log(`✅ RPC Endpoint: ${rpcEndpoint}`);
    console.log(`✅ Pool ID: ${poolId}`);
    
    return true;
  } catch (error) {
    console.log(`❌ Environment Variables Error: ${error.message}`);
    return false;
  }
}

// Test utility functions
async function testUtilityFunctions() {
  console.log('\n🔧 Testing Utility Functions...');
  
  try {
    // Test randVal function
    const testArray = randVal(1, 10, 5, 25, false);
    console.log(`✅ randVal test: ${testArray.join(', ')}`);
    
    // Test sleep function (short duration for testing)
    console.log('⏳ Testing sleep function...');
    const startTime = Date.now();
    await sleep(100);
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`✅ Sleep test: ${duration}ms (expected ~100ms)`);
    
    return true;
  } catch (error) {
    console.log(`❌ Utility Functions Error: ${error.message}`);
    return false;
  }
}

// Test configuration validation
async function testConfiguration() {
  console.log('\n⚙️ Testing Configuration...');
  
  try {
    const swapAmountMin = process.env.SWAP_AMOUNT_MIN || 1;
    const swapAmountMax = process.env.SWAP_AMOUNT_MAX || 10;
    const buyIntervalMin = process.env.BUY_INTERVAL_MIN || 30;
    const buyIntervalMax = process.env.BUY_INTERVAL_MAX || 120;
    
    console.log(`✅ Swap Amount Range: ${swapAmountMin}-${swapAmountMax} SUI`);
    console.log(`✅ Buy Interval Range: ${buyIntervalMin}-${buyIntervalMax} seconds`);
    
    // Validate ranges
    if (Number(swapAmountMin) >= Number(swapAmountMax)) {
      throw new Error('SWAP_AMOUNT_MIN should be less than SWAP_AMOUNT_MAX');
    }
    
    if (Number(buyIntervalMin) >= Number(buyIntervalMax)) {
      throw new Error('BUY_INTERVAL_MIN should be less than BUY_INTERVAL_MAX');
    }
    
    console.log('✅ Configuration validation passed');
    return true;
  } catch (error) {
    console.log(`❌ Configuration Error: ${error.message}`);
    return false;
  }
}

// Test network connectivity
async function testNetworkConnectivity() {
  console.log('\n🌐 Testing Network Connectivity...');
  
  try {
    const axios = require('axios');
    const response = await axios.get(RPC_ENDPOINT, {
      timeout: 5000,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        jsonrpc: '2.0',
        id: 1,
        method: 'sui_getLatestCheckpointSequenceNumber',
        params: [],
      },
    });
    
    if (response.status === 200) {
      console.log('✅ Network connectivity test passed');
      return true;
    } else {
      throw new Error(`Unexpected status: ${response.status}`);
    }
  } catch (error) {
    console.log(`❌ Network Connectivity Error: ${error.message}`);
    return false;
  }
}

// Main test runner
async function runTests() {
  const tests = [
    testEnvironmentVariables,
    testUtilityFunctions,
    testConfiguration,
    testNetworkConnectivity,
  ];
  
  let passedTests = 0;
  const totalTests = tests.length;
  
  for (const test of tests) {
    try {
      const result = await test();
      if (result) passedTests++;
    } catch (error) {
      console.log(`❌ Test failed with error: ${error.message}`);
    }
  }
  
  console.log('\n📊 Test Results:');
  console.log(`✅ Passed: ${passedTests}/${totalTests}`);
  console.log(`❌ Failed: ${totalTests - passedTests}/${totalTests}`);
  
  if (passedTests === totalTests) {
    console.log('\n🎉 All tests passed! The bot is ready to run.');
    process.exit(0);
  } else {
    console.log('\n⚠️ Some tests failed. Please check your configuration.');
    process.exit(1);
  }
}

// Run tests
runTests().catch(console.error);

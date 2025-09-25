/**
 * Simple tests for ThreeUtils
 */

const ThreeUtils = require('./index');

function assertEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅ ${testName}: PASSED`);
  } else {
    console.log(`❌ ${testName}: FAILED`);
    console.log(`   Expected: ${JSON.stringify(expected)}`);
    console.log(`   Actual: ${JSON.stringify(actual)}`);
  }
}

function runTests() {
  console.log('🧪 Running tests for ThreeUtils');
  console.log('================================');

  // Test isDivisibleByThree
  assertEqual(ThreeUtils.isDivisibleByThree(9), true, 'isDivisibleByThree(9)');
  assertEqual(ThreeUtils.isDivisibleByThree(10), false, 'isDivisibleByThree(10)');
  assertEqual(ThreeUtils.isDivisibleByThree(0), true, 'isDivisibleByThree(0)');
  assertEqual(ThreeUtils.isDivisibleByThree(-3), true, 'isDivisibleByThree(-3)');

  // Test powerOfThree
  assertEqual(ThreeUtils.powerOfThree(0), 1, 'powerOfThree(0)');
  assertEqual(ThreeUtils.powerOfThree(1), 3, 'powerOfThree(1)');
  assertEqual(ThreeUtils.powerOfThree(2), 9, 'powerOfThree(2)');
  assertEqual(ThreeUtils.powerOfThree(3), 27, 'powerOfThree(3)');

  // Test getMultiplesOfThree
  assertEqual(ThreeUtils.getMultiplesOfThree(3), [3, 6, 9], 'getMultiplesOfThree(3)');
  assertEqual(ThreeUtils.getMultiplesOfThree(0), [], 'getMultiplesOfThree(0)');
  assertEqual(ThreeUtils.getMultiplesOfThree(1), [3], 'getMultiplesOfThree(1)');

  // Test isPowerOfThree
  assertEqual(ThreeUtils.isPowerOfThree(1), true, 'isPowerOfThree(1)');
  assertEqual(ThreeUtils.isPowerOfThree(3), true, 'isPowerOfThree(3)');
  assertEqual(ThreeUtils.isPowerOfThree(9), true, 'isPowerOfThree(9)');
  assertEqual(ThreeUtils.isPowerOfThree(27), true, 'isPowerOfThree(27)');
  assertEqual(ThreeUtils.isPowerOfThree(28), false, 'isPowerOfThree(28)');
  assertEqual(ThreeUtils.isPowerOfThree(0), false, 'isPowerOfThree(0)');
  assertEqual(ThreeUtils.isPowerOfThree(-3), false, 'isPowerOfThree(-3)');

  // Test sumOfThree
  assertEqual(ThreeUtils.sumOfThree(1, 2, 3), 6, 'sumOfThree(1, 2, 3)');
  assertEqual(ThreeUtils.sumOfThree(0, 0, 0), 0, 'sumOfThree(0, 0, 0)');
  assertEqual(ThreeUtils.sumOfThree(-1, 2, 3), 4, 'sumOfThree(-1, 2, 3)');

  console.log('\n🎉 Test suite completed!');
}

if (require.main === module) {
  runTests();
}
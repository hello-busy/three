/**
 * Three - A simple application demonstrating the concept of three
 */

class ThreeUtils {
  /**
   * Check if a number is divisible by three
   * @param {number} num - The number to check
   * @returns {boolean} - True if divisible by three
   */
  static isDivisibleByThree(num) {
    return num % 3 === 0;
  }

  /**
   * Get the power of three for a given exponent
   * @param {number} exponent - The exponent
   * @returns {number} - Three raised to the power of exponent
   */
  static powerOfThree(exponent) {
    return Math.pow(3, exponent);
  }

  /**
   * Get an array of the first n multiples of three
   * @param {number} n - Number of multiples to generate
   * @returns {Array<number>} - Array of multiples of three
   */
  static getMultiplesOfThree(n) {
    const multiples = [];
    for (let i = 1; i <= n; i++) {
      multiples.push(i * 3);
    }
    return multiples;
  }

  /**
   * Check if a number is a power of three
   * @param {number} num - The number to check
   * @returns {boolean} - True if the number is a power of three
   */
  static isPowerOfThree(num) {
    if (num <= 0) return false;
    while (num % 3 === 0) {
      num = num / 3;
    }
    return num === 1;
  }

  /**
   * Sum of three numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @param {number} c - Third number
   * @returns {number} - Sum of the three numbers
   */
  static sumOfThree(a, b, c) {
    return a + b + c;
  }
}

// Demo usage
function demo() {
  console.log('🎯 Welcome to Three Utils!');
  console.log('========================');
  
  console.log('\n📊 Testing divisibility by three:');
  [9, 10, 15, 7].forEach(num => {
    console.log(`${num} is ${ThreeUtils.isDivisibleByThree(num) ? '' : 'not '}divisible by three`);
  });

  console.log('\n🚀 Powers of three:');
  for (let i = 0; i <= 4; i++) {
    console.log(`3^${i} = ${ThreeUtils.powerOfThree(i)}`);
  }

  console.log('\n🔢 First 5 multiples of three:');
  console.log(ThreeUtils.getMultiplesOfThree(5).join(', '));

  console.log('\n✨ Checking powers of three:');
  [1, 3, 9, 27, 28, 81].forEach(num => {
    console.log(`${num} is ${ThreeUtils.isPowerOfThree(num) ? '' : 'not '}a power of three`);
  });

  console.log('\n➕ Sum of three numbers (1, 2, 3):');
  console.log(ThreeUtils.sumOfThree(1, 2, 3));
}

// Run demo if this file is executed directly
if (require.main === module) {
  demo();
}

module.exports = ThreeUtils;
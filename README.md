# Three

A simple Node.js application demonstrating various utilities and operations related to the number three.

## Features

- ✅ Check if numbers are divisible by three
- 🚀 Calculate powers of three
- 🔢 Generate multiples of three
- ✨ Verify if numbers are powers of three
- ➕ Sum three numbers

## Installation

```bash
# Clone and navigate to the repository
cd three

# No additional dependencies needed - uses Node.js built-ins only
```

## Usage

### Run the demo

```bash
npm start
# or
node index.js
```

### Run tests

```bash
npm test
# or
node test.js
```

### Use as a module

```javascript
const ThreeUtils = require('./index');

// Check divisibility
console.log(ThreeUtils.isDivisibleByThree(9)); // true

// Calculate powers
console.log(ThreeUtils.powerOfThree(3)); // 27

// Get multiples
console.log(ThreeUtils.getMultiplesOfThree(3)); // [3, 6, 9]

// Check if power of three
console.log(ThreeUtils.isPowerOfThree(27)); // true

// Sum three numbers
console.log(ThreeUtils.sumOfThree(1, 2, 3)); // 6
```

## API Reference

### `ThreeUtils.isDivisibleByThree(num)`
Returns `true` if the number is divisible by three.

### `ThreeUtils.powerOfThree(exponent)`
Returns three raised to the given exponent.

### `ThreeUtils.getMultiplesOfThree(n)`
Returns an array of the first `n` multiples of three.

### `ThreeUtils.isPowerOfThree(num)`
Returns `true` if the number is a power of three.

### `ThreeUtils.sumOfThree(a, b, c)`
Returns the sum of three numbers.

## License

MIT
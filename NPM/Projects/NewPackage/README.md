
# Lakshya's Utility Package

Welcome to the `lakshya` npm package! This package provides a few useful utilities, including functions for checking pangrams, generating random playing cards, and creating a promise that simulates a random event.

## Installation

You can install this package via npm:

```bash
npm install lakshya
```

## Functions

### `isPangram(string)`

Checks if a given string is a pangram (a sentence that contains every letter of the alphabet at least once).

**Parameters:**
- `string` (string): The string to be checked.

**Returns:**
- `boolean`: `true` if the string is a pangram, `false` otherwise.

**Example:**

```javascript
const { isPangram } = require('lakshya');

console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true
console.log(isPangram('Hello, world!')); // false
```

### `getCard()`

Generates a random playing card with a value and a suit.

**Returns:**
- `object`: An object with two properties:
  - `Value` (string): The value of the card (e.g., '2', 'J', 'A').
  - `Suit` (string): The suit of the card (e.g., 'Clubs', 'Hearts').

**Example:**

```javascript
const { getCard } = require('lakshya');

const card = getCard();
console.log(card); // { Value: '5', Suit: 'Hearts' }
```

### `makeDogPromise()`

Returns a promise that randomly resolves or rejects after 5 seconds. The promise resolves with a message indicating success or rejects with a message indicating failure.

**Returns:**
- `Promise`: A promise that either resolves with 'YEHHH DOGGGG!!!!' or rejects with 'NO DOG :('.

**Example:**

```javascript
const { makeDogPromise } = require('lakshya');

makeDogPromise()
  .then(() => {
    console.log('Promise resolved: YEHHH DOGGGG!!!!');
  })
  .catch(() => {
    console.log('Promise rejected: NO DOG :(');
  });
```

## License

This package is licensed under the ISC License. See the [LICENSE](LICENSE) file for more information.

## Author

Lakshya Bhatia


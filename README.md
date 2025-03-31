# RSA ID Numbers

A TypeScript library for validating and generating South African ID numbers.

## Features

- Validate South African ID numbers.
- Check the validity of birth dates, citizenship digits, and checksum digits.

## Installation

Install the package via npm:

```bash
npm install rsa-id-numbers
```

## Usage

### Validating an ID Number

```typescript
import { RSAIdValidator } from 'rsa-id-numbers';

const idNumber = '7201014800087';
const isValid = RSAIdValidator.isValidSAID(idNumber);
console.log(`Is the ID number valid? ${isValid}`);
```

### Running Tests

To run the tests, use:

```bash
npm test
```

## Development

### Building the Project

To compile the TypeScript code, run:

```bash
npm run build
```

### Testing

This project uses Jest for testing. To run the tests, use:

```bash
npm test
```

## License

This project is licensed under the MIT License.
import { RSAIdValidator } from './validator';

describe('RSAIdValidator', () => {
  test('should return true for a valid ID number', () => {
    const validId = '7201014800087'; // Example of a valid ID number
    expect(RSAIdValidator.isValidSAID(validId)).toBe(true);
  });

  test('should return false for an ID number with invalid length', () => {
    const invalidId = '123456789'; // Too short
    expect(RSAIdValidator.isValidSAID(invalidId)).toBe(false);
  });

  test('should return false for an ID number with invalid birth date', () => {
    const invalidId = '9902314800087'; // Invalid date (Feb 31st)
    expect(RSAIdValidator.isValidSAID(invalidId)).toBe(false);
  });

  test('should return false for an ID number with invalid citizenship digit', () => {
    const invalidId = '7201014800089'; // Invalid citizenship digit
    expect(RSAIdValidator.isValidSAID(invalidId)).toBe(false);
  });

  test('should return false for an ID number failing Luhn check', () => {
    const invalidId = '7201014800086'; // Fails Luhn algorithm
    expect(RSAIdValidator.isValidSAID(invalidId)).toBe(false);
  });
});
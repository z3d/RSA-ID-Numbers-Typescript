// Validator for South African ID numbers
export class RSAIdValidator {
  /**
   * Validates a South African ID number.
   * @param idNumber The ID number to validate.
   * @returns True if the ID number is valid, false otherwise.
   */
  static isValidSAID(idNumber: string): boolean {
    // Check length
    if (idNumber.length !== 13) return false;

    // Check if all characters are digits
    if (!/^[0-9]+$/.test(idNumber)) return false;

    // Extract and validate date of birth
    const yy = parseInt(idNumber.substring(0, 2), 10);
    const mm = parseInt(idNumber.substring(2, 4), 10);
    const dd = parseInt(idNumber.substring(4, 6), 10);

    // Handle Y2K issue - assume 00-25 is 2000s, and 26-99 is 1900s
    const year = yy <= 25 ? 2000 + yy : 1900 + yy;

    if (!this.isValidDate(year, mm, dd)) return false;

    // Citizenship validation
    const citizenshipDigit = idNumber[10];
    if (citizenshipDigit !== '0' && citizenshipDigit !== '1') return false;

    // Checksum validation
    return this.isValidChecksum(idNumber);
  }

  private static isValidDate(year: number, month: number, day: number): boolean {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  }

  private static isValidChecksum(id: string): boolean {
    let sum = 0;

    for (let i = 0; i < 12; i++) {
      let value = parseInt(id[i], 10);

      if ((11 - i) % 2 === 0) {
        // Check if it's an even position from the right (0-based index)
        value *= 2;
        if (value > 9) {
          value -= 9;
        }
      }

      sum += value;
    }

    let checksumDigit = 10 - (sum % 10);
    if (checksumDigit === 10) checksumDigit = 0;

    return checksumDigit === parseInt(id[12], 10);
  }
}
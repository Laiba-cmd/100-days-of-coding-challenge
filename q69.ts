function divideAndRemainder(
    dividend: number,
    divisor: number
  ): { quotient: number; remainder: number } {
    // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    // Returns both in an object
    return { quotient, remainder };
  }
  
  // Trying it with 10 divided by 3
  console.log(divideAndRemainder(11, 3));
function multiplyDecimals(num1: number, num2: number): number {
    // Multiplies the numbers and rounds the result to two decimal places
    return Math.round(num1 * num2 * 100) / 100;
  }
  
  
  console.log(multiplyDecimals(0.2, 0.3)); 
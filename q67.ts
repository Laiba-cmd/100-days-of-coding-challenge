function addNumberAndString(number1: number, numberString: string): number {
    // Converts the string to a number and adds it to the first number
    return number1 + Number(numberString);
  }
  
  console.log(addNumberAndString(15, "6"));
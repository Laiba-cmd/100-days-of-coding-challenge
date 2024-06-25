// Function declaration for squaring a number
function squareDeclaration(number: number): number {
    return number * number;
  }
  
  // Function expression for squaring a number
  const squareExpression = function (number: number): number {
    return number * number;
  };
  
  // Using both functions to square the number 5
  console.log(squareDeclaration(5)); 
  console.log(squareExpression(5));
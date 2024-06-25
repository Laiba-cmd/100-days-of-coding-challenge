// Using `let` for a variable that can be reassigned
var age = 20;
age = 22; // Works fine because `let` allows reassignment
console.log(age);
// Trying to reassign a `const`-declared variable
var Name = "sana";
try {
    Name = "sara"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}

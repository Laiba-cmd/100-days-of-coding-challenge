// A list of grades
let grades = [ 94, 74, 89, 55, 76, 62];

// Calculates the average grade
let averageGrade =
  grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Shows the average grade
console.log(averageGrade);
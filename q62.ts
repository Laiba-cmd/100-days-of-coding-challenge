interface Student {
    name: string;
    age: number;
    courses: string[];
  }
  
  // Filling in the blueprint with an example student
  let student: Student = {
    name: "laiba",
    age: 20,
    courses: ["computer", "clinical counselling", "english language"],
  };
  
  // Showing the student's information
  console.log(student);
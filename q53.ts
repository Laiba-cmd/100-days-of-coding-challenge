// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["JavaScript", "TypeScript", "HTML"],
    frameworks: ["React", "Angular", "bootstarp"],
    tools: ["Git", "encryption", "Debugging"],
  };
  
  // Getting specific skills from the list
  let { languages, frameworks, tools } = developerSkills;
  
  // Showing a skill from each category
  console.log(
    `Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`
  );
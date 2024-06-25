function greetUser(name: string = "anonymous") {
    // Says hello to the given name or to an anonymous user
    console.log(`Hello, ${name}!`);
  }
  
  // Trying the function with a name and without
  greetUser("Haniya"); // Outputs: Hello, Haniya!
  greetUser(); 
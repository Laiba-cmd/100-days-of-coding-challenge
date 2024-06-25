function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    // Says hello to the given name or to an anonymous user
    console.log("Hello, ".concat(name, "!"));
}
// Trying the function with a name and without
greetUser("Haniya"); // Outputs: Hello, Haniya!
greetUser();

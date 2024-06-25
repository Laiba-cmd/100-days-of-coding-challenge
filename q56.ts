 // A mixed bag of items
let mixedArray = [7, "potato", 8, "onion", false, "mango"];

// Picks out only the words
let stringsArray = mixedArray.filter((item) => typeof item === "string");

// Shows the list of just words
console.log(stringsArray);
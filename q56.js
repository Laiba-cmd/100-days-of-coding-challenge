// A mixed bag of items
var mixedArray = [7, "potato", 8, "onion", false, "mango"];
// Picks out only the words
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
// Shows the list of just words
console.log(stringsArray);

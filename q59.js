// This program makes a function that adds a specific number
function makeAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 10
var addFive = makeAdder(10);
console.log(addFive(15));

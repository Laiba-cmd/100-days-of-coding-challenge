var guestArray = ["zara", "ara", "arib"];
var cannotAttend = "arib";
console.log("".concat(cannotAttend, "can not come it,for dinner"));
var newGuest = "mahi";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
console.log(guestArray);
guestArray.map(function (items) { return console.log("hello, ".concat(items, " you are invited to dinner.")); });

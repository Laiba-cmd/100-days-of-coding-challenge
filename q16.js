var guests = ["zara", "ara", "arib"];
console.log("Great news! I found a bigger dinner table! ");
//adding more guests 
guests.unshift("noor");
guests.splice(guests.length / 2, 0, "neha");
guests.push("naila");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, " , would you lke to join me for dinner?"));
});

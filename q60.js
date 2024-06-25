var userProfile = (function () {
    // The user's details are kept inside
    var name = "laiba";
    var age = 20;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        },
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo();

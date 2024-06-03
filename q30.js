var usernames = ["admin", "ayesha", "aslam", "alina", "ali"];
usernames.forEach(function (username) {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for loggin in again."));
    }
});

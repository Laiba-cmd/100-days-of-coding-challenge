let usernames: string[] = ["admin", "ayesha", "aslam", "alina", "ali"];

usernames.forEach((username) => {
  if (username == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for loggin in again.`);
  }
});
//Login Attempts
//Ask for number of attempts.  
//If attempts ≥ 3 → “Account locked”.

var prompt = require("prompt-sync")();

let attempt = prompt("how many times did you attempt the login");

if(attempt >= 3) {
    console.log("Account locked");
}
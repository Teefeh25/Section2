//Password Strength
//Ask for password length.  
//- < 6 → “Weak password”  
//- 6–10 → “Medium password”  
//- > 10 → “Strong password”

var prompt = require("prompt-sync")();

let password = prompt("guess my password");

if(password < 6) {
    console.log("Weak password");
}if(password > 5 && password < 11) {
    console.log("Medium password");
}if(password > 10) {
    console.log("Strong password")
}
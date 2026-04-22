// Exam Eligibility
//Ask for attendance percentage.  
//If attendance < 75 → “Not allowed to write exam”.  
//Else → “Allowed”.

var prompt = require("prompt-sync")();

let attendance = prompt("what is your attendance percentage");

if(attendance < 75) {
    console.log("Not allowed to write exam");
}else {
    console.log("Allowed");
}
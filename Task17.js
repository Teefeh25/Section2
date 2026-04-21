//Voting Eligibility
//Ask for age.  
//- 18 and above → “Eligible to vote”  
//- Otherwise → “Not eligible”

var prompt = require("prompt-sync")();

let age = prompt("how hold are you femi");

if(age >= 18) {
    console.log("Eligible to vote");
}else {
    console.log("Not eligible");
}

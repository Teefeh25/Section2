//Student Admission
//Ask for age and score.  
//- Age ≥ 16 AND score ≥ 70 → “Admitted”  
//- Otherwise → “Not admitted”

var prompt = require("prompt-sync")();

let age = prompt("how old are you");

let score = prompt("what is your exam score");

if(age >= 16 && score >= 70) {
    console.log("admitted");
}else {
    console.log("Not admitted");
}
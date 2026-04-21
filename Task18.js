//18. Exam Result
//Ask for score.  
//- 90+ → “Excellent”  
//- 70–89 → “Good”  
//- 50–69 → “Fair”  
//- Below 50 → “Fail”

var prompt = require("prompt-sync")();

let score = prompt("what is your jamb score");

if(score >= 90) {
    console.log("Good");
}if(score > 69 && score < 90) {
    console.log("Good");
}if(score > 49 && score < 70){
    console.log("Fair");
}if(score < 50) {
    console.log("Fail")
}
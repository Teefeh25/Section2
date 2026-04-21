//Grade System
//Ask for a score.  
//- 70 and above → “A”  
//- 50–69 → “B”  
//- Below 50 → “C

var prompt = require("prompt-sync")();

let score = prompt("what is your math score");

if(score >= 70) {
    console.log("A");
}else if(score > 49 && score < 70) {
    console.log("B");
}else if(score < 50) {
    console.log("C");
}
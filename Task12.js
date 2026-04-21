//12. Speed Check
//Ask for speed.  
//- Over 120 → “Too fast”  
//- Under 40 → “Too slow”  
//- Otherwise → “Normal speed”

var prompt = require("prompt-sync")();

let speed = prompt("what speed are you driving");

if(speed > 120) {
    console.log("Too fast");
}else if(speed < 40) {
    console.log("Too slow");
}else  {
    console.log("Normal speed");
}
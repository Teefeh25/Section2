//Phone Battery Status
//Ask for battery percentage.  
//- < 20 → “Low battery”  
//- 20–80 → “Battery OK”  
//- > 80 → “Battery full”

var prompt = require("prompt-sync")();

let percentage = prompt("what is your battery percentage");

if(percentage < 20) {
    console.log("Low battery");
}if(percentage > 18 && percentage < 81) {
    console.log("Battery ok");
}if(percentage > 80) {
    console.log("Battery full");
}
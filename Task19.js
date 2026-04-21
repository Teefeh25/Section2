// Fuel Warning
//Ask for fuel level.  
//- < 10 → “Refuel now”  
//- 10–30 → “Fuel low”  
//- > 30 → “Fuel OK”

var prompt = require("prompt-sync")();

let fuel = prompt("what is your fuel level");

if(fuel < 10) {
    console.log("Refuel now");
}if(fuel > 9 && fuel < 31) {
    console.log("Fuel low");
}if(fuel > 30) {
    console.log("Fuel ok");
}
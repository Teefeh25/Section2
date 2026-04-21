//Electricity Bill Tier
//Ask for units used.  
//- < 100 → “Low usage”  
//- 100–300 → “Medium usage”  
//- > 300 → “High usage”

var prompt = require("prompt-sync")();

let units = prompt("how many electricity did you use");

if(units < 100) {
    console.log("Low usage");
}else if(units > 99 && units < 301) {
    console.log("medium usage");
}else if(units > 300) {
    console.log("High usage");
}
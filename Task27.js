// Body Temperature
//Ask for temperature.  
//- < 36 → “Low temperature”  
//- 36–37.5 → “Normal”  
//- > 37.5 → “Fever”

var prompt = require("prompt-sync")();

let temperature = prompt("what your body temperature");

if(temperature < 36) {
    console.log("Low temperature");   
}if(temperature > 35 && temperature < 38.5) {
    console.log("Normal");
}if(temperature > 37.5) {
    console.log("Fever");
}
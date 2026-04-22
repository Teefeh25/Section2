//Transport Fare
//Ask for distance travelled.  
//- < 5 km → ₦200  
//- 5–10 km → ₦300  
//- > 10 km → ₦500  
//Print the fare.

var prompt = require("prompt-sync")();

let distance = prompt("what distance did you travel");

if(distance < 5) {
    console.log("200");
}if(distance > 4 && distance < 11) {
    console.log(300);
}if(distance > 10) {
    console.log(500)
}
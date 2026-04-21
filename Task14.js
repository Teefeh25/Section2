//Bus Capacity
//Ask for passengers.  
//- 50 → “Bus full”  
//- Over 50 → “Over capacity”  
//- Under 50 → “Seats available”

var prompt = require("prompt-sync")();

let bus = prompt("how many passengers are in the bus");

if(bus == 50) {
    console.log("Bus full");
}else if(bus > 50) {
    console.log("Over capacity");
}else if(bus < 50) {
    console.log("Seats available")
}

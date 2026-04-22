// Restaurant Order
//Ask for food type: "rice", "beans", "swallow".  
//Print the price based on:  
//- rice → ₦1500  
//- beans → ₦1200  
//- swallow → ₦2000  
//If none match → “Item not available”.

var prompt = require("prompt-sync")();

let food = prompt("which food do you want");

if(food == "rice") {
    console.log("1500");
}if(food == "beans") {
    console.log("1200");
}if(food == "swallow") {
    console.log("2000");
}else {
    console.log("Items not available");
}
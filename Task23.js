// Shopping Discount
//Ask for total purchase amount.  
//- 50,000+ → 20% discount  
//- 20,000–49,999 → 10% discount  
//- Below 20,000 → No discount

var prompt = require("prompt-sync")();

let amount = prompt("how much is the total purchase"):

if(amount >= 50000) {
    console.log("20% discount");
}if(amount > 19999 && amount < 50000) {
    console.log("10& discount");
}if(amount < 20000) {
    console.log("No discount");
}
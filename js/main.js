//Intro to Javascript

const TAX_RATE = 0.08;
const SPENDING_LIMIT = 200;
const EXTRA = 9.99;
const PHONE_PRICE = 99.99;


var bankBalance = 700.00;
var amount = 0;
//function that calculates amount with tax rate.
function calculateAmount(amount){
  return amount * TAX_RATE;
}
//function that formats the amount.
function formatAmount(amount){
  return "$" + amount.toFixed(2);
}
// keep buying phones while you still have money
while(amount < bankBalance){
  amount = amount + PHONE_PRICE;
}
// can we afford the accessory?
if(amount < SPENDING_LIMIT){
  amount = amount + EXTRA;
} else {
  console.log("You broke homie, you aint got nothing");
}
// don't forget to pay the government, too
amount = amount + calculateAmount(amount);

console.log("Your Purchase is: " + formatAmount(amount));

//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
<<<<<<< HEAD
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

  /*
- Find the cost of a small barrel:
  - We know 1 small barrel costs 60 right off the bat
- Find the cost of the large barrel:
  - First find the cost of all large barrels
    - To do that, grab the total cost (825)
    - Subtract the small barrels from the total
      - calculate the small barrels total price (2 * 60 = 120)
    - The remainder amount is the total cost of large barrels
    - Divide total cost of large barrels by number of barrels
  */

return largeBarrel;
=======
>>>>>>> 9d96578f55a867702096186155fd2c1780964256
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  //your code here
//
// - Find the distance of the earth circumference in miles
  var earthCirc = 24901;
  
// - Calculate the # of gallons used to travel around the earth
var gallonsUsed = 24901/12;
//   - circumference / MPG (miles per gallon)
var cost = gallonsUsed * 3;
// - Calculate the cost:
//   - total gallons used * cost of fuel
return cost;


};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  //your code here
var coscoTotalJuice = 3;
var kirklandTotalJuice = 2;
//   - Find the total amount of pure fruit juice (gal)
var pureFruitJuice = 0;

//   - Total of Costco pure fruit juice:
//     - percentage pure fruit juice * number of gallons

var costcoPure = .2 * 3;
//   - Total of Kirkland pure fruit juice:
//     - percentage pure fruit juice * number of gallons
var kirklandPure = .55 * 2;
//   - Add Costco pure fruit juice total + Kirkland pure fruit juice total
// - Find the total amount of juice (gal):
var totalPure = costcoPure + kirklandPure;
//   - Total of Costco juice + Total of Kirkland Juice
totalJuice = coscoTotalJuice + kirklandTotalJuice;
// - Calculate (total pure fruit juice) / (total juice)
var pureJuice = totalPure / totalJuice;
return pureJuice;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};

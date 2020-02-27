let firstHouseWidth = 8;
let firstHouseDepth = 10;
let firstHouseHeight = 10;
let gardenSizeInM2 = 100;
let volumeInMeters;
let sellingPrice_Peter = 2500000;
let sellingPrice_Julia = 1000000;
let secondHouseWidth = 5;
let secondHouseDepth = 11;
let secondHouseHeight = 8;
let secondGardenSizeInM2 = 70;
volumeInMeters = firstHouseDepth * firstHouseWidth * firstHouseHeight ;
let housePrice ;
housePrice= volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 ;
console.log("Sale price of the first home is  " +housePrice);
if(sellingPrice_Peter >housePrice  )
console.log("Peter is paying " + sellingPrice_Peter +" which exceeds the actual cost");
let secondVolumeinMeters=  secondHouseWidth *  secondHouseDepth * secondHouseHeight;
let secondHousePrice;
secondHousePrice = secondVolumeinMeters * 2.5 * 1000 + secondGardenSizeInM2 * 300 ;
console.log("Second house calculated price is " +secondHousePrice + " but sale price is " + sellingPrice_Julia);
if(secondHousePrice > sellingPrice_Julia)
console.log("Julia is paying less for the  house");
else
console.log("Julia is paying more for the  house");



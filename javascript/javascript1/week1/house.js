const firstHouseWidth = 8;
const firstHouseDepth = 10;
const firstHouseHeight = 10;
const gardenSizeInM2 = 100;
let volumeInMeters;
const sellingPrice_Peter = 2500000;
const sellingPrice_Julia = 1000000;
const secondHouseWidth = 5;
const secondHouseDepth = 11;
const secondHouseHeight = 8;
const secondGardenSizeInM2 = 70;
const housePrice ;
const secondHousePrice;

volumeInMeters = firstHouseDepth * firstHouseWidth * firstHouseHeight ;

housePrice= volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 ;
console.log("Sale price of the first home is  " +housePrice);

if(sellingPrice_Peter >housePrice  ){
                                      console.log("Peter is paying " + sellingPrice_Peter +" which exceeds the actual cost");
                                     }

let secondVolumeinMeters=  secondHouseWidth *  secondHouseDepth * secondHouseHeight;
secondHousePrice = secondVolumeinMeters * 2.5 * 1000 + secondGardenSizeInM2 * 300 ;
console.log("Second house calculated price is " +secondHousePrice + " but sale price is " + sellingPrice_Julia);

if(secondHousePrice > sellingPrice_Julia){
                                            console.log("Julia is paying less for the  house");
                                          }
else
                                            console.log("Julia is paying more for the  house");



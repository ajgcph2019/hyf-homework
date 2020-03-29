//Make a function that takes an array as parameter and returns the average of that parameter
//Make a function that takes an array as parameter and returns the median of that parameter
//Now create a function that calculates the median and the average and returns these two value in an object.

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function calculateAverage(hPrice) {

    const price =  new Uint32Array(hPrice) ;
    //console.log(price);
    
    let sumOfTheHousePrices = 0 ;
    let average = 0;

    for ( let i = 0 ; i < hPrice.length ; i++) {

        sumOfTheHousePrices = sumOfTheHousePrices + hPrice[i];
    }
        average = (sumOfTheHousePrices / hPrice.length ).toFixed(2);
        return average;
    
}


 function calculateMedian(hPrice) {
    
    const arrSort = new Uint32Array(hPrice).sort();

    // the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.

    //If you print the unicode point values of the array then it will get clear. 
    //console.log("Sorted array is ",arrSort);

    let median = 0 ;
    const mid = Math.floor(arrSort.length / 2);                          
            //const ceilvalue = Math.ceil(arrSort.length / 2) ;
            // console.log(mid);  //3
            //console.log(ceilvalue) ; //4

            //console.log("Array length" ,arrSort.length);
            
    if (arrSort.length % 2 === 1) //Odd condition
       {   
         median = arrSort[mid] ;
                
       }
        else  
        {
         median = (arrSort[mid - 1] + arrSort[mid]) /2;
        }
  return median ;
}

function getAverageAndMedian (housePrice) {

 let averageValue = calculateAverage(housePrice);
 let medianValue= calculateMedian(housePrice);

  let price = {};
  price.average = averageValue ;
  price.median = medianValue ;
  return price ;


}

const obj = getAverageAndMedian(housePrices);
console.log(obj);

//Rendering output on web page 

const bodyTag = document.querySelector('body');
bodyTag.innerHTML = housePrices;


const divTag1 = document.createElement('div');
const divTag2 = document.createElement('div');

divTag1.innerHTML = "Average : " +obj.average ;
divTag2.innerHTML = "Median : " +obj.median ;

bodyTag.appendChild(divTag1);
bodyTag.appendChild(divTag2);









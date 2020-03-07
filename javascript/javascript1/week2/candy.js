let boughtCandyPrices = [] ;
let price ;
const amountToSpend = Math.random() * 100 ;

function addCandy (candyType ,weight ) {

    if ( candyType == "sweet") {
       
        price = weight * 0.5;
        boughtCandyPrices.push(price) ;
    
    }

    else if (candyType == "chocolate") {
        
        price = weight * 0.7;
        boughtCandyPrices.push(price) ;
    
    }

    else if (candyType == "toffee") {
      
        price = weight * 1.1;
        boughtCandyPrices.push(price) ;
    }

    else if (candyType == "chewing gum") {
      
        price = weight * 0.03;
        boughtCandyPrices.push(price) ;
    }
  return boughtCandyPrices.toString();
}

function canBuyMoreCandy() {

    let totalPrice = 0;
    addCandy('sweet', 20); 
    addCandy('chocolate' , 12) ;
    addCandy ('toffee' , 10) ;
    addCandy('chewing gum', 6);
    for (let i= 0 ;i < boughtCandyPrices.length ;i++) {
         totalPrice = totalPrice +boughtCandyPrices[i];
    }
         console.log ("Total Price = " + totalPrice) ;
         console.log("Amount to spend " + amountToSpend) ;
        if (totalPrice <= amountToSpend) {

            console.log ("You can buy more, so please do!") ;
            return true;
        }
        else {
              
            console.log ("Enough candy for you!") ;
            return false ;
        }
            
    }
    
console.log (boughtCandyPrices);
const check = canBuyMoreCandy ();
console.log(check) ;



function findShortestWord (danishWord) {

 
   let stringArray =  danishWord ;
   
   let shortestWord = stringArray[0];
   let shortestLength = stringArray[0].length; 


  for (let i = 1; i < stringArray.length; i++){ //Starting from the second element, comparison done 

    if (stringArray[i].length < shortestLength){

            shortestLength = stringArray[i].length;   
            shortestWord = stringArray[i];            
        }
    }
    
        return shortestWord;
  }


const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
const shortestWordIs = findShortestWord(danishWords); 
console.log("Shortest word  is  : " ,shortestWordIs);
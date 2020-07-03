const myFavouritesJsObject = {
    "books " : ["Famous Five", "Harry Potter" , "Kite Runner"] ,
    "series" : ["Friends" ,"Suits","Game Of Thrones"] ,
    "authors" : ["Enid Blyton","JK Rowling"]

};

const toJson = JSON.stringify(myFavouritesJsObject);
document.getElementById("demo1").innerHTML = toJson;

const jsonObject = `
  {  "books" : ["Famous Five", "Harry Potter" , "Kite Runner"] ,
    "series" : ["Friends" ,"Suits","Game Of Thrones"] ,
    "authors" : ["Enid Blyton","JK Rowling"] 

 }`;
 
 const toJsObject1 = JSON.parse(jsonObject);
 document.getElementById("demo2").innerHTML = `${toJsObject1.authors},${toJsObject1.series}` ;
 //console.log(toJsObject1.authors);
 //console.log(toJsObject1.series);
  
 
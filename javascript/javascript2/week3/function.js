//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

let arrayOfFunctions = [func1, func2, func3];

//implementing 3 functions 
function func1() {
    console.log(" function1");
}
function func2() {
    console.log(" function2");
}
function func3() {
    console.log(" function3");
}
//calling array of functions
arrayOfFunctions.forEach( element => element());

//Create a function as a const and try creating a function normally. Call both functions
const sampleFunction = function() {
   console.log("This is a function expression" ) ;
}

function sampleFunc() {
console.log("This is a function declaration");
}

sampleFunction();
sampleFunc();

//Create an object that has a key whose value is a function. Try calling this function.

const objFunction = 
    {
        key : function() {
            console.log("Function");
        }
    };
console.log(objFunction.key);
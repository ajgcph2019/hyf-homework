function  getEventWeekday(inputDayIndex){

//Create a new date object

const today = new Date().getDay();  //Get today's day from the system which returns a number based on the day
console.log(today);

// Create an array of week days
const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday']; 
console.log("Day length " + days.length); 

console.log(inputDayIndex);

// Add the  number passed as argument to the function with 'inputDayIndex'  and apply modulo % to
// go through array
const newDayIndex = (inputDayIndex + today) % days.length;
console.log(newDayIndex);

// Return the day for "newDayIndex"
  return days[newDayIndex];
     
}
const calculatedDay = getEventWeekday(5);
console.log("The event will be held on " + calculatedDay);
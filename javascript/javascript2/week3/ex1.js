//1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);

//2. Create a function that takes 2 parameters: delay and stringToLog.
//Calling this function should log out the stringToLog after delay seconds.
// Call the function you have created with some different arguments.

function logString(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}

logString(3, "This string logged after 3 seconds");
logString(4, "This string logged after 4 seconds");

//3.Create a button in html. When clicking this button, use the function
// you created in the previous task to log out the text:
//Called after 5 seconds after the button is clicked.

const bTag = document.getElementById("button1");
bTag.addEventListener("click", () => {
  logString(5, "This string logged after 5 seconds");
});

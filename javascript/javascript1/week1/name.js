const firstWords = ['easy','awesome','corporate','find','perfect','go','flex', 'dynamic','techie','cyber'];
const secondWords =['ideas','vision','solutions','trends','digital','aid','chip','byte','query','fanatic'];
const randomNumber = Math.floor(Math.random() * 10) + 0;
const startupName =firstWords[randomNumber] + secondWords[randomNumber];
console.log("The startup: " + startupName  +" contains " + startupName.length +" characters") ;

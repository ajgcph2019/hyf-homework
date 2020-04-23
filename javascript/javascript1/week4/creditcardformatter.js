function formatCreditCardNumber(number) {
  if (typeof number == "string") {
    console.log("Enter a valid card number");
  } 
  else {
     number = number.toString();
     const spaceBetweenDigits = 4;
     let result = " ";
     while (number.length > 0) {
      // Loop through string
      result = result + " " + number.slice(0, spaceBetweenDigits);
      number = number.substring(spaceBetweenDigits);
    }
    return result;
  }
}
const formattedCreditCardObject = formatCreditCardNumber(12345672345);
console.log(formattedCreditCardObject);

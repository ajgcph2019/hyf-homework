function getCreditCardType(accountNumber)
{
   //JCB
   jcbRegex = new RegExp('^(?:2131|1800|35)[0-9]{0,}$'); //2131, 1800, 35 (3528-3589)
   // American Express
   amexRegex = new RegExp('^3[47][0-9]{0,}$'); //34, 37
   // Diners Club
   dinersRegex = new RegExp('^3(?:0[0-59]{1}|[689])[0-9]{0,}$'); //300-305, 309, 36, 38-39
   // Visa
   visaRegex = new RegExp('^4[0-9]{0,}$'); //4
   // MasterCard
   mastercardRegex = new RegExp('^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$'); //2221-2720, 51-55
   maestroRegex = new RegExp('^(5[06789]|6)[0-9]{0,}$'); //always growing in the range: 60-69, started with / not something else, but starting 5 must be encoded as mastercard anyway
   //Discover
   discoverRegex = new RegExp('^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$');
   ////6011, 622126-622925, 644-649, 65

  console.log(accountNumber);


   let cardType = "unknown";
   if (accountNumber.match(jcbRegex)) {
       cardType = "jcb";
   } else if (accountNumber.match(amexRegex)) {
      cardType = "amex";
   } else if (accountNumber.match(dinersRegex)) {
      cardType = "diners_club";
   } else if (accountNumber.match(visaRegex)) {
       cardType = "visa";
   } else if (accountNumber.match(mastercardRegex)) {
       cardType = "mastercard";
   } else if (accountNumber.match(discoverRegex)) {
       cardType = "discover";
   } else if (accountNumber.match(maestroRegex)) {
       if (accountNumber[0] == '5') { //started 5 must be mastercard
           cardType = "mastercard";
       } else {
           cardType = "maestro"; //maestro is all 60-69 which is not something else, thats why this condition in the end
       }
   }

   return cardType;
}


const cardInfo = console.log(getCreditCardType(4781321334789876));
console.log(cardInfo);

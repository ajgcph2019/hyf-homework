const dogYearOfBirth = 1957;
const dogYearFuture = 2027;
console.log(dogYearFuture - dogYearOfBirth);
const dogYear = 7;
const dogAge= dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (dogAge <=dogYear) { 
                         console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture);
                      }
else                      {
                            shouldShowResultInDogYears = false;
                            console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
                          }

console.log(shouldShowResultInDogYears);

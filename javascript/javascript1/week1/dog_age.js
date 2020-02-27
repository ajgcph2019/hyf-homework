const dogYearOfBirth = 1957;
const dogYearFuture = 2027;
console.log(dogYearFuture - dogYearOfBirth);
const dogYear = 60;
const dog_age= dogYearFuture - dogYearOfBirth;
if (dog_age <=dogYear) { 
 shouldShowResultInDogYears = true;
console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture);
 }
else{
shouldShowResultInDogYears = false;
console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}
console.log(shouldShowResultInDogYears);
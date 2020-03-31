function isPalindrome(incomingString) {
  let longest = "";

  for (let i = 0; i < incomingString.length; i++) {
    // get the current letter in the string
    const currentLetter = incomingString[i];

    // find the first occurance of the letter in the string
    let firstOccurence;
    for (var j = i + 1; j < incomingString.length; j++) {
      if (currentLetter === incomingString[j]) {
        // we found an occurance that matches the current letter
        firstOccurence = j;

        // generate the substring to match
        let subString = incomingString.slice(i, firstOccurence + 1);

        // check if the substring is a palindrome and if it is longer then longest
        if (
          subString.length > longest.length &&
          subString.toLowerCase() ===
            subString
              .split("")
              .reverse()
              .join("")
              .toLowerCase()
        ) {
          longest = subString;
        }
      }
    }
  }
  // return the longest palindrome
  return longest;
}

const str = isPalindrome("My dad is a racecar athlete");
console.log(str);

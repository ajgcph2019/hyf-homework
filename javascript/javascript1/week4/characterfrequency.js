function getCharacterFrequencies(incomingWord) {
  const result = {};

  for (let i = 0; i < incomingWord.length; i++) {
    let character = incomingWord.charAt(i);

    console.log(character);

    if (result[character]) {
      result[character]++;
    } else {
      result[character] = 1;
    }
  }

  return result;
}

const charObject = getCharacterFrequencies("happy");
console.log(charObject);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: , ${actual} , ' === ' , ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: , ${actual} , ' !== ' , ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") { //filter out the spaces in string
      if (result[letter]) { ////Increment the count of each letter into results as we encounter each letter in the string.
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;
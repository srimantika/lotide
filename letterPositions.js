const assertArraysEqual = function(Array1, Array2){
  if (JSON.stringify(Array1) === JSON.stringify(Array2)) {
    console.log(`✅✅✅ Assertion Passed:  ${Array1}  ' === '  ${Array2}`);
   }
   else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${Array1}  ' !== '  ${Array2}`);
   }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    if (results[sentence[i]]) {
      console.log(typeof sentence)
      results[sentence[i]].push(i)
      } else {
      results[sentence[i]] = [i];
      }
  }
  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").l, [2,3]);
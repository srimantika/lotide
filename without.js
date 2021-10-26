const assertArraysEqual = function(Array1, Array2){
  if (JSON.stringify(Array1) === JSON.stringify(Array2)) {
    console.log(`✅✅✅ Assertion Passed:  ${Array1}  ' === '  ${Array2}`);
   }
   else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${Array1}  ' !== '  ${Array2}`);
   }
}

const eqArrays = function(Array1, Array2){
  if (JSON.stringify(Array1) === JSON.stringify(Array2)) {
    return true;
   }
   else {
     return false;
   }
}

const without = function(source,itemsToRemove){
let common = [];
for (const element of source) {
  if (!itemsToRemove.includes(element)) {
    common.push(element);
  }
}
return common;
}

;
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]),[2,3]);
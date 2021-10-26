const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: , ${actual} , ' === ' , ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: , ${actual} , ' !== ' , ${expected}`);
  }
};

const eqArrays = function(Array1, Array2){
  if (JSON.stringify(Array1) === JSON.stringify(Array2)) {
    return true;
   }
   else {
     return false;
   }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), false);
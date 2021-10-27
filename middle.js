const assertArraysEqual = function(Array1, Array2) {
  if (JSON.stringify(Array1) === JSON.stringify(Array2)) {
    console.log(`✅✅✅ Assertion Passed:  ${Array1}  ' === '  ${Array2}`);
   }
   else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${Array1}  ' !== '  ${Array2}`);
   }
};

const eqArrays = function(Array1, Array2) {
  if (JSON.stringify(Array1) === JSON.stringify(Array2)) {
    return true;
   }
   else {
     return false;
   }
};

const middle = function(Array) {
let middleArray = []; 
if (Array.length <= 2){
middleArray = [];
}
else if (Array.length % 2 === 0){
middleArray = [Array[Math.ceil(Array.length / 2) - 1], Array[Math.ceil(Array.length / 2)]];
}
else {
middleArray = [Array[Math.floor(Array.length / 2)]];  
}
return middleArray;
};

console.log(middle([1, 2]));
console.log(middle([1]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]));
console.log(assertArraysEqual(middle([1, 2,3,4,5]), [3]));
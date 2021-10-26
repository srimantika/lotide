

const eqArrays = function(Array1, Array2){
  if (JSON.stringify(Array1) === JSON.stringify(Array2)) {
    console.log(`✅✅✅ Assertion Passed:  ${Array1}  ' === '  ${Array2}`);
   }
   else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${Array1}  ' !== '  ${Array2}`);
   }
}

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 3]);
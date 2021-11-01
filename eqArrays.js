const assertEqual = require('./assertEqual');

const eqArrays = function(Array1, Array2){
  if (JSON.stringify(Array1) === JSON.stringify(Array2)) {
    return true;
   }
   else {
     return false;
   }
}

module.exports = eqArrays;

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), true);
//assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), false);
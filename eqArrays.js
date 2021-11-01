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


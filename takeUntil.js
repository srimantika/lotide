const assertArraysEqual = function(Array1, Array2){
  if (JSON.stringify(Array1) === JSON.stringify(Array2)) {
    console.log(`✅✅✅ Assertion Passed:  ${Array1}  ' === '  ${Array2}`);
   }
   else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${Array1}  ' !== '  ${Array2}`);
   }
};

const takeUntil = function(array, callback) {
  let outputArray = [];
  for(let element of array){
    if (!callback(element)){
      outputArray.push(element);
    } else {
      break;
    }
  }
  return outputArray; 
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));
console.log(assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]));

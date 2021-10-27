const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: , ${actual} , ' === ' , ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: , ${actual} , ' !== ' , ${expected}`);
  }
};

const eqArrays = function(Array1, Array2) {
  if (JSON.stringify(Array1) === JSON.stringify(Array2)) {
    return true;
  } else {
    return false;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let i in object1) {
      if ((Array.isArray(object1[i]) && Array.isArray(object2[i]))) {
        if (eqArrays(object1[i], object2[i]) === false) {
          return false;
        }
      } else {
        if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,ba),true);
assertEqual(eqObjects(ab,abc),false);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);
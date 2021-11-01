const assertEqual = require('./assertEqual');

const head = function(Array, element){
return Array[0];
return element;
}

//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;
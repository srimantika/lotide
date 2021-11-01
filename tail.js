const assertEqual = require('./assertEqual');
const tail = function(words) {
  let modifiedWords = words.slice(1);
  return modifiedWords;
};

module.exports = tail;

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words);
//assertEqual(words.length, 3);
const assertEqual = require('./assertEqual');
const tail = function(words) {
  let modifiedWords = words.slice(1);
  return modifiedWords;
};

module.exports = tail;

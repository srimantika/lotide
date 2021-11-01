
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




module.exports = middle;
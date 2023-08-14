/*

Write a function `twoDimensionalProduct(array)` that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

*/

let twoDimensionalProduct = function(arr) {
  // let pro = 1;
  // let twoDimensionalProduct = arr.forEach(function(subarr) {
  //   for(let j=0; j<subarr.length; j++){
  //     let num = subarr[j]
  //     pro *= subarr[j]
  //   }
  // })
  //   return pro
  // let twoDimensionalProduct = arr.map((subarr)=>{
  //     return subarr.reduce((a,b)=> a*b)
  // })

  return arr.flat().reduce((acc, c) => acc * c);

};

let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360
let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = twoDimensionalProduct;
} catch (e) {
    module.exports = null;
}
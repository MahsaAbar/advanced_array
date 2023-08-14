/*
Write a function `tripler(nums)` that takes in an array as an arg. The function
should return a new array containing three times every number of the original
array.

Solve this using Array's `map()` method.

Examples: 

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
*/
let tripler = function(nums) {
  let msg = []
  let tripler = nums.map(function(element) {
	let tri =  element * 3
  msg.push(tri)
  })
return msg
}

// let tripler = function(nums) {
  // let newnum = [];
  // for (i=0; i<nums.length; i++){
  //   let el = nums[i] * 3;
  //   newnum.push(el)
  // }
  // return newnum
 

// };
console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = tripler;
} catch (e) {
  module.exports = null;
}
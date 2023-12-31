/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    let vowel = 'aeiuo';
    for (i=word.length - 1; i>=0; i--){
        let char = word[i];
        if (vowel.includes(char)){
            return newword = word.slice(0,i) + word.slice(i+1)
        }
    }
    return newword
};


// let hipsterfy = function(sentence) {
//     // let words = sentence.split(" ");
//     // let newarr = [];
//     // return hipsterfy = words.map(removeLastVowel).join('') 
//     return hipsterfy = sentence.split(' ').map(removeLastVowel).join(' ');
// };

let hipsterfy = function(sentence) {
    return sentence.split(' ').map(removeLastVowel).join(' ')};
    
console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}

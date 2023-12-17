// function reverseString(str) {
//     let result = str[str.length - 1];
//     for (let i = str.length - 2; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }

const reverseString = (str) => str.split("").reverse().join("");


module.exports = reverseString;

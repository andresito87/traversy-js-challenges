// function findMaxNumber(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         const current = arr[i];
//         if (current > max) {
//             max = current;
//         }
//     }
//     return max;
// }

const findMaxNumber = (arr) => Math.max(...arr);

module.exports = findMaxNumber;

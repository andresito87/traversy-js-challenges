// function countOccurrences(str, char) {
//     let occurences = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             occurences++;
//         }
//     }
//     return occurences;
// }

const countOccurrences = (str, char) => str.split(char).length - 1;

module.exports = countOccurrences;

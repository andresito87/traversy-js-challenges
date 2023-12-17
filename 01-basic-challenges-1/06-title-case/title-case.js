// function titleCase(str) {
//     let word = str[0].toUpperCase();
//     for (let i = 1; i < str.length; i++) {
//         if (str[i - 1] === " ") {
//             word += str[i].toUpperCase();
//         } else {
//             word += str[i].toLowerCase();
//         }
//     }
//     return word;
// }

function titleCase(str) {
    const words = str.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}

module.exports = titleCase;

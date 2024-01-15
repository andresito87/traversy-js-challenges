function findMissingLetter(letters) {
    const allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let startIndex = allLetters.indexOf(letters[0]);
    let missingLetter = "";
    for (let i = startIndex, j = 0; i < allLetters.length && j < letters.length; i++) {
        if (allLetters[i] != letters[j]) {
            missingLetter = allLetters[i];
            break;
        }
        j++;
    }
    return missingLetter;
}

module.exports = findMissingLetter;

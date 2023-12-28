function countVowels(phrase) {
    formattedPhrase = phrase.toLowerCase();
    let amountVowels = 0;
    for (let i = 0; i < formattedPhrase.length; i++) {
        if (formattedPhrase[i] == 'a' || formattedPhrase[i] == 'e' || formattedPhrase[i] == 'i' || formattedPhrase[i] == 'o' || formattedPhrase[i] == 'u') {
            amountVowels++;
        }
    }
    return amountVowels;
}

module.exports = countVowels;

function findMissingNumber(numbers) {
    let n = numbers.length + 1;
    let sumAllNumbersTillNumbersLength = n * (n + 1) / 2;
    let sumArrayNumbers = 0;

    for (let i = 0; i < numbers.length; i++) {
        sumArrayNumbers += numbers[i];
    }
    return sumAllNumbersTillNumbersLength - sumArrayNumbers;
}

module.exports = findMissingNumber;

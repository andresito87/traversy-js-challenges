function removeDuplicates(array) {

    let cleanedArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!cleanedArray.includes(array[i])) {
            cleanedArray.push(array[i]);
        }
    }
    return cleanedArray;
}

module.exports = removeDuplicates;

function displayLikes(names) {
    let length = names.length;
    let stringResult = "";

    switch (length) {
        case 0:
            stringResult = `no one likes this`;
            break;
        case 1:
            stringResult = `${names[0]} likes this`;
            break;
        case 2:
            stringResult = `${names[0]} and ${names[1]} like this`;
            break;
        case 3:
            stringResult = `${names[0]}, ${names[1]} and ${names[2]} like this`;
            break;
        default:
            stringResult = `${names[0]}, ${names[1]} and ${length - 2} others like this`;
    }

    return stringResult;
}

module.exports = displayLikes;

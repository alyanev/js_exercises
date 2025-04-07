//  Exercise - Includes

const numbers = [1, 2, 3, 4, 'w'];

function isIncludes(array, searchElement) {

    for (let element of array) {
        if (element === searchElement) {
            return true;
        }
    }
    return false;
}

console.log(isIncludes(numbers, 4));

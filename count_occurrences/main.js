// Exercise - Count Occurrences

// first solution

function countOccurrences1(array, searchElement) {

    let counter = 0;

    for (let key of array) {
        if (key === searchElement) {
            counter++
        }
    }
    return counter;
}

// second solution


function countOccurrences2(array, searchElement) {
    const sum = array.reduce((accumulator, current) => {
        if (current === searchElement) {
            accumulator++;
        }
        return accumulator;
    }, 0);

    return sum;
}

// third solution 

function countOccurrences3(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occerrence = (current === searchElement) ? 1 : 0;
        return accumulator + occerrence;
    }, 0);
}

const numbers = [1, 2, 3, 4, 3, 5, 3];

const count = countOccurrences1(numbers, 5);

console.log(count);
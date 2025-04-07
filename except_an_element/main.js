//  Exercise - Except an Element

function except(array, excluded) {

    const output = [];
    for (let element of array) {
        if (!excluded.includes(element)) {
            output.push(element);
        }
    }
    return output;

    // const difference = array.filter(element => !excluded.includes(element));
    // return difference;

    // const a = array.every((value, index) => value === !excluded[index]);
    // return a;
}

const numbers = [1, 2, 1, 3, 4, 1, 1];
const output = except(numbers, [1, 2]);
console.log(output);
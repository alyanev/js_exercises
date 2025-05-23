//  Exercise - Moving an element in array

function move(array, index, offset) {
    const position = index + offset;

    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return array;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);

console.log(output);
// Exercise - Array from Range

const numbers = arrayFromRange(1, 5);

function arrayFromRange(min, max) {

    const output = [];
    for (let n = min; n <= max; n++) {
        output.push(n);
    }
    return output;
}

console.log(numbers);
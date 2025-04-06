// Function to count the number of truthy values in an array

function countTruthy(array) {

    let count = 0;

    for (let index of array) {
        if (index) {
            count++;
        }
    }
    console.log(count);
}

countTruthy([1, 2, 3, undefined, 0, '', 'tr']);
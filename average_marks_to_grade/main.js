// Function for calculating the average value of array elements.
function calculateAverage(array) {

    let counter = 0;
    let sum = 0;

    for (let value of array) {
        sum += value;
        counter++;
    }
    return sum / array.length;
}

// Function for calculating the average mark and return the mark respectively.
function averageMark(marks) {
    const average = calculateAverage(marks);

    if (average < 60) {
        return 'F';
    } else if (average <= 69) {
        return 'D';
    } else if (average <= 79) {
        return 'C';
    } else if ((average <= 89)) {
        return 'B';
    } else if (average <= 100) {
        return 'A';
    }
}

const marks = [110, 80, 50];
console.log(averageMark(marks));
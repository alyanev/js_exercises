// Function iterates through all numbers from 2 to `limit` and check whether each number is prime.
function showPrimes(limit) {

    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            console.log(number);
        }
    }
}

// Helper function that checks whether a number is divisible by any number other than 1 and itself.
function isPrime(number) {

    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            return false;
        }
    }
    return true;
}


showPrimes(10);
// Function to print only string properties of an object

function showProperties(obj) {

    // Looping through each property on the object using the 'for...in' loop
    for (let key in obj) {
        // Check if the property value is of the type string
        if (typeof obj[key] === 'string') {
            // Log the key and its corresponding value to the console
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

const movie = {
    title: 'Interstellar',  // String property
    releaseYear: 2015,      // Non-String property
    rating: 9.0,
    director: 'Abrams'
};

showProperties(movie);
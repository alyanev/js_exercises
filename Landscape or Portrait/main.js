function isLandscape(width, height) {
    const numWidth = Number(width);
    const numHeight = Number(height);

    // Check if both values are valid numbers
    if (isNaN(numWidth) || isNaN(numHeight)) {
        throw new Error("Both width and height must be valid numbers.");
    }

    return numWidth > numHeight;
}

console.log(isLandscape(6, 5));  // true
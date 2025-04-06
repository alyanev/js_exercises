// Function to print which number is even and which numer is odd to the limit.

function showNumbers(limit) {

    if (limit < 0) {
      return console.log('Number cannot be negative.');
    }
  
    for (let i = 0; i <= limit; i++) {
      const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
      console.log(i, message);
    }
  }
  
  showNumbers(10);
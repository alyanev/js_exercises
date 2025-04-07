// Objects 15 - Exercise Show Address Object

const address = {
    street: 'Yavorov',
    city: 'Veliko Tarnovo',
    zipCode: '5000'
    };
    
    function showAddress(address1) {
    
        for (let key in address1) {
            console.log(`${key}: ${address1[key]}`);
        }
    }
    
    showAddress(address);
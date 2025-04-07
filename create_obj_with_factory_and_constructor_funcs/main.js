// Objects 16 - Exercise - Create objects with Factory and Constructor functions

// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

// Constructor Function
function CreateAddressConstr(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address = new CreateAddressConstr('Yavorov', 'Veliko Tarnovo', 5000);

console.log(address);

let factoryAddress = createAddress('Yavorov', 'Veliko Tarnovo', 5000);

console.log(factoryAddress);
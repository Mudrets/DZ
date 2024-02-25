//task 1
console.log('task 1');

class Address {
    city: string;
    street: string;
    postalCode: number;
    constructor(city: string,street: string,postalCode: number){
        this.city = city
        this.street = street
        if (postalCode.toString().length === 6) {
            this.postalCode = postalCode;
        } else {
            throw new Error('Postal code must have a 6 digits.');
        }
    }
    logger ():string {
        // console.log(`${this.city} ${this.street} ${this.postalCode}`);
        return `\nCity: ${this.city};\nStreet: ${this.street};\nPostal code: ${this.postalCode};`
    }
}

class Custumer {
    name: string;
    age: number;
    address:Address;
    constructor(name: string,age: number,address:Address){
        this.name = name
        this.age = age
        this.address = address
    }
    logger ():string {
        console.log(`Name: ${this.name};\nAge: ${this.age} y.o.;\n ${this.address.logger()}`);
        return `${this.name} ${this.age} ${this.address.logger()}`
    }
}
const myAddress = new Address('Rivne', 'Malinova 34', 330100);
const myCustumer = new Custumer('Rinata', 25, myAddress);
myCustumer.logger()

//task 2
console.log('');
console.log('task 2');

interface Shape {
    calculateArea(): number;
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);

console.log('S rectangle:', rectangle.calculateArea());
console.log('S circle:', circle.calculateArea());

//task 3
console.log('');
console.log('task 3');

class Store {
    name: string;
    products: string[];

    constructor(name: string) {
        this.name = name;
        this.products = [];
    }

    addProduct(product: string): void {
        this.products.push(product);
        console.log(`Product "${product}" added to the store.`);
    }

    removeProduct(product: string): void {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log(`Product "${product}" removed from the store.`);
        } else {
            console.log(`Product "${product}" not found in the store.`);
        }
    }

    displayProducts(): void {
        if (this.products.length === 0) {
            console.log('There are no products in the store.');
        } else {
            console.log(`Products in the store "${this.name}":`);
            this.products.forEach((product, index) => {
                console.log(`${index + 1}. ${product}`);
            });
        }
    }
}

const myStore = new Store('Book store');

myStore.addProduct('Book 1');
myStore.addProduct('Book 2');
myStore.addProduct('Book 3');

myStore.displayProducts();

myStore.removeProduct('Book 2');

myStore.displayProducts();
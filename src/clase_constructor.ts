// Clase con constructor
class Car {
    make: string;
    
    constructor(make: string) {
        this.make = make;
    }
    
    drive() {
        console.log(`Driving a ${this.make}`);
    }
}

const myCar = new Car("Honda");

myCar.drive();

export type {Car}


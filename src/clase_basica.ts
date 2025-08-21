class Car {
    make: string;
    
    constructor(make: string) {
        this.make = make;
    }
    
    drive() {
        console.log(`Driving a ${this.make}`);
    }
}

// Crear una instancia de Car
const myCar = new Car("Toyota");

// Llamar al método drive
myCar.drive();

// Exportar la clase Car
export { Car };
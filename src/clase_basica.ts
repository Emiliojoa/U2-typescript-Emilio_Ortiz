class Car {
    make: string= ""
    drive() {
        console.log(`Driving a ${this.make}`);
    }
}
const myCar = new Car()
myCar.make="honda"
myCar.drive();

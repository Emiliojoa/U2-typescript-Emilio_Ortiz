class Car {
    make: string;
    
    constructor(make: string) {
        this.make = make;
    }
    
    drive() {
        console.log(`Driving a ${this.make}`);
    }
}

class ElectricCar extends Car {
    batteryLife:number;

    constructor(make: string, batteryLife:number) {
        super(make);
        this.batteryLife=batteryLife;

        
    }
    charge(){
        console.log(`su vehiculo ${this.make} se esta cargando`)
    }

}
const autoElectrico = new ElectricCar("tesla", 100)
autoElectrico.charge()
autoElectrico.drive()



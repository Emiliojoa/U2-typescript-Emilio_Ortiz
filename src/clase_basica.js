"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(make) {
        this.make = make;
    }
    Car.prototype.drive = function () {
        console.log("Driving a ".concat(this.make));
    };
    return Car;
}());
exports.Car = Car;
// Crear una instancia de Car
var myCar = new Car("Toyota");
// Llamar al método drive
myCar.drive();

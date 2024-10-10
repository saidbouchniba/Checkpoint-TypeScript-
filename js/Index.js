"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() { console.log("Car Engine started"); }
}
const Bmw3 = new Car("Bmw", "Bmw3", 1986);
Bmw3.start();

interface Vehicle {
    make: string,
    model: string,
    year: number,
    start(): void

}
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start():void{console.log("Car Engine started");}
    
}
const Bmw3:Vehicle=new Car("Bmw","Bmw3",1986)
Bmw3.start()
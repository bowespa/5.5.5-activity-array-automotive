//this includes the vehicle class as a module
//const VehicleModule = require("./vehicle")

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)


import { Vehicle } from "./vehicleBaseClass.js";

class Car extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassangers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 200;
        this.fuel = 100;
        this.scheduledService = false;
    }

    loadPassengers(num){
        this.passenger = num;
        var avaibleRoom = false;
        if (this.passenger < this.maxPassangers) {
            return `Can fit ${this.passenger} people. Available room = ${avaibleRoom = true}`;
        } else {
            avaibleRoom == false;
            return `Can not fit ${this.passenger} people. Available room = ${avaibleRoom = false}`;
        }
    }

    start() {
        let start;
        if (this.fuel > 0){
            start == true;
        } else {
            start == false;
            console.log("No fuel.")
        }
    }

    scheduledService(mileage){
        if (this.mileage > 30000){
            this.scheduledService == true
            return this.scheduledService;
        }
    }

}
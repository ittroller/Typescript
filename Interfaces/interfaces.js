"use strict";
exports.__esModule = true;
var oldCivic = {
    name: "civic",
    year: 2000,
    broken: true
};
var longVehicle = {
    name: "longVehicle",
    year: 1000,
    broken: true,
    summary: function () {
        return this.name;
    }
};
var printVehicle = function (vehicle) {
    console.log(vehicle.name);
    console.log(vehicle.year);
    console.log(vehicle.broken);
};
printVehicle(oldCivic);
var printVehicle1 = function (vehicle) {
    console.log(vehicle.name);
    console.log(vehicle.year);
    console.log(vehicle.broken);
    console.log(vehicle.summary());
};
printVehicle1(longVehicle);
var people1 = {
    showAge: function () {
        return "10";
    }
};
var printUser = function (user) {
    console.log(user.showAge());
};

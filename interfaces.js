var oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: ".concat(this.name);
    },
};
var Drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has ".concat(this.sugar, " grams of sugar");
    },
};
var printVehicle = function (vehicle) {
    console.log(vehicle.summary());
    // console.log(`Name: ${vehicle.name}`);
    console.log("Year: ".concat(vehicle.year));
    console.log("Broken: ".concat(vehicle.broken));
};
var printSummary = function (vehicle) {
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(Drink);

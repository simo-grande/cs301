var car = {
    make: "toyota",
    model: "prius",
    year: 2010,
    odometer: 90000,
    serviceCount: 10
};

function service() {
    return car.serviceCount + 1;
}

function getOdometerReading() {
    return car.odometer;
}

function reset() {
    return car.odometer = 0;
}
console.log(service(car));
console.log(getOdometerReading(car));
console.log(reset(car));

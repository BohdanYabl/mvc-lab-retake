const cars = [
    {id: 1, make: "Toyota", model: "Kamry", year: 2020, color: "white" },
    {id: 2, make: "BMW", model: "M8", year: 2023, color: "black" }
];

function getCars() {
    return cars;
}

function getCarInformation(id) {
    const car = cars.find(car => car.id === id);
    if (car) {
        return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}.`;
    } else {
        return "Car doesn't exist.";
    }
}

function getCarAge(id) {
    const car = cars.find(car => car.id === id);
    if (car) {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - car.year;
        return `Car is ${carAge} years old.`;
    } else {
        return "Car doesn't exist.";
    }
}

module.exports = {
    getCars,
    getCarInformation,
    getCarAge
}; 

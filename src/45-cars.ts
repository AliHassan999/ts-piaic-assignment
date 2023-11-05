type CarDetails = {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
};

function createCar(manufacturer: string, modelName: string, ...extras: [string, any][]): CarDetails {
    const carInfo: CarDetails = { manufacturer, modelName };
    extras.forEach(([key, value]) => {
        carInfo[key] = value;
    });
    return carInfo;
}

// Creating a car object with additional properties
const car = createCar('Toyota', 'Corolla', ['color', 'blue'], ['sunroof', true], ['year', 2023]);

// Printing the car object
console.log(car);

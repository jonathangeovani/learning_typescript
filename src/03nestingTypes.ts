type Car = {
    make: string;
    model: string;
    year: number;
}

type Garage = {
    cars: Car[];                // The property "cars" receive a list of "Car" objects
    carsModelsToObjects: {      
        [model: string]: Car    // The string "model" is going to map to the type Car
    }
}
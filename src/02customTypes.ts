// If using on a separated file or subdirectory, can use:
// export type Animal = {};

type Animal = {         // keyword "type" to create a custom type
    name: string;
    age: number;
    colors: string[];
    legs?: number;      // Use the question mark to say that it is optional (can be number or undefined)
};

const dog: Animal = {   // Must implement all the properties from Animal
    name: 'Bob',
    age: 4,
    colors: ['Brown', 'White']
}; // as Animal; (called Type Cast or Conversion)

// Custom types in Arrow Functions
const printAnimal = (animal: Animal) => {
    const legs = (animal.legs !== undefined ? animal.legs : 0) + 2; // Check if animal.legs is undefined and handles a possible error
    console.log(animal.name, animal.age, legs);
}

printAnimal(dog);       // Works totally fine since "dog" has all the fields of "Animal"
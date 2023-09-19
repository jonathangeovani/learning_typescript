// Type Guards or Type Checking

// Using Fish and Cat from '06interfaces.ts'

const isFish = (animal: Fish | Cat): animal is Fish => {
    return (animal as Fish).swim() !== undefined;
}

const callAnimalFunc = (animal: Fish | Cat) => {
    if (isFish(animal)) animal.swim();
    else animal.meow();
}

callAnimalFunc(fish)
callAnimalFunc(cat)
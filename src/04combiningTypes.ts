type Animals = {
    name: string;
    age: number;
    colors: string[] | string;      // Use the "|" (pipe) to combine two or more types
}

type Monkey = {
    diet: string;
} & Animals;        // Intersection of two different types, wich means we must have all the properties of Animals & Monkey

const monkey: Monkey = {
    diet: 'bananas',
    name: 'George',
    age: 5,
    colors: 'brown'                 // Acept one string because we added the pipe operator on the Animal colors property
}
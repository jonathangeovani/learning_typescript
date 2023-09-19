type Fish = {
    name: string;
    swim: () => void;
}

type Cat = {
    name: string;
    meow: () => void;
}

interface Pet {
    name: string;
}

const printName = (pet: Pet) => {
    console.log(pet.name);
}

const fish: Fish = {
    name: 'Nemo',
    swim: () => {}
};

const cat: Cat = {
    name: 'Tom',
    meow: () => {}
}

printName(fish);
printName(cat);
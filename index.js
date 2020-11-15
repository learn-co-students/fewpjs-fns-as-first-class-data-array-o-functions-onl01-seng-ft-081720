function wakeDog(dogName, dogBreed) {
    let myString = `Wake ${dogName} the ${dogBreed}`;
    return myString;
}

function leashDog(dogName, dogBreed) {
    let myString = `Leash ${dogName} the ${dogBreed}`;
    return myString;
}

function walkToPark(dogName, dogBreed) {
    let myString = `Walk to the park with ${dogName} the ${dogBreed}`;
    return myString;
}

function throwFrisbee(dogName, dogBreed) {
    let myString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    return myString;
}

function walkHome(dogName, dogBreed) {
    let myString = `Walk home with ${dogName} the ${dogBreed}`;
    return myString;
}

function unleashDog(dogName, dogBreed) {
    let myString = `Unleash ${dogName} the ${dogBreed}`;
    return myString;
}

var routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog 
];

function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed));
}
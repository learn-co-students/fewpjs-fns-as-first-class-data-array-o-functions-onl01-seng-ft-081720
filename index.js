function wakeDog(dogName, dogBreed){
    return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName, dogBreed){
    return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(a, b){
    return `Walk to the park with ${a} the ${b}`
};

function throwFrisbee(dogName, dogBreed){
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName, dogBreed){
    return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName, dogBreed){
    return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
    let stuff = []
    for (let i = 0; i < routine.length; i++){
        console.log(routine[i](dogName, dogBreed))
        stuff.push(routine[i](dogName, dogBreed))
        // return routine[i](dogName, dogBreed)
        // routine[i](dogName, dogBreed)
    }
    return stuff
}

// exerciseDog()
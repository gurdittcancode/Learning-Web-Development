//default params

function multiply(a, b = 1) {
    return a * b
}

// function greet(greeting = "hey there", name) {
//     console.log(`${greeting}, ${name}`)
// }

function greet(name, greeting = "hey there") {
    console.log(`${greeting} ${name}`)
}

//spread

// Math.min(2,4,1)
// const arr = [2,4,1]
// Math.min(arr) //Nan
// Math.min(...arr) = 1


const cats = ["Blue", "Scout", "Rocket"]
const dogs = ["Rusty", "Wyatt"]

const allPets = [...cats, ...dogs, "Speedy"]



//Higher order functions

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for(let i = 0; i<10; i++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

// callTwice(rollDie);

//******************************************

//Returning a function

function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION");
            console.log("YOU WIN A MILLION DOLLARS!!");
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
        }
    }
}

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

function makeBetweenFunc(min, max) {

    return function(num) {
        return num >= min && num <= max;
    }
}


// makeBetweenFunc(5, 10) 
//should make a new function, and that function should tell us if that number is between 5 and 10

//  METHDOS

const myMath = {
    PI: 3.14159,
    square: function(x) {
        return x*x;
    },
    cube: function(x) { 
        return x**3;
    }
}

const cat = {
    name: "Blue Steele",
    color: "grey",
    breed: "Scottish fold",
    meow() {
        console.log(this);
        console.log(`${this.name} says - MEOW MEOW MEOW`);
    }
}

const meow2 = cat.meow;
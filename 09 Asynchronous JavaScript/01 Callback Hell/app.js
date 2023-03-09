// document.body.style.backgroundColor = "red";
// document.body.style.backgroundColor = "orange";


// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
// }, 2000);

// setTimeout(() => {
//     document.body.style.backgroundColor = "yellow";
// }, 3000);

                            // NESTING

// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "green";
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "blue";
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

                        //COMPRESSING IT TO A FUNCTION

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext(); //first one is checking if doNext exists.
    }, delay);
};

delayedColorChange('red', 1000, () => {
    // console.log("INSIDE CALLBACK!!!!");
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000);
            })
        })
    })
});

//THIS PATTERN IS VERY COMMON SO UNDERSTAND THIS

//situation
searchMoviesAPI('American Psycho', () => {
    saveToDB(movies, () => {
        //if things go well, execute this!
    }, () => {
        //if it doesn't work, run this!
    }), () => {
        //If API is down or request failed
    }
})

//THIS IS GETTING CRAZY NOW, THIS RESULTS IN 'CALLBACK HELL'

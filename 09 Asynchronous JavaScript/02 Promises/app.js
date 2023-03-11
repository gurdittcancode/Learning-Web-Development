const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 2500) {
            failure('Connection Timeout :(');
        }
        else {
            success(`Here is your fake data from ${url}!`);
        }
    }, delay);
};

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(');
            }
            else {
                resolve(`Here is your fake data from ${url}!`);
            }
        }, delay)
    })
}

    //CONVENTIONAL WAY

// fakeRequestCallback('deeznuts.com/page1', (response) => {
//     console.log("IT WORKED!");
//     console.log(response);
//     fakeRequestCallback("deeznuts.com/page2", (response) => {
//         console.log("IT WORKED AGAIN");
//         console.log(response);
//         fakeRequestCallback("deeznuts.com/page3", (response) => {
//             console.log("IT WORKED YET AGAIN");
//             console.log(response);
//         }, (response) => {
//             console.log("ERROR (3rd req)");
//             console.log(response);
//         })
//     }, (response) => {
//         console.log("ERROR (2nd req)!!");
//         console.log(response);
//     })
// }, (response) => {
//     console.log("ERROR!!");
//     console.log(response);
// })

// const request = fakeRequestPromise("yelp.com/api/coffee/page1");

// request
//     .then(() => {
//         console.log("IT WORKED!"); //if it got till here, it means the promise got resolved.
//         console.log("PROMISE RESOLVED"); //if it got till here, it means the promise got resolved.
//     })
//     .catch(() => {                 //promise was rejected
//         console.log("OH NO! ERROR");
//         console.log("PROMISE REJECTED");
//     })

// fakeRequestPromise("yelp.com/api/coffee/page1")
//     .then(() => {
//         console.log("IT WORKED! (page 1)"); //if it got till here, it means the promise got resolved.
//         fakeRequestPromise("yelp.com/api/coffee/page2")
//             .then(() => {
//                 console.log("IT WORKED! (page 2)");
//                 fakeRequestPromise("yelp.com/api/coffee/page3")
//                 .then(() => {
//                     console.log("IT WORKED! (page 3)");
//                 })
//                 .catch(() => {
//                     console.log("Error on page 3");
//                 })
//             })
//             .catch(() => {
//                 console.log("Error on page 2!");
//             })
//     })
//     .catch(() => {
//         console.log("Error on page 1!");
//     })
//THIS ISN'T REALLY AN IMPROVEMENT OVER CALLBACKS


                    //THE MAGIC

fakeRequestPromise("yelp.com/api/coffee/page1")
    .then(() => {
        console.log("page 1 worked");
        return fakeRequestPromise("yelp.com/api/coffee/page2");
    })
    .then(() => {                               //if the first one works, then only this one
        console.log("page 2 worked");
        return fakeRequestPromise("yelp...page3");
    })
    .then(() => {
        console.log("page 3 worked");
    })
    .catch(() => {
        console.log("failed"); //if any one of them fails, we reach here.
    })
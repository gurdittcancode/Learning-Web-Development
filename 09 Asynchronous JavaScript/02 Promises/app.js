const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 2500) {
            failure("Connection Timeout :/");
        }
        else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay)
};

const fakeRequestPromises = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject("Connection Timeout :(");
            }
            else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay)
    })
}

/*

        CALLBACK HELL

*/

fakeRequestCallback('idk.com/page1', (response) => {
    console.log("IT WORKED XDDD!!!");
    console.log(response);

    fakeRequestCallback('idk.com/page2', 
    function (response) {
        console.log("IT WORKED AGAIN XDDD!!!");
        console.log(response);
        fakeRequestCallback('idk.com/page3', 
            function () {
                console.log("IT WORKED YET AGAIN xddddddd");
            }, function () {
                console.log("IT DIDN'T WORK, JUST STOP FFS");
            })
    }, function (response) {
        console.log("IT DIDN'T WORK :((((");
        console.log(response);
    })
}, (response) => {
    console.log("IT DIDN'T WORK :((((");
    console.log(response);
});

/* 
                PROMISES
*/


const L05Promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Testing: 1, 2, 3!");
    }, 5000);
});

L05Promise.then(result => console.log(result));

const L05Promise2 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Hello? Can you hear me?");
    }, 3000);
});

L05Promise2.then(result => console.log(result));

const L05Promise3 = new Promise((resolve, reject) => {
    setTimeout(function() {
        reject("Something went wrong");
    }, 4000);
});

L05Promise3.catch(err => console.log(err));
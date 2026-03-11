// const p1 = new Promise((resolve) => setTimeout(() => resolve("A"), 1000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("B"), 2000));
// const p3 = new Promise((resolve) => setTimeout(() => resolve("C"), 3000));

// const p1 = new Promise((resolve) => setTimeout(() => resolve("A"), 5000));
// const p2 = new Promise((_, reject) => setTimeout(() => reject("B Failed!"), 2000));
// const p3 = new Promise((resolve) => setTimeout(() => resolve("C"), 1000));

const p1 = new Promise((resolve) => setTimeout(() => resolve("A"), 3000));
const p2 = new Promise((_, reject) => setTimeout(() => reject("B Failed!"), 1000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("C"), 2000));

const promisesResult = Promise.any([p1 , p2 , p3]);
promisesResult
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
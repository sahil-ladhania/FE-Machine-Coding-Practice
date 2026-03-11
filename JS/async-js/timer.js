// -----setTimeout-----

// Syntax for setTimeout -> const timerId = setTimeout(callback , delay , arg1 , arg2, ...); -----------> setTimeout mai delay k baad kaam hota hai.
// Syntax for clearing the timeout -> clearTimeout(timerId)

// -----setInterval-----

// Syntax for setInterval -> const timerId = setInterval(callback , delay , arg1 , arg2, ...); ---------> setInterval mai repeteadly execute hota hai after delay time.
// Syntax for clearing the interval -> clearInterval(timerId)


// Practical Problems

// 1. Print "Hello Sahil" after 3 seconds.
// const timerId1 = setTimeout(() => {
//     console.log("Hello Sahil");
// }, 3000);

// 2. Print count from 1 to 5, one number per second, then stop.
// let counter1 = 1;
// const timerId2 = setInterval(() => {
//     console.log(counter1++);

//     if(counter1 === 6){
//         clearInterval(timerId2);
//     }
// }, 1000);

// 3. Print countdown: 5 → 4 → 3 → 2 → 1 → "Blast Off!" (one per second)
// let counter2 = 5;
// const timerId3 = setInterval(() => {
//     console.log(counter2--);

//     if(counter2 === 0){
//         clearInterval(timerId3);
//         console.log("Blast Off!");
//     }
// }, 1000);

// 4. Print 1 to 5 using only setTimeout (no setInterval). One number per second.
// function printNumber(n) {
//     console.log(n);

//     if(n < 5){
//         setTimeout(() => {
//             printNumber(n + 1);
//         }, 1000);
//     };
// };

// printNumber(1);
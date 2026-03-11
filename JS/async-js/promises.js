// -----Promises-----

// Syntax for creating a Promise
/*
const promise = new Promise((resolve , reject) => {
    // kuch async kaam kro
    // success -> resolve(value)
    // error -> reject(error)
});
*/

// Syntax for using a Promise
/*
promise
    .then((value) => {
        success message        
    })
    .catch((error) => {
        error message
    })
    .finally(() => {
        always run
    });
*/

// Practical Problems

// 1. fetchUser() function banao jo Promise return kare. 2 sec baad {id: 1, name: "Sahil"} resolve kare.
// function fetchUser() {
//     const promise = new Promise((resolve , reject) => {
//         setTimeout(() => {
//             const data = {
//                 id: 1,
//                 name: "Sahil"
//             };

//             resolve(data);
//         }, 2000);
//     });
//     console.log(promise);

//     return promise;
// };

// fetchUser()
//     .then((userData) => {
//         console.log(userData);
//     })
//     .catch((error) => {
//         console.log("Error : " , error);
//     })
//     .finally(() => {
//         console.log("Promise Completed !");
//     });

/*
2. fetchUser() modify karo -
    50% chance → resolve with user data
    50% chance → reject with "User not found!"
*/
// function fetchUser() {
//     const promise = new Promise((resolve , reject) => {
//         setTimeout(() => {
//             const data = {
//                 id: 1,
//                 name: "Sahil"
//             };

//             const chance = Math.random();
//             if(chance < 0.5){
//                 resolve(data);
//             }
//             else{
//                 reject("No User Found !");
//             };
//         }, 2000);
//     });

//     return promise;
// };

// fetchUser()
//     .then((userData) => {
//         console.log(userData);
//     })
//     .catch((error) => {
//         console.log("Error : " , error);
//     })
//     .finally(() => {
//         console.log("Promise Completed !");
//     });

/*
3. Wahi 3 functions banao Promises ke saath -

getUser() → 1 sec baad {id: 1, name: "Sahil"}
getOrders(userId) → 1 sec baad [{orderId: 101}, {orderId: 102}]
getOrderDetails(orderId) → 1 sec baad {orderId: 101, product: "Laptop", price: 50000}

Chain karo using .then() — no nesting!
*/

function getUser() {
    const promise = new Promise((resolve , reject) => {
        setTimeout(() => {
            const data = {
                id: 1,
                name: "Sahil"
            };

            resolve(data);
        }, 1000);
    });
    console.log(promise);

    return promise;
};

function getOrders(userId) {
    const promise = new Promise((resolve , reject) => {
        setTimeout(() => {
            const data = [
                {
                    orderId: 101
                },
                {
                    orderId: 102
                }
            ];

            resolve(data);
        }, 1000);
    });
    console.log(promise);

    return promise;
};

function getOrderDetails(orderId) {
    const promise = new Promise((resolve , reject) => {
        setTimeout(() => {
            const data = {
                orderId: 101,
                product: "Laptop",
                price: 50000
            };

            resolve(data);
        }, 1000);
    });
    console.log(promise);

    return promise;
};

getUser()
    .then((user) => {
        console.log(user);
        return getOrders(user.id);
    })
    .then((orders) => {
        console.log(orders);
        return getOrderDetails(orders[0].orderId);
    })
    .then((orderDetails) => {
        console.log(orderDetails);
    })
    .catch((error) => {
        console.log("Error : " , error);
    })
    .finally(() => {
        console.log("Promise Completed !");
    });
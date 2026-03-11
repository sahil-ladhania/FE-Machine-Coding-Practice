// -----async-await-----

/*
Syntax of async await -

async function fetchData() {
    const result = await somePromise;
    return result;
}
*/

// Practical Problems

// 1. Pehle wala fetchUser() function use kar (jo 2 sec baad user return karta hai). Async/await se call kar aur result print kar.
// function fetchUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "Sahil" });
//         }, 2000);
//     });
// };

// async function printResult() {
//     const result = await fetchUser();
//     console.log(fetchUser());
//     console.log(result);
// };

// printResult();


// 2. fetchUser() modify kar — 50% chance reject kare "User not found!". Async/await + try/catch se handle kar.

// function fetchUser() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             const chance = Math.random();
//             if(chance < 0.5){
//                 resolve({ id: 1, name: "Sahil" });
//             }
//             else{
//                 reject("User Not Found");
//             }
//         }, 2000);
//     });
// };

// async function printResult() {
//     try {
//         const result = await fetchUser();
//         console.log(fetchUser());
//         console.log(result);
//     } 
//     catch (error) {
//         console.log(error);
//     };
// };

// printResult();

// 3. Pehle wale 3 functions use kar (getUser, getOrders, getOrderDetails). Async/await se chain kar — no .then().

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Sahil" }), 1000);
    });
}

function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve([{ orderId: 101 }, { orderId: 102 }]), 1000);
    });
}

function getOrderDetails(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ orderId: 101, product: "Laptop", price: 50000 }), 1000);
    });
}

async function printResult() {
    try {
        const user = await getUser();
        const orders = await getOrders(user.id);
        const orderDetails = await getOrderDetails(orders[0].orderId);

        const data = {
            userId: user.id,
            userName: user.name,
            orderId: orders[0].orderId,
            product: orderDetails.product,
            price: orderDetails.price
        };
        console.log(data);
    } 
    catch (error) {
        console.log(error);
    };
};

printResult();
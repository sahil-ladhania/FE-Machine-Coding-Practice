// -----Callbacks-----

// Syntax of Callbacks
/*
function mainFunction(callback) {
    kuch kaam kro...
    callback(); -> Baad Mai Call Kro...
};

mainFunction(() => {
    console.log("Im callback");
});
*/

// Practical Problems

// 1. Function greet(name, callback) banao. Pehle "Hello {name}" print karo, phir callback execute karo.

function greet(name , callback) {
    console.log(`Hello ${name}`)
    callback();
};

greet("Sahil" , () => {
    console.log("Callback Executed !");
});

// 2. Function fetchData(callback) banao. 2 second baad callback ko {id: 1, name: "Sahil"} data pass karo.
function fetchData(callback) {
    setTimeout(() => {
        const data = {
            id: 1,
            name: "sahil"
        };
        callback(data);
    }, 2000);
};

fetchData((result) => {
    console.log("Callback Executed !");
    console.log(result);
});

// 3. Function calculate(a, b, callback) banao. callback decide karega kya operation karna hai (add, subtract, multiply).
function calculate(a , b , callback) {
    const result = callback(a , b);
    console.log(result);
};

calculate(4 , 2 , (a , b) => {
    return (a * b);
});

/*
4. Simulate - 
    getUser(callback) → 1 sec baad {id: 1, name: "Sahil"} return kare
    getOrders(userId, callback) → 1 sec baad [{orderId: 101}, {orderId: 102}] return kare
    getOrderDetails(orderId, callback) → 1 sec baad {orderId: 101, product: "Laptop", price: 50000} return kare

Chain karo teeno ko — final output mai order details print karo.
*/
function getUser(callback) {
    setTimeout(() => {
        const data = {
            id: 1,
            name: "Sahil"
        };
        callback(data);
    }, 1000);
};

function getOrders(userId , callback) {
    setTimeout(() => {
        const data = [
            {
                orderId: 101
            },
            {
                orderId: 102
            }
        ];
        callback(data);
    }, 1000);
};

function getOrderDetails(orderId , callback) {
    setTimeout(() => {
        const data = {
            orderId: 101,
            product: "laptop",
            price: 50000
        };
        callback(data);
    }, 1000);
};

getUser((userData) => {
    const userId = userData.id;
    getOrders(userId , (orders) => {
        const orderId = orders[0].orderId;
        getOrderDetails(orderId , (orderData) => {
            const orderDetails = {
                userId: userId,
                orderId: orderId,
                product: orderData.product,
                price: orderData.price
            };

            console.log(orderDetails);
        });
    });
});
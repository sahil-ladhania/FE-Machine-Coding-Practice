// -----fetch-----

/*
Syntax of fetch - 
fetch(url , options)
    .then(response => response.json)
    .then(data => clg(data))
    .catch(err => clg(err));
*/

// Practical Problems 

// 1. Fetch users from: https://jsonplaceholder.typicode.com/users Print the array of users. Use async/await.
// async function fetchUsers() {
//     try {
//         const url = "https://jsonplaceholder.typicode.com/users";
//         const response = await fetch(url);
//         console.log(response);
//         console.log(typeof response);

//         const data = await response.json();
//         console.log(data);
//         console.log(typeof data);
//     } 
//     catch (error) {
//         console.log(error);
//     };
// };

// fetchUsers();

// 2. Create a new user by sending POST request to: https://jsonplaceholder.typicode.com/users
// async function createUser(user) {
//     try {
//         const url = "https://jsonplaceholder.typicode.com/users";
//         const response = await fetch(url , {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json"
//             },
//             body: JSON.stringify(user)
//         });

//         console.log(response);
//         console.log(typeof response);

//         const userData = await response.json();
//         console.log(userData);
//         console.log(typeof userData);
//     }
//     catch (error) {
//         console.log(error);
//     };
// };

// createUser({name: "Sahil" , email: "sahil@gmail.com"});

// 3. Fetch a user that doesn't exist - https://jsonplaceholder.typicode.com/users/999 . Check response.ok — if false, throw error manually.
async function fetchUser() {
    try {
        const url = "https://jsonplaceholder.typicode.com/users/999";
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`User not found! Status: ${response.status}`);
        };

        const user = await response.json();
        console.log(user);
    }
    catch (error) {
        console.log(error);
    };
};

fetchUser();
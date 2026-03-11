"use strict"

// this in Global Space
console.log(this);

// this inside a Regular Function 
function x(params) {
    console.log(this);
};
x();

// this inside a Arrow Function 
const obj = {
    a: 10,
    b: () => {
        console.log(this);
    }
};
obj.b();

// this inside nested Arrow Function
const obj2 = {
    a: 10, 
    c: function () {
        const y = () => {
            console.log(this);
        }
        y();
    },
};
obj2.c();

// this inside DOM Elements -> reference to HTMLelement 

const arr = [1,2,3,4,5,6,7,8,9,10];

// map
const doubleArr = arr.map((element , index , arr) => `Index: ${index} : ${element * 2}`);
console.log(doubleArr);
console.log(arr === doubleArr);
console.log(typeof arr);
console.log(typeof doubleArr);

// filter
const evenArr = arr.filter((element , index , array) => element % 2 === 0);
console.log(evenArr);
console.log(arr === evenArr);

// reduce
const sum = arr.reduce((accumulator , current , index , array) => {
    return accumulator + current;
}, 0);
console.log(`Sum: ${sum}`);

// find
const getSix = arr.find((element , index , array) => element === 60);
console.log(getSix);

// findIndex
const getSixIndex = arr.findIndex((element , index , array) => element === 6);
console.log(getSixIndex);

// some
const isSix = arr.some((element , index , array) => element === 60);
console.log(isSix);

// every
const isMoreThanZero = arr.every((element , index , array) => element >= 1);
console.log(isMoreThanZero);

// sort
const a1 = [1,2,3,4,5,6,7,8,9,10];
const incOrder = a1.sort((a , b) => a - b);
console.log(incOrder);
const a2 = [1,2,3,4,5,6,7,8,9,10];
const decOrder = a2.sort((a , b) => b - a);
console.log(decOrder);
console.log(a1 === incOrder);
const a3 = [1,2,3,4,5,6,7,8,9,10];
const sorted = [...a3].sort((a , b) => b - a);
console.log(sorted);
console.log(a3 === sorted);
const str = ["sahil" , "aman" , "harshit" , "asha" , "binod"];
const sortedStr = str.sort();
console.log(sortedStr);
const a4 = [10,3,3,9,5];
const sortedA4 = a4.sort();
console.log(sortedA4);

// flat
const nestedArr1 = [
    [1,2,3],
    [
        [4,5,6],
        [7,8,9],
        [
            [10,11,12]
        ]
    ],
];
const flatenArr1 = nestedArr1.flat(Infinity);
console.log(flatenArr1);
console.log(nestedArr1 === flatenArr1);

// flatMap
const orders = [{items: ['a','b']}, {items: ['c']}]
const items = orders.flatMap((element , index , array) => element.items);
console.log(items);

// forEach
arr.forEach((element , index , array) => {
    console.log(`Element: ${element} ----> Index: ${index}`);
    console.log(arr === array);
});
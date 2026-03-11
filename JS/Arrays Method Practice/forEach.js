// p1
const p1 = ['a','b','c'].forEach((element , index , array) => {
    console.log(`${index} : ${element}`);
});

// p2
const p2 = [{name:'Alice',score:80},{name:'Bob',score:90}].forEach((element , index , array) => {
    let arr = [];
    element.score > 85 && arr.push(element.name);
    console.log(arr);
});

// p3
let sum = 0;
const p3 = [1,2,3,4,5].forEach((element , index , array) => {
    sum = sum + element;
});
console.log(sum);
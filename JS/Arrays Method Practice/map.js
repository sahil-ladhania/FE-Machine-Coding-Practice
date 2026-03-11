// p1
const p1 = [1,2,3,4,5].map((element , index , array) => {
    return (element * 2);
});
console.log(p1);

// p2
const p2 = [{name:'Alice',age:25},{name:'Bob',age:30}].map((element , index , array) => {
    return element.name;
});
console.log(p2);

// p3
const p3 = ['hello','world','foo'].map((element , index , array) => {
    return element.toUpperCase();
});
console.log(p3);

// p4
const p4 = [1,2,3,4,5].map((element , index , array) => {
    return {
        id: index + 1,
        val: element
    };
});
console.log(p4);
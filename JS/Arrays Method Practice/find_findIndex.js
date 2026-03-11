// p1
const p1 = [{id:1,name:'A'},{id:2,name:'B'},{id:3,name:'C'}].find((element , index , array) => {
    return (element.id === 2);
}); 
console.log(p1);

// p2
const p2 = [10,20,30,40,50].find((element , index , array) => {
    return (element > 25);
});
console.log(p2);

// p3
const p3 = [{id:1},{id:2},{id:3}].findIndex((element , index , array) => {
    return (element.id === 3);
});
console.log(p3);

// p4
const p4 = ['cat','dog','bird'].findIndex((element , index , array) => {
    return (element === 'dog');
});
console.log(p4);

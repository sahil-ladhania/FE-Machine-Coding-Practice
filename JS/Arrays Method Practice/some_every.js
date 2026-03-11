// p1
    const p1 = [1,2,3,4,5].some((element , index , array) => {
    return (element > 4);
});
console.log(p1);

// p2
const p2 = [2,4,6,8].every((element , index , array) => {
    return (element % 2 === 0);
});
console.log(p2);

// p3
const p3 = [{role:'user'},{role:'admin'},{role:'user'}].some((element , index , array) => {
    return (element.role === 'admin');
});
console.log(p3);

// p4
const p4 = [{verified:true},{verified:true},{verified:false}].every((element , index , array) => {
    return (element.verified);
});
console.log(p4);
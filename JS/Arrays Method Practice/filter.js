// p1
const p1 = [1,2,3,4,5,6,7,8].filter((element , index , array) => {
    return (element % 2 === 0);
});
console.log(p1);

// p2
const p2 = [{name:'Alice',active:true},{name:'Bob',active:false},{name:'Charlie',active:true}].filter((element , index , array) => {
    return element.active;
});
console.log(p2);

// p3
const p3 = ['apple','banana','apricot','cherry'].filter((element , index , array) => {
    return element.startsWith('a');
});
console.log(p3);

// p4
const p4 = [1,null,2,undefined,3,null,4].filter((element , index , array) => {
    return (element !== null && element !== undefined);
});
console.log(p4);
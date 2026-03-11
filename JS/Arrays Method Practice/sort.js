// p1
const p1 = [3,1,4,1,5,9,2,6].sort((a,b) => {
    return (a-b);
});
console.log(p1);

// p2
const p2 = [3,1,4,1,5,9,2,6].sort((a,b) => {
    return (b-a);
});
console.log(p2);

// p3
const p3 = ['banana','apple','cherry','date'].sort();
console.log(p3);

// p4
const p4 = [{name:'Charlie'},{name:'Alice'},{name:'Bob'}].sort((a,b) => {
    return a.name.localeCompare(b.name);
});
console.log(p4);
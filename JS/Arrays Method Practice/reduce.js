// p1
const p1 = [10, 20, 30, 40].reduce((accumulator , current) => {
    return (accumulator + current);
}, 0);
console.log(p1);

// p2
const p2 = ['a','b','a','c','b','a'].reduce((accumulator , current) => {
    accumulator[current] = (accumulator[current] || 0) + 1;
    return accumulator;
}, {});
console.log(p2);

// p3
const p3 = [[1,2],[3,4],[5,6]].reduce((accumulator , current) => {
    return [...accumulator , ...current];
}, []);
console.log(p3);

// p4
const p4 = [{price:100},{price:200},{price:50}].reduce((accumulator , current) => {
    return (accumulator + current.price);
}, 0);
console.log(p4);
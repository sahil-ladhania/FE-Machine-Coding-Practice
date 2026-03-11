// p1
const p1 = [[1,2],[3,4],[5,6]].flat(Infinity);
console.log(p1);

// p2
const p2 = [1,[2,[3,[4]]]].flat(Infinity);
console.log(p2);

// p3
const p3 = ['hello world','foo bar'].flatMap((element , index , array) => {
    return (element.split(' '));
});
console.log(p3);

// p4
const p4 = [1,2,3].flatMap((element , index , array) => {
    return [element , element];
});
console.log(p4);
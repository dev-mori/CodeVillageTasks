const add3 = (x) => x + 3;
const red5 = (x) => x - 5;
const mul8 = (x) => x * 8;
const mul100 = (x) => x * 100;

const n = 1;
console.log(red5(mul100(n)));
console.log(add3(mul8(add3(n))));

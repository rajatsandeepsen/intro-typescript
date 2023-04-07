let x = 23;
console.log(x); // 23
x = '23';
console.log(x); // 23
let y;
y = parseInt("80"); // 80
let z = 1 | 0;
console.log(z); // 1
let p = 1;
// let i : int = 11 // error
let string;
string = 'hello';
let boolean;
boolean = true;
let number;
number = 23;
let array;
array = ['hello', 'world'];
let tuple;
tuple = ['hello', 23];
const teacher = {
    name: 'Bony',
    age: 23,
    reg: '123456',
    // hello: 'hello' not required
};
const student = {
    name: 'John',
    age: 23,
    reg: '123456',
    hello: 'hello'
};
let something = 10;
function foo(x, y) {
    return x + y;
}
foo(1, 2); // 3
// function foo(x: Number, y: number){ // error
//     return x + y
// }
// foo(1, 2) // 3
function voo(x, y) {
    return x + y;
}
voo('hello', 'world'); // helloworld
function add(x, y) {
    return x + y;
}
console.log(add(10, 20)); // 30
const arr = [];
arr.push(1);
// arr.push("2") // error
// arr.push(true) // error
// const array = [] // error (can't name array)

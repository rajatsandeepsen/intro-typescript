"use strict";
class Dyno {
    constructor(value, age) {
        this.value = value;
        this.age = age;
        console.log(value);
    }
}
const person1 = new Dyno('Tony', 23);
console.log(person1);
const person2 = new Dyno(1001, 23); // valid
const person3 = new Dyno(1001, 23); // valid
const person4 = new Dyno({ name: 'Tony', phone: 123456 }, 23); // valid
let person5;
person5 = new Dyno({ name: 'Sony', phone: 123456 }, 23); // valid
let person6;
person6 = new Dyno({ name: 'Sony', phone: 123456 }, 23); // valid
function base() {
    class Base {
    }
    return Base;
}
function derived() {
    class Derived extends base() {
    }
    return Derived;
}
class Spec extends derived() {
}
Spec.prop; // string
Spec.anotherProp; // string

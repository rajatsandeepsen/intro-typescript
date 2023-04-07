class Dyno<T>{
    constructor(public value: T, public age: number){
        console.log(value)
    }
}

const person1 = new Dyno<string>('Tony', 23)
console.log(person1)

interface Helper {
    name: String,
    phone: Number,
}

const person2 = new Dyno<Number>(1001, 23) // valid
const person3 = new Dyno<number>(1001, 23) // valid

const person4 = new Dyno<Helper>( {name: 'Tony', phone: 123456} , 23) // valid

let person5 : Dyno<Helper>;
    person5 = new Dyno<Helper>( {name: 'Sony', phone: 123456} , 23) // valid

let person6 : any;
    person6 = new Dyno<Helper>( {name: 'Sony', phone: 123456} , 23) // valid













function base<T>() {
    class Base {
        static prop: T;
    }
    return Base;
}
    
function derived<T>() {
    class Derived extends base<T>() {
        static anotherProp: T;
    }
    return Derived;
}
    
class Spec extends derived<string>() {}
    
Spec.prop; // string
Spec.anotherProp; // string

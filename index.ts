let x: any = 23;
console.log(x) // 23

x = '23'
console.log(x) // 23



let y : Number
y = parseInt("80") // 80


let z : Number = 1 | 0
console.log(z) // 1


// type help = 'help' | 'help me' | 'help me please'
// let h : help = 'help someone'


type int = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0
let p : int = 1
// let i : int = 11 // error


let string : String 
string = 'hello'

let boolean : Boolean
boolean = true

let number : Number
number = 23

let array : Array<String>
array = ['hello', 'world']

let tuple : [String, Number]
tuple = ['hello', 23]

// let enum : Enum
// enum = Enum.hello





interface Person {
    name: String,
    age: Number,
    reg: String,

    // [key: String]: any // error
    [key: string]: any
}

const teacher : Person = {
    name: 'Bony',
    age: 23,
    reg: '123456',

    // hello: 'hello' not required
}


const student : Person = {
    name: 'John',
    age: 23,
    reg: '123456',

    hello: 'hello'
}






let something : number = 10

function foo(x: number, y: number){
    return x + y
}

foo(1, 2) // 3


// function foo(x: Number, y: number){ // error
//     return x + y
// }

// foo(1, 2) // 3


function voo (x: String, y: string){
    return x + y
}

voo('hello', 'world') // helloworld





function add(x: number, y: number): number{
    return x + y
}

console.log(add(10, 20)) // 30



const arr : number[] = []
arr.push(1)
// arr.push("2") // error
// arr.push(true) // error



// const array = [] // error (can't name array)








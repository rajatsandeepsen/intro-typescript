// class University {
//     name: String;
//     constructor(name: String){
//         this.name = name
//     }
// }
class University {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    get ID() {
        return this.id;
        // access private variable
        // get required a return statement
    }
    otherFunction() {
        // access private variable
        // no return statement required
        console.log(this.name);
    }
}
const SJCET = new University('SJCET', "SJCET123");
console.log(SJCET); // University { name: 'SJCET', id: 'SJCET123' }
console.log(SJCET.ID); // SJCET123
SJCET.otherFunction(); // SJCET
class Human {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walking');
    }
}
class Superhuman extends Human {
    // extra parameter
    constructor(name, power) {
        super(name);
        this.name = name;
        this.power = power;
        this.skill = this.power(); // as a variable & ESNEXT doesn't support this
    }
    ability() {
        return this.power(); // as a function
    }
}
const superman = new Superhuman('Superman', () => console.log('flying'));
superman.ability(); // flying
superman.walk(); // walking
superman.skill; // flying
// static without declaring an object
class extra {
    static area(x) {
        return this.pi * x * x;
    }
}
extra.pi = 3.14;
console.log(extra.pi); // 3.14
console.log(extra.area(15)); // 706.5
// interface
class Personal {
    eat() { console.log("eating"); }
}
class Professional {
    work() { console.log("working"); }
}
class Humanoid {
    eat() { console.log("eating"); }
    work() { console.log("working"); }
}
const human = new Humanoid();
human.eat(); // eating

async function woo (){
    return new Promise((resolve, reject)=>{


        resolve(10)
    })
}

woo().then((data) => console.log(data))


const create = (x: number) => (y: number) => x + y
// create custom function

const addTen = create(10)
const addTwenty = create(20)
console.log(addTen(30))
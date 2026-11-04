// primitive data type
/* String => string
Bool => bolean
Number => number
Null => object
Symbol => symbol
Bigint = bigint
*/

// reference (Non-primitve) data type
/* object => object
function => function but we say it fuction object
Arrar => object
*/

const hero = ["rohit", "soniya", "yashika"]

let objectNumber = {
    name: "rohit",
    age: 19
}

let functionNumber = function(){
    console.log("hello world")
}

console.log(typeof hero)
console.log(typeof objectNumber)
console.log(typeof functionNumber)
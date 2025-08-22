let score = null
let score1 = undefined
console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)

console.log(typeof valueInNumber)
console.log(valueInNumber)  // Not a Number

console.log(typeof valueInNumbe1)
console.log(valueInNumber1)

//"33" => 33
//"333qqw" => NaN
//true => 1; false=>0;


let isLoggedIn = undefined

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)  //O/P => true

// 1=> true
// "" => false; "Hitesh" => true
//null => false
//undefined => false

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)
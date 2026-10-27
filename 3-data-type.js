// data type has two type 

// 1. // Primitive types

// strign
let firstName = "abdul"
console.log(firstName)
console.log(typeof firstName)

// output
// abdul
// string -> datatype string

// number
let age = 21
console.log(age)
console.log(typeof age)

// output
// 21
// number -> datatype number


// boolean -> true or false
let done = true
// done = false
console.log(done)
console.log(typeof done)

// output
// true
// boolean -> datatype boolean


// null - empty value we will add value in future lik that 
let child = null
console.log(child) // -> null
console.log(typeof child)

// null data type object it's bug ***


// undefined - no value has not beet assigned
let number;
console.log(number)
console.log(typeof number) // -> undefined






// 2. reference types

// array
let myArr = ["abdul", 8687, true]
console.log(myArr)
console.log(typeof myArr) // -> object


// Object
const myObj = {
    // property
    name:"abdul", // name - key, "abdul" - value
    age:33,
    city:"trichy",
    child:true,
    // method
    doThis: function () {
        console.log("hello")
    }
}

console.log(myObj)
console.log(typeof myObj)

console.log(myObj.age)
console.log(myObj.name)

myObj.age = 20
console.log(myObj.age)





// by value and by reference
let a = 10
let b = a
console.log(a)
console.log(b)
a = 30
console.log(a)
console.log(b)

// Primitive create a new copy - by value

let obj1 = {name:"abdul"}
let obj2 = obj1

console.log(obj1)
console.log(obj2)

obj2.name = "ram"

console.log(obj1)
console.log(obj2)

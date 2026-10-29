// function has Two phase
// 1 - creation
// 2 - excution

// Function declaration || function statement

// creation
function greet() {
    console.log("hello world")
}
// excution
greet()

// with parameters
function para(name = "abdulrahman",age = 28) {
    console.log(name, age)
}
para("abdulrub", 21)
para()


// function expression
const user = function (x) {
    console.log(x + 10)
}
user(10)
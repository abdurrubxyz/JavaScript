


// normal functions

// function sayHello () {
//     console.log("hello");
// }

function x() {
    return "how are you"
}

// sayHello()
console.log(x());


// Arrow function

const haiMsg = () => {
    return "iam fine"
}
console.log(haiMsg());

// one line arrow function. it does't need {}

const msgTo = () => console.log("what you want");
msgTo();

// one line return. does't not need return word

const msgBack = () => "i need water";
console.log(msgBack())

// const sayHello = () => "Hello";
// const sayHello = () => 5;
// const sayHello = () => true;
// const sayHello = () => [true];
// const sayHello = () => ({msg:"Hai"})

// console.log(sayHello());

// arrow fun for forEach()
const fruits = ["apple", "orange", "kiwi"];

fruits.forEach((fruit,index)=>{
    console.log(fruit,index);
});


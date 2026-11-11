// ES5
function Person(a,b) {
    this.num1 = a,
    this.num2 = b
    this.add = function() {
        return this.num1 + this.num2
    }
}

let person1 = new Person(10,20)
let person2 = new Person(50,50)

console.log(person1);
console.log(person1.add());

console.log(person2);
console.log(person2.add());

// // ES6
// class Person{
//     constructor(a,b) {
//         this.number1 = a;
//         this.number2 = b;
//     }
//     add() {
//         return this.number1 + this.number2
//     }
// }

// let person1 = new Person(10,20)
// let person2 = new Person(50,50)

// console.log(person1);
// console.log(person1.add());

// console.log(person2);
// console.log(person2.add());



// This.
console.log(this);
console.log(window);

function x() {
    console.log(this)
}
x()

const obj = {

    // this this. showa current object
    a:function () {
        console.log(this)

        // window
        function b() {
            console.log(this);
        }

        b()
        
    }
}

console.log(obj);
obj.a();

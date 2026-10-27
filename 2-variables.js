// 1. What is a variable?
// A variable is a named identifier that lets you access a value in your program.

// Imagine you're building a website for a student. You need to store the student's name, age, and marks so you can use those values later.
let studentName = "Jagan";
let age = 20;
let marks = 85;
console.log(studentName);
console.log(age);
console.log(marks);

// Output:
// Jagan
// 20
// 85

// In JavaScript, you commonly declare variables using three keywords:
// var, let, const
// All three are used to declare variables, but they have different rules.

// var name = "abdurrub";
// let's break it down.
// var -> Keyword used to declare a variable
// name -> Variable name
// = ->	Assignment operator
// "Jagan" -> String value
// ; ->	Ends the statement




let name;
name = "abdurrub"
console.log(name)
// Remember: undefined is a JavaScript value. It commonly indicates that a variable has been declared but hasn't been given a value.



// var
// var is an older way to declare variables in JavaScript.




// Understanding variable naming rules
// Your code includes several naming styles. First, understand which names are legal.
// Letter, _ , $ -> Names may contain letters, digits, underscores (_), and dollar signs ($).

// var star5 = "choco";  valid
// var star5 = "choco";  valid
// console.log(star5);  valid

// var 5star = "choco" - invalid -> Names cannot begin with a digit.




// Common naming styles
// All five examples from your code are valid JavaScript identifiers:
var firstname = "abdul";  // lowercase style
var firstName = "abdul";  // camelCase ***
var first_name = "abdul";  // snake_case
var FirstName = "abdul";   // PascalCase * -> we use on class&Object
var $firstName = "abdul"; // dollar sign included

// mostly we use - camelCase,  PascalCase 


// let 
// let was introduced in modern JavaScript to provide more predictable variable-scoping rules than var

// const
// cannot be reassigned.

// const city = "trichy";
// city = "chennai";               -> ERROR
// console.log(city);

// Does const mean absolutely nothing can change?
// There's an important detail to learn.
// const prevents reassignment of the variable binding. If the value is an object or an array, its contents can still be changed.

// For example:

const student = {
  name: "Jagan"
};
student.name = "Arun";
console.log(student.name);

// Output:
// Arun
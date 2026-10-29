let num = 100;

// if (num == "100"){
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// if (num != "101"){
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// if (num === "100"){
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// if (num !== 100){
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// Using undefined
let string = "hello";
if (string === undefined) {
  console.log("Correct");
} else {
  console.log("InCorrect");
}

// greater than, lesser than
let age = 15;
if (age > 65) {
  console.log("is Greater");
} else {
  console.log("is lesser");
}


// else if
let color = "red"
if(color === "orange"){
    console.log("its a orange")
}
else if(color === "blue"){
    console.log("its a blue")
}
// else if(color === "red"){
//     console.log("its a red")
// }
else {
    console.log("No color match")
}

// logical operator
// AND - && check both value
let Age = "77"

if (Age >10 && Age <18 ){
    console.log("you can register visa")
}
else if (Age >= 18 && Age < 65){
    console.log("you can fly")
}
else if (Age >= 65) {
    console.log("need to register again visa")
}
else {
    console.log("wait")
}

// OR - || check only one true or false
if(age < 16 || age > 65){
    console.log(`${name} can not run the race`)
}else{
    console.log(`${name} can run the race`)
}
// const list = document.querySelector("li")
// list.remove()

// const list = document.querySelectorAll("li")
// console.log(list)

// list.forEach(function (element) {
//     element.remove()
// })



// class and attr 
const firstLi = document.querySelector("li");
console.log(firstLi)

let a = firstLi.children[0]
console.log(a)

let val;
val = a.className;
val = a.classList;

val.add("rabu","jai")
val.remove("rabu")

val.replace("jai", "ram")

console.log(val)
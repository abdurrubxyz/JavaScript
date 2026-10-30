// document.getElementsByClassName()

// let store = document.getElementsByClassName("parent");
// console.log(store)
// console.log(store[0])
// console.log(store[1])
// console.log(store[2])
// console.log(store[3])
// console.log(store[4])

// store[0].style.color = "red"
// store[0].style.backgroundColor = "blue"
// store[0].style.padding = "20px"

// for (let i = 0; i < store.length; i++){
//     store[i].style.color = "blue"
// }

// convert HTMLCollection into array -
// then we use forEach because HTMLCollection is not a arrays but its look like array

// this old method convert in to array them we use for each
// let lists = Array.from(store);

// lists.forEach((element) => {
//   element.style.color = "blue";
// });


// document.querySelectorAll(".parents")

let store = document.querySelectorAll(".parent")
// console.log(store)

store.forEach(function (elements) {
    elements.style.color = "blue"
})
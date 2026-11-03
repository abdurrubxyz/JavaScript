// task1
// Select the element with the ID title.
// Change its text to Welcome to JavaScript DOM
// Change its background color to black.
// Change its text color to white.
// Add 20px padding.

let title = document.getElementById("title");
// console.log(title)

title.innerText = "Welcome to JavaScript DOM.";
title.style.backgroundColor = "black";
title.style.color = "white";
title.style.padding = "20px";





// task2
// Select all elements with the class parent.
// Change their background color to light gray.
// Change all their text colors to blue.
// Select all the li elements using querySelectorAll().
// Use forEach() to change their text color to green.

let parent = document.querySelectorAll(".parent");
// console.log(parent)

parent.forEach(element => {
    element.style.backgroundColor = "lightgray";
    element.style.color = "blue";
});

let li = document.querySelectorAll("li");

li.forEach(function (element) {
    element.style.color = "green"
})





// task3
// Using DOM traversal properties:
// 1. Select the first .parent element.
// 2. Get its first child element.
// 3. Get its last child element.
// 4. Find how many child elements it has.
// 5. Select the third li element.
// 6. Find its next sibling.
// 7. Find its previous sibling.
// 8. Find its parent element.

let firstParent = document.querySelector(".parent");
console.log(firstParent);

let firstChildElement = firstParent.firstElementChild;
console.log(firstChildElement);

let lastElementChild = firstParent.lastElementChild;
console.log(lastElementChild)

let howManyChild = firstParent.childElementCount;
console.log(howManyChild)

let thirdLi = document.querySelectorAll("li")[2];
console.log(thirdLi);

let nextSibEle = thirdLi.nextElementSibling;
console.log(nextSibEle)

let preSibEle = thirdLi.previousElementSibling;
console.log(preSibEle)

let liParentEle = thirdLi.parentElement
console.log(liParentEle)




// tack4
// Without writing three separate styling statements:
// 1. Select all three .parent elements.
// 2. Change their background color to black.
// 3. Change all their text colors to white.
// 4. Add 15px padding to each element.
// Use a loop.


let parentEle = document.querySelectorAll(".parent");
console.log(parentEle);

// for (let i = 0; i < parentEle.length; i++) {
//     parentEle[0].style.backgroundColor = "black"
//     parentEle[1].style.backgroundColor = "black"
//     parentEle[2].style.backgroundColor = "black"
// }

parentEle.forEach(function (ele) {
    ele.style.backgroundColor = "black"
    ele.style.color = "white"
    ele.style.padding = "15px"
})

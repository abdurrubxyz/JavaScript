let val;

let list = document.querySelector(".parent")
let firstSibling = document.querySelector("li:nth-child(1)")
let lastSibling = document.querySelector("li:nth-child(5)")

val = list;

// get a child
val = list.children[1].children

// firstChild
val = list.firstElementChild

// lastChild
val = list.lastElementChild

// childCount
val = list.childElementCount

// parentElement
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement

// NextsiblingElement
val = firstSibling.nextElementSibling.nextElementSibling

// PresiblingElement
val = lastSibling.previousElementSibling


console.log(val)
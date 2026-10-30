// document.getElementById()

document.getElementById("title")

let title = document.getElementById("title")
console.log(title)

// style
console.log(title.style)
title.style.background = "blue"
title.style.color = "#ffffff"
title.style.padding = "20px"

// content change
title.innerText = "Hello"
// title.innerHTML = "<span>hello world</span>"
console.log(title)

console.log("-----------------------------------------------------------------")
// document.querySelector()
console.log(document.querySelector(".parent")) 
console.log(document.querySelector("#title")) 
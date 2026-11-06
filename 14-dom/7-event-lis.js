let btn = document.querySelector(".btn").addEventListener("click", backGroundChange);
let body = document.querySelector("body");
let h1 = document.getElementById("title");
let count = 0;
function backGroundChange() {
    count++;
    // document.querySelector("#title").innerText = count 
    h1.innerText = count
    // body.classList.toggle("color")
}
let input = document.querySelector("input");

// input.addEventListener("keydown", runThis);
// input.addEventListener("keypress", runThis);


// Keyup & input is important:
// input.addEventListener("keyup", runThis);
// input.addEventListener("input", runThis);


// input.addEventListener("focus", runThis);
// input.addEventListener("blur", runThis);


// input.addEventListener("cut", runThis);
// input.addEventListener("copy", runThis);
input.addEventListener("paste", runThis);


function runThis(e){
    // console.log(e.type); 
    console.log(e.target.value); 
}
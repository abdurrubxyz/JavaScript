let val;

// Number to string
val = String(555);
val = String(5 + 5);




// Bool to striong
val = String(true);


// Arr to string
val = String([1,2,3,4,5]);


// String to number
val = Number("5");
val = Number("5" + "5");
val = Number("15" - "10")
val = Number("5 + 5"); // NaN = not a number

// bollen to number
val = Number(true)
val = Number(false)

val = Number(null)
val = Number("hello")
val = Number(["ehdfeu"])



val = parseInt("100.34")
val = parseFloat("100.34")

console.log(val)

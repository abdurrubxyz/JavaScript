// Creating a string 
let name = "abdul"
let name1 = 'abdul'
let name2 = `abdul`

// Template literals 
let firstName = "Abdur rub"
let age = 20
let city = "Chennai"

console.log(`My name is ${firstName}, I am ${age} years old and I am from ${city}`)


// Length -> ()-no need
console.log(name1.length)

// Access[] individual characters
console.log(name1[2])

// at() - Negative indexes
console.log(name1.at(-1))

// uppercase(), Lowercase()
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())

// Trim()
let removeTrim = "   hello kbfbfDf dhfuhdff idhfidh   "
console.log(removeTrim.trim())

// Includes
let sen = "I love you"
console.log(sen.includes("love"))

// Slice
let city2 = "chennai"
console.log(city2.slice(0,3))
console.log(city2.slice(3))

// Replace
let store = "lorem split true in from"
console.log(store.replace("lorem", "lang"))

// Split

let you = "lorem the following sentence are true";
let result = you.split(" ")
console.log(result)

const str = "Hello im jagan and im a web dev";
const tags = "Web Dev, UI/UX, App dev";

// val = str.split(" ");
val = str.split(" ");
console.log(val)
val = tags.split(" ");
console.log(val)
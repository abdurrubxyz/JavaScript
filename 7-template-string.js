const name = "Javid";
const age = "100";
const job = "web dev";
const city = "Chennai";

let html;

// Withput template strings

// html = "My name is" + " " + name + " " + "im" + " " + age + " " + "and my job is" + " " + job + " " + "im from" + " " + city;

// With template string
const x = "Hello";
const y = 'Hai';
const z = `Vanakam`;


// console.log(x, y, z);

// With template
html = `My name is ${name} im ${age} my job is ${job} and im from ${city}`;


console.log(html);
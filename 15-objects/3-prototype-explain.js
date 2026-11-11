function Person(city, state) {
  this.city = city, 
  this.state = state
}

// Person sub object 
Person.prototype.getCityAndState = function () {
  return this.city + " " + this.state;
};

const p1 = new Person("trichy", "tn");
const p2 = new Person("mirzapur", "up");

console.log(p1);
console.log(p2.getCityAndState());

console.log(p1.__proto__.__proto__)

// Js base prototype
// p1.__proto__.__proto__.getFullName = function(){
//         return this.firstName + " " + this.lastName
// };


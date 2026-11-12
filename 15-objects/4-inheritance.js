// es5
function Person(firstName,lastName) {
    this.firstName = firstName,
    this.lastName = lastName
}

Person.prototype.greeting = function() {
    return `Hello World ${this.firstName} ${this.lastName}`
}

let p1 = new Person("abdur","rub");

console.log(p1);

function Customer(firstName,lastName,phone,price) {
    Person.call(this, firstName,lastName);
    this.phone = phone
    this.price = price
}

let abdurRubCustomer = new Customer("abdur","rub","iphone 15 pro max",120000);

// console.log(abdurRubCustomer);

Customer.prototype = Object.create(Person.prototype);

let abdurRubCustomer2 = new Customer("ravi","kumar","iphone 16 pro max",140000);

console.log(abdurRubCustomer2.greeting());



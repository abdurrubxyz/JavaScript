class Person {
    constructor(firstName,lastNem){
        this.firstName = firstName;
        this.lastNem = lastNem;
    }

    greeting() {
        return `Hello World ${this.firstName} ${this.lastName}`
    }
}

let p1 = new Person("abdur","rub");

console.log(p1);


class Customer extends Person {
    constructor(firstName,lastName,phone,price){
        super(firstName,lastName)
        this.phone = phone;
        this.price = price;
    }

    greeting() {
        return `Hello World to ${this.firstName} ${this.lastName}`
    }
}

const c1 = new Customer("ravi","kumar","iPhone 12 pro max",99000);

console.log(c1);
console.log(c1.greeting());
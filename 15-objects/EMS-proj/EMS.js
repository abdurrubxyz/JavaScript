
// PARENT CLASS

class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greeting() {
        return `Hello, I am ${this.firstName} ${this.lastName}`;
    }

}


// CHILD CLASS

class Employee extends Person {

    constructor(firstName, lastName, age, employeeId, jobRole, salary) {

        super(firstName, lastName, age);

        this.employeeId = employeeId;
        this.jobRole = jobRole;
        this.salary = Number(salary);

    }

    // METHOD OVERRIDING

    greeting() {
        return `Hello, I am ${this.firstName} ${this.lastName}.`;
    }

    getDetails() {

        return {
            age: this.age,
            employeeId: this.employeeId,
            jobRole: this.jobRole,
            salary: this.salary
        };

    }

}


// CREATE OBJECTS

const employees = [

    new Employee("Abdur", "Rub", 21, "EMP101", "Developer", 30000),

    new Employee("Ravi", "Kumar", 24, "EMP102", "Designer", 35000)

];


// DOM ELEMENTS

const employeeForm = document.getElementById("employeeForm");

const employeeList = document.getElementById("employeeList");

const employeeCount = document.getElementById("employeeCount");

const totalSalary = document.getElementById("totalSalary");

const emptyMessage = document.getElementById("emptyMessage");


// FORMAT SALARY

function formatCurrency(amount) {

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);

}


// DISPLAY EMPLOYEES

function displayEmployees() {

    // Clear previous employee cards

    employeeList.replaceChildren();

    // Display empty message if no employees

    emptyMessage.hidden = employees.length !== 0;

    // Loop through employee objects

    employees.forEach(function(employee) {

        const details = employee.getDetails();

        // Create employee card

        const card = document.createElement("div");
        card.className = "employee-card";

        // Employee name

        const name = document.createElement("h3");
        name.textContent = employee.greeting();

        // Employee details

        const id = document.createElement("p");
        id.textContent = `Employee ID: ${details.employeeId}`;

        const age = document.createElement("p");
        age.textContent = `Age: ${details.age}`;

        const role = document.createElement("p");
        role.textContent = `Job Role: ${details.jobRole}`;

        const salary = document.createElement("p");
        salary.textContent = `Salary: ${formatCurrency(details.salary)}`;

        // Delete button

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Employee";

        deleteButton.addEventListener("click", function() {

            const index = employees.indexOf(employee);

            if (index !== -1) {
                employees.splice(index, 1);
            }

            displayEmployees();

        });

        // Add elements to card

        card.append(
            name,
            id,
            age,
            role,
            salary,
            deleteButton
        );

        // Display card on website

        employeeList.appendChild(card);

    });


    // UPDATE DASHBOARD

    employeeCount.textContent = employees.length;

    const total = employees.reduce(function(sum, employee) {

        return sum + employee.salary;

    }, 0);

    totalSalary.textContent = formatCurrency(total);

}


// ADD NEW EMPLOYEE

employeeForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const firstName = employeeForm.elements.firstName.value.trim();
    const lastName = employeeForm.elements.lastName.value.trim();
    const age = Number(employeeForm.elements.age.value);
    const employeeId = employeeForm.elements.employeeId.value.trim();
    const jobRole = employeeForm.elements.jobRole.value.trim();
    const salary = Number(employeeForm.elements.salary.value);

    // Check duplicate employee ID

    const alreadyExists = employees.some(function(employee) {

        return employee.employeeId.toLowerCase() === employeeId.toLowerCase();

    });

    if (alreadyExists) {
        alert("Employee ID already exists!");
        return;
    }

    // CREATE NEW OBJECT

    const newEmployee = new Employee(
        firstName,
        lastName,
        age,
        employeeId,
        jobRole,
        salary
    );

    // Add object to array

    employees.push(newEmployee);

    // Display updated employee list

    displayEmployees();

    // Clear form

    employeeForm.reset();

});


// INITIAL DISPLAY

displayEmployees();

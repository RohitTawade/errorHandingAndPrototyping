class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

// Instantiate an instance of the Employee class
const employee1 = new Employee("John Doe", "Manager", 8000);

// Output the employee's salary
console.log(employee1.getSalary()); // Output: 8000

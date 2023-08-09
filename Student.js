// Define the Student constructor
function Student(name) {
    this.name = name;
}

// Attach the printDetails method to the prototype
Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Instantiate a Student object
const student = new Student("Mithun");

// Call the printDetails method
student.printDetails(); // Output: Hello, my name is Mithun

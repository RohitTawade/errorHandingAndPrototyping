// Define a custom Error class for handling invalid parameter type
class InvalidParameterTypeError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidParameterTypeError";
    }
}

// Extend the prototype of the Object class with a new method
Object.prototype.getPerson = function() {
    try {
        if (!this.hasOwnProperty("name") || !this.hasOwnProperty("age")) {
            throw new InvalidParameterTypeError("Invalid parameter type");
        }
        
        return `Name: ${this.name}, Age: ${this.age}`;
    } catch (error) {
        if (error instanceof InvalidParameterTypeError) {
            return error.message;
        } else {
            throw error;
        }
    }
};

// Test cases
console.log({ name: "Mithun", age: 20 }.getPerson()); // Output: Name: Mithun, Age: 20
console.log({ name: "Mthun" }.getPerson());           // Output: Invalid parameter type
console.log(["name", "Mithun"].getPerson());           // Output: Invalid parameter type

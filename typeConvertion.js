// Define a custom Error class for handling invalid number conversion
class InvalidNumberError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidNumberError";
    }
}

// Extend the prototype of the String class with a new method
String.prototype.convertToNumber = function() {
    try {
        const number = parseFloat(this);

        if (isNaN(number)) {
            throw new InvalidNumberError("Invalid number");
        }
        
        return number;
    } catch (error) {
        if (error instanceof InvalidNumberError) {
            return "Invalid number";
        } else {
            throw error;
        }
    }
};

// Test cases
console.log("123".convertToNumber());   // Output: 123
console.log("abc".convertToNumber());   // Output: Invalid number

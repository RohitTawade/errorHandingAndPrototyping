function numberChecker(numbersArray) {
    return function(numberToCheck) {
        return numbersArray.includes(numberToCheck);
    };
}

// Define an array of numbers
const arr = [1, 2, 3, 4, 5];

// Create a function to check for numbers in the array
const checkNum = numberChecker(arr);

console.log(checkNum(3)); // Output: true
console.log(checkNum(6)); // Output: false

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    getPassword() {
        return "*".repeat(this.password.length);
    }

    setPassword(newPassword) {
        if (newPassword.length < 8 || !/\d/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
            console.error("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        } else {
            this.password = newPassword;
        }
    }
}

// Instantiate a User
const user = new User("Mithun", "Password123");

// Output the masked password
console.log(user.getPassword()); // Output: *********

// Try setting invalid passwords
user.setPassword("mypassword");   // Output: Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
user.setPassword("Mypassword");   // Output: Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.

// Set a valid password
user.setPassword("Mypassword123");

// Output the masked password
console.log(user.getPassword()); // Output: ***********

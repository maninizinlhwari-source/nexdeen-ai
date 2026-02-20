// app.js

// Authentication module

class AuthModule {
    constructor() {
        this.isLoggedIn = false;
        this.user = null;
    }

    // Load user state from localStorage
    loadUserState() {
        const userState = localStorage.getItem('userState');
        if (userState) {
            this.user = JSON.parse(userState);
            this.isLoggedIn = true;
        }
    }

    // Save user state to localStorage
    saveUserState() {
        localStorage.setItem('userState', JSON.stringify(this.user));
    }

    // Validate user credentials
    validateCredentials(username, password) {
        // Example: Replace with real validation logic.
        return username === 'testUser' && password === 'testPass';
    }

    // Login method
    login(username, password) {
        if (this.validateCredentials(username, password)) {
            this.user = { username: username };
            this.isLoggedIn = true;
            this.saveUserState();
            console.log('Login successful!');
        } else {
            console.log('Invalid credentials.');
        }
    }

    // Logout method
    logout() {
        this.user = null;
        this.isLoggedIn = false;
        localStorage.removeItem('userState');
        console.log('Logged out successfully.');
    }
}

// Initialize authentication module
const auth = new AuthModule();
auth.loadUserState();

// Usage Example:
// auth.login('testUser', 'testPass'); // to log in
// auth.logout(); // to log out


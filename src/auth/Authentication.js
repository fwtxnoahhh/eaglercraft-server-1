const bcrypt = require('bcrypt');

class Authentication {
    constructor() {
        this.users = new Map(); // In-memory storage for demo purposes
    }

    async register(username, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        this.users.set(username, hashedPassword);
        return { message: 'User registered successfully' };
    }

    async login(username, password) {
        const hashedPassword = this.users.get(username);
        if (!hashedPassword) {
            throw new Error('User not found');
        }
        const match = await bcrypt.compare(password, hashedPassword);
        if (match) {
            return { message: 'Login successful' };
        } else {
            throw new Error('Invalid password');
        }
    }
}

module.exports = Authentication;
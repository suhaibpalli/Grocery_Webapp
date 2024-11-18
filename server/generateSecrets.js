// generateSecrets.js

const crypto = require('crypto');

// Function to generate a secure random string
function generateSecret() {
    return crypto.randomBytes(64).toString('hex'); // 128 characters
}

const adminSecret = generateSecret();
const userSecret = generateSecret();
const jwtSecret = generateSecret();

console.log('Generated Secrets:');
console.log('ADMIN_SECRET_TOKEN:', adminSecret);
console.log('USER_SECRET_TOKEN:', userSecret);
console.log('JWT_SECRET:', jwtSecret);

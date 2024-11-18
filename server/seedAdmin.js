// server/seedAdmin.js

// Load environment variables from .env file
require('dotenv').config();

// Import necessary modules
const bcrypt = require('bcrypt');
const models = require('./src/models/schema'); // Corrected path
const { connectDB } = require('./src/db/connect');

// Function to seed an admin user
const seedAdmin = async () => {
    try {
        // Connect to MongoDB using connectDB
        await connectDB();
        console.log('✅ Connected to MongoDB');

        // Check if an admin user already exists
        const existingAdmin = await models.Users.findOne({ email: process.env.ADMIN_EMAIL });
        if (existingAdmin) {
            console.log('⚠️  Admin user already exists');
            process.exit(0); // Exit the script
        }

        // Hash the admin password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt); // Use env variable

        // Create a new admin user
        const adminUser = new models.Users({
            firstname: process.env.ADMIN_FIRSTNAME || 'Admin',
            lastname: process.env.ADMIN_LASTNAME || 'User',
            username: process.env.ADMIN_USERNAME || 'adminuser',
            email: process.env.ADMIN_EMAIL || 'admin@example.com', // Use env variable
            password: hashedPassword,
            role: 'admin' // Set role to 'admin'
        });

        // Save the admin user to the database
        await adminUser.save();
        console.log('✅ Admin user created successfully');
        process.exit(0); // Exit the script
    } catch (error) {
        console.error('❌ Error seeding admin user:', error);
        process.exit(1); // Exit the script with an error
    }
};

// Execute the seedAdmin function
seedAdmin();

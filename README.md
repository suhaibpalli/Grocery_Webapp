# Grocery Webapp

[![GitHub Repository](https://img.shields.io/badge/GitHub-Grocery_Webapp-181717.svg?style=for-the-badge&logo=github)](https://github.com/suhaibpalli/Grocery_Webapp.git)

## Overview

Our Grocery Webapp is designed to provide a seamless online shopping experience, offering a wide range of products for all your needs. With a user-friendly interface and robust backend functionalities, our app caters to both customers and administrators, ensuring a smooth and hassle-free experience.

### Key Features:

* **Customer App:**
    + Browse products by category
    + View product details
    + Add to cart and checkout securely
    + User registration and login system
    + Order management and tracking
* **Admin Panel:**
    + Manage product listings and inventory
    + Handle customer inquiries and orders
    + Process payments and monitor app performance
    + Generate reports and analytics

## Architecture

* **Technical Architecture:** Client-Server model with Angular (Frontend) and Node.js (Backend)
* **Database:** MongoDB for efficient data storage and retrieval
* **Entity-Relationship Diagram:** Visual representation of entities and relationships within the system

## Project Structure


* **Client (Angular):**
    + `src/app/components`: Customer app components (e.g., register, login, home, products)
    + `src/app/modules`: Admin module with components (e.g., add-category, add-product, dashboard)
    + `src/app/app-routing.module.ts`: Routing configuration
* **Server (Node.js):**
    + `server/src/app.js`: Main application file
    + `server/src/db/connect.js`: MongoDB connection setup
    + `server/src/models/schema.js`: Mongoose schemas for data models
    + `server/src/routes`: API endpoint definitions (e.g., admin, category, orders, payments, products, users)

## Pre-requisites

* **Node.js and npm:** [Download](https://nodejs.org/en/download/) and [installation instructions](https://nodejs.org/en/download/package-manager/)
* **MongoDB:** [Download](https://www.mongodb.com/try/download/community) and [installation instructions](https://docs.mongodb.com/manual/installation/)
* **Express.js:** `npm install express`
* **Angular CLI:** `npm install -g @angular/cli`
* **HTML, CSS, JavaScript:** Basic knowledge for client-side development
* **Database Connectivity:** MongoDB driver or Mongoose for Node.js
* **Version Control:** Git for collaboration and tracking changes
* **Development Environment:** Choose a code editor or IDE (e.g., Visual Studio Code, Sublime Text, WebStorm)

## Setup and Development

1. Clone the repository: `git clone https://github.com/suhaibpalli/Grocery_Webapp.git`
2. Navigate to the project directory: `cd Grocery_Webapp`
3. Install dependencies: `npm install` (for both client and server)
4. Start the development server: `ng serve` (for client) and `node server/src/app.js` (for server)
5. Access the app: `http://localhost:4200` (client) and `http://localhost:5100` (server)

## Role-Based Access

* **Admin Role:**
    + Manage shop information and products
    + View and manage product bookings
    + Create, edit, and delete user accounts
    + Generate reports and analytics
* **User Role:**
    + Search for products
    + Make product bookings
    + View and manage own order bookings
    + Manage cart details

## Project Flow

1. **Frontend Development:**
    + User Interface (UI) Design
    + Responsive Design
    + Product Catalog
    + Shopping Cart and Checkout Process
    + User Authentication and Account Management
    + Payment Integration
2. **Backend Development:**
    + Set Up Backend
    + Database Configuration
    + Create Express.js Server
    + Define API Routes
    + Implement Data Models
    + API Design and Development
    + User Management and Authentication
    + Product Catalog and Inventory Management
    + Shopping Cart and Order Management
    + Payment Gateway Integration
    + Shipping and Logistics Integration
    + Database Integration
    + External Service Integration
    + Security and Data Protection
    + Error Handling and Logging
3. **Integration:**
    + Frontend-Backend Integration
    + API Calls and Data Exchange
    + Error Handling and Logging

## Contributing

Contributions are welcome! Please submit a pull request with a clear description of changes.

## Acknowledgments

* [Muhammed Suhaib](https://github.com/suhaibpalli) for creating and maintaining the project
* [Angular](https://angular.io/) and [Node.js](https://nodejs.org/en/) communities for their extensive resources and support

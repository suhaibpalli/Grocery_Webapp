# Grocery Web Application

[![GitHub Repository](https://img.shields.io/badge/GitHub-Grocery_Webapp-181717.svg?style=for-the-badge&logo=github)](https://github.com/suhaibpalli/Grocery_Webapp.git)

## Introduction

Welcome to the **Grocery Web Application**, a comprehensive platform designed to provide a seamless online shopping experience for all your grocery needs. With a user-friendly interface and robust backend functionalities, our application caters to both customers and administrators, ensuring efficiency and ease of use.

## Demo

Experience the application firsthand by watching our [**Demo Video**](https://drive.google.com/drive/folders/1ufJCH47iWg4DNyxFa3u5DV2Bc8WlVKO_?usp=sharing).

## Features

### Customer Interface

- **Product Browsing**: Explore products categorized for easy navigation.
- **Product Details**: Access detailed information about each product.
- **Shopping Cart**: Add items to your cart and proceed to a secure checkout.
- **User Authentication**: Register and log in securely.
- **Order Management**: Track and manage your orders effortlessly.

### Administrator Panel

- **Product Management**: Add, edit, or remove product listings and manage inventory.
- **Order Handling**: View and process customer orders efficiently.
- **Customer Support**: Address customer inquiries promptly.
- **Analytics & Reporting**: Generate insightful reports to monitor performance.

## Architecture Overview

- **Frontend**: Developed with [Angular](https://angular.io/) for a dynamic user experience.
- **Backend**: Built using [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) for robust server-side operations.
- **Database**: Utilizes [MongoDB](https://www.mongodb.com/) for efficient data management.
- **Technical Model**: Adopts a client-server architecture to ensure scalability and maintainability.

## Project Structure

### Frontend (Angular)

- **Components** (`src/app/components`): Core components like registration, login, home, and product views.
- **Modules** (`src/app/modules`): Includes admin-specific modules such as add-category, add-product, and dashboard.
- **Routing** (`src/app/app-routing.module.ts`): Manages application navigation.

### Backend (Node.js)

- **Main Server File** (`server/src/app.js`): Initializes the server and middleware configurations.
- **Database Connection** (`server/src/db/connect.js`): Establishes a connection to MongoDB.
- **Models** (`server/src/models/schema.js`): Defines data schemas using Mongoose.
- **Routes** (`server/src/routes`): Contains API endpoints for admins, categories, orders, payments, products, and users.

## Prerequisites

Ensure you have the following installed:

- **Node.js and npm**: [Download](https://nodejs.org/en/download/) | [Installation Guide](https://nodejs.org/en/download/package-manager/)
- **MongoDB**: [Download](https://www.mongodb.com/try/download/community) | [Installation Guide](https://docs.mongodb.com/manual/installation/)
- **Angular CLI**: Install globally via `npm install -g @angular/cli`
- **Express.js**: Install using `npm install express`
- **Git**: For version control and collaboration
- **Development Environment**: A code editor like Visual Studio Code, Sublime Text, or WebStorm

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/suhaibpalli/Grocery_Webapp.git
   ```
2. **Navigate to the Project Directory**
   ```bash
   cd Grocery_Webapp
   ```
3. **Install Dependencies**
   - For the client:
     ```bash
     cd client
     npm install
     ```
   - For the server:
     ```bash
     cd server
     npm install
     ```
4. **Run the Application**
   - Start the frontend:
     ```bash
     ng serve
     ```
   - Start the backend:
     ```bash
     node server/src/app.js
     ```
5. **Access the Application**
   - Frontend: `http://localhost:4200`
   - Backend API: `http://localhost:5100`

## Role-Based Access Control

### Administrator Role

- **Shop Management**: Oversee shop information and product listings.
- **Order Processing**: Manage and process product bookings.
- **User Management**: Create, edit, and delete user accounts.
- **Reporting**: Generate analytical reports for business insights.

### User Role

- **Product Search**: Find products using the search functionality.
- **Booking**: Make product bookings and manage orders.
- **Order Tracking**: View and manage personal order history.
- **Cart Management**: Add or remove items from the shopping cart.

## Development Workflow

### Frontend Development

- **UI/UX Design**: Crafting an intuitive and responsive user interface.
- **Product Catalog**: Displaying products with categories and filters.
- **Shopping Cart**: Implementing cart functionality and secure checkout.
- **Authentication**: User registration, login, and profile management.
- **Payment Integration**: Incorporating secure payment gateways.

### Backend Development

- **Server Setup**: Configuring Express.js for server-side operations.
- **Database Design**: Structuring data models and relationships.
- **API Development**: Building RESTful APIs for client-server communication.
- **Authentication & Authorization**: Implementing secure user authentication.
- **Order Management**: Handling order placements and inventory updates.
- **Security**: Ensuring data protection and implementing best security practices.
- **Error Handling**: Implementing comprehensive error logging and handling mechanisms.

### Integration & Testing

- **Frontend-Backend Integration**: Connecting the frontend interface with backend services.
- **API Testing**: Validating API endpoints and responses.
- **User Acceptance Testing**: Ensuring the application meets user requirements.

## Contribution Guidelines

We welcome contributions from the community. To contribute:

1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Commit Your Changes**
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/YourFeatureName
   ```
5. **Open a Pull Request**

Please ensure your code adheres to the project's coding standards and includes relevant documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **[Muhammed Suhaib](https://github.com/suhaibpalli)** for the creation and maintenance of this project.
- **Open-Source Communities**: Gratitude to the Angular and Node.js communities for their invaluable resources and support.

---

For any questions or suggestions, feel free to open an issue or contact the repository owner.

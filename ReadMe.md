# Pharmacy Backend System

**Overview**

This project provides a backend API for a pharmacy management system, built using Node.js, Express, SQLite, and Sequelize ORM.

**Features**

* User registration and login with JWT authentication
* Repository pattern for clean data access
* Data Transfer Objects (DTOs) for request and response validation
* SQLite database with migration support
* Password hashing with bcrypt
* Environment-based configuration using dotenv
* Clear separation of concerns: models, repositories, services, controllers, and routes

**Technology Stack**

* Node.js
* Express
* Sequelize ORM
* SQLite
* JSON Web Tokens (JWT)
* bcryptjs
* dotenv

**Prerequisites**

* Node.js (version 14 or higher)
* npm or yarn package manager

**Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/AbdelrhmanAymanFathi/Backend-Pharmacy-System.git
   cd Backend-Pharmacy-System
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Setup environment variables**
   Create a `.env` file in the project root:

   ```env
   PORT=5500
   JWT_SECRET=your_jwt_secret_here
   ```
4. **Run database migrations**

   ```bash
   npx sequelize-cli db:migrate
   ```

**Project Structure**

```
pharmacy-backend/
├── src/
│   ├── config/          # Database connection configuration
│   ├── models/          # Sequelize models definition
│   ├── migrations/      # Database migration scripts
│   ├── dtos/            # Data Transfer Object definitions
│   ├── repositories/    # Data access layer implementing repository pattern
│   ├── services/        # Business logic and operations
│   ├── controllers/     # HTTP request handlers
│   ├── routes/          # Express routing definitions
│   ├── middleware/      # Authentication and error handling middleware
│   └── app.js           # Express app setup and middleware registration
├── .env                 # Environment variables
├── server.js            # Entry point to start the server
└── package.json         # Project metadata and scripts
```

**Running the Application**

* **Development** (with automatic restarts):

  ```bash
  npx nodemon server.js
  ```
* **Production**:

  ```bash
  node server.js
  ```

**API Endpoints**

| Endpoint             | Method | Request Body                       | Description                     |
| -------------------- | ------ | ---------------------------------- | ------------------------------- |
| `/api/auth/register` | POST   | `{ name, email, password, phone }` | Register a new user             |
| `/api/auth/login`    | POST   | `{ email, password }`              | Login existing user and get JWT |

**Next Steps**

* Add QR code generation for order management
* Implement role-based access control (admin, pharmacist)
* Create CRUD endpoints for medicines, orders, and categories
* Enhance input validation and error handling

**License**

This project is licensed under the MIT License. Feel free to use and modify it as needed.

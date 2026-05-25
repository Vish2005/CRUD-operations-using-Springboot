# Employee Management System (Full-Stack CRUD App)

A complete full-stack web application for managing employee details, featuring user authentication using JWT and complete CRUD (Create, Read, Update, Delete) operations.

---

## 🚀 Tech Stack

### Backend
- **Framework:** Spring Boot 3.x
- **Database:** MySQL
- **ORM & Data Access:** Spring Data JPA / Hibernate
- **Security:** JWT (JSON Web Tokens) for Stateless Session Authentication
- **Build Tool:** Maven

### Frontend
- **Library:** React.js
- **State Management:** React Context API
- **Styling:** CSS3
- **HTTP Client:** Axios (for API communication)

---

## 📂 Project Structure

```text
CRUD/
├── backend/                  # Spring Boot application (REST API)
│   ├── src/main/java/        # Java source code
│   ├── src/main/resources/   # Configurations (application.properties)
│   └── pom.xml               # Maven dependencies config
└── frontend/                 # React.js application
    ├── public/               # Static assets & HTML root
    ├── src/                  # React components, contexts, and services
    └── package.json          # Node package dependencies
```

---

## 🔧 Prerequisites

Before running the application, make sure you have the following installed:
- **Java Development Kit (JDK 17 or higher)**
- **Node.js & npm** (version 18+ recommended)
- **MySQL Database Server**

---

## ⚙️ Configuration & Setup

### 1. Database Setup
1. Open your MySQL client (CLI, Workbench, or phpMyAdmin).
2. Create a new database named `EmployeeDB`:
   ```sql
   CREATE DATABASE EmployeeDB;
   ```
3. The database connection properties are configured in `backend/src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/EmployeeDB
   spring.datasource.username=root
   spring.datasource.password=root
   spring.jpa.hibernate.ddl-auto=update
   ```
   *Change the `username` and `password` values if they differ on your MySQL setup.*

### 2. Run the Backend (Spring Boot)
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Run the application using the Maven wrapper:
   - **Windows:**
     ```cmd
     mvnw.cmd spring-boot:run
     ```
   - **Mac/Linux:**
     ```bash
     chmod +x mvnw
     ./mvnw spring-boot:run
     ```
   *The backend server will start on `http://localhost:8080`.*

### 3. Run the Frontend (React)
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the required npm packages:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   *The frontend application will start and open automatically in your browser at `http://localhost:3000`.*

---

## 🔒 Authentication & API Endpoints

### 🗝️ Authentication Endpoints
| HTTP Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| **POST** | `/auth/register` | Sign up a new user | `{ username, password, fullName, email, department, phone }` |
| **POST** | `/auth/login` | Log in and receive JWT token | `{ username, password }` |

### 📋 Employee CRUD Endpoints
*Include the Bearer token in the `Authorization` header (`Authorization: Bearer <JWT_TOKEN>`) for secured requests.*

| HTTP Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| **POST** | `/employees` | Create a new employee | `{ name, email, department, designation, salary }` |
| **GET** | `/employees` | Retrieve list of all employees | *None* |
| **GET** | `/employees/{id}`| Retrieve a specific employee by ID | *None* |
| **PUT** | `/employees/{id}`| Update details of an employee | `{ name, email, department, designation, salary }` |
| **DELETE**| `/employees/{id}`| Delete an employee by ID | *None* |
| **DELETE**| `/employees` | Delete all employees | *None* |

---

## 🎨 Features
- **User Authentication:** Secure signup and login flow powered by JWT.
- **Dashboard Overview:** Displays list of all employees in a clean table view.
- **Add Employee:** Dialog form to add new employee records.
- **Edit/Update Employee:** Inline updates to modify employee information.
- **Delete Employee:** One-click deletion of individual records, as well as a "Delete All" utility.
- **Responsive Layout:** Responsive user interface designed for both desktop and mobile screens.

# Employee Management System 💼

A full-stack web application built using **Java, Spring Boot, Spring Data JPA, MySQL, and React.js** to streamline employee administration, role assignments, and department data management.

---

## 🚀 Features

* **Full CRUD Operations**: Create, read, update, and delete employee records in real time.
* **RESTful Architecture**: Clean separation of concerns with REST APIs handling backend business logic and database access.
* **Dynamic Frontend UI**: Built with React.js and Bootstrap for a responsive, clean user dashboard.
* **Database Management**: Persistence handled via Spring Data JPA ORM integrated with MySQL.
* **Validation & Error Handling**: Client-side form validations and global API exception handling using `@RestControllerAdvice`.

---

## 🛠️ Tech Stack

### Backend
* **Language**: Java
* **Framework**: Spring Boot, Spring MVC
* **Persistence**: Spring Data JPA / Hibernate
* **Database**: MySQL
* **Build Tool**: Apache Maven

### Frontend
* **Library**: React.js
* **HTTP Client**: Axios
* **Styling**: Bootstrap 5, CSS3

---

## 📋 API Endpoints Summary

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/employees` | Fetch all employees |
| `POST` | `/api/v1/employees` | Create a new employee record |
| `GET` | `/api/v1/employees/{id}` | Fetch employee by ID |
| `PUT` | `/api/v1/employees/{id}` | Update existing employee details |
| `DELETE` | `/api/v1/employees/{id}` | Delete an employee record |

---

## 💻 Getting Started Locally

### Prerequisites
* Java JDK 17 or higher
* Node.js & npm
* MySQL Server

### 1. Backend Setup
```bash
# Clone the repository
git clone [https://github.com/sai-tejareddy/employee-management-system.git](https://github.com/sai-tejareddy/employee-management-system.git)

# Navigate into the project folder
cd employee-management-system

# Configure MySQL database connection in src/main/resources/application.properties
# spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
# spring.datasource.username=your_username
# spring.datasource.password=your_password

# Run the Spring Boot application
mvn spring-boot:run


# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the React development server
npm start

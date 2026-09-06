# StudentHub 🎓

A full-stack Student Management System built using the **MERN stack** — MongoDB, Express.js, React.js, and Node.js. StudentHub provides a simple and responsive platform for managing student records and academic information.

## ✨ Features

- Add new student records
- View all students
- Edit student information
- Delete student records
- Search students by name, email, department, or register number
- Filter students by department
- Manage name, register number, email, phone, department, year, and CGPA
- Dashboard with total student count
- Average CGPA calculation
- Department statistics
- Responsive user interface
- RESTful API integration
- MongoDB database integration

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- Axios
- Lucide React
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB
- Mongoose

## 📁 Project Structure

```text
StudentHub/
├── backend/
│   ├── models/
│   │   └── Student.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── StudentForm.jsx
│   │   │   └── StudentTable.jsx
│   │   ├── App.jsx
│   │   ├── api.js
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 💻 Requirements

- Node.js 18 or later
- npm
- MongoDB Community Server
- Git (optional)

## 🚀 Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/lathika0210/student-management-system-mern.git
cd student-management-system-mern
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=mongodb://127.0.0.1:27017/student_management
PORT=5000
```

Start the backend:

```bash
npm run dev
```

Backend:

```text
http://localhost:5000
```

### 3. Setup the Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Open the displayed URL in your browser.

## 🔄 Application Flow

```text
React Frontend
      │
      ▼
    Axios
      │
      ▼
Express REST API
      │
      ▼
   Node.js
      │
      ▼
   Mongoose
      │
      ▼
   MongoDB
```

## 🗄️ Database

**Database:** `student_management`

**Collection:** `students`

Example student document:

```json
{
  "name": "Example Student",
  "registerNumber": "IT2026001",
  "email": "student@example.com",
  "phone": "9876543210",
  "department": "Information Technology",
  "year": 3,
  "cgpa": 8.37
}
```

## 🔧 CRUD Operations

| Operation | Function |
|---|---|
| Create | Add a new student |
| Read | View student records |
| Update | Edit student information |
| Delete | Remove a student |

## 📌 REST API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get a specific student |
| POST | `/api/students` | Add a student |
| PUT | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |

## 🎯 Project Objective

StudentHub provides a centralized digital platform for managing student information efficiently. The project demonstrates how a React frontend communicates with a Node.js and Express REST API and stores data in MongoDB.

## 📚 Learning Outcomes

Through this project, I gained practical experience in:

- Full-stack web application development
- React component development
- REST API creation and integration
- MongoDB and Mongoose
- CRUD operations
- Frontend-backend communication
- Form handling and validation
- Debugging and error handling
- Responsive UI development

## 👩‍💻 Author

**Lathika I**  
B.Tech Information Technology Student

## ⭐ Acknowledgement

This project was developed as part of practical learning and hands-on experience in **MERN Stack Development**.

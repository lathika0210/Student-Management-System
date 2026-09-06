# Student Management System — MERN Stack

A full-stack Student Management System built with MongoDB, Express.js, React.js and Node.js.

## Features
- Add, view, edit and delete students
- Search students by name, email, department or register number
- Filter by department
- Student details: name, register number, email, phone, department, year and CGPA
- Dashboard with total students and department statistics
- Responsive React UI
- REST API with Express and MongoDB/Mongoose

## Project Structure
student-management-system-mern/
├── backend/
│   ├── models/Student.js
│   ├── routes/studentRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   ├── api.js
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    └── vite.config.js

## Requirements
- Node.js 18+
- MongoDB local installation OR MongoDB Atlas

## Run Backend
cd backend
npm install
copy .env.example .env   # Windows
# or: cp .env.example .env
npm run dev

Backend runs on http://localhost:5000

## Run Frontend
Open a second terminal:
cd frontend
npm install
npm run dev

Frontend runs on the URL shown by Vite, normally http://localhost:5173

## Environment
Create backend/.env:

MONGO_URI=mongodb://127.0.0.1:27017/student_management
PORT=5000

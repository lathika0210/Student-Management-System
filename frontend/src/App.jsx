import { useEffect, useMemo, useState } from "react";
import {
  GraduationCap,
  Search,
  Users,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "./api";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

const departments = [
  "Information Technology",
  "Computer Science",
  "Electronics",
  "Electrical",
  "Mechanical",
  "Civil",
];

export default function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadStudents = async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await getStudents({ search, department });
      setStudents(data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Could not connect to the backend.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(loadStudents, 250);
    return () => clearTimeout(timer);
  }, [search, department]);

  const handleSubmit = async (data) => {
    try {
      setError("");
      if (editingStudent) {
        await updateStudent(editingStudent._id, data);
        setEditingStudent(null);
      } else {
        await createStudent(data);
      }
      await loadStudents();
    } catch (err) {
      setError(err.response?.data?.message || "Operation failed.");
    }
  };

  const handleDelete = async (student) => {
    if (!window.confirm(`Delete ${student.name}?`)) return;
    try {
      await deleteStudent(student._id);
      await loadStudents();
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed.");
    }
  };

  const averageCgpa = useMemo(() => {
    if (!students.length) return "0.00";
    return (
      students.reduce((sum, s) => sum + Number(s.cgpa), 0) / students.length
    ).toFixed(2);
  }, [students]);

  const topDepartment = useMemo(() => {
    if (!students.length) return "—";
    const counts = students.reduce((acc, s) => {
      acc[s.department] = (acc[s.department] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
  }, [students]);

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">
            <GraduationCap size={24} />
          </div>
          <div>
            <strong>StudentHub</strong>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div>
            <p className="eyebrow">ADMIN DASHBOARD</p>
            <h1>Student Management System</h1>
            <p>
              Manage student records, academic information and department data
              in one place.
            </p>
          </div>
        </section>

        <section className="stats">
          <div className="stat-card">
            <Users />
            <div>
              <span>Total Students</span>
              <strong>{students.length}</strong>
            </div>
          </div>
          <div className="stat-card">
            <TrendingUp />
            <div>
              <span>Average CGPA</span>
              <strong>{averageCgpa}</strong>
            </div>
          </div>
          <div className="stat-card">
            <BookOpen />
            <div>
              <span>Top Department</span>
              <strong className="small-value">{topDepartment}</strong>
            </div>
          </div>
        </section>

        {error && <div className="error">{error}</div>}

        <section className="content-grid">
          <StudentForm
            editingStudent={editingStudent}
            onSubmit={handleSubmit}
            onCancel={() => setEditingStudent(null)}
          />

          <div className="list-card">
            <div className="list-header">
              <div>
                <p className="eyebrow">STUDENT DIRECTORY</p>
                <h2>Students</h2>
              </div>
              <span className="count">{students.length} records</span>
            </div>

            <div className="filters">
              <div className="search">
                <Search size={18} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search students..."
                />
              </div>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">All Departments</option>
                {departments.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>

            {loading ? (
              <div className="loading">Loading students...</div>
            ) : (
              <StudentTable
                students={students}
                onEdit={setEditingStudent}
                onDelete={handleDelete}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

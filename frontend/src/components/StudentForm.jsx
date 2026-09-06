import { useEffect, useState } from "react";

const emptyStudent = {
  name: "",
  registerNumber: "",
  email: "",
  phone: "",
  department: "Information Technology",
  year: 1,
  cgpa: ""
};

const departments = [
  "Information Technology",
  "Computer Science",
  "Electronics",
  "Electrical",
  "Mechanical",
  "Civil"
];

export default function StudentForm({ editingStudent, onSubmit, onCancel }) {
  const [form, setForm] = useState(emptyStudent);

  useEffect(() => {
    if (editingStudent) setForm(editingStudent);
    else setForm(emptyStudent);
  }, [editingStudent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      ...form,
      year: Number(form.year),
      cgpa: Number(form.cgpa)
    });
  };

  return (
    <form className="form-card" onSubmit={submit}>
      <div className="form-header">
        <div>
          <p className="eyebrow">{editingStudent ? "UPDATE RECORD" : "NEW RECORD"}</p>
          <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>
        </div>
      </div>

      <div className="form-grid">
        <label>
          Full Name
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Enter full name" />
        </label>

        <label>
          Register Number
          <input name="registerNumber" value={form.registerNumber} onChange={handleChange} required placeholder="e.g. IT2026001" />
        </label>

        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="student@example.com" />
        </label>

        <label>
          Phone
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="10-digit number" />
        </label>

        <label>
          Department
          <select name="department" value={form.department} onChange={handleChange}>
            {departments.map((d) => <option key={d}>{d}</option>)}
          </select>
        </label>

        <label>
          Year
          <select name="year" value={form.year} onChange={handleChange}>
            {[1, 2, 3, 4].map((y) => <option key={y} value={y}>Year {y}</option>)}
          </select>
        </label>

        <label>
          CGPA
          <input type="number" step="0.01" min="0" max="10" name="cgpa" value={form.cgpa} onChange={handleChange} required placeholder="0.00 - 10.00" />
        </label>
      </div>

      <div className="actions">
        {editingStudent && <button type="button" className="btn secondary" onClick={onCancel}>Cancel</button>}
        <button className="btn primary" type="submit">
          {editingStudent ? "Update Student" : "Add Student"}
        </button>
      </div>
    </form>
  );
}

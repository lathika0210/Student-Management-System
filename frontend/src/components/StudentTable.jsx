import { Pencil, Trash2, UserRound } from "lucide-react";

export default function StudentTable({ students, onEdit, onDelete }) {
  if (!students.length) {
    return (
      <div className="empty">
        <UserRound size={42} />
        <h3>No students found</h3>
        <p>Try another search or add a new student.</p>
      </div>
    );
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Register No.</th>
            <th>Department</th>
            <th>Year</th>
            <th>CGPA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>
                <div className="student-name">{student.name}</div>
                <div className="muted">{student.email}</div>
              </td>
              <td>{student.registerNumber}</td>
              <td>{student.department}</td>
              <td>Year {student.year}</td>
              <td><span className="cgpa">{Number(student.cgpa).toFixed(2)}</span></td>
              <td>
                <div className="row-actions">
                  <button className="icon-btn" title="Edit" onClick={() => onEdit(student)}><Pencil size={17} /></button>
                  <button className="icon-btn danger" title="Delete" onClick={() => onDelete(student)}><Trash2 size={17} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

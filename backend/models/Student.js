import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    registerNumber: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, trim: true },
    department: {
      type: String,
      required: true,
      enum: ["Information Technology", "Computer Science", "Electronics", "Electrical", "Mechanical", "Civil"]
    },
    year: { type: Number, required: true, min: 1, max: 4 },
    cgpa: { type: Number, required: true, min: 0, max: 10 }
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);

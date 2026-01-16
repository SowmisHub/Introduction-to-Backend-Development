import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Utility function to read DB
const readDB = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

// Utility function to write DB
const writeDB = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};

/* ------------------ GET ALL STUDENTS ------------------ */
app.get("/students", (req, res) => {
  const db = readDB();
  res.status(200).json(db.students);
});

/* ------------------ ADD NEW STUDENT ------------------ */
app.post("/students", (req, res) => {
  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const db = readDB();

  const newStudent = {
    id: Date.now(),
    name,
    course,
    year
  };

  db.students.push(newStudent);
  writeDB(db);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

/* ------------------ UPDATE STUDENT ------------------ */
app.put("/students", (req, res) => {
  const { id, name, course, year } = req.body;

  const db = readDB();
  const student = db.students.find((s) => s.id == id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (name) student.name = name;
  if (course) student.course = course;
  if (year) student.year = year;

  writeDB(db);

  res.status(200).json({
    message: "Student updated successfully",
    student
  });
});

/* ------------------ DELETE STUDENT ------------------ */
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;

  const db = readDB();
  const index = db.students.findIndex((s) => s.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  db.students.splice(index, 1);
  writeDB(db);

  res.status(200).json({ message: "Student deleted successfully" });
});

/* ------------------ SERVER START ------------------ */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

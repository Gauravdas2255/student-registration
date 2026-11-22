const pool = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running!");
});
app.post("/api/students", async (req, res) => {
    try {
        const {
            fullName,
            email,
            phone,
            gender,
            dob,
            department,
            semester,
            address
        } = req.body;

        const sql = `
            INSERT INTO students
            (full_name, email, phone, gender, dob,
             department, semester, address)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            fullName,
            email,
            phone,
            gender,
            dob || null,
            department,
            semester || null,
            address
        ];

        const [result] = await pool.execute(sql, values);

        res.status(201).json({
            message: "Student registered successfully!",
            studentId: result.insertId
        });

    } catch (error) {
        console.error("Database Error:", error);

        res.status(500).json({
            message: "Student registration failed!"
        });
    }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
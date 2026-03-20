const fs = require('fs').promises;
const db = require('../modules/');

const getAllStudents = async (req, res) => {
    try {
        const students = await db.getStudents();
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching students data' });
    }
};

const createStudent = async (req, res) => {
    try {
        const { id, name, branch } = req.body;
        if (!name || !branch) {
            return res.status(400).send('Details missing')
        }

        let existingStudent = await db.readStudentsFromFile();

        if(!existingStudent) {
            existingStudent = [];
        }

        const newStudent = {
            id: existingStudent.length + 1,
            name,
            branch,
            CreatedAt: new Date().toLocaleString()
        };
        existingStudent.push(newStudent);
        await db.writeStudentsToFile(existingStudent); 
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating student' });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;   // URL se id aayegi
        const { name, branch } = req.body;

        let students = await db.readStudentsFromFile();

        if (!students || students.length === 0) {
            return res.status(404).json({ message: "No students found" });
        }

        // student find karo
        const index = students.findIndex(s => s.id == id);

        if (index === -1) {
            return res.status(404).json({ message: "Student not found" });
        }

        // update fields (jo aaye hain wahi update karo)
        if (name) students[index].name = name;
        if (branch) students[index].branch = branch;

        students[index].updatedAt = new Date().toLocaleString();

        // file me wapas likho
        await db.writeStudentsToFile(students);

        res.status(200).json({
            message: "Student updated successfully",
            student: students[index]
        });

    } catch (error) {
        res.status(500).json({ message: "Error updating student" });
    }
};

const deleteStudent = async (req,res) => {
    try {
        const { id } = req.params;
        let students = await db.readStudentsFromFile();

        const index = students.findIndex(s => s.id == id);
        if (!students || students.length === 0) {
            return res.status(404).json({ message: "No students found" });
        }
        if (index === -1) {
            return res.status(404).json({ message: "Student not found" });
        }
        students.splice(index,1)
        await db.writeStudentsToFile(students);

        res.status(200).json({
            message: "Student deleted successfully"
        });
    } catch (error) {
        
    }
}

module.exports = { getAllStudents, createStudent , updateStudent , deleteStudent };
const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents();
    res.status(200).json(students);
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const studentData = req.body;
    const newStudent = await addNewStudent(studentData);
    res.status(201).json(newStudent);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    const updatedStudent = await updateStudent(id, updateData);
    res.status(200).json(updatedStudent);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const student = await getStudentDetail(id);
    res.status(200).json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const updatedStudent = await setStudentStatus(id, status);
    res.status(200).json(updatedStudent);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};

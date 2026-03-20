const express = require('express')
const router = express.Router()

const {getAllStudents,createStudents,updateStudent,deleteStudent} = require('../controllers')
router.get("/",getAllStudents)
router.post("/",createStudents)
router.post("/update:id",updateStudent)
router.post("/update:id",deleteStudent)

module.exports = router
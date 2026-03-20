const express = require('express')
const router = express.Router()

const {getAllStudents,createStudents,updateStudent} = require('../controllers')
router.get("/",getAllStudents)
router.post("/",createStudents)
router.post("/update:id",updateStudent)

module.exports = router
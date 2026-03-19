const express = require('express')
const router = express.Router()

const {getAllStudents,createStudents} = require('../controllers')
router.get("/",getAllStudents)
router.post("/",createStudents)

module.exports = router
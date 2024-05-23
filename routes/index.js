const express = require('express')
const router = express.Router()
const taskApi = require('./task.api')

// /tasks 라는 주소가 불리면 무조건 task.api.js 실행
router.use('/tasks',taskApi)

module.exports = router;
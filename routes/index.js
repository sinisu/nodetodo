const express = require('express')
const router = express.Router()
const taskApi = require('./task.api')
const userApi = require('./user.api')

// /tasks 라는 주소가 불리면 무조건 task.api.js 실행
router.use('/tasks',taskApi)
router.use('/user',userApi)

module.exports = router;
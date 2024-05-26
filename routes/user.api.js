const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller')

//회원가입 endpoint
router.post('/',userController.createUser);
router.post('/login',userController.loginWithEmail)
// 이메일과, 패스워드를 보내서 req 읽어냄 
//url값에 정보 넣어서 get으로 가져올 수 없음

module.exports = router;
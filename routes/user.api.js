const express = require('express')
const router = express.Router()
const authController = require('../controller/auth.controller');
const userController = require('../controller/user.controller');


//회원가입 endpoint
router.post('/',userController.createUser);
router.post('/login',userController.loginWithEmail);
// 이메일과, 패스워드를 보내서 req 읽어냄 
//url값에 정보 넣어서 get으로 가져올 수 없음

//토큰을 통해 유저id 빼내고 => 그 아이디로 유저 객체 찾아서 보내주기
//실행할 함수는 여러개 넣을 수 있음, 이 스타일이 미들웨어
//authCon~ 에서 next()를 넣었던 것은 이 다음 함수인 userCon~ 실행해 달라는 뜻
router.get('/me',authController.authenticate,userController.getUser);

module.exports = router;
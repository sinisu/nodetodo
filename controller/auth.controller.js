const authController = {};
const jwt = require('jsonwebtoken')
require('dotenv').config()
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

authController.authenticate = (req,res,next) => {
    try{
        // 토큰값이 저장된 방식은 프론트엔드에서 확인 가능
        const tokenString = req.headers.authorization // Bearer adfsfe
        if (!tokenString){
            throw new Error("invalid token")
        }
        const token = tokenString.replace("Bearer ","")

        // payload는 해독이 된 값
        jwt.verify(token,JWT_SECRET_KEY,(error,payload)=>{
            if(error){
                throw new Error("invalid token")
            }
            // res.status(200).json({status:'success',userId:payload._id})
            // id를 받아오는 것은 유저에 관한 정보이므로 usercontroller에서 정보 받음
            // 미들웨어
            // req에 추가 정보 붙일 수 있음, 아래 함수로 id 추가
            req.userId = payload._id
        });
        next();
    }catch(error){
        res.status(400).json({status:"fail",message:error.message})
    }

}

module.exports = authController;